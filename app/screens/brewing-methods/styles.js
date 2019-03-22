import { black } from "ansi-colors";

const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    width:100, 
    height:100,
    borderRadius: 5
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100
  },
  text: {
    color: "#000",
    bottom: 6,
    marginTop: 5
  },
  menuText: {
    width: 600,
    marginTop: 10,
    fontSize: 14,
    width:110,
    color:black
  },
  title: {
    color: '#000'
  },
  header: {
    backgroundColor: "#ffcd22"
  },
  container : {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-around',
  },
  articleTitle: {
    marginTop: 10,
    fontSize: 10
  },
  contentSpace: {
    marginLeft: 15
  }
};
