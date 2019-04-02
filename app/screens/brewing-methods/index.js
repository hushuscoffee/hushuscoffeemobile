import React, { Component } from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";

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
  
  Card,
  CardItem,
  Thumbnail,
  Toast,
  View
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import HTMLView from "react-native-htmlview";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;

const pourOver = require("../../../assets/PourOver.png");
const syphone = require("../../../assets/SyphonCoffee.png");
const chemex = require("../../../assets/Chemex.png");
const aeropress = require("../../../assets/Aeropress.png");
const vietnamDrip = require("../../../assets/VietnameseCoffee.png");
const turkishCezve = require("../../../assets/TurkishCezve.png");
const mokaPot = require("../../../assets/MokaPot.png");
const coffeeKhop = require("../../../assets/CoffeeKhop.png");
const hario = require("../../../assets/HarioV60.png");

const URI = "http://hushuscoffee.com/";

class BrewingMethods extends Component {
  // eslint-disable-line

  state = {
    brewings: [],
    dataSource: []
  };

  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(URI + "api/brewing");
    const json = await response.json();
    this.setState({
      brewings: json.data
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
              <Icon ios='ios-menu' android="md-menu" style={{color: 'black'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Brewing Methods</Title>
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
          <Grid style={styles.gridStyle}>
            <Row style={styles.container}>
              <Card style={styles.cardStyle}>
                <Col style={styles.col}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("DetailBrewing", {
                        id: 2
                      })
                    }
                  >
                    <Image source={pourOver} />
                  </CardItem>
                  <Text style={styles.menuText}>POUR OVER</Text>
                </Col>
              </Card>
              <Card style={styles.cardStyle}>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("DetailBrewing", {
                        id: 1
                      })
                    }
                  >
                    <Image source={syphone} />
                  </CardItem>
                  <Text style={styles.menuText}>SYPHON</Text>
                </Col>
              </Card>
              <Card style={styles.cardStyle}>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("DetailBrewing", {
                        id: 12
                      })
                    }
                  >
                    <Image source={chemex} />
                  </CardItem>
                  <Text style={styles.menuText}>CHEMEX</Text>
                </Col>
              </Card>
            </Row>
            <Row style={styles.container}>
              <Card style={styles.cardStyle}>
                <Col style={styles.col}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("DetailBrewing", {
                        id: 13
                      })
                    }
                  >
                    <Image source={aeropress} />
                  </CardItem>
                  <Text style={styles.menuText}>AEROPRESS</Text>
                </Col>
              </Card>
              <Card style={styles.cardStyle}>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("DetailBrewing", {
                        id: 14
                      })
                    }
                  >
                    <Image source={vietnamDrip} />
                  </CardItem>
                  <Text style={styles.menuText}>VIETNAM DRIP</Text>
                </Col>
              </Card>
              <Card style={styles.cardStyle}>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("DetailBrewing", {
                        id: 15
                      })
                    }
                  >
                    <Image source={turkishCezve} />
                  </CardItem>
                  <Text style={styles.menuText}>TURKISH CEZVE</Text>
                </Col>
              </Card>
            </Row>
            <Row style={styles.container}>
              <Card style={styles.cardStyle}>
                <Col style={styles.col}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("DetailBrewing", {
                        id: 16
                      })
                    }
                  >
                    <Image source={mokaPot} />
                  </CardItem>
                  <Text style={styles.menuText}>MOKA POT</Text>
                </Col>
              </Card>
              <Card style={styles.cardStyle}>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("DetailBrewing", {
                        id: 17
                      })
                    }
                  >
                    <Image source={coffeeKhop} />
                  </CardItem>
                  <Text style={styles.menuText}>COFFEE KHOP</Text>
                </Col>
              </Card>
              <Card style={styles.cardStyle}>
                <Col style={[styles.col, styles.contentSpace]}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("DetailBrewing", {
                        id: 17
                      })
                    }
                  >
                    <Image source={hario} />
                  </CardItem>
                  <Text style={styles.menuText}>HARIO V60</Text>
                </Col>
              </Card>
            </Row>
          </Grid>

          <Row style={styles.title}>
            <Left>
              <Text style={{ fontSize: 24, marginTop: 36 }}>
                Brewing Methods
              </Text>
            </Left>
            {/* <Right>
            <Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }} 
              onPress={ () => this.props.navigation.navigate("AllBrewings") }>
              View All
            </Text>
            </Right> */}
          </Row>

          <View>
            <FlatList
              data={this.state.brewings}
              horizontal={true}
              keyExtractor={(dataBrewings, i) => i.toString()}
              renderItem={({ item }) => (
                <Grid style={{ padding: 15 }}>
                  <Row
                    style={{ justifyContent: "center", flexDirection: "row" }}
                    onPress={() =>
                      this.props.navigation.navigate("DetailBrewing", {
                        id: item.id
                      })
                    }
                  >
                    <Col style={{ flexDirection: "column" }}>
                      <Image
                        source={{
                          uri: `http://hushuscoffee.com/uploads/brewings/${
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
        </Content>
      </Container>
    );
  }
}

export default BrewingMethods;
