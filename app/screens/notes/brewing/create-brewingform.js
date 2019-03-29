import React, { Component } from "react";
import {
  Animated,
  Image,
  Dimensions,
  StyleSheet,
  LayoutAnimation,
  ScrollView,
  View,
  AsyncStorage,
  Alert,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  UIManager,
  Platform
} from "react-native";

import {
  Textarea,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  H1,
  H2,
  H3,
  Picker,
  Item,
  Text,
  Form,
  Input,
  Label
} from "native-base";
import Loader from "../../indicator/loader";
import { NavigationActions, StackActions } from "react-navigation";
import { Grid, Row, Col } from "react-native-easy-grid";
import ImagePicker from "react-native-image-picker";
import Ingredients_Item from "./ingredient";

import styles from "../styles";
const deviceWidth = Dimensions.get("window").width;
const options = {
  title: "select a photo",
  takePhotoButtonTitle: "Take a Photo",
  chooseFrmoLibraryButtonTitle: "Choose from Gallery",
  quality: 1
};
const width = Dimensions.get("window").width;
var unit;

class CreateBrewingForm extends Component {
  // eslint-disable-line
  constructor() {
    super();
    this.state = {
      title: "",
      cover: null,
      description: "",
      shared: "1",
      loading: false,
      idUserHushus: null,
      valueArray: [],
      disabled: false,
      materialName: [],
      toolName: [],
      step: [],
      stepImage: [],
      time1: "",
      time2: "",
      second: "second",
      temperature: "",
      celcius: "&deg;F",
      materialAmount: [],
      materialUnitArr: [],
      materialUnit: "gr",
      toolAmount: [],
      toolUnitArr: [],
      toolUnit: "unit",
      steps: []
    };
    this.addNewElement = false;
    this.index = 0;
  }

  afterAnimationComplete = () => {
    this.index += 1;
    this.setState({ disabled: false });
  };

  add_New_View = () => {
    this.addNewElement = true;
    const newlyAddedValue = { id: "id_" + this.index, text: this.index + 1 };

    this.setState({
      disabled: true,
      valueArray: [...this.state.valueArray, newlyAddedValue]
    });
  };

  remove_Selected_Item(id) {
    this.addNewElement = false;
    const newArray = [...this.state.valueArray];
    newArray.splice(newArray.findIndex(ele => ele.id === id), 1);

    this.setState(
      () => {
        return {
          valueArray: newArray
        };
      },
      () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }
    );
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
          cover: source
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
    if (this.state.cover != null) {
      data.append("cover", {
        uri: this.state.cover.uri,
        type: "image/jpeg",
        name: "testPhotoName"
      });
    } else {
      data.append("cover", this.state.cover);
    }
    this.setState({
      loading: true
    });
    console.log("berhasil1");
    fetch("http://10.0.2.2:8000/api/article/create", {
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
  onValueChange3(value) {
    this.setState({
      shared: value
    });
  }
  onValueChangeSecond(value) {
    this.setState({
      second: value
    });
  }

  onValueChangeTemperature(value) {
    this.setState({
      celcius: value
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
          <H3 style={{ marginTop: 30 }}>What You'll Need</H3>
          <Item stackedLabel last style={{ marginTop: 30 }}>
            <Label>Brewing Time</Label>
            <Grid>
              <Col size={2}>
                <Input
                  style={{
                    borderColor: "black",
                    borderBottomWidth: 1,
                    width: deviceWidth * 0.2
                  }}
                  onChangeText={text => this.setState({ title: text })}
                  placeholder="From"
                />
              </Col>
              <Col size={2}>
                <Input
                  style={{
                    borderColor: "black",
                    borderBottomWidth: 1,
                    width: deviceWidth * 0.2
                  }}
                  onChangeText={text => this.setState({ title: text })}
                  placeholder="To"
                />
              </Col>
              <Col size={2}>
              <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Time"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.second}
                onValueChange={this.onValueChangeSecond.bind(this)}
              >
                <Picker.Item label="second" value="second" />
                <Picker.Item label="minute" value="minute" />
                <Picker.Item label="hour" value="hour" />
              </Picker>
            </Item>
              </Col>
            </Grid>
          </Item>
          <Item stackedLabel last style={{ marginTop: 30 }}>
            <Label>Water Temperature</Label>
            <Grid>
              <Col size={4}>
                <Input
                  style={{
                    borderColor: "black",
                    borderBottomWidth: 1,
                    width: deviceWidth * 0.5
                  }}
                  onChangeText={text => this.setState({ title: text })}
                />
              </Col>
              <Col size={2}>
              <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Temperature"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.celcius}
                onValueChange={this.onValueChangeTemperature.bind(this)}
              >
                <Picker.Item label="&deg;C" value="&deg;C" />
                <Picker.Item label="&deg;F" value="&deg;F" />
                <Picker.Item label="&deg;K" value="&deg;K" />
                <Picker.Item label="&deg;R" value="&deg;R" />
              </Picker>
            </Item>
              </Col>
            </Grid>
          </Item>
          <Item stackedLabel last style={{ marginTop: 30 }}>
            <Label>Ingredients</Label>
            <View style={styles.contain}>
              <Input
                style={{
                  borderColor: "black",
                  borderBottomWidth: 1,
                  width: deviceWidth * 0.9
                }}
                onChangeText={text => this.setState({ title: text })}
              />
              <Grid>
                <Col size={3}>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      placeholder="Amount"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={this.state.shared}
                      onValueChange={this.onValueChange3.bind(this)}
                    >
                      <Picker.Item label="gr" value="gr" />
                      <Picker.Item label="ml" value="ml" />
                    </Picker>
                  </Item>
                </Col>
                <Col size={2} />
                <Col size={1}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.new}
                    disabled={this.state.disabled}
                    onPress={this.add_New_View}
                  >
                    <Image
                      source={{
                        uri:
                          "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png"
                      }}
                      style={styles.FloatingButtonStyle}
                    />
                  </TouchableOpacity>
                </Col>
              </Grid>
              <ScrollView
                ref={scrollView => (this.scrollView = scrollView)}
                onContentSizeChange={() => {
                  this.addNewElement && this.scrollView.scrollToEnd();
                }}
              >
                <View style={{ flex: 1, padding: 4 }}>
                  {this.state.valueArray.map(ele => {
                    return (
                      <Ingredients_Item
                        key={ele.id}
                        item={ele}
                        deleteItem={id => this.remove_Selected_Item(id)}
                        afterAnimationComplete={this.afterAnimationComplete}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
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
          onPress={() => this.handleClick(navigate)}
        >
          <Text style={{ color: "black" }}>SAVE</Text>
        </Button>
      </Content>
    );
  }
}

export default CreateBrewingForm;
