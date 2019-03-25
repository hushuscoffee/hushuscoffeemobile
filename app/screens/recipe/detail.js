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
Toast,
View
} from "native-base";
import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";
import HTMLView from "react-native-htmlview";
import { bold } from "ansi-colors";

const URI = 'http://hushuscoffee.com/';

class DetailRecipe extends Component {
  // eslint-disable-line

  constructor(props)
  {
      super(props);
  }

  state = {
    recipes: [],
    dataSteps: [],
    dataIngredients: [],
    dataTools: [],
    desc: ''
  }

  fetchData = async () => {
      const {params} = this.props.navigation.state;
      const response = await fetch(URI + 'api/recipe/' + params.id);
      const json = await response.json();
      var stringdesc = json.data[0].description;
      var splitdescription = JSON.stringify(stringdesc);
      var description = splitdescription.replace(/[\"]+/g, '').replace(/\\[rn]+/g, '');
      this.setState({
          recipes: json.data,
          desc : description
      });
      
  }

  fetchDataSteps = async () => {
    const {params} = this.props.navigation.state;
    await fetch(URI + 'api/recipe/'+ params.id)
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

        var ingredients = JSON.parse(responseJson["data"][0]["ingredients"]);        
        var tools = JSON.parse(responseJson["data"][0]["tools"]);
        
        this.setState({
          dataSteps: obj.data,
          dataIngredients:ingredients,
          dataTools:tools
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
            <Image source={{uri: `http://hushuscoffee.com/uploads/recipes/steps/${item}` }} style={styles.imageContainer} />
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
          <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Icon name="navigate" style={{color:"black"}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Recipe</Title>
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
                data={this.state.recipes}
                keyExtractor={(recipe, i) => i.toString()}
                renderItem={({item}) => 
                    <Grid style={{padding: 15}}>
                        <Row style={{justifyContent: "center", flexDirection: "column"}}>
                            <Col style={{flexDirection: "column"}}>
                                <Text style={{fontSize:30, textAlign:"auto", fontWeight: 'bold'}}>{`${item.title}`}</Text>
                            </Col>
                            <Col style={{flexDirection: "column"}}>
                                <Image source={{uri: `http://hushuscoffee.com/uploads/recipes/${item.image}` }} style={{ width: '100%', height: 200, margin: 7 }} />
                            </Col>
                            <Col>
                              <HTMLView
                                value={this.state.desc}
                                stylesheet={stylesHTML}
                              />
                            </Col>
                        </Row>
                    </Grid>
                }
              />
              
              <Text style={{ fontSize: 20 }}>Ingredients</Text>
              <View style={{ flex:1, justifyContent:"center", margin:5 }}> 

              <FlatList
                data={this.state.dataIngredients}
                keyExtractor={(stepIngredient, i) => i.toString()}
                renderItem={({item}) => 
                    <Grid>
                        <Row >
                            <Col>
                              <Text style={stylesHTML}>{`${item.name}`} {`${item.amount}`} {`${item.unit}`}</Text>
                            </Col>
                        </Row>
                    </Grid>
                }
              />
              </View>
              <Text></Text>
              <Text style={{ fontSize: 20 }}>Tools</Text>
              <View style={{ flex:1, justifyContent:"center", margin:5 }}> 
            <FlatList
                data={this.state.dataTools}
                keyExtractor={(stepTool, i) => i.toString()}
                renderItem={({item}) => 
                    <Grid>
                        <Row >
                            <Col>
                              <Text style={stylesHTML}>{`${item.name}`} {`${item.amount}`} {`${item.unit}`}</Text>
                            </Col>
                        </Row>
                    </Grid>
                }
            />
            </View>
            <Text></Text>
              <Text style={{ fontSize: 20 }}>Steps</Text>
              <View style={{ flex:1, justifyContent:"center", margin:5 }}> 
                <FlatList
                    data={this.state.dataSteps}
                    keyExtractor={(stepData, i) => i.toString()}
                    renderItem={({item}) => 
                    <View style={{flex:1}}>
                    <Text style={{ width: '100%', padding: 10 }}> {`${item.step}`}</Text>
                    <Image source={{uri: `http://hushuscoffee.com/uploads/recipes/steps/${item.image}` }} style={{ width: '100%', height: '100%', margin: 7 }} />                        
                    <Text></Text>
                  </View>
                    }
                />
              </View>
        </Content>        
      </Container>
    );
  }
}

const stylesHTML = StyleSheet.create({
  p: {
    fontFamily: "Avenir-Regular",
    color: "#777",
    fontSize: 15
  }
});

export default DetailRecipe;
