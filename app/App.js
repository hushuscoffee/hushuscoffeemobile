import React from "react";
import { Root } from "native-base";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

import Home from "./screens/home";
import AuthLogin from "./screens/auth/login";
import AuthRegister from "./screens/auth/register";
import DetailArticle from "./screens/article/detail";
import DetailPeople from "./screens/people/detail";
import DetailBrewing from "./screens/brewing-methods/detail/";
import DetailRecipe from "./screens/recipe/detail";

import AllEvents from "./screens/article/all-events/";
import AllNews from "./screens/article/all-news/";
import AllTips from "./screens/article/all-tips/";
import Recipes from "./screens/recipe/";
import BrewingMethods from "./screens/brewing-methods/";
import Article from "./screens/article/";
import People from "./screens/people/";
import SideBar from "./screens/sidebar";
import Notes from "./screens/notes";
import MyArticle from "./screens/notes/my-article";
import MyBrewing from "./screens/notes/my-brewing";
import MyRecipe from "./screens/notes/my-recipe";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Recipes: { screen: Recipes },
    BrewingMethods: { screen: BrewingMethods },
    People: { screen: People },
    AuthLogin: { screen: AuthLogin },
    AuthRegister: { screen: AuthRegister },
    Article: { screen: Article }.screen,
    Notes: { screen: Notes }
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
    Home: { screen: Home },
    DetailArticle: { screen: DetailArticle },
    DetailRecipe: { screen: DetailRecipe },
    DetailBrewing: { screen: DetailBrewing },
    DetailPeople: { screen: DetailPeople },
    AllEvents: { screen: AllEvents },
    AllNews: { screen: AllNews },
    AllTips: { screen: AllTips },
    AuthLogin: { screen: AuthLogin },
    AuthRegister: { screen: AuthRegister },
    MyArticle: { screen: MyArticle },
    MyBrewing: { screen: MyBrewing },
    MyRecipe: { screen: MyRecipe }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () => (
  <Root>
    <AppContainer />
  </Root>
);
