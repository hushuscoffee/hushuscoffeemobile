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

class MyArticle extends Component {
  state = {
    articles: [],
    idUserHushus: null,
    message: ""
  };

  fetchData = async () => {
    await AsyncStorage.getItem("idUserHushus").then(value =>
      this.setState({ idUserHushus: value })
    );
    const response = await fetch(
      URI + "api/my-article/" + this.state.idUserHushus
    );
    const json = await response.json();
    this.setState({
      message: json.message,
      articles: json.data
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
                <Icon name="navigate" style={{ color: "black" }} />
              </Button>
            </Left>
            <Body>
              <Title style={styles.title}>My Article</Title>
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
              data={this.state.articles}
              keyExtractor={(dataArticles, i) => i.toString()}
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
                    <Col
                      style={{ flex: 0, flexDirection: "column", width: "35%" }}
                    >
                      <Image
                        source={{
                          uri: `http://10.0.2.2:8000/uploads/articles/${
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
              <Title style={styles.title}>My Article</Title>
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
              You haven't create any article yet. Please create one here
            </Text>
            <Text>{this.state.message}</Text>
          </Content>
        </Container>
      );
    }
  }
}

export default MyArticle;
