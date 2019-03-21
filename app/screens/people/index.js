import React, { Component } from "react";
import { Image, Dimensions, StyleSheet, TouchableOpacity, FlatList } from "react-native";

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
  Toast,
  View
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

const URI = 'http://10.0.2.2:8000/';

class People extends Component {
  // eslint-disable-line

  state = {
    people: []        
  }

  fetchData = async () => {
      const { params } = this.props.navigation.state;
      const response = await fetch(URI + 'api/people');
      const json = await response.json();
      this.setState({
          people: json.data
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
            <Button transparent onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
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

          <View>
              <FlatList
                  data={this.state.people}
                  horizontal={true}
                  keyExtractor={(dataPeople, i) => i.toString()}
                  renderItem={({item}) =>
                    <Grid style={{padding: 15}}>
                        <Row style={{justifyContent: "center", flexDirection: "row"}}
                            onPress={ ()=> 
                                this.props.navigation.navigate("DetailBrewing", {id:item.id}) 
                            }>
                            <Col style={{flexDirection: "column"}}>
                              <Image source={{ uri : `http://10.0.2.2:8000/images/avatar/${item.photo}` }} style={styles.imageContainer} />
                              <Text style={styles.menuText}>{`${item.fullname}`}</Text>
                            </Col>
                        </Row>
                    </Grid>
                  }
              />
          </View>
        </Card>

        <Card style={{backgroundColor:'#e5e7ea', padding:5, marginTop:25}}>
        <Row style={styles.title}>
            <Text style={{fontSize:24}}>Newest People</Text>
            <Right><Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }}>View All</Text></Right>
          </Row>

          <View>
            <FlatList
                data={this.state.people}
                horizontal={true}
                keyExtractor={(dataPeople, i) => i.toString()}
                renderItem={({item}) =>
                  <Grid style={{padding: 15}}>
                      <Row style={{justifyContent: "center", flexDirection: "row"}}
                          onPress={ ()=> 
                              this.props.navigation.navigate("DetailBrewing", {id:item.id}) 
                          }>
                          <Col style={{flexDirection: "column"}}>
                            <Image source={{ uri : `http://10.0.2.2:8000/images/avatar/${item.photo}` }} style={styles.imageContainer} />
                            <Text style={styles.menuText}>{`${item.fullname}`}</Text>
                          </Col>
                      </Row>
                  </Grid>
                }
            />
          </View>
        </Card>
        </Content>
      </Container>
    );
  }
}

export default People;
