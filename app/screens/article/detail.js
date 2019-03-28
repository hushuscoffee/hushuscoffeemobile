import React, { Component } from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  WebView
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
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";
import HTMLView from "react-native-htmlview";

const URI = "http://10.0.2.2:8000/";

class DetailArticle extends Component {
  // eslint-disable-line

  state = {
    articles: [],
    desc: ""
  };

  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(URI + "api/articles/" + params.id);
    const json = await response.json();
    var stringdesc = json.data[0].description;
    var splitdescription = JSON.stringify(stringdesc);
    var description = splitdescription
      .replace(/<\/?(?!a)(?!img)\w*\b[^>]*>/gi, "")
      .replace(/(?:\\[rn])+/g, "")
      .replace(/(<a[^>]*)(style[^>]*[>])/g, "");
    var rsDesc = eval(description);

    this.setState({
      articles: json.data,
      desc: rsDesc
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
            <Title style={styles.title}>Article</Title>
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
          <FlatList
            data={this.state.articles}
            keyExtractor={(article, i) => i.toString()}
            renderItem={({ item }) => (
              <Grid style={{ padding: 15 }}>
                <Row
                  style={{ justifyContent: "center", flexDirection: "column" }}
                >
                  <Col style={{ flexDirection: "column" }}>
                    <Text
                      style={{
                        fontSize: 17,
                        textAlign: "auto",
                        fontWeight: "bold"
                      }}
                    >{`${item.title}`}</Text>
                  </Col>
                  <Col style={{ flexDirection: "column" }}>
                    <Image
                      source={{
                        uri: `http://10.0.2.2:8000/uploads/articles/${
                          item.image
                        }`
                      }}
                      style={styles.imageContainer}
                    />
                  </Col>
                  <Col>
                    <HTMLView value={this.state.desc} stylesheet={stylesHTML} />
                  </Col>
                </Row>
              </Grid>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const stylesHTML = StyleSheet.create({
  a: {
    color: "#1a0dab"
  }
});

export default DetailArticle;
