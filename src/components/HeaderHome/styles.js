import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    paddingTop: 30,
    height: 105,
    backgroundColor: "#1EAAF1",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  navBarButton: {
    color: "#FFFFFF",
    textAlign: "center",
    width: 64,
  },
  adm: {
    color: "#444",
    textAlign: "center",
    fontSize:13,
    position: "absolute",
    top:77,
    left:15
  },
  image: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  logo: {
   alignSelf:'center',
   width: 100,
   height: 100,
   bottom:18,
   left:30
  },
  navBarHeader: {
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
