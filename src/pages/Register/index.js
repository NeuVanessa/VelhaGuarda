import React, { useState } from "react";


import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

import Header from "../../components/Header";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home() {
 
  const [nameInstituicao, setNameInstituicao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nomeresponsavel, setnomeResponsavel] = useState("");


  return (
    <View style={styles.container}>
      <Header title="Cadastro" />

      <View style={styles.containerRegister}>
        <ScrollView>
          <View style={styles.containerTextInput}>
            <TextInput
              style={styles.inpuText}
              placeholder="Nome da Instituição"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setNameInstituicao(value)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Endereço"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setEndereco(value)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="CEP"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setCep(value)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Número"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setNumero(value)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Cidade"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setCidade(value)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Estado"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setEstado(value)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Email"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Usuário"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setUsuario(value)}
            />

            <TextInput
              style={styles.inpuText}
              placeholder="Senha"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setSenha(value)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Telefone"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setTelefone(value)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Nome Responsável"
              placeholderTextColor="#03045E"
              onChangeText={(value) => setnomeResponsavel(value)}
            />

            <TouchableOpacity style={styles.containerButton}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
