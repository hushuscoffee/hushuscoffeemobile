import React, { Component } from "react";
import { Image, Dimensions, StyleSheet,
  View,
  AsyncStorage,
  Alert,
  TouchableOpacity  } from "react-native";

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
import Loader from '../indicator/loader';
import { NavigationActions, StackActions } from 'react-navigation';
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;

class RegisterForm extends Component {
  // eslint-disable-line
  constructor() {
    super();
    this.state = {
      username : '',
      password : '',
      password_confirmation : '',
      email : '',
      success : '',
      loading: false
    }
  }

  handleClick(navigate){
    this.setState({
      loading: true
    });

    fetch('http://hushuscoffee.com/api/register', {
     method: 'POST',
     headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
      // body : 
      body: JSON.stringify({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
           })
      })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
            loading: false
        }, async ()=>{
          if (response.message != 'error') {
                const resetAction = StackActions.reset({
                  index: 1,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Login'}),
                    NavigationActions.navigate({ routeName: 'Drawer'})
                  ]
                })
              this.props.data.dispatch(resetAction)
              alert('Register successful. You can login now');
          }else{  
            // this.setState({ spinner: false });
            setTimeout(() => {
              alert(response.error);
            }, 100);       
          }
        }
      );
       
      }).done();
  }
  render() {
    const { navigate } = this.props.data;
    return (
        <Content padder>
          <Loader loading={this.state.loading} />
          <Form style={{marginTop:10}}>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input style={{borderColor:"black", borderBottomWidth:1, width:deviceWidth*0.9}} onChangeText={(text) => this.setState({username:text})}/>
            </Item>
            <Item stackedLabel style={{marginTop:30}}>
              <Label>E-mail Address</Label>
              <Input style={{borderColor:"black", borderBottomWidth:1, width:deviceWidth*0.9}} onChangeText={(text) => this.setState({email:text})}/>
            </Item>
            <Item stackedLabel style={{marginTop:30}}>
              <Label>Password</Label>
              <Input secureTextEntry style={{borderColor:"black", borderBottomWidth:1, width:deviceWidth*0.9}} onChangeText={(text) => this.setState({password:text})}/>
            </Item>
            <Item stackedLabel last style={{marginTop:30}}>
              <Label>Confirm Password</Label>
              <Input secureTextEntry style={{borderColor:"black", borderBottomWidth:1, width:deviceWidth*0.9}} onChangeText={(text) => this.setState({password_confirmation:text})}/>
            </Item>
          </Form>
          <Text padder style={{color:"black", marginTop:20, marginLeft:15}} onPress={ () => this.props.navigation.navigate("Login") }>Already have an account? Sign In here</Text>
          <Button block style={{ margin: 15, marginTop: 30, backgroundColor:"#ffcd22"}} onPress={() => this.handleClick(navigate)}>
            <Text style={{color:"black"}}>Register</Text>
          </Button>
        </Content>
    );
  }
}

export default RegisterForm;