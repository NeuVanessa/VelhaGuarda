import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    section: {
      top: 100
  
    },
    Background: {
      marginTop: 45,
      height: 350,
      resizeMode: "stretch",
      justifyContent: "center",
    },
    VersionSoft: {
      color: "#fff",
      fontSize: 30,
      marginRight: 8,
      marginTop: 35,
    },
    Dados: {
      justifyContent: "center",
      alignSelf: "center",
    },
    Botao: {
      backgroundColor: "#00abff",
      width: 160,
      height: 50,
      justifyContent: "center",
      borderColor: "#fff",
      borderWidth: 3,
      margin: 10,
      borderRadius: 4,
      textAlign: "center",
      borderBottomRightRadius: 15,
    },
    BotaoModal: {
      position: "absolute",
      backgroundColor: "#00abff",
      width: 160,
      height: 50,
      justifyContent: "center",
      borderColor: "#fff",
      borderWidth: 3,
      margin: 10,
      borderRadius: 4,
      textAlign: "center",
      borderBottomRightRadius: 15,
      top: 75,
      left:135
    },
    TextDev: {
      fontWeight: "300",
      color: "white",
      marginLeft: 4,
      fontSize: 18,
      padding: 3,
      fontFamily:'serif'
    },
    BotaoTxt: {
      color: "#fff",
      fontSize: 25,
      textAlign: "center",
      fontFamily:'serif'
    },
    LinkedinLogo: {
      flexDirection: "row",
      left:5,
      padding:5
  
    },
    Linkedin: {
      width: 30,
      height: 30,
    },
    GitHubLogo: {
      flexDirection: "row",
      left:5
    },
    popupOverlay: {
      backgroundColor: "#00000057",
      flex: 1,
      marginTop: 30,
    },
    popup: {
      backgroundColor: "#069",
      marginTop: 80,
      marginHorizontal: 20,
      borderRadius: 7,
      height: 350,
    },
    popupContent: {
      //alignItems: 'center',
      margin: 5,
      height: 250,
    },
    modalInfo: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default styles;
  