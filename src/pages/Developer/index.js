import React, {useState} from "react";
import {
   View, 
   Text, 
   TouchableOpacity, 
   Modal,
   Image,
  } from "react-native";
import Style from "./Style"

export default function Developer() {
  const [dev, setDev] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const rozenaldo = {
    nome: 'Rozenaldo Filho',
    curso: 'Análise e Desenvolvimento de Sistemas',
    semestre: 3,
    linkedin: false,
    github: 'https://github.com/Joaorza3'
  }
  
  const aluno2 = {
    nome: 'Fulado de Tal 2',
    curso: 'Faculdade',
    semestre: 4,
    linkedin: false,
    github: 'https://github.com/Aluno2'
  }

  const aluno3 = {
    nome: 'Fulado de Tal 3',
    curso: 'Faculdade',
    semestre: 5,
    linkedin: false,
    github: 'https://github.com/Aluno2'
  }
  
  const aluno4 = {
    nome: 'Fulado de Tal 4',
    curso: 'Faculdade',
    semestre: 6,
    linkedin: false,
    github: 'https://github.com/Aluno2'
  }

  return (
    <View>
  
      {/* Topo da tela */}
      <View  style={Style.Header}>
        {/* Setting Icon */}
        <Text style={Style.VersionSoft}>Desenvolvedores</Text>
      </View>

     
      <View style={Style.Dados}>
         {/* Aluno1 */}
        <TouchableOpacity 
          style={Style.Botao}
          onPress={() => {
            setDev(rozenaldo) 
            setModalVisible(true)}}>
          <Text
            style={Style.BotaoTxt}>
            Rozenaldo</Text>
        </TouchableOpacity>

         {/* Aluno2 */}
         <TouchableOpacity 
          style={Style.Botao}
          onPress={() => {
            setDev(aluno2) 
            setModalVisible(true)}}>
          <Text
            style={Style.BotaoTxt}>
            Aluno2</Text>
        </TouchableOpacity>

         {/* Aluno3 */}
         <TouchableOpacity 
          style={Style.Botao}
          onPress={() => {
            setDev(aluno3) 
            setModalVisible(true)}}>
          <Text
            style={Style.BotaoTxt}>
            Aluno3</Text>
        </TouchableOpacity>

        {/* Aluno4 */}
        <TouchableOpacity 
          style={Style.Botao}
          onPress={() => {
            setDev(aluno4) 
            setModalVisible(true)}}>
          <Text
            style={Style.BotaoTxt}>
            Aluno4</Text>
        </TouchableOpacity>
        

      </View>

      {/* Dados Desenvolvedores */}
      <Modal
        visible={modalVisible}
        animationType='slide'>
        <Text style={Style.TextDev}>Nome: {dev.nome}</Text>
        <Text style={Style.TextDev}>Curso: {dev.curso}</Text>
        <Text style={Style.TextDev}>Semestre: {dev.semestre}</Text>

        <View style={Style.LinkedinLogo}>
        <Image source={require('../../assets/linkedin.png')}
          style={Style.Linkedin}/>
          <Text style={Style.TextDev}>Linkedin: {dev.linkedin ? dev.linkedin : false}</Text>
        </View>
        <View style={Style.GitHubLogo}>
        <Image source={require('../../assets/github.png')}
          style={Style.Linkedin}/>
          <Text style={Style.TextDev}>GitHub: {dev.github}</Text>
        <TouchableOpacity 
          style={Style.Botao}
          onPress={() => {
            setModalVisible(false)}}>
          <Text
            style={Style.BotaoTxt}>
            Fechar</Text>
        </TouchableOpacity>
          
        </View>
      </Modal>

      </View>
  );
}
