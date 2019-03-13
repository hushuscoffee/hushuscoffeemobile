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
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";

class TestDetailArticle extends Component {

  const URI = 'http://10.0.2.2:8000';

  state = {
    articles: []        
  }

  fetchData = async () => {
      const {params} = this.props.navigation.state;
      const response = await fetch(URI + '/api/article/' + params.id);
      const json = await response.json();
      // const jsonParse = JSON.parse(json);
      this.setState({
          articles: json.data
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
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{color:"black"}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Detail Article</Title>
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
          {/* <View>
              <FlatList
                data={this.state.articles}
                keyExtractor={(article, i) => i.toString()}
                renderItem={({item}) => 
                    <Grid style={{padding: 15}}>
                        <Row style={{justifyContent: "center", flexDirection: "row"}}>
                            <Col style={{flexDirection: "column"}}>
                                <Image source={{uri: `http://hushuscoffee.com/${item.file}` }} style={styles.imageContainer} />
                            </Col>
                            <Col style={{flexDirection: "column", marginLeft: -150}}>
                                <Text>{`${item.title}`}</Text>
                            </Col>
                        </Row>
                    </Grid>
                }
              />
          </View> */}
          <Text>
            detail page
          </Text>
        </Content>
      </Container>
    );
  }
}

export default TestDetailArticle;
