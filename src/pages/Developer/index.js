import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Linking,
} from "react-native";
import styles from "./style";

export default function Developer() {
  const [dev, setDev] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const linkedin = "Não é a linguagem de prog que define o programador,mas sua lógica.";

  const URL = "https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS.jpg";
  const URLV =
    "https://media-exp1.licdn.com/dms/image/C4D03AQHaa78sg70Q9w/profile-displayphoto-shrink_800_800/0/1616604575650?e=1626307200&v=beta&t=bqN1DA4umv1ZiVqP3SEb26Q3vNWEu43Wc0fnkZTicV4";
  const URLM =
    "https://media-exp1.licdn.com/dms/image/C5603AQFGoIYw91Kyhw/profile-displayphoto-shrink_800_800/0/1612526800820?e=1626307200&v=beta&t=6_LIo6TjRLHRHQLFI4NeV28Xvy5MuREArjIXGXInyn8";
  

  function isRezenaldo() {
    Linking.openURL("https://github.com/Joaorza3");
  }
  function isVanessa() {
    Linking.openURL("https://github.com/NeuVanessa");
  }
  function isMichel() {
    Linking.openURL("https://github.com/michelbass23");
  }

  const rozenaldo = {
    nome: "Rozenaldo Filho",
    curso: "Análise e Desenvolvimento de Sistemas",
    semestre: 3,
    linkedin: linkedin,
    github: isRezenaldo,
    uri: URL,
  };

  const vanessa = {
    nome: "Vanessa Lopes",
    curso: "Análise e Desenvolvimento de Sistemas",
    semestre: 4,
    linkedin: false,
    github: isVanessa,
    uri: URLV,
  };

  const michel = {
    nome: "Michel Ribeiro",
    curso: "Análise e Desenvolvimento de Sistemas",
    semestre: 5,
    linkedin: false,
    github: isMichel,
    uri: URLM,
  };

  const giovana = {
    nome: "Giovana Almeida",
    curso: "Análise e Desenvolvimento de Sistemas",
    semestre: 5,
    linkedin: false,
    github: false,
    uri:  URL,
  };


  return (
    <View>
      {/* Topo da tela */}
      <View style={styles.Header}>
        {/* Setting Icon */}
        <Text style={styles.VersionSoft}>Desenvolvedores</Text>
      </View>

      <View style={styles.Dados}>
        {/* Aluno1 */}
        <TouchableOpacity
          style={styles.Botao}
          onPress={() => {
            setDev(rozenaldo);
            setModalVisible(true);
          }}
        >
          <Text style={styles.BotaoTxt}>Rozenaldo</Text>
        </TouchableOpacity>

        {/* Aluno2 */}
        <TouchableOpacity
          style={styles.Botao}
          onPress={() => {
            setDev(vanessa);
            setModalVisible(true);
          }}
        >
          <Text style={styles.BotaoTxt}>Vanessa</Text>
        </TouchableOpacity>

        {/* Aluno3 */}
        <TouchableOpacity
          style={styles.Botao}
          onPress={() => {
            setDev(michel);
            setModalVisible(true);
          }}
        >
          <Text style={styles.BotaoTxt}>Michel</Text>
        </TouchableOpacity>


            {/* Aluno4 */}
            <TouchableOpacity
          style={styles.Botao}
          onPress={() => {
            setDev(giovana);
            setModalVisible(true);
          }}
        >
          <Text style={styles.BotaoTxt}>Giovana</Text>
        </TouchableOpacity>
      </View>

      {/* Dados Desenvolvedores */}
      <Modal visible={modalVisible} animationType="fade">
        <View style={styles.popup}>
          <Text style={styles.TextDev}>Nome: {dev.nome}</Text>
          <Text style={styles.TextDev}>Curso: {dev.curso}</Text>
          <Text style={styles.TextDev}>Semestre: {dev.semestre}</Text>
          <View style={styles.LinkedinLogo}>
            <Image
              source={require("../../assets/motivacao.png")}
              style={styles.Linkedin}
            />
            <Text style={styles.TextDev}>
              Frase: {"\n"}{dev.linkedin ? dev.linkedin : false}
            </Text>
          </View>
          <View style={styles.GitHubLogo}>
            <Image
              source={require("../../assets/github.png")}
              style={styles.Linkedin}
            />
            <TouchableOpacity>
              <Text style={{ top: 5, color: "#fff" }} onPress={dev.github}>
                {" "}
                Conhecer Git
              </Text>
            </TouchableOpacity>
            <Image
              style={{
                width: 100,
                height: 92,
                top: 40,
                left: -100,
                backgroundColor: "blue",
                borderRadius: 4,
              }}
              source={{
                uri: dev.uri,
              }}
            />

            <TouchableOpacity
              style={styles.BotaoModal}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.BotaoTxt}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
