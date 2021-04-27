import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  viewCard: {
    backgroundColor: "#009AED",
    margin: 8,
    borderColor: "blue",
    borderRadius: 8,
    height:370
  },
  textone: {
    bottom:100,
    left:150,
    fontSize: 20,
    color: "white",
    fontFamily: "serif",
  },
  image: {
    width: "50%",
    height: 100,
    bottom: 15,
    left: -14,
    borderRadius: 8,
  },
  rating: {
  bottom:150,
position:"absolute"

  },
  textwo: {
    bottom: 95,
    left:150,
    fontSize: 13,
    color: "#444",
    fontFamily: "serif",
  },
  textree: {
    bottom: 60,
    fontSize: 15,
    color: "white",
    fontFamily: "serif",
  },
  texfor: {
    bottom: 95,
    left:150,
    fontSize: 13,
    color: "#444",
    fontFamily: "serif",
  },


});

export default styles;
