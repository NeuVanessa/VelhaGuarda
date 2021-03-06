import React, { useState } from "react";
import { View, ScrollView, TextInput,Platform} from "react-native";
import {useNavigation } from '@react-navigation/native';
import Header from "../../components/Header";
import Button from "../../components/Button";

import styles from "./styles";

export default function RecPasswordEmail() {

  const navigation = useNavigation();
  function ir_Password() {
    navigation.navigate("RecPassword");
  }
  

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
              placeholderTextColor="#999"
              onChangeText={(value) => setEmail(value)}
            />

            <Button onPress={ir_Password} title="Enviar" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
