import React, { Component } from "react";
import { Image, Dimensions, StyleSheet } from "react-native";

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
  Item,
  Text,
  Card,
  CardItem,
  Textarea,
  H2,
  Thumbnail,
  ListItem,
  List
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");
const step1 = require("../../../assets/brewingMethod1.png");
const step2 = require("../../../assets/brewingMethod2.png");

const datas = [
  "Coffee dripper",
  "Coffee filters",
  "Kettle",
  "Grinder",
  "Digital scale"
];

class DetailBrewing extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" style={{color:"black"}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Pour Over</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={{color:"black"}}/>
            </Button>
            <Button transparent>
              <Icon name='more' style={{color:"black"}}/>
            </Button>
          </Right>
        </Header>
        
        <Content padder>
          <Card>
              <CardItem style={styles.cardContainer}>
                <Body>
                  <Text style={styles.title}>Descriptions</Text>
                  <Text>
                  The ritual of the pour over is like a meditation: There’s no machine in your way, no flashing green lights, no electric power cords. Just you and a few simple tools. The final cup is reminiscent of one from a drip coffeemaker, but noticeably more delicate and complex. Observe the bloom, experience the first trace of coffee-drunk steam, notice how the spiral of the pour alters the final cup. This simple experience gets you in tune with your coffee. Sumber : https://bluebottlecoffee.com/preparation-guides/pour-over
                  </Text>
                </Body>
              </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.cardContainer}>
              <Body>
                <Text style={styles.title}>What You'll Need</Text>
                <List 
                  dataArray = {datas}
                  renderRow = {
                    data =>
                    <ListItem noBorder style={{ flex:1, flexWrap:"wrap", alignSelf:"stretch" }}>
                      <Text>
                        {data}
                      </Text>
                    </ListItem>
                  }
                />
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.cardContainer}>
              <Body>
                <Text style={styles.title}>Brew Time</Text>
                <Text>
                  2 - 3 minutes
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.cardContainer}>
              <Body>
                <Text style={styles.title}>Step 1</Text>
                <Text style={styles.text}>
                  Bring 600 grams (20 oz) of water to boil
                </Text>
                <CardItem>
                  <Image source={step1} style={styles.imageContainer} />
                </CardItem>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.cardContainer}>
              <Body>
                <Text style={styles.title}>Step 2</Text>
                <Text style={styles.text}>
                  Grind 30 grams of coffee (3 tbsp) to a coarseness resembling sea salt. To enjoy the nuanced flavor of a single-origin coffee that is lightly roasted, we recommend less coffee: 23 grams for every 350 grams water.
                </Text>
                <CardItem>
                  <Image source={step2} style={styles.imageContainer} />
                </CardItem>
              </Body>
            </CardItem>
          </Card>

          <Row style={{flexDirection:"row", marginTop:15}}>
              <Icon name="comment" type="FontAwesome"/>
              <H2>  0 Comment</H2>
          </Row>
          <Row>
          <Textarea rowSpan={5} bordered placeholder="Comment" style={{borderColor:"black", width:deviceWidth*0.95}}/>
          </Row>
          <Row>
              <Button style={{marginTop: 10, backgroundColor:"#ffcd22", borderRadius:5}}>
            <Text style={{color:"black"}}>Add Comment</Text>
          </Button>
          </Row>
        </Content>
      </Container>
    );
  }
}

export default DetailBrewing;
