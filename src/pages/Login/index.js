import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import bgImage from "../../assets/Bg.jpeg";
import logo from "../../assets/logo.png";
import login from "../../assets/user_50px.png";
import key from "../../assets/key_40px.png";
import axios from "axios";

export default function Login() {
  // const navigation = useNavigation();
  const { navigate } = useNavigation();

  const api = "http://192.168.100.10:80/apvelhaguarda/";
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function ir_Register() {
    navigate("Register");
  }

  function ir_RecEmail() {
    navigate("RecEmail");
  }

  async function ir_login() {
    const obj = { usuario, senha };
    // console.log("DADOS ---->", obj);
    const res = await axios.post(api + "login.php", obj);
    // console.log("RES ---->", res);
    if (!usuario) {
      alert("Informe o nome de usuário♥!");
      return;
    }
    if (!senha) {
      alert("Informe a senha♥! ");
      return;
    }
    if (res.data.success === "Dados Incorretos!") {
      alert("Dados Está incorreto");
    } else {
      alert("Bem Vindo de Volta " + usuario) ;
      navigate("Home");
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={bgImage}>
        <Image style={{ width: 130, height: 130 }} source={logo} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Usuário"
            value={usuario}
            onChangeText={(usuario) => setUsuario(usuario)}
          />
          <Image style={styles.inputIcon} source={login} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Senha"
            value={senha}
            onChangeText={(senha) => setSenha(senha)}
          />
          <Image style={styles.inputIcon} source={key} />
        </View>

        <TouchableOpacity
          style={styles.btnForgotPassword}
          onPress={ir_RecEmail}
        >
          <Text style={styles.btnText}>Esqueceu a senha ?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={ir_login}
        >
          <Text style={styles.loginText}> Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={ir_Register}>
          <Text style={styles.btnText}>Ainda nao tem conta ? Registre-se</Text>
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const resizeMode = "center";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 1,
    top: 1,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    fontFamily: "serif",
    flex: 1,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    width: 300,
    borderRadius: 30,
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 10,
    width: 300,
    fontFamily: "serif",
  },
  loginButton: {
    backgroundColor: "#009AED",
  },
  loginText: {
    color: "white",
    fontFamily: "serif",
  },
  bgImage: {
    resizeMode,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#03045E",
    fontFamily: "serif",
  },
});
