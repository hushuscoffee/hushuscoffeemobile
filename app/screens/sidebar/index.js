import React, { Component } from "react";
import { Image, AsyncStorage, Alert, TouchableOpacity, FlatList } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  View
} from "native-base";
import styles from "./style";
import { NavigationActions, StackActions } from "react-navigation";

const drawerCover = require("../../../assets/drawer-cover.png");
const datas_non_auth = [
  {
    name: "Home",
    route: "Home",
    ios: "ios-home",
    android: "md-home"
  },
  {
    name: "Article",
    route: "Article",
    ios: "ios-paper",
    android: "md-paper"
  },
  {
    name: "Brewing Method",
    route: "BrewingMethods",
    ios: "ios-book",
    android: "md-book"
  },
  {
    name: "Recipe",
    route: "Recipes",
    ios: "ios-clipboard",
    android: "md-clipboard"
  },
  {
    name: "People",
    route: "People",
    ios: "ios-people",
    android: "md-people"
  },
  {
    name: "Login",
    route: "AuthLogin",
    ios: "ios-log-in",
    android: "md-log-in"
  },
  {
    name: "Register",
    route: "AuthRegister",
    ios: "ios-person-add",
    android: "md-person-add"
  }
];

const datas_auth = [
  {
    name: "Home",
    route: "Home",
    ios: "ios-home",
    android: "md-home"
  },
  {
    name: "Article",
    route: "Article",
    ios: "ios-paper",
    android: "md-paper"
  },
  {
    name: "Brewing Method",
    route: "BrewingMethods",
    ios: "ios-book",
    android: "md-book"
  },
  {
    name: "Recipe",
    route: "Recipes",
    ios: "ios-clipboard",
    android: "md-clipboard"
  },
  {
    name: "People",
    route: "People",
    ios: "ios-people",
    android: "md-people"
  },
  {
    name: "My Notes",
    route: "Notes",
    ios: "ios-clipboard",
    android: "md-clipboard"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      idUserHushus: null,
      fullname: null
    };
  }

  async getIdUserHushus() {
    await AsyncStorage.getItem("idUserHushus").then(value =>
      this.setState({ idUserHushus: value })
    );
    console.log(this.state.idUserHushus);
    console.log("coba");
    if (this.state.idUserHushus != null) {
      const profile = await fetch(
        "http://hushuscoffee.com/api/people/" + this.state.idUserHushus
      );
      const json = await profile.json();
      this.setState({
        fullname: json.profile.fullname
      });
    }
  }

  _handleLogOut = () => {
    AsyncStorage.removeItem("idUserHushus");
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: "Home" }),
        NavigationActions.navigate({ routeName: "Drawer" })
      ]
    });
    this.props.navigation.dispatch(resetAction);
    Alert.alert("You have been logged out.");
  };

  componentDidMount() {
    this.getIdUserHushus();
  }

  render() {
    if (this.state.idUserHushus != null) {
      return (
        <Container>
          <Content
            bounces={false}
            style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
          >
            <Image source={drawerCover} style={styles.drawerCover} />
            <Left>
              <Text style={{ color: "#000", fontSize: 20 }}>
                {`${this.state.fullname}`}
              </Text>
            </Left>
            <List
              dataArray={datas_auth}
              renderRow={data => (
                <ListItem
                  button
                  noBorder
                  onPress={() => this.props.navigation.navigate(data.route)}
                >
                  <Left>
                    <Icon
                      active
                      ios={data.ios}
                      android={data.android}
                      style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                    <Text style={styles.text}>{data.name}</Text>
                  </Left>
                  {data.types && (
                    <Right style={{ flex: 1 }}>
                      <Badge
                        style={{
                          borderRadius: 3,
                          height: 25,
                          width: 72,
                          backgroundColor: data.bg
                        }}
                      >
                        <Text style={styles.badgeText}>{`${
                          data.types
                        } Types`}</Text>
                      </Badge>
                    </Right>
                  )}
                </ListItem>
              )}
            />
            <List>
              <ListItem onPress={() => this._handleLogOut()}>
                <Left>
                  <Icon
                    active
                    ios="ios-log-out"
                    android="md-log-out"
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>Logout</Text>
                </Left>
              </ListItem>
            </List>
          </Content>
        </Container>
      );
    } else {
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
              renderRow={data => (
                <ListItem
                  button
                  noBorder
                  onPress={() => this.props.navigation.navigate(data.route)}
                >
                  <Left>
                    <Icon
                      active
                      ios={data.ios}
                      android={data.android}
                      style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                    <Text style={styles.text}>{data.name}</Text>
                  </Left>
                  {data.types && (
                    <Right style={{ flex: 1 }}>
                      <Badge
                        style={{
                          borderRadius: 3,
                          height: 25,
                          width: 72,
                          backgroundColor: data.bg
                        }}
                      >
                        <Text style={styles.badgeText}>{`${
                          data.types
                        } Types`}</Text>
                      </Badge>
                    </Right>
                  )}
                </ListItem>
              )}
            />
          </Content>
        </Container>
      );
    }
  }
}

export default SideBar;
