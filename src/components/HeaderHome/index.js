import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";


import styles from "./styles";
export default function HeaderHome() {
  
  {
    /*Função Responsável por sair do aplicativo*/
  }
  function _backOut() {
    alert("clicou!");
  }

  {
    /* Criando os components e a estilização do HeaderHome */
  }
  return (
    <View style={styles.navBar}>
      <Text style={styles.adm}>Bem Vindo, Vanessa</Text>

      <View style={styles.navBarHeader}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../assets/logo.png")}
        />
      </View>

      <TouchableOpacity style={styles.navBarButton} onPress={_backOut}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../assets/ButtonOut.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
