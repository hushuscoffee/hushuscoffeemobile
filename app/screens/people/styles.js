const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor: "#fff"
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
    color: "#000"
  },
  header: {
    backgroundColor: "#ffcd22"
  },
  mb: {
    marginBottom: 15
  },
  iconRow: {
    backgroundColor: "#ffcd22",
    borderRadius: 5,
    padding: 10
  },
  col: {
    alignItems: "center",
    padding: 10
  },
  colImage: {
    alignItems: "center",
    marginTop: 10
  },
  menuText: {
    marginTop: 10,
    fontSize: 14
  },
  contentSpace: {
    marginLeft: 0
  },
  imageDetail: {
    flex: 1,
    width: 150,
    height: 150,
    borderRadius: 5
  },
  mt: {
    marginTop: 10
  },
  line: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  }
};
