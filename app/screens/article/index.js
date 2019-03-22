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


const URI = 'http://hushuscoffee.com/';

class Article extends Component {
  state = {
    news: [],
    events: [],
    tips: []        
  }

  fetchDataNews = async () => {
      const { params } = this.props.navigation.state;
      const response = await fetch(URI + 'api/home-news');
      const json = await response.json();
      this.setState({
          news: json.data
      });
  }

  fetchDataEvents = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(URI + 'api/home-events');
    const json = await response.json();
    this.setState({
        events: json.data
    });
  }

  fetchDataTips = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(URI + 'api/home-tips');
    const json = await response.json();
    this.setState({
        tips: json.data
    });
  }

  componentDidMount(){
      this.fetchDataNews();
      this.fetchDataEvents();
      this.fetchDataTips();
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" style={{color:"black"}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Articles</Title>
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
          <Card style={{backgroundColor:'#e5e7ea', padding:5}}>
          <Row style={styles.title}>
            <Text style={{fontSize:24}}>News</Text>
              <Right>
                <Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }} 
                  onPress={ () => this.props.navigation.navigate("AllNews") }>
                  View All
                </Text>
              </Right>
          </Row>

          <View > 
            <FlatList
                data={this.state.news}
                horizontal={true}
                keyExtractor={(newsData, i) => i.toString()}
                renderItem={({item}) => 
                    <Grid style={{padding: 15}}>
                        <Row style={{justifyContent: "center", flexDirection: "row"}}       
                                onPress={ ()=> 
                                    this.props.navigation.navigate("DetailArticle", {id:item.id}) 
                                }>
                            <Col style={{flexDirection: "column"}}>
                              <Image source={{ uri : `http://hushuscoffee.com/uploads/articles/${item.image}` }} style={styles.imageContainer} />
                              <Text style={styles.menuText}>{`${item.id}`} | {`${item.title}`}</Text>
                            </Col>
                        </Row>
                    </Grid>
                }
            />
          </View>
        </Card>  

          <Card style={{backgroundColor:'#e5e7ea', padding:5, marginTop:20}}>
          <Row style={styles.title}>
            <Text style={{fontSize:24}}>Tips</Text>
              <Right>
                <Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }} 
                  onPress={ () => this.props.navigation.navigate("AllTips") }>
                  View All
                </Text>
              </Right>
          </Row>

          <View > 
            <FlatList
                data={this.state.tips}
                horizontal={true}
                keyExtractor={(tipsData, i) => i.toString()}
                renderItem={({item}) => 
                    <Grid style={{padding: 15}}>
                        <Row style={{justifyContent: "center", flexDirection: "row"}}       
                                onPress={ ()=> 
                                    this.props.navigation.navigate("DetailArticle", {id:item.id}) 
                                }>
                            <Col style={{flexDirection: "column"}}>
                              <Image source={{ uri : `http://hushuscoffee.com/uploads/articles/${item.image}` }} style={styles.imageContainer} />
                              <Text style={styles.menuText}>{`${item.id}`} | {`${item.title}`}</Text>
                            </Col>
                        </Row>
                    </Grid>
                }
            />
          </View>
          </Card>

          <Card style={{backgroundColor:'#e5e7ea', padding:5, marginTop:20}}>
          <Row style={styles.title}>
            <Text style={{fontSize:24}}>Events</Text>
              <Right>
                <Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }} 
                  onPress={ () => this.props.navigation.navigate("AllEvents") }>
                  View All
                </Text>
              </Right>
          </Row>

          <View > 
            <FlatList
                data={this.state.events}
                horizontal={true}
                keyExtractor={(eventsData, i) => i.toString()}
                renderItem={({item}) => 
                    <Grid style={{padding: 15}}>
                        <Row style={{justifyContent: "center", flexDirection: "row"}}       
                                onPress={ ()=> 
                                    this.props.navigation.navigate("DetailArticle", {id:item.id}) 
                                }>
                            <Col style={{flexDirection: "column"}}>
                              <Image source={{ uri : `http://hushuscoffee.com/uploads/articles/${item.image}` }} style={styles.imageContainer} />
                              <Text style={styles.menuText}>{`${item.id}`} | {`${item.title}`}</Text>
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

export default Article;
