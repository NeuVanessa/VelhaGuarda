import React from "react";

import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
export default function Button({ title }) {
  return (
    <TouchableOpacity style={styles.containerButton}>
      {title && <Text style={styles.buttonText}>{title}</Text>}
    </TouchableOpacity>
  );
}
