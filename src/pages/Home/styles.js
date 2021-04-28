import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ContainerButton: {
      flex: 1,
      backgroundColor: "transparent",
      top:15
    },
    StyleCol: {
      backgroundColor: "transparent",
      flexDirection: "column",
      flex: 1,
    },
    TextButton: {
      top:22,
      color: "#444",
      fontSize: 8,
      flexDirection: "row",
      textAlign: "center",
      fontFamily: "serif",
    },
    BotaoDica: {
      backgroundColor: "#009AED",
      borderRadius: 100,
      width: 70,
      height: 70,
      alignSelf: "center",
    },
    ImgDica: {
      width: 50,
      height: 50,
      alignSelf:'center',
      top:10
    },
  });

  export default styles;