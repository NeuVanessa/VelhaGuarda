import React, { useState } from "react";
import { View, ScrollView, TextInput, Alert } from "react-native";
import styles from "./styles";

import Header from "../../components/Header";
import Button from "../../components/Button";
export default function RecPasswordEmail() {
  const [senha, setSenha] = useState();
  const [confirme, setConfirme] = useState();
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
              placeholder="Nova Senha"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setSenha(value)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Confirmar Senha"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setConfirme(value)}
            />
            <Button title="Enviar" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
