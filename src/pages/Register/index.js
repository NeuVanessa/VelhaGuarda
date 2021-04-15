import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import styles from "./styles";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import axios from "axios";

export default function Register() {
  
   
  const api = "http://192.168.100.10:80/apvelhaguarda/";
  
  const [list, setList] = useState([]);

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
  const [nameInstituicao, setNameInstituicao] = useState("");

  // let verificar = () => {
  //   console.log(nameInstituicao, email, endereco, numero);

  //   if (!nameInstituicao) {
  //     alert("Nome da Instituição é Obrigatória!");
  //     return;
  //   }
  //   if (!email) {
  //     alert("Email é Obrigatório!");
  //     return;
  //   }
  //   if (!endereco) {
  //     alert("Endereço Obrigatório!");
  //     return;
  //   }
  //   if (!numero) {
  //     alert("Nº da Casa é Obrigatório!");
  //     return;
  //   }
  // };

  useEffect(() => {
    listarDados();
  }, []);

  //verifica se já tem usuário cadastrado com o email informado
  async function listarDados() {
    const res = await axios.get(api + "listar.php");
    setList(res.data);
    console.log(res.data);
  }

  //realiza o cadastro do usuário
  async function create() {
    const obj = {
      nameInstituicao,
      endereco,
      cep,
      numero,
      cidade,
      estado,
      email,
      usuario,
      senha,
      telefone,
      nomeresponsavel,
    };
    const res = await axios.post(api + "add.php", obj);
    alert("registrado com sucesso cara");
    listarDados();
    console.log(res.data);
  }

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
              value={nameInstituicao}
              onChangeText={(nomeInstituicao) =>
                setNameInstituicao(nomeInstituicao)
              }
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Endereço"
              placeholderTextColor="#03045E"
              value={endereco}
              onChangeText={(endereco) => setEndereco(endereco)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="CEP"
              placeholderTextColor="#03045E"
              value={cep}
              onChangeText={(cep) => setCep(cep)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Número"
              placeholderTextColor="#03045E"
              value={numero}
              onChangeText={(numero) => setNumero(numero)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Cidade"
              placeholderTextColor="#03045E"
              value={cidade}
              onChangeText={(cidade) => setCidade(cidade)}
            />

            <TextInput
              style={styles.inpuText}
              placeholder="Estado"
              placeholderTextColor="#03045E"
              value={estado}
              onChangeText={(estado) => setEstado(estado)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Email"
              placeholderTextColor="#03045E"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Usuário"
              placeholderTextColor="#03045E"
              value={usuario}
              onChangeText={(usuario) => setUsuario(usuario)}
            />

            <TextInput
              style={styles.inpuText}
              placeholder="Senha"
              placeholderTextColor="#03045E"
              value={senha}
              onChangeText={(senha) => setSenha(senha)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Telefone"
              placeholderTextColor="#03045E"
              value={telefone}
              onChangeText={(telefone) => setTelefone(telefone)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Nome Responsável"
              placeholderTextColor="#03045E"
              value={nomeresponsavel}
              onChangeText={(nomeresponsavel) =>
                setnomeResponsavel(nomeresponsavel)
              }
            />
            <TouchableOpacity onPress={create} style={styles.containerButton}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
