import React, { Component } from "react";
import { Image,AsyncStorage,TouchableOpacity } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";
import { NavigationActions, StackActions } from 'react-navigation';

const drawerCover = require("../../../assets/drawer-cover.png");
const datas_non_auth = [
  {
    name: "Home",
    route: "Home",
    icon: "home"
  },
  {
    name: "Article",
    route: "Article",
    icon: "paper"
  },
  {
    name: "Brewing Method",
    route: "BrewingMethods",
    icon: "book"
  },
  {
    name: "Recipe",
    route: "AllRecipes",
    icon: "clipboard"
  },
  {
    name: "People",
    route: "People",
    icon: "people"
  },
  {
    name: "Login",
    route: "AuthLogin",
    icon: "person"
  },
  {
    name: "Register",
    route: "AuthRegister",
    icon: "person-add"
  }
];

const datas_auth = [
  {
    name: "Home",
    route: "Home",
    icon: "home"
  },
  {
    name: "Article",
    route: "Article",
    icon: "paper"
  },
  {
    name: "Brewing Method",
    route: "BrewingMethods",
    icon: "book"
  },
  {
    name: "Recipe",
    route: "AllRecipes",
    icon: "clipboard"
  },
  {
    name: "People",
    route: "People",
    icon: "people"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      idUserHushus: null
    };
  }

  async getIdUserHushus() {
      await AsyncStorage.getItem('idUserHushus').then(value =>
      this.setState({ idUserHushus: value })
    );
  };

  _handleLogOut = () => {
    AsyncStorage.removeItem('idUserHushus');
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
        NavigationActions.navigate({ routeName: 'Drawer'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
    alert('You have been logged out.');
  }

  componentDidMount(){
    this.getIdUserHushus();
  }

  render() {
    if(this.state.idUserHushus != null){
      return (
        <Container>
          <Content
            bounces={false}
            style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
          >
            <Image source={drawerCover} style={styles.drawerCover} />
          {/* <Text> Auth {this.state.idUserHushus} </Text> */}
            <List
              dataArray={datas_auth}
              renderRow={data =>
                <ListItem
                  button
                  noBorder
                  onPress={() => this.props.navigation.navigate(data.route)}
                >
                  <Left>
                    <Icon
                      active
                      name={data.icon}
                      style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                    <Text style={styles.text}>
                      {data.name}
                    </Text>
                  </Left>
                  {data.types &&
                    <Right style={{ flex: 1 }}>
                      <Badge
                        style={{
                          borderRadius: 3,
                          height: 25,
                          width: 72,
                          backgroundColor: data.bg
                        }}
                      >
                        <Text
                          style={styles.badgeText}
                        >{`${data.types} Types`}</Text>
                      </Badge>
                    </Right>}
                </ListItem>}
            />
            <List>
              <ListItem onPress={ () => this._handleLogOut() }>
              <Left>
                    <Icon
                      active
                      name='log-out'
                      style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                    <Text style={styles.text}>
                      Logout
                    </Text>
                  </Left>
              </ListItem>
            </List>          
          </Content>
        </Container>
      );
    }else{
      return (
        <Container>
          <Content
            bounces={false}
            style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
          >
            <Image source={drawerCover} style={styles.drawerCover} />
          {/* <Text> Non Auth {this.state.idUserHushus} </Text> */}
            <List
              dataArray={datas_non_auth}
              renderRow={data =>
                <ListItem
                  button
                  noBorder
                  onPress={() => this.props.navigation.navigate(data.route)}
                >
                  <Left>
                    <Icon
                      active
                      name={data.icon}
                      style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                    <Text style={styles.text}>
                      {data.name}
                    </Text>
                  </Left>
                  {data.types &&
                    <Right style={{ flex: 1 }}>
                      <Badge
                        style={{
                          borderRadius: 3,
                          height: 25,
                          width: 72,
                          backgroundColor: data.bg
                        }}
                      >
                        <Text
                          style={styles.badgeText}
                        >{`${data.types} Types`}</Text>
                      </Badge>
                    </Right>}
                </ListItem>}
            />
          </Content>
        </Container>
      );
    }
    
  }
}

export default SideBar;
