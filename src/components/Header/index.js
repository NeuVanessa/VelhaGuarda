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

  function _backLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={{}}>
        <Image
          style={styles.styleIcon}
          source={require("../../assets/ButtonBack.png")}
        />
        {/* <Icon
          style={styles.styleIcon}
          name="long-arrow-left"
          color="#03045E"
          size={25}
        /> */}
      </TouchableOpacity>
      {title && <Text style={styles.styleTextProps}> {title} </Text>}
    </View>
  );
}
