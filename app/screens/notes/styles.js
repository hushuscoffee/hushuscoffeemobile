const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  imageContainer: {
    // flex: 1,
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
    alignItems: "center"
  },
  colImage: {
    alignItems: "center",
    marginTop: 10
  },
  menuText: {
    marginTop: 10,
    fontSize: 14,
    width: 110
  },
  contentSpace: {
    marginLeft: 0
  },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 7,
    backgroundColor: "#ffcd22"
  },
  new:{
    
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: "#330066"
  },

  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center"
  },

  image: {
    height: 200,
    marginTop: 30
  },
  TextStyle: {
    textAlign: "center"
  },
  singleItemView: {
    backgroundColor: "#FF6F00",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 16,
    paddingLeft: 16,
    margin: 5,
    borderRadius: 8
  },

  singleItemText: {
    color: "#fff",
    fontSize: 23,
    paddingRight: 18
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  },

  deleteButton: {
    width: 40,
    height: 40,
    borderRadius: 18,
    padding: 7,
    justifyContent: "center",
    alignItems: "center"
  },

  removeIcon: {
    width: "100%",
    fontSize: 40
  },
  contain: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-around"
  },
};
