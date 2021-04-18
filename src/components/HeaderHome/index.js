import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";
export default function Header({ title }) {
  const navigation = useNavigation();

  function _backOut() {
    alert("clicou!");
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
