import React, { Component } from "react";
import { Image, AsyncStorage, FlatList } from "react-native";
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
  View,
  Card,
  CardItem
} from "native-base";
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";

const URI = "http://hushuscoffee.com/";

class MyBrewing extends Component {
  state = {
    brewings: [],
    idUserHushus: null,
    message: ""
  };

  fetchData = async () => {
    await AsyncStorage.getItem("idUserHushus").then(value =>
      this.setState({ idUserHushus: value })
    );
    const response = await fetch(
      URI + "api/my-brewing/" + this.state.idUserHushus
    );
    const json = await response.json();
    this.setState({
      message: json.message,
      brewings: json.data
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.message != "error") {
      console.log(this.state.message);
      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon ios='ios-arrow-back' android="md-arrow-back" style={{color: 'black'}}/>
              </Button>
            </Left>
            <Body>
              <Title style={styles.title}>My Brewing</Title>
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
          <View>
            <FlatList
              data={this.state.brewings}
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
                    <Col
                      style={{ flex: 0, flexDirection: "column", width: "35%" }}
                    >
                      <Image
                        source={{
                          uri: `http://hushuscoffee.com/uploads/brewings/${
                            item.image
                            }`
                        }}
                        style={styles.imageContainer}
                      />
                    </Col>
                    <Col
                      style={{ flex: 0, flexDirection: "column", width: "70%" }}
                    >
                      <Text>{`${item.title}`.split(' ').map((s) => s.charAt(0) + s.substring(1).toLowerCase()).join(' ')}</Text>
                      <Text></Text>
                      <Text>{item.created_at}</Text>
                    </Col>
                  </Row>
                </Grid>
              )}
            />
          </View>
        </Container>
      );
    } else {
      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon ios='ios-arrow-back' android="md-arrow-back" style={{color: 'black'}}/>
              </Button>
            </Left>
            <Body>
              <Title style={styles.title}>My Brewing</Title>
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

          <Content>
            <Card>
              <CardItem>
                <Body>
                  <Text>You haven't create any brewing yet.</Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
    }
  }
}

export default MyBrewing;
