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

import Button from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Noticias() {
  {
    /* Criação das Noticias */
  }
  const [noticias, setNotcias] = useState([
    {
      id: 1,
      author: "Vanessa",
      category: "noticias",
      title: "Fiocruz: situação da covid no Brasil",
      description:
        "Pesquisadores alertam para o alto índice de novas infecções e óbitos em todo o país, algo que deve persistir até o fim de abril.",
      date: "14/04/2021",
      uri:
        "https://img.r7.com/images/ambulancia-covid-14042021164501544?dimensions=771x420&resize=771x420&amp;crop=1500x817+0+153resize=771x420&amp;crop=1500x817+0+153",
    },
    {
      id: 2,
      author: "João",
      category: "noticias",
      title: "Biden Anuncia a Retirada de MILITARES",
      description:
        "Está na hora de encerrar a mais longa guerra dos EUA. É hora de os soldados americanos voltarem para casa, disse Biden em pronunciamento na Casa Branca.",
      date: "18/04/2021",
      uri:
        "https://s2.glbimg.com/tnC2AqYfjfx52Z_nvgtObx0cGN8=/0x0:6000x4000/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/u/V/ABKm8ORmKhwa4FArKHww/2021-04-14t185921z-1016568851-rc2uvm94o556-rtrmadp-3-usa-biden-afghanistan.jpg",
    },
    {
      id: 3,
      author: "Vanessa ",
      category: "noticias",
      title: "Meteoro explode no céu durante transmissão",
      description:
        "O apresentador Jay O'Brien estava fazendo uma transmissão ao vivo no Facebook, quando um meteoro explodiu no céu, em West Palm Beach, no Sul da Flórida (EUA).",
      date: "19/07/2020",
      uri:
        "https://i0.wp.com/www.lucianoreisnoticias.com.br/wp-content/uploads/2020/09/Mulher-assaltada-2.png?w=702&ssl=1.png",
    },
    {
      id: 4,
      author: "Vanessa João",
      category: "noticias",
      title: "Magazine Luiza anuncia compra da plataforma Jovem Nerd",
      description:
        "O conteúdo produzido pelo veículo de cultura pop, tecnologia e ciência será integrado ao SuperApp do Magalu",
      date: "19/07/2020",
      uri:
        "http://www.larharmonia.org.br/conteudo/pub/003/cont/images/Vista-com-Guarita-03-HV.jpg",
    },
  ]);
  return (
    <View style={styles.container}>
      {/* Header,Com Pros Text*/}
      <Header title="Noticias" />

      <SafeAreaView>
        <ScrollView>
          {/* Percorrendo o array*/}
          {noticias.map((card) => {
            return (
              <View key={card.id} style={styles.viewCard}>
                {/* Image da naticia, url */}
                <Image
                  style={styles.image}
                  source={{
                    uri: card.uri,
                  }}
                />

                <View style={styles.cardInfo}>
                  {/* postagem feita pelo adm*/}
                  <Text style={styles.textInfo}>
                    Por {card.author} Em {card.category} Postado {card.date}
                  </Text>
                  <Text style={styles.textTitle}>
                    <Text>{card.title}</Text>
                  </Text>
                  <SafeAreaView style={styles.safeContainer}>
                    <Text style={styles.textSafe}>{card.description}</Text>
                  </SafeAreaView>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
