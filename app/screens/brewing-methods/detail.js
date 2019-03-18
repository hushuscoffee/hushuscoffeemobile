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
import HTMLView from "react-native-htmlview";

const URI = 'http://hushuscoffee.com/';

class DetailBrewing extends Component {
  // eslint-disable-line

  state = {
    brewings: [],
    dataSource: []
  }

  fetchData = async () => {
      const {params} = this.props.navigation.state;
      const response = await fetch(URI + 'api/brewing/' + params.id);
      const json = await response.json();
      const obj = json.data;
      let arrData = [];

      for(var i in obj){
        arrData.push(obj[i]);
      }

      // var str = JSON.parse(arrData); 
        
      var decode1 = arrData.replace(/\\u2019/g, "'");
      var decode2 = decode1.replace(/\\u201c/g, '"');
      var decode3 = decode2.replace(/\\u201d/g, '"');

      this.setState({
          brewings: decode1
      });
  }

  componentDidMount(){
    this.fetchData();
  }

   _onPressButton() {
    return fetch(URI + 'api/brewing/1')
      .then((response) => response.json())
      .then((responseJson) => {

        var aData = [];
        var matches = [];
        var obj = responseJson.data;

        for(var i = 0; i < obj.length; i++){
          aData.push(JSON.stringify(obj[i]['steps']));
        }

        // alert(obj[0].steps.toString());
        alert(JSON.parse(aData).split(","));
        var str = JSON.parse(aData); 
        
        var decode1 = str.replace(/\\u2019/g, "'");
        var decode2 = decode1.replace(/\\u201c/g, '"');
        var decode3 = decode2.replace(/\\u201d/g, '"');

        // alert(decode3);
      })
      .catch((error) => {
        console.error(error);
      });
    }

  constructor(props)
  {
      super(props);

      this.state = {
          brewings: []
      }
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
            <Title style={styles.title}>Brewing Method</Title>
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
              <FlatList
                data={this.state.brewings}
                keyExtractor={(brewing, i) => i.toString()}
                renderItem={({item}) => 
                    <Grid style={{padding: 15}}>
                        <Row style={{justifyContent: "center", flexDirection: "column"}}>
                            <Col style={{flexDirection: "column"}}>
                                <Text style={{fontSize:17, textAlign:"auto", fontWeight: 'bold'}}>{`${item.title}`}</Text>
                            </Col>
                            <Col style={{flexDirection: "column"}}>
                                <Image source={{uri: `http://hushuscoffee.com/uploads/brewings/${item.image}` }} style={styles.imageContainer} />
                            </Col>
                            <Col>
                              <HTMLView
                                value={ `${item.description}` }
                              />
                            </Col>
                            <Col>
                                <Text key={item.id}>Step Image</Text>
                                {/* <Image source={{uri: `http://hushuscoffee.com/uploads/brewings/steps/${item.step_image}` }} style={styles.imageContainer} /> */}
                                  { this.state.brewings.map(item => {
                                      return <HTMLView value={ `${item.steps}` } />
                                  }) }
                            </Col>
                        </Row>
                    </Grid>
                }
              />
        </Content>

        <Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }} 
          onPress={ this._onPressButton }>
          Click here
        </Text>
      </Container>
    );
  }
}

export default DetailBrewing;
