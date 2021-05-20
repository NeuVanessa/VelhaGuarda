import { StyleSheet } from "react-native";
import colors from "../../util/colors";
import fonts from "../../util/fonts";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009AED",
  },
  containerRegister: {
    flex: 8,
    backgroundColor: "white",
  },
  containerTextInput: {
    width: "100%",
    marginBottom: 30,
  },
  inpuText: {
    width: "97%",
    top: 25,
    backgroundColor: "#efefef",
    borderRadius: 4,
    height: 40,
    paddingLeft: 20,
    fontSize: 10,
    fontFamily: "serif",
    margin: 5,
  },
  containerButton: {
    marginTop: 35,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#009AED",
    borderRadius: 4,
    width: "100%",
    fontFamily: "serif",
  },
  buttonText: {
    fontSize: 28,
    color: "#fff",
    fontFamily:"serif"
  },
});

export default styles;
