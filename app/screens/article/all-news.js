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

class AllNews extends Component {

    state = {
        news: []        
    }

    fetchData = async () => {
        const { params } = this.props.navigation.state;
        const response = await fetch(URI + 'api/news');
        const json = await response.json();
        this.setState({
            news: json.data
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return(
            <Container>
                <Header style={styles.header}>
                <Left>
                <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
                    <Icon name="menu" style={{color:"black"}}/>
                </Button>
                </Left>
                <Body>
                    <Title style={styles.title}>All News</Title>
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
                        data={this.state.news}
                        keyExtractor={(dataNews, i) => i.toString()}
                        renderItem={({item}) => 
                            <Grid style={{padding: 15}}>
                                <Row style={{justifyContent: "center", flexDirection: "row"}}
                                        onPress={ ()=> 
                                            this.props.navigation.navigate("DetailArticle", {id:item.id}) 
                                        }>
                                    <Col style={{flexDirection: "column"}}>
                                    <Image source={{ uri : `http://hushuscoffee.com/uploads/articles/${item.image}` }} style={styles.imageContainer} />
                                    </Col>
                                    <Col style={{flexDirection: "column", marginLeft: -150}}>
                                        <Text>{`${item.title}`}</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        }
                    />
                </View>
            </Container>
        )
    }
}

export default AllNews;