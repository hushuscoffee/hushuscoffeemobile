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
  View,
  Linking
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import styles from "./styles";

const URI = "http://10.0.2.2:8000/";

class DetailPeople extends Component {

  state = {
    people: [],
    achievement: [],
    experience: [],
    skill: [],
    language: []
  };

  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(URI + "api/people/" + params.id);
    const json = await response.json();
    this.setState({
      people: json.profile,
      achievement: json.achievement,
      experience: json.experience,
      skill: json.skill,
      language: json.language,
    });

    console.log(this.state.achievement);
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {

    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="navigate" style={{ color: "black" }} />
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

          <View>
            <Image source={{ uri: `http://10.0.2.2:8000/images/avatar/${this.state.people.photo}` }} style={{ flex: 1, alignSelf: "center", width: 150, height: 150, borderRadius: 75, borderWidth: 1 }} />

            <FlatList
              data={this.state.achievement}
              keyExtractor={(dataPeople, i) => i.toString()}
              renderItem={({ item }) => (
                <View>
                  <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
                    <Grid>
                      <Col style={styles.colImage}>
                        {/* <Image source={people} style={styles.imageDetail} /> */}
                        <Text style={{ marginTop: 15, fontWeight: "bold" }}>
                          {this.state.people.fullname}
                        </Text>
                        <Text style={styles.mt}>
                          {this.state.people.profession}
                        </Text>
                        <Text style={styles.mt}>
                          {this.state.people.address}
                        </Text>
                        <Text style={styles.mt}>
                          {this.state.people.phone}
                        </Text>
                        <Text style={styles.mt}>
                          {this.state.people.portfoliolinks}
                        </Text>
                      </Col>
                    </Grid>
                  </Card>

                  <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
                    <Grid>
                      <Col>
                        <Text style={{ fontWeight: "bold" }}>
                          Description :
                        </Text>
                        <Text>
                          {this.state.people.aboutme}
                        </Text>
                      </Col>
                    </Grid>
                  </Card>

                  <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
                    <Grid>
                      <Col>
                        <Text style={{ textAlign: "center" }}>Achievements</Text>
                      </Col>
                      <View style={styles.line} />
                      <Row style={styles.mt}>
                        <Text style={{ fontWeight: "bold" }}>
                          {item.title} ({item.month} {item.year})
                        </Text>
                      </Row>
                      <Row>
                        <Text>
                          ({item.link})
                        </Text>
                      </Row>
                      <Col>
                        <Text style={{ fontWeight: "bold" }}>
                          Description :
                        </Text>
                        <Text>
                          {item.description}
                        </Text>
                      </Col>
                      <View style={styles.line} />
                    </Grid>
                  </Card>
                </View>
              )}
            />

            <FlatList
              data={this.state.experience}
              keyExtractor={(dataPeople, i) => i.toString()}
              renderItem={({ item }) => (
                <View>
                  <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
                    <Grid>
                      <Col>
                        <Text style={{ textAlign: "center" }}>Achievements</Text>
                      </Col>
                      <View style={styles.line} />
                      <Row style={styles.mt}>
                        <Text style={{ fontWeight: "bold" }}>
                          {item.title} ({item.monthf} {item.yearf})
                        </Text>
                      </Row>
                      <Row>
                        <Text>
                          ({item.link})
                        </Text>
                      </Row>
                      <Col>
                        <Text style={{ fontWeight: "bold" }}>
                          Description :
                        </Text>
                        <Text>
                          {item.description}
                        </Text>
                      </Col>
                      <View style={styles.line} />
                    </Grid>
                  </Card>
                </View>
              )}
            />

            <View>
              <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
                <Grid>
                  <Col>
                    <Text style={{ textAlign: "center", fontWeight: "bold" }}>Skill</Text>
                  </Col>
                  <View style={styles.line} />
                  <Row style={styles.mt}>
                    <FlatList
                      data={this.state.skill}
                      keyExtractor={(dataPeople, i) => i.toString()}
                      renderItem={({ item }) => (
                        <View>
                          <Col style={{ alignItems: "center" }}>
                            <Text>
                              {item.skill}
                            </Text>
                            <Text>
                              ({item.proficiency})
                          </Text>
                          </Col>
                          <View style={styles.line} />
                        </View>
                      )}
                    />
                  </Row>
                </Grid>
              </Card>
            </View>

            <View>
              <Card style={{ backgroundColor: "#e5e7ea", padding: 10 }}>
                <Grid>
                  <Col>
                    <Text style={{ textAlign: "center", fontWeight: "bold" }}>Language</Text>
                  </Col>
                  <View style={styles.line} />
                  <Row style={styles.mt}>
                    <FlatList
                      data={this.state.language}
                      keyExtractor={(dataPeople, i) => i.toString()}
                      renderItem={({ item }) => (
                        <View>
                          <Col style={{ alignItems: "center" }}>
                            <Text >
                              {item.language}
                            </Text>
                            <Text>
                              ({item.proficiency})
                            </Text>
                          </Col>
                          <View style={styles.line} />
                        </View>
                      )}
                    />
                  </Row>

                </Grid>
              </Card>
            </View>
          </View>


        </Content>
      </Container>
    );
  }
}

export default DetailPeople;
