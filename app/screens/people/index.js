import React, { Component } from "react";
import { Image, Dimensions } from "react-native";

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
  List
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;
const people1 = require("../../../assets/man.png");
const people2 = require("../../../assets/woman.png");
const people3 = require("../../../assets/man.png");
const people4 = require("../../../assets/people4.jpg");
const people5 = require("../../../assets/people5.jpg");
const people6 = require("../../../assets/people6.jpg");
const people7 = require("../../../assets/people1.jpg");
const people8 = require("../../../assets/people2.jpg");
const people9 = require("../../../assets/people3.jpg");
const people10 = require("../../../assets/people7.jpg");
const people11 = require("../../../assets/people8.jpg");
const people12 = require("../../../assets/people9.jpg");

class People extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
              <Icon name="menu" style={{color:"black"}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>People</Title>
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
        <Card style={{backgroundColor:'#e5e7ea', padding:5}}>
        <Row style={styles.title}>
            <Text style={{fontSize:24}}>Trending People</Text>
            <Right><Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }}>View All</Text></Right>
          </Row>

          <Grid>
            <Row>
              <Col style={styles.colImage} onPress={()=>this.props.navigation.navigate("DetailPeople")}>
                <Image source={people4} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 1</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={people5} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 2</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={people6} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 3</Text>
              </Col>
            </Row>
            <Row style={{marginTop:15}}>
              <Col style={styles.colImage}>
                <Image source={people7} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 1</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={people8} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 2</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={people9} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 3</Text>
              </Col>
            </Row>
          </Grid>
        </Card>

        <Card style={{backgroundColor:'#e5e7ea', padding:5, marginTop:25}}>
        <Row style={styles.title}>
            <Text style={{fontSize:24}}>Newest People</Text>
            <Right><Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }}>View All</Text></Right>
          </Row>

          <Grid>
            <Row>
              <Col style={styles.colImage}>
                <Image source={people9} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 1</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={people2} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 2</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={people10} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 3</Text>
              </Col>
            </Row>
            <Row style={{marginTop:15}}>
              <Col style={styles.colImage}>
                <Image source={people1} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 1</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={people12} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 2</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={people3} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 3</Text>
              </Col>
            </Row>
          </Grid>
        </Card>
        </Content>
      </Container>
    );
  }
}

export default People;
