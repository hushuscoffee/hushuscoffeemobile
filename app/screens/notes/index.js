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
            <Title style={styles.title}>Hushus Coffee</Title>
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
          <Card>
            <CardItem>
              <Body style={{ flexDirection: "row", justifyContent: "center" }}>
                <H1>Article</H1>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={article}
                style={{
                  resizeMode: "contain",
                  height: 200,
                  width: null,
                  flex: 1
                }}
              />
            </CardItem>
            <CardItem>
              <Button iconLeft light>
                <Icon name="arrow-back" />
                <Text>Back</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Notes;
