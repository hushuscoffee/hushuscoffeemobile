import React, { Component } from "react";
import CreateRecipeForm from "./create-recipeform";
import { Image, Dimensions, View } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Form,
  Item,
  Input,
  Label,
  Text,
  H1
} from "native-base";

import styles from "../styles";
const deviceWidth = Dimensions.get("window").width;

class CreateRecipe extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon type="Ionicons" name="arrow-back" style={{ color: "black" }} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Add Recipe</Title>
          </Body>
          <Right>
            <Button transparent>
              {/* <Icon name='search' style={{color:"black"}}/> */}
            </Button>
            <Button transparent>
              {/* <Icon name='more' style={{color:"black"}}/> */}
            </Button>
          </Right>
        </Header>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <H1 style={{ fontWeight: "bold" }}>Make Your Own Recipe</H1>
        </View>
        <CreateRecipeForm data={this.props.navigation} />
      </Container>
    );
  }
}

export default CreateRecipe;
