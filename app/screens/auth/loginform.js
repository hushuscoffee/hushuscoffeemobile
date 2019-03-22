import React, { Component } from "react";
import { Image, Dimensions, StyleSheet,
  View,
  AsyncStorage,
  Alert,
  TouchableOpacity } from "react-native";

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
import Loader from '../indicator/loader';
import { NavigationActions, StackActions } from 'react-navigation';

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;

class LoginForm extends Component {
  // eslint-disable-line
  constructor() {
    super();
    this.state = {
      username : '',
      password : '',
      success : '',
      loading: false
    }
  }

  handleClick(navigate){
    this.setState({
      loading: true
    });

    fetch('http://hushuscoffee.com/api/login', {
     method: 'POST',
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // body : 
      body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
           })
      })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
            loading: false
        }, async ()=>{
          // console.log(response);
          if (response.message != 'error') {
            await AsyncStorage.setItem('idUserHushus', response.data.id.toString());
            await AsyncStorage.getItem('idUserHushus').then(console.log);
            await AsyncStorage.getAllKeys().then(console.log); // ['foo']
            // await AsyncStorage.setItem('foo', 'bar');
            // await AsyncStorage.getItem('foo').then(console.log); // 'bar'
            // await AsyncStorage.getAllKeys().then(console.log); // ['foo']
            
                const resetAction = StackActions.reset({
                  index: 1,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Home'}),
                    NavigationActions.navigate({ routeName: 'Drawer'})
                  ]
                })
              this.props.data.dispatch(resetAction)
              Alert.alert('You have been logged in.');
          }else{
            
            this.setState({ spinner: false });
            setTimeout(() => {
              Alert.alert('Warning','Username or Password is wrong!');
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
            <Item stackedLabel last style={{marginTop:30}}>
              <Label>Password</Label>
              <Input secureTextEntry style={{borderColor:"black", borderBottomWidth:1, width:deviceWidth*0.9}} onChangeText={(text) => this.setState({password:text})}/>
            </Item>
          </Form>
          <Text padder style={{color:"black", marginTop:20, marginLeft:15}} onPress={ () => this.props.navigation.navigate("AuthRegister") }>Do not have an account? Create one here</Text>
          <Button block style={{ margin: 15, marginTop: 30, backgroundColor:"#ffcd22"}} onPress={() => this.handleClick(navigate)}>
            <Text style={{color:"black"}}>Sign In</Text>
          </Button>
        </Content>
    );
  }
}

export default LoginForm;
