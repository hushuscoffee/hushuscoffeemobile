import React, { Component } from "react";
import { Image, Dimensions, FlatList } from "react-native";

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
  Text,
  Card,
  H1,
  H2,
  CardItem,
  View
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import styles from "./styles";
const dW = Dimensions.get("window").width;
const dH = Dimensions.get("window").height;
const brewing = require("../../../assets/technique.png");
const article = require("../../../assets/article.png");
const recipe = require("../../../assets/recipe.png");

class Notes extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" style={{ color: "black" }} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>My Notes</Title>
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
        <Content padder>
          <Card style={{ marginBottom: 30 }}>
            <CardItem>
              <Body style={{ flexDirection: "row", justifyContent: "center" }}>
                <H1 style={{ fontWeight: "bold" }}>Article</H1>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={article}
                style={{
                  resizeMode: "contain",
                  height: 150,
                  width: null,
                  flex: 1
                }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button iconLeft style={{ backgroundColor: "#ffcd22" }} onPress={() => this.props.navigation.navigate("CreateArticle")}>
                  <Icon name="add" style={{ color: "black" }} />
                  <Text style={{ color: "black" }}>Add Article</Text>
                </Button>
              </Left>
              <Right>
                <Button iconLeft style={{ backgroundColor: "#ffcd22" }} onPress={() => this.props.navigation.navigate("MyArticle")}>
                  <Icon name="person" style={{ color: "black" }} />
                  <Text style={{ color: "black" }}>My Article</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: 30 }}>
            <CardItem>
              <Body style={{ flexDirection: "row", justifyContent: "center" }}>
                <H1 style={{ fontWeight: "bold" }}>Brewing</H1>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={brewing}
                style={{
                  resizeMode: "contain",
                  height: 150,
                  width: null,
                  flex: 1
                }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button iconLeft style={{ backgroundColor: "#ffcd22" }}>
                  <Icon name="add" style={{ color: "black" }} />
                  <Text style={{ color: "black" }}>Add Brewing</Text>
                </Button>
              </Left>
              <Right>
                <Button iconLeft style={{ backgroundColor: "#ffcd22" }} onPress={() => this.props.navigation.navigate("MyBrewing")}>
                  <Icon name="person" style={{ color: "black" }} />
                  <Text style={{ color: "black" }}>My Brewing</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body style={{ flexDirection: "row", justifyContent: "center" }}>
                <H1 style={{ fontWeight: "bold" }}>Recipe</H1>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={recipe}
                style={{
                  resizeMode: "contain",
                  height: 150,
                  width: null,
                  flex: 1
                }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button iconLeft style={{ backgroundColor: "#ffcd22" }}>
                  <Icon name="add" style={{ color: "black" }} />
                  <Text style={{ color: "black" }}>Add Recipe</Text>
                </Button>
              </Left>
              <Right>
                <Button iconLeft style={{ backgroundColor: "#ffcd22" }} onPress={() => this.props.navigation.navigate("MyRecipe")}>
                  <Icon name="person" style={{ color: "black" }} />
                  <Text style={{ color: "black" }}>My Recipe</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Notes;
