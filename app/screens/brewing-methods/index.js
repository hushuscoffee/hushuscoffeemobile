import React, { Component } from "react";
import { Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";

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
  Thumbnail,
  ListItem,
  List,
  Toast
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");
const articles = require("../../../assets/articles.png");
const brewing = require("../../../assets/brewing.png");
const pourOver = require("../../../assets/PourOver.png");
const syphone = require("../../../assets/SyphonCoffee.png");
const chemex = require("../../../assets/Chemex.png");
const aeropress = require("../../../assets/Aeropress.png");
const vietnamDrip = require("../../../assets/VietnameseCoffee.png");
const turkishCezve = require("../../../assets/TurkishCezve.png");
const mokaPot = require("../../../assets/MokaPot.png");
const coffeeKhop = require("../../../assets/CoffeeKhop.png");
const hario = require("../../../assets/HarioV60.png");
const brewingTechnique = require("../../../assets/brewingMethods.png");

class BrewingMethods extends Component {

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
            <Title style={styles.title}>Brewing Methods</Title>
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
          <Grid>
            <Row style={styles.container}>
              <Card>
                <Col style={styles.col}>
                  <CardItem button onPress={ () => this.props.navigation.navigate("DetailBrewing") }>
                    <Image source={pourOver} />
                  </CardItem>
                  <Text style={styles.menuText}>POUR OVER</Text>
                </Col>
              </Card>
              <Card>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem button onPress={ () => this.props.navigation.navigate("#") }>
                    <Image source={syphone} />
                  </CardItem>
                  <Text style={styles.menuText}>SYPHON</Text>
                </Col>
              </Card>
              <Card>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem button onPress={ () => this.props.navigation.navigate("#") }>
                    <Image source={chemex} />
                  </CardItem>
                  <Text style={styles.menuText}>CHEMEX</Text>
                </Col>
              </Card>
            </Row>
            <Row style={styles.container}>
              <Card>
                <Col style={styles.col}>
                  <CardItem button onPress={ () => this.props.navigation.navigate("DetailBrewing") }>
                    <Image source={aeropress} />
                  </CardItem>
                  <Text style={styles.menuText}>AEROPRESS</Text>
                </Col>
              </Card>  
              <Card>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem button onPress={ () => this.props.navigation.navigate("#") }>
                    <Image source={vietnamDrip} />
                  </CardItem>
                  <Text style={styles.menuText}>VIETNAM DRIP</Text>
                </Col>
              </Card>  
              <Card>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem button onPress={ () => this.props.navigation.navigate("#") }>
                    <Image source={turkishCezve} />
                  </CardItem>
                  <Text style={styles.menuText}>TURKISH CEZVE</Text>
                </Col>
              </Card>
            </Row>
            <Row style={styles.container}>
              <Card>
                <Col style={styles.col}>
                  <CardItem button onPress={ () => this.props.navigation.navigate("DetailBrewing") }>
                    <Image source={mokaPot} />
                  </CardItem>                    
                  <Text style={styles.menuText}>MOKA POT</Text>
                </Col>
              </Card>
              <Card>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem button onPress={ () => this.props.navigation.navigate("#") }>
                    <Image source={coffeeKhop} />
                  </CardItem>
                  <Text style={styles.menuText}>COFFEE KHOP</Text>
                </Col>
              </Card>
              <Card>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem button onPress={ () => this.props.navigation.navigate("#") }>
                    <Image source={hario} />
                  </CardItem>
                  <Text style={styles.menuText}>HARIO V60</Text>
                </Col>
              </Card>
            </Row>
          </Grid>

          <Row style={styles.title}>
            <Text style={{fontSize:24, marginTop: 36}}>New Brewing Methods</Text>
            <Text style={{ alignSelf:"flex-end", marginLeft:80, color:"blue" }}>View All</Text>
          </Row>

          <Grid>
            <Row>
              <Col style={styles.colImage}>
                <Image source={brewingTechnique} style={styles.imageContainer} />
                <Text style={styles.menuText}>New Number 1</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={brewingTechnique} style={styles.imageContainer} />
                <Text style={styles.menuText}>New Number 2</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={brewingTechnique} style={styles.imageContainer} />
                <Text style={styles.menuText}>New Number 3</Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default BrewingMethods;