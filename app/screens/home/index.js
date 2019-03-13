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
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");
const articles = require("../../../assets/articles.png");
const brewing = require("../../../assets/brewing.png");
const notes = require("../../../assets/notes.png");
const people = require("../../../assets/people.png");
const recipes = require("../../../assets/recipes.png");
const tools = require("../../../assets/tools.png");
const article1 = require("../../../assets/article2.png");
const article2 = require("../../../assets/article1.png");
const article3 = require("../../../assets/article3.png");
const people1 = require("../../../assets/people4.jpg");
const people2 = require("../../../assets/people5.jpg");
const people3 = require("../../../assets/people6.jpg");

const URI = 'http://hushuscoffee.com';

class Home extends Component {
  state = {
    articles: [],
    brewings: [],
    recipes: [],       
    people: []
  }

  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(URI + '/api/articles');
    const json = await response.json();
    this.setState({
        articles: json.data
    });
  }

  componentDidMount(){
      this.fetchData();
  }

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
            <Title style={styles.title}>Hushus Coffee</Title>
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
          <Col style={{margin:5 }}>
          <Row style={{flexDirection:"row",marginBottom:10}}>
          <Button style={{ backgroundColor: "#ffcd22", borderRadius: 5, height:100,justifyContent:"center", flexWrap:"wrap"}} onPress={() => this.props.navigation.navigate("BrewingMethods")}>
          <Image
                source={brewing}
              />
              <Text style={{textAlign:"center", color:"black"}}>BREWING METHODS</Text>
              </Button>
          </Row>
            <Row style={{flexDirection:"row"}}>
            <Button style={{ backgroundColor: "#ffcd22", borderRadius: 5, justifyContent:"center", flexWrap:"wrap", width:120}}>
            <Image
                source={tools}
              />
              <Text style={{textAlign:"center", color:"black"}}>TOOLS</Text>
              </Button>
            </Row>
          </Col>
          <Col style={{margin:5 }}>
              <Row style={{ flexDirection: "row" }}>
            <Button style={{ backgroundColor: "#ffcd22", borderRadius: 5, justifyContent:"center", flexWrap:"wrap", width:125}} onPress={() => this.props.navigation.navigate("Article")}>
            <Image
                source={articles}
              />
              <Text style={{textAlign:"center", color:"black"}}>ARTICLES</Text>
              </Button>
            </Row>
            <Row style={{flexDirection:"row",marginTop:10}}>
            <Button style={{ backgroundColor: "#ffcd22", borderRadius: 5, height:100,justifyContent:"center", flexWrap:"wrap", width:125}} onPress={() => this.props.navigation.navigate("People")}>
            <Image
                source={people}
              />
              <Text style={{textAlign:"center", color:"black"}}>PEOPLE</Text>
              </Button>
            </Row>
          </Col>
          <Col style={{margin:5 }}>
            <Row style={{ flexDirection: "row", marginBottom: 10 }}>
            <Button style={{ backgroundColor: "#ffcd22", borderRadius: 5, height:100,justifyContent:"center", flexWrap:"wrap", width:120}}>
            <Image
                source={notes}
              />
              <Text style={{textAlign:"center", color:"black"}}>COFFEE NOTES</Text>
              </Button>
            </Row>
            <Row style={{ flexDirection: "row" }}>
            <Button style={{ backgroundColor: "#ffcd22", borderRadius: 5, justifyContent:"center", flexWrap:"wrap", width:120}}>
            <Image
                source={recipes}
              />
              <Text style={{textAlign:"center", color:"black"}}>RECIPES</Text>
              </Button>
            </Row>
          </Col>
        </Grid>
        
        <Row style={styles.title}>
            <Text style={{fontSize:24, marginTop: 20}}>Popular Articles</Text>
            <Right><Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }}>View All</Text></Right>
          </Row>

          <Grid>
            <Row>
              <Col style={styles.colImage} onPress={()=>this.props.navigation.navigate("DetailArticle")}>
                <Image source={article1} style={styles.imageContainer} />
                <Text style={styles.menuText}>Article Number 1</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]} onPress={()=>this.props.navigation.navigate("DetailArticle")}>
                <Image source={article2} style={styles.imageContainer} />
                <Text style={styles.menuText}>Article Number 2</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]} onPress={()=>this.props.navigation.navigate("DetailArticle")}>
                <Image source={article3} style={styles.imageContainer} />
                <Text style={styles.menuText}>Article Number 3</Text>
              </Col>
            </Row>
          </Grid>

        <Row style={styles.title}>
            <Text style={{fontSize:24, marginTop: 20}}>Trending People</Text>
            <Right><Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }}>View All</Text></Right>
          </Row>

          <Grid>
            <Row>
              <Col style={styles.colImage}>
                <Image source={people1} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 1</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={people2} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 2</Text>
              </Col>
              <Col style={[styles.colImage, styles.contentSpace]}>
                <Image source={people3} style={styles.imageContainer} />
                <Text style={styles.menuText}>People Number 3</Text>
              </Col>
            </Row>
          </Grid>
        
        </Content>
      </Container>
    );
  }
}

export default Home;
