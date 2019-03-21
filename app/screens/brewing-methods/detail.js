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

      this.state = {
          brewings: [],
          dataSteps: [],
          dataStepImage: [] 
      }
  }

  state = {
    brewings: [],
    dataSteps: [],
    dataStepImage: [],
    testRenderData: []
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
      
      this.setState({
          brewings: arrData
      });
  }

  fetchDataSteps = () => {
    fetch(URI + 'api/brewing/1')
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

        var lData = splitStringStep.search(/\n+[A-Z]/g);

        this.setState({
          dataSteps: splitStringStep
        });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  fetchDataStepImage = () => {
    fetch(URI + 'api/brewing/1')
    .then((response) => response.json())
    .then((responseJson) => {

        var stepImage = JSON.parse(responseJson["data"][0]["step_images"]);
        var stringDataStepImage = JSON.stringify(stepImage);
        var splitStringStepImage = stringDataStepImage.replace(/\[(.*?)\]/g, "$1")
        .replace(/[\"]/g, '')
        .replace(/[\,]/g, '\n\n');

        let img = [];
        let displayImage = [];
        let arrDataImg = [];
        let lengthDataImage = stepImage.length;

        for(var i = 0; i < stepImage.length; i++){
          img.push(stepImage[i]);
        }

        for(var i = 0; i < img.length; i++){
          displayImage.push(<Image source={{uri: `http://hushuscoffee.com/uploads/brewings/steps/${img[i]}` }} />);
        }
        
        for(var i = 0; i < lengthDataImage; i++){
          arrDataImg.push(<Image source={{uri: `http://hushuscoffee.com/uploads/brewings/steps/${displayImage[i]["props"]["source"]["uri"]}` }} />);
        }

        this.setState({
          testRenderData: arrDataImg
        });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount(){
    this.fetchData();
    this.fetchDataSteps();
    this.fetchDataStepImage();
  }

  _onPressButton() {
  return fetch(URI + 'api/brewing/1')
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

      var concatData = stepData.map(
        (element, index) => element + stepImage[index] + '\n\n'
      );

      let img = [];
      let displayImage = [];
      let arrDataImg = [];
      let lengthDataImage = stepImage.length;

      for(var i = 0; i < stepImage.length; i++){
        img.push(stepImage[i]);
      }

      for(var i = 0; i < img.length; i++){
        displayImage.push(<Image source={{uri: `http://hushuscoffee.com/uploads/brewings/steps/${img[i]}` }} />);
      }
      
      for(var i = 0; i < lengthDataImage; i++){
        arrDataImg.push(<Image source={{uri: `http://hushuscoffee.com/uploads/brewings/steps/${displayImage[i]["props"]["source"]["uri"]}` }} />);
      }

      console.log(arrDataImg);
    })
    .catch((error) => {
      console.error(error);
    });
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

              {/* <FlatList
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
                                <Text>
                                  Steps
                                </Text>
                                { this.state.brewings.map(item => {
                                    return <HTMLView key={item.id} value={ JSON.parse(`${item.steps}`) } />
                                }) }
                            </Col>
                        </Row>
                    </Grid>
                }
              /> */}
              {/* <Text>
                {this.state.lengthData}
                {this.state.dataSteps}
              </Text> */}

              <Text style={{ alignSelf:"flex-end", marginRight:10, color:"blue" }} 
                onPress={ this._onPressButton }>
                Click here
              </Text>
        </Content>        
      </Container>
    );
  }
}

export default DetailBrewing;
