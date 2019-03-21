import React, { Component } from "react";
import LoginForm from './loginform';
import { Image, Dimensions, View } from "react-native";

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
  Form, 
  Item, 
  Input,
  Label,
  Text
} from "native-base";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;

class Login extends Component {
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
            <Title style={styles.title}>Login</Title>
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
        
        <LoginForm data={this.props.navigation} />
      </Container>
    );
  }
}

export default Login;
