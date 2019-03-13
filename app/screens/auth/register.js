import React, { Component } from "react";
import { Image, Dimensions } from "react-native";

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
  Form,
  Input,
  Label,
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;

class Register extends Component {
  // eslint-disable-line

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
            <Title style={styles.title}>Register</Title>
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
          <Form style={{marginTop:10}}>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input style={{borderColor:"black", borderBottomWidth:1, width:deviceWidth*0.9}}/>
            </Item>
            <Item stackedLabel style={{marginTop:30}}>
              <Label>E-mail Address</Label>
              <Input style={{borderColor:"black", borderBottomWidth:1, width:deviceWidth*0.9}}/>
            </Item>
            <Item stackedLabel style={{marginTop:30}}>
              <Label>Password</Label>
              <Input secureTextEntry style={{borderColor:"black", borderBottomWidth:1, width:deviceWidth*0.9}}/>
            </Item>
            <Item stackedLabel last style={{marginTop:30}}>
              <Label>Confirm Password</Label>
              <Input secureTextEntry style={{borderColor:"black", borderBottomWidth:1, width:deviceWidth*0.9}}/>
            </Item>
          </Form>
          <Text padder style={{color:"black", marginTop:20, marginLeft:15}}>Already have an account? Sign In here</Text>
          <Button block style={{ margin: 15, marginTop: 30, backgroundColor:"#ffcd22"}}>
            <Text style={{color:"black"}}>Register</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Register;
