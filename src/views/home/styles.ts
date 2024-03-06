import { Dimensions, StyleSheet } from "react-native";

const Styles = StyleSheet.create({

  footer: {
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "white"
  },
  scroll: {
    flex: 1
    
  },
  img: {
    flex: 1, 
    resizeMode: "contain",
    width: "100%",
  },
  header: {
    height: 100,
    alignItems:"center",
    backgroundColor:"#00A547"
  },
  content: {
    display: "flex",
    flex: 1,
    alignContent: "center",
    backgroundColor: "white"

  },



})

export default Styles;