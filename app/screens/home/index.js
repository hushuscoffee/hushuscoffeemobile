import React, { Component } from "react";
import { Image, Text, Dimensions, FlatList } from "react-native";

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
  Card,
  View
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import styles from "./styles";
const dW = Dimensions.get("window").width;
const dH = Dimensions.get("window").height;
const brewing = require("../../../assets/brewing.png");
const notes = require("../../../assets/notes.png");
const people = require("../../../assets/people.png");
const recipes = require("../../../assets/VietnameseCoffee.png");

const URI = "http://hushuscoffee.com/";

class Home extends Component {
  state = {
    articles: [],
    people: []
  };

  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(URI + "api/home-articles");
    const responsePeople = await fetch(URI + "api/home-people");
    const json = await response.json();
    const jsonPeople = await responsePeople.json();
    this.setState({
      articles: json.data,
      people: jsonPeople.data
    });
  };

  componentDidMount() {
    this.fetchData();
  }

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
          <Grid style={{ alignContent: "center", padding: 6 }}>
            <Col style={styles.col}>
              <Button
                style={{
                  backgroundColor: "#ffcd22",
                  borderRadius: 5,
                  width: dW * 0.22,
                  height: 100,
                  justifyContent: "center",
                  flexWrap: "wrap"
                }}
                onPress={() => this.props.navigation.navigate("Article")}
              >
                <Col style={styles.col}>
                  <Image source={notes} />
                  <Text style={{ textAlign: "center", color: "black" }}>
                    Article
                  </Text>
                </Col>
              </Button>
            </Col>
            <Col style={styles.col}>
              <Button
                style={{
                  backgroundColor: "#ffcd22",
                  borderRadius: 5,
                  width: dW * 0.22,
                  height: 100,
                  justifyContent: "center",
                  flexWrap: "wrap"
                }}
                onPress={() => this.props.navigation.navigate("BrewingMethods")}
              >
                <Col style={styles.col}>
                  <Image source={brewing} />
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: 12.5
                    }}
                  >
                    Brewing
                  </Text>
                </Col>
              </Button>
            </Col>
            <Col style={styles.col}>
              <Button
                style={{
                  backgroundColor: "#ffcd22",
                  borderRadius: 5,
                  width: dW * 0.22,
                  height: 100,
                  justifyContent: "center",
                  flexWrap: "wrap"
                }}
                onPress={() => this.props.navigation.navigate("Recipes")}
              >
                <Col style={styles.col}>
                  <Image source={recipes} />
                  <Text style={{ textAlign: "center", color: "black" }}>
                    Recipe
                  </Text>
                </Col>
              </Button>
            </Col>
            <Col style={styles.col}>
              <Button
                style={{
                  backgroundColor: "#ffcd22",
                  borderRadius: 5,
                  width: dW * 0.22,
                  height: 100,
                  justifyContent: "center",
                  flexWrap: "wrap"
                }}
                onPress={() => this.props.navigation.navigate("People")}
              >
                <Col style={styles.col}>
                  <Image source={people} />
                  <Text style={{ textAlign: "center", color: "black" }}>
                    People
                  </Text>
                </Col>
              </Button>
            </Col>
          </Grid>

          <Card style={{ backgroundColor: "#e5e7ea", padding: 5 }}>
            <Row style={styles.title}>
              <Text style={{ fontSize: 24 }}>Latest Articles</Text>
              <Right>
                <Text
                  style={{
                    alignSelf: "flex-end",
                    marginRight: 10,
                    color: "blue"
                  }}
                  onPress={() => this.props.navigation.navigate("Article")}
                >
                  View All
                </Text>
              </Right>
            </Row>

            <View>
              <FlatList
                data={this.state.articles}
                horizontal={true}
                keyExtractor={(newsData, i) => i.toString()}
                renderItem={({ item }) => (
                  <Grid style={{ padding: 15 }}>
                    <Row
                      style={{ justifyContent: "center", flexDirection: "row" }}
                      onPress={() =>
                        this.props.navigation.navigate("DetailArticle", {
                          id: item.id
                        })
                      }
                    >
                      <Col style={{ flexDirection: "column" }}>
                        <Image
                          source={{
                            uri: `http://hushuscoffee.com/uploads/articles/${
                              item.image
                            }`
                          }}
                          style={styles.imageContainer}
                        />
                        <Text style={styles.menuText}>{`${item.title}`}</Text>
                      </Col>
                    </Row>
                  </Grid>
                )}
              />
            </View>
          </Card>

          <Card
            style={{ backgroundColor: "#e5e7ea", padding: 5, marginTop: 25 }}
          >
            <Row style={styles.title}>
              <Text style={{ fontSize: 24 }}>People</Text>
              <Right>
                <Text
                  style={{
                    alignSelf: "flex-end",
                    marginRight: 10,
                    color: "blue"
                  }}
                  onPress={() => this.props.navigation.navigate("People")}
                >
                  View All
                </Text>
              </Right>
            </Row>

            <View>
              <FlatList
                data={this.state.people}
                horizontal={true}
                keyExtractor={(dataPeople, i) => i.toString()}
                renderItem={({ item }) => (
                  <Grid style={{ padding: 15 }}>
                    <Row
                      style={{ justifyContent: "center", flexDirection: "row" }}
                      onPress={() =>
                        this.props.navigation.navigate("DetailPeople", {
                          id: item.id
                        })
                      }
                    >
                      <Col style={{ flexDirection: "column" }}>
                        <Image
                          source={{
                            uri: `http://hushuscoffee.com/images/avatar/${
                              item.photo
                            }`
                          }}
                          style={styles.imageContainer}
                        />
                        <Text style={styles.menuText}>{`${
                          item.fullname
                        }`}</Text>
                      </Col>
                    </Row>
                  </Grid>
                )}
              />
            </View>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Home;
