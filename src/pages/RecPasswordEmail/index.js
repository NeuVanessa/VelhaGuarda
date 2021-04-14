import React, { useState } from "react";
import { View, ScrollView, TextInput } from "react-native";

import Header from "../../components/Header";
import Button from "../../components/Button";

import styles from "./styles";

export default function RecPasswordEmail() {
  const [email, setEmail] = useState();

  return (
    <View
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : ""}
      enabled
    >
      <Header title="Recuperar Senha" />

      <View style={styles.containerRecPassword}>
        <ScrollView>
          <View style={styles.containerTextInput}>
            <TextInput
              style={styles.inpuText}
              placeholder="Email Cadastrado Na Plataforma"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setEmail(value)}
            />

            <Button title="Enviar" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
