import React from "react";
import { Root } from "native-base";
import { createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";

import Home from "./screens/home";
import AuthLogin from "./screens/auth/login";
import AuthRegister from "./screens/auth/register";
import DetailArticle from "./screens/article/detail";
import DetailPeople from "./screens/people/detail";
import DetailBrewing from "./screens/brewing-methods/detail/";

import TestAPI from "./screens/api/";
import TestDetailArticle from "./screens/api/";
import AllEvents from "./screens/article/all-events/";
import AllNews from "./screens/article/all-news/";
import AllTips from "./screens/article/all-tips/";
import AllRecipes from "./screens/article/all-recipe/";
import BrewingMethods from "./screens/brewing-methods/";
import Article from "./screens/article/";
import People from "./screens/people/";
import SideBar from "./screens/sidebar";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    AllRecipes: { screen: AllRecipes },
    BrewingMethods: { screen: BrewingMethods },
    People: { screen: People },
    AuthLogin: { screen: AuthLogin },
    AuthRegister: { screen: AuthRegister },
    Article: { screen: Article }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    DetailArticle: { screen: DetailArticle },
    DetailBrewing: { screen: DetailBrewing },
    DetailPeople: { screen: DetailPeople },
    AllEvents: { screen: AllEvents },
    AllNews: { screen: AllNews },
    AllTips: { screen: AllTips }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;

