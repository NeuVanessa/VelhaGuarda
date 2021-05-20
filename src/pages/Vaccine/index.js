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

export default function Vaccine() {
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
  const [cartao, setCartao] = useState("");
  const [nascimento, setNacimento] = useState("");
  const [doenca1, setDoenca1] = useState("");
  const [doenca2, setDoenca2] = useState("");
  const [tipoSanguinio, setTipoSanguinio] = useState("");


  {
    /* Listando todos os users */
  }
  useEffect(() => {
    listarDados();
  }, []);

  {
    /* verifica se já tem usuário cadastrado com o email informado */
  }
  async function listarDados() {
    const res = await axios.get(api + "listar.php");
    setList(res.data);
    console.log(res.data);
  }

  {
    /* realiza o cadastro do usuário */
  }
  async function create() {
    const obj = {
      nomeIdoso,
      cartao,
      nascimento,
      doenca1,
      doenca2,
      tipoSanguinio,
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
      alert("Nome do Idoso é obrigatório");
      return;
    }
    if (!cartao) {
      alert("Informe o cartão sus para continuar!");
      return;
    }
    if (!doenca1) {
      alert("Informe se ele tem algum tipo de doenca!");
      return;
    }

    if (!doenca2) {
      alert("Informe se ele tem algum tipo de doenca!");
      return;
    }
    if (nomeIdoso === nomeIdoso) {
      alert("Só é possivel solicitar uma unica vez a vacina");
      return;
    } else {
      {
        /*Faz a inclusão do usuário no banco de dados*/
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
      <Header title="Vacinação Idoso" />

      <View style={styles.containerRegister}>
        <ScrollView>
          <View style={styles.containerTextInput}>
            <TextInput
              style={styles.inpuText}
              placeholder="Nome do Idoso"
              placeholderTextColor="#999"
              value={nomeIdoso}
              onChangeText={(nomeIdoso) =>
                setNomeIdoso(nomeIdoso)
              }
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Cartão"
              placeholderTextColor="#999"
              value={cartao}
              onChangeText={(cartao) => setCartao(cartao)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Data de Nascimento"
              placeholderTextColor="#999"
              value={nascimento}
              onChangeText={(nascimento) => setNacimento(nascimento)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Doença 1"
              placeholderTextColor="#999"
              value={doenca1}
              onChangeText={(doenca1) => setDoenca1(doenca1)}
            />
            <TextInput
              style={styles.inpuText}
              placeholder="Doença 2 "
              placeholderTextColor="#999"
              value={doenca2}
              onChangeText={(doenca2) => setDoenca2(doenca2)}
            />

            <TextInput
              style={styles.inpuText}
              placeholder="Tipo Sanguinio"
              placeholderTextColor="#999"
              value={tipoSanguinio}
              onChangeText={(tipoSanguinio) => setTipoSanguinio(tipoSanguinio)}
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
