import React, { Component } from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
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
  Text,
  Card,
  CardItem,
  Thumbnail,
  Toast,
  View
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;

const URI = "http://hushuscoffee.com/";

class People extends Component {
  // eslint-disable-line

  state = {
    people: []
  };

  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(URI + "api/people");
    const json = await response.json();
    this.setState({
      people: json.data
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
            <Title style={styles.title}>People</Title>
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
          <Card style={{ backgroundColor: "#e5e7ea", padding: 5 }}>
            <Row style={styles.title}>
              <Text style={{ fontSize: 24 }}>Trending People</Text>
              <Right>
                <Text
                  style={{
                    alignSelf: "flex-end",
                    marginRight: 10,
                    color: "blue"
                  }}
                >
                  View All
                </Text>
              </Right>
            </Row>

            <View>
              <FlatList
                  data={this.state.people}
                  keyExtractor={(dataPeople, i) => i.toString()}
                  renderItem={({item}) =>
                    <Grid style={{padding: 15}}>
                        <Row style={{justifyContent: "center", flexDirection: "row"}}
                          onPress={() =>
                            this.props.navigation.navigate("DetailPeople", {
                              id: item.id
                            })
                          }
                        >
                            <Col style={{flexDirection: "column"}}>
                              <Image source={{ uri : `http://hushuscoffee.com/images/avatar/${item.photo}` }} style={styles.imageContainer} />
                            </Col>
                            <Col>
                              <Text style={styles.menuText}>
                                {`${item.fullname}`}
                              </Text>
                              <Text style={styles.menuText}>
                                Member since : {`${item.created_at}`}
                              </Text>
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
