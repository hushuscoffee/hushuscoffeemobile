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
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";

const URI = "http://hushuscoffee.com/";

class AllEvents extends Component {
  state = {
    events: []
  };

  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(URI + "api/events");
    const json = await response.json();
    this.setState({
      events: json.data
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
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon type="Ionicons" name="arrow-back" style={{ color: "black" }} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>All Events</Title>
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
            data={this.state.events}
            keyExtractor={(dataEvents, i) => i.toString()}
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
                        uri: `http://hushuscoffee.com/uploads/articles/${
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
                  </Col>
                </Row>
              </Grid>
            )}
          />
        </View>
      </Container>
    );
  }
}

export default AllEvents;
