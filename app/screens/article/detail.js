import React, { Component } from "react";
import { Image, Dimensions, StyleSheet, TouchableOpacity, FlatList, WebView } from "react-native";
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
import HTMLView from 'react-native-htmlview';

const URI = 'http://hushuscoffee.com/';

class DetailArticle extends Component {
  // eslint-disable-line

  state = {
    articles: [],
    html: ''
  }

  fetchData = async () => {
      const {params} = this.props.navigation.state;
      const response = await fetch(URI + 'api/articles/' + params.id);
      const json = await response.json();
      this.setState({
          articles: json.data,
          html: json.data.description
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
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" style={{color:"black"}}/>
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
                renderItem={({item}) => 
                    <Grid style={{padding: 15}}>
                        <Row style={{justifyContent: "center", flexDirection: "column"}}>
                            <Col style={{flexDirection: "column"}}>
                                <Text style={{fontSize:17, textAlign:"auto", fontWeight: 'bold'}}>{`${item.title}`}</Text>
                            </Col>
                            <Col style={{flexDirection: "column"}}>
                                <Image source={{uri: `http://hushuscoffee.com/uploads/articles/${item.image}` }} style={styles.imageContainer} />
                            </Col>
                            <Col>
                              <HTMLView
                                value={ `${item.description}` }
                              />
                            </Col>
                        </Row>
                    </Grid>
                }
              />
        </Content>
      </Container>
    );
  }
}

export default DetailArticle;
