import React, { useState, useEffect } from "react";
{
  /* Importação dos components do react native */
}
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

{
  /* Responsável pela estilização */
}
import styles from "./styles";

import Header from "../../components/Header";

{
  /* Cliente HTTP */
}
import axios from "axios";

export default function Register() {
  {
    /* API =>> { 192.168.100.10 ip do computador} {:80 porta do apache xamp } {/apvelhaguarda projeto dentro do htdocs/xamp}    */
  }
  const api = "http://192.168.100.10:80/apvelhaguarda/";

  {
    /* Para fazer a  listagem de users*/
  }
  const [list, setList] = useState([]);
  {
    /* Variáveis necessárias */
  }
  const [nomeIdoso, setNomeIdoso] = useState("");
  const [nascimentoIdoso, setNascimentoIdoso] = useState("");
  const [tipoSanguinio, setTipoSanguinio] = useState("");
  const [entradaNaInstituicao, setEntradaNaInstituicao] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cpf, setCpf] = useState("");
  const [cartaosus, setCartaoSus] = useState("");

  // {
  //   /* Listando todos os idosos */
  // }
  // useEffect(() => {
  //   listarDados();
  // }, []);

  // {
  //   /* verifica se já tem usuário cadastrado com o email informado */
  // }
  // async function listarDados() {
  //   const res = await axios.get(api + "listarIdoso.php");
  //   setList(res.data);
  //   console.log(res.data);
  // }

  {
    /* realiza o cadastro do usuário */
  }
  async function create() {
    const obj = {
      nomeIdoso,
      nascimentoIdoso,
      tipoSanguinio,
      entradaNaInstituicao,
      estado,
      cpf,
      cartaosus,
    };
    const res = await axios.post(api + "add.php", obj);
    {
      /* Esses consoles é somente para verificação ver se ta tudo ok!*/
    }
    // console.log('DADOS ===> ',res);
    // console.log('DADOS ===> ',obj);

    {
      /* Tratamento do cadastro de usuário */
    }
    if (!nomeIdoso) {
      alert("Informe o Nome do Idoso!");
      return;
    }
    if (!cpf) {
      alert("Informe o CPF!");
      return;
    }
    if (!nascimentoIdoso) {
      alert("Informe a Data de Nascimento!");
      return;
    } else {
      {
        /*Faz a inclusão do idoso no banco de dados*/
      }
      listarDados();
      alert("registrado com sucesso!");

      {
        /* Esses consoles usados é para fazer a verificação do funcionamento das coisas*/
      }
      // console.log(res.data);
    }
  }

  return (
    <View style={styles.container}>
      {/* Header com a props title */}
      <Header title="Cadastro do Idoso" />

      <View style={styles.containerRegister}>
        <ScrollView>
          <View style={styles.containerTextInput}>
            <TextInput
              style={styles.inpuText}
              placeholder="Nome Completo"
              placeholderTextColor="#999"
              value={nomeIdoso}
              onChangeText={(nomeInstituicao) => setNomeIdoso(nomeInstituicao)}
            />

            <TextInput
              style={styles.inpuText}
              placeholder="Nascimento"
              placeholderTextColor="#999"
              value={nascimentoIdoso}
              onChangeText={(endereco) => setNascimentoIdoso(endereco)}
            />

            <TextInput
              style={styles.inpuText}
              placeholder="Tipo Sanguinio"
              placeholderTextColor="#999"
              value={tipoSanguinio}
              onChangeText={(cep) => setTipoSanguinio(cep)}
            />

            <TextInput
              style={styles.inpuText}
              placeholder="Entrada na Instituição"
              placeholderTextColor="#999"
              value={entradaNaInstituicao}
              onChangeText={(numero) => setEntradaNaInstituicao(numero)}
            />

            <TextInput
              style={styles.inpuText}
              placeholder="Cidade"
              placeholderTextColor="#999"
              value={cidade}
              onChangeText={(cidade) => setCidade(cidade)}
            />

            <TextInput
              style={styles.inpuText}
              placeholder="Estado"
              placeholderTextColor="#999"
              value={estado}
              onChangeText={(estado) => setEstado(estado)}
            />

            <TextInput
              style={styles.inpuText}
              placeholder="CPF"
              placeholderTextColor="#999"
              value={cpf}
              onChangeText={(email) => setCpf(email)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Cartão SUS"
              placeholderTextColor="#999"
              value={cartaosus}
              onChangeText={(usuario) => setCartaoSus(usuario)}
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
