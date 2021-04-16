import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  viewCard: {
    flex: 1,
    width: "100%",
    height: 335,
    backgroundColor: "white",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 100,
    top: 5,
    left: 10,
    position: "absolute",
  },
  cardInfo: {
    width: "100%",
    height: 150,
    top: 100,
    left: 10,
    position: "absolute",
    backgroundColor: "#009AED",
    flexDirection: "row",
    alignContent: "space-between",
  },
  textInfo: {
    left: 5,
    position: "absolute",
    color: "white",
    fontSize: 12,
    top: 2,
    fontFamily: "serif",

  },
  textTitle: {

    left: 3,
    position: "absolute",
    color: "white",
    fontSize: 14,
    top: 20,
    fontFamily: "serif",
    left: 5,

  },
  safeContainer: {
    width: "100%",
    height: 100,
    top: 40,

  },
  textSafe: {
    color: "#000", fontSize: 15, padding: 10 

  }
});

export default styles;
