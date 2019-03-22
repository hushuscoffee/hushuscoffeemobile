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

  constructor(props)
  {
      super(props);
  }
  state = {
    brewings: [],
    dataSteps: []
  }

  fetchData = async () => {
      const {params} = this.props.navigation.state;
      const response = await fetch(URI + 'api/brewing/' + params.id);
      const json = await response.json();
      this.setState({
          brewings: json.data
      });
      console.log(this.state.brewings);
  }

  fetchDataSteps = async () => {
    const {params} = this.props.navigation.state;
    await fetch(URI + 'api/brewing/'+ params.id)
    .then((response) => response.json())
    .then((responseJson) => {

        var stepData = JSON.parse(responseJson["data"][0]["steps"]);
        var stringDataStep = JSON.stringify(stepData);
        var splitStringStep = stringDataStep.replace(/[\"]+[,\"]+/g, '\n\n').replace(/\\[rn]+/g, '');
        
        var stepImage = JSON.parse(responseJson["data"][0]["step_images"]);
        var stringDataStepImage = JSON.stringify(stepImage);
        var splitStringStepImage = stringDataStepImage.replace(/\[(.*?)\]/g, "$1")
        .replace(/[\"]/g, '')
        .replace(/[\,]/g, '\n');
        
        var data_Steps = '{"data":[]}';
        var obj = JSON.parse(data_Steps);
        for(var i = 0; i < stepImage.length; i++){
          obj['data'].push({"step":stepData[i],"image":stepImage[i]});
        }
        this.setState({
          dataSteps: obj.data
        });

        console.log(this.state.dataSteps);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount(){
    this.fetchData();
    this.fetchDataSteps();
  }

  dataImage(){
    let arrTest = [];
    let data = this.state.testRenderData;

    for(var i = 0; i < data.length; i++){
      arrTest.push(data[i]);
    }

    return(
      data.map((item, index) => {
        return(
          <View key={index}>
            <Image source={{uri: `http://hushuscoffee.com/uploads/brewings/steps/${item}` }} style={styles.imageContainer} />
          </View>
        )
      })
    )
  }

  joinStepAndImage(){

    var stepsString = this.state.dataSteps;
    var stepsImage = this.state.dataStepImage;

    var concatData = stepsImage.map(
      (element, index) => element + stepsString[index] + '\n\n'
    );

    console.log(typeof(stepsString));
    console.log(typeof(stepsImage));
  }

  render(){
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
                                <Text style={{fontSize:30, textAlign:"auto", fontWeight: 'bold'}}>{`${item.title}`}</Text>
                            </Col>
                            <Col style={{flexDirection: "column"}}>
                                <Image source={{uri: `http://hushuscoffee.com/uploads/brewings/${item.image}` }} style={styles.imageContainer} />
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
              <Text>Steps</Text>
              <View > 
            <FlatList
                data={this.state.dataSteps}
                keyExtractor={(stepData, i) => i.toString()}
                renderItem={({item}) => 
                    <Grid>
                        <Row >
                            <Col>
                            <Image source={{uri: `http://hushuscoffee.com/uploads/brewings/steps/${item.image}` }} style={styles.imageContainer} />
                              <Text style={styles.menuText}> {`${item.step}`}</Text>
                            </Col>
                        </Row>
                    </Grid>
                }
            />
          </View>
        </Content>        
      </Container>
    );
  }
}

export default DetailBrewing;
