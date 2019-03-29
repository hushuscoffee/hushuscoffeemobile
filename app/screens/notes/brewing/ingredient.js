import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View
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

const width = Dimensions.get("window").width;
const deviceWidth = Dimensions.get("window").width;
import { Grid, Row, Col } from "react-native-easy-grid";
import styles from "../styles";
class Ingredients_Item extends Component {
  constructor() {
    super();

    this.animatedValue = new Animated.Value(0);

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item.id !== this.props.item.id) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 0.5,
      duration: 510,
      useNativeDriver: true
    }).start(() => {
      this.props.afterAnimationComplete();
    });
  }

  deleteItem = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 510,
      useNativeDriver: true
    }).start(() => {
      this.props.deleteItem(this.props.item.id);
    });
  };

  render() {
    const translate_Animation_Object = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-width, 0, width]
    });

    const opacity_Animation_Object = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

    return (
      <Animated.View
        style={[
          {
            transform: [{ translateX: translate_Animation_Object }],
            opacity: opacity_Animation_Object
          }
        ]}
      >
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
                // selectedValue={this.props.shared}
                // onValueChange={this.props.onValueChange3.bind(this)}
              >
                <Picker.Item label="gr" value="gr" />
                <Picker.Item label="ml" value="ml" />
              </Picker>
            </Item>
          </Col>
          <Col size={2} />
          <Col size={1}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={this.deleteItem}
            >
              <Text style={styles.removeIcon}>{"\u00D7"}</Text>
            </TouchableOpacity>
          </Col>
        </Grid>
      </Animated.View>
    );
  }
}

export default Ingredients_Item;
