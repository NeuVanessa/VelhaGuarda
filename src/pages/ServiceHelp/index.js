import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";

import styles from "./styles";

import Header from "../../components/Header";
import { Card } from "react-native-elements";
import Button from "../../components/Button";
import { Rating, AirbnbRating } from "react-native-elements";

export default function ServiceHelp() {
  {
    /* Criação das Atendimento */
  }
  const [atendimento, setAtendimento] = useState([
    {
      id: 1,
      name: "Dra. Mariana Matos",
      title: "Médica Psiquiatra",
      crm: "35485",
      description:
        "Médica formada pela Escola Baiana de Medicina e Saúde Pública Residência médica em psiquiatria pelo Hospital Universitário Edgard Santos, UFBA.",
      uri:
        "https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/f66951/f66951324d70f23016847cb51bfca9c3_large.jpg",
    },
    {
      id: 2,
      name: "Dr. Rodrigo Dantas",
      title: "Médico Psiquiatra",
      crm: "27402",
      description:
        "A escuta é um ponto diferencial na prática clinica. Quando feita de forma acolhedora, cuidadosa e precisa permite intervenções terapêuticas eficazes (sejam elas medicamentosas ou pela via da palavra) e inaugura-se uma possibilidade de mudança de posição ao indivíduo.",
      uri:
        "https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/abc610/abc610532ea12c7b7abea3e516c26602_large.jpg",
    },
    {
      id: 3,
      name: "Joyce Santana",
      title: "Nutricionista",
      crm: "21553",
      description:
        "Sou especialista em fisiologia do exercício e nutrição clínica funcional. Ajudo esportistas e atletas a melhorarem a performance com qualidade de vida.",
      uri:
        "https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/eb6979/eb6979a121c659f208eff3d23a2fac54_large.jpg",
    },
  ]);

  return (
    <View style={styles.container}>
      {/* Header,Com Props title*/}
      <Header title="Atendimento" />
      {/*Exibe o Array de noticias*/}
      <FlatList
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: -4,
        }}
        data={atendimento}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              height: 380,
            }}
          >
            {/*Card estilizado*/}
            <Card containerStyle={styles.viewCard}>
              {/*Chamando a imagem uri*/}
              <Image style={styles.image} source={{ uri: item.uri }} />
              <SafeAreaView>
                <Text style={styles.textone}>{item.title}</Text>
                <Text style={styles.textwo}>{item.name}</Text>
                <Text style={styles.texfor}>CRM: {item.crm}</Text>
                <Text style={styles.textree}>{item.description}</Text>

                <SafeAreaView style={{ top: -70 }}>
                  <AirbnbRating
                    count={5}
                    reviews={[
                      "Atendimento Razoável.",
                      "Atendimento Bom.",
                      "Atendimento Excelente.",
                      "Atendimento Master.",
                      "Atendimento Super.",
                    ]}
                    defaultRating={15}
                    size={20}
                  />
                </SafeAreaView>

                <View style={{ top: -110 }}>
                  <Button title="Agendar Consulta" />
                </View>
              </SafeAreaView>
            </Card>
          </View>
        )}
      />
    </View>
  );
}
