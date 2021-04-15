import React, { useState } from "react";
import { View, ScrollView, Image, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import { color } from "react-native-reanimated";
import Button from "../../components/Button";
export default function Home({ color }) {
  const description = `\n`;

  const [image, setImage] = useState([
    {
      id: 1,
      author: "Vanessa",
      category: "noticias",
      description: "Senhorita Mara relata que sua gata surtou.",
      date: "14/04/2021",
      uri:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg",
    },
    {
      id: 2,
      author: "Vanessa Lopes",
      category: "noticias",
      description: "Novo caso de corona virus surgiu na china",
      date: "18/04/2021",
      uri: "https://static.poder360.com.br/2020/02/coronavirus-china-1-1.jpg",
    },
    {
      id: 3,
      author: "Vanessa Lopes",
      category: "noticias",
      description: "Mulher  Assaltada em Brotas.",
      date: "19/07/2020",
      uri:
        "https://i0.wp.com/www.lucianoreisnoticias.com.br/wp-content/uploads/2020/09/Mulher-assaltada-2.png?w=702&ssl=1.png",
    },
    {
      id: 4,
      author: "Vanessa Lopes",
      category: "noticias",
      description: "Informações muito importantes.",
      date: "19/07/2020",
      uri:
        "http://www.larharmonia.org.br/conteudo/pub/003/cont/images/Vista-com-Guarita-03-HV.jpg",
    },
  ]);
  return (
    <View style={styles.container}>
      <Header title="Noticias" />

      <SafeAreaView>
        <ScrollView>
          {image.map((card) => {
            return (
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  height: 240,
                  backgroundColor: "black",
                  padding: 10,
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: 100,
                    top: 5,
                    left: 10,
                    position: "absolute",
                  }}
                  source={{
                    uri: card.uri,
                  }}
                />
                <View
                  style={{
                    width: "100%",
                    height: 150,
                    top: 100,
                    left: 10,
                    position: "absolute",
                    backgroundColor: "#666",
                    flexDirection: "row",
                    alignContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      left: 3,
                      position: "absolute",
                      color: "white",
                      fontSize: 12,
                      top: 2,
                      fontFamily: "serif",
                    }}
                  >
                    Por {card.author} Em {card.category} Postado {card.date}
                  </Text>
                  <Text
                    style={{
                      left: 3,
                      position: "absolute",
                      color: "white",
                      fontSize: 14,
                      top: 18,
                      fontFamily: "serif",
                    }}
                  >
                    <Text>{card.description}</Text>
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
