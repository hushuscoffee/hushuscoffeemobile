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
  View
} from "native-base";
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";

const URI = "http://10.0.2.2:8000/";

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
                <Icon type="Ionicons" name="arrow-back" style={{ color: "black" }} />
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
                          uri: `http://10.0.2.2:8000/uploads/brewings/${
                            item.image
                          }`
                        }}
                        style={styles.imageContainer}
                      />
                    </Col>
                    <Col
                      style={{ flex: 0, flexDirection: "column", width: "70%" }}
                    >
                      <Text>{`${item.title}`}</Text>
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
                <Icon name="navigate" style={{ color: "black" }} />
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
            <Text>
              You haven't create any brewing yet. Please create one here
            </Text>
            <Text>{this.state.message}</Text>
          </Content>
        </Container>
      );
    }
  }
}

export default MyBrewing;
