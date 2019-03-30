import React, { Component } from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  View,
  AsyncStorage,
  Alert,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import {
  Container,
  Header,
  Title,
  Textarea,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Picker,
  Item,
  Text,
  Form,
  Input,
  Label
} from "native-base";
import Loader from "../indicator/loader";
import { NavigationActions, StackActions } from "react-navigation";
import { Grid, Row, Col } from "react-native-easy-grid";
import { throttle } from "lodash";
import Upload from "react-native-background-upload";
import ImagePicker from "react-native-image-picker";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;
const options = {
  title: "select a photo",
  takePhotoButtonTitle: "Take a Photo",
  chooseFrmoLibraryButtonTitle: "Choose from Gallery",
  quality: 1
};
class CreateArticleForm extends Component {
  // eslint-disable-line
  constructor() {
    super();
    this.state = {
      title: "",
      category: "1",
      file: null,
      description: "",
      shared: "1",
      loading: false,
      idUserHushus: null
    };
  }
  selectPhoto() {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        var source;
        if (Platform.OS === "android") {
          source = { uri: response.uri, isStatic: true };
        } else {
          source = { uri: response.uri.replace("file://", ""), isStatic: true };
        }
        this.setState({
          file: source
        });
      }
    });
  }

  handleClick(navigate) {
    const data = new FormData();
    data.append("title", this.state.title);
    data.append("description", this.state.description);
    data.append("shared", this.state.shared);
    data.append("category", this.state.category);
    data.append("user", this.state.idUserHushus);
    if (this.state.file != null) {
      data.append('file', {
        uri: this.state.file.uri,
        type: 'image/jpeg/jpg/png',
        name: 'testPhotoName'
      });
    } else {
      data.append("file", this.state.file);
    }
    this.setState({
      loading: true
    });
    console.log("berhasil1");
    fetch("http://hushuscoffee.com/api/article/create", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: data
    })
      .then(response => response.json())
      .then(response => {
        this.setState(
          {
            loading: false
          },
          async () => {
            if (response.message != "error") {
              const resetAction = StackActions.reset({
                index: 1,
                actions: [
                  NavigationActions.navigate({ routeName: "MyArticle" }),
                  NavigationActions.navigate({ routeName: "Drawer" })
                ]
              });
              this.props.data.dispatch(resetAction);
              Alert.alert("Article has been created");
            } else {
              // this.setState({ spinner: false });
              setTimeout(() => {
                Alert.alert("error");
              }, 100);
            }
          }
        );
      })
      .done();
  }
  onValueChange2(value) {
    this.setState({
      category: value
    });
  }
  onValueChange3(value) {
    this.setState({
      shared: value
    });
  }

  async getIdUserHushus() {
    await AsyncStorage.getItem("idUserHushus").then(value =>
      this.setState({ idUserHushus: value })
    );
  }

  componentDidMount() {
    this.getIdUserHushus();
  }

  render() {
    const { navigate } = this.props.data;
    return (
      <Content padder>
        <Loader loading={this.state.loading} />
        <Form style={{ marginTop: 10 }}>
          <Item stackedLabel>
            <Label>Title</Label>
            <Input
              style={{
                borderColor: "black",
                borderBottomWidth: 1,
                width: deviceWidth * 0.9
              }}
              onChangeText={text => this.setState({ title: text })}
            />
          </Item>
          <Item stackedLabel style={{ marginTop: 30 }}>
            <Label>Category</Label>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Category"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.category}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Events" value="1" />
                <Picker.Item label="News" value="2" />
                <Picker.Item label="Tips" value="3" />
              </Picker>
            </Item>
          </Item>
          <Item stackedLabel style={{ marginTop: 30 }}>
            <Label>Cover Image</Label>
            {this.state.file === null ? (
              <View
                style={{
                  width: deviceWidth * 0.9
                }}
              >
                <TouchableOpacity
                  style={styles.TouchableOpacityStyle}
                  onPress={this.selectPhoto.bind(this)}
                >
                  <Text style={styles.TextStyle}>Select Photo</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  width: deviceWidth * 0.9
                }}
              >
                <Image style={styles.image} source={this.state.file} />
                <TouchableOpacity
                  style={styles.TouchableOpacityStyle}
                  onPress={this.selectPhoto.bind(this)}
                >
                  <Text style={styles.TextStyle}>Select Photo</Text>
                </TouchableOpacity>
              </View>
            )}
          </Item>
          <Item stackedLabel last style={{ marginTop: 30 }}>
            <Label>Description</Label>
            <Textarea
              style={{
                borderColor: "black",
                borderBottomWidth: 1,
                width: deviceWidth * 0.9
              }}
              rowSpan={5}
              onChangeText={text => this.setState({ description: text })}
            />
          </Item>

          <Item stackedLabel style={{ marginTop: 30 }}>
            <Label>Choose how you share it</Label>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Shared"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.shared}
                onValueChange={this.onValueChange3.bind(this)}
              >
                <Picker.Item label="Public" value="1" />
                <Picker.Item label="Private" value="2" />
              </Picker>
            </Item>
          </Item>
        </Form>
        <Button
          block
          style={{ margin: 15, marginTop: 30, backgroundColor: "#ffcd22" }}
          // onPress={() => this.handleClick(navigate)}
        >
          <Text style={{ color: "black" }}>SAVE</Text>
        </Button>
      </Content>
    );
  }
}

export default CreateArticleForm;
