import { StyleSheet } from "react-native";
import colors from "../../util/colors";
import fonts from "../../util/fonts";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03045E",
  },
  containerRegister: {
    flex: 8,
    backgroundColor: "#03045E",
  },
  containerClear: {},
  containerTextInput: {
    width: "100%",
    marginBottom: 30,
  },
  inpuText: {
    width: "98%",
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
    marginTop: 40,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#00b4d8",
    borderRadius: 4,
    width: "98%",
    margin: 5,
    fontFamily: "serif",
  },
  buttonText: {
    fontSize: 28,
    color: "#fff",
  },
});

export default styles;
