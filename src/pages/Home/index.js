import React, { useState } from "react";
import { View, Text} from "react-native";
import styles from "./styles";

export default function RecPasswordEmail() {


  return (
    <View
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : ""}
      enabled
    >
      <Text>TEXT </Text>

    </View>
  );
}
