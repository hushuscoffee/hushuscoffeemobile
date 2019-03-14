const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-around'
  },
  imageContainer: {
    flex: 1,
    width: 100,
    height: 100,
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
  title: {
    color: "#000",
  },
  header: {
    backgroundColor: "#ffcd22"
  },
  mb: {
    marginBottom: 15
  },
  iconRow:{
    backgroundColor: "#ffcd22", 
    borderRadius: 5, 
    padding: 10
  },
  col: {
    alignItems: "center"
  },
  colImage: {
    alignItems: "center",
    marginTop: 10,
  },
  menuText: {
    marginTop: 10,
    fontSize: 14,
    width:110
  },
  contentSpace: {
    marginLeft: 0
  }
};
