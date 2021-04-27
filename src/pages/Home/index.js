import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Header from "../../components/HeaderHome";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";
import Vaccine from "../Vaccine";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

{
  /* Icons Usado no Tabs Navigation */
}
const icons = {
  Inicio: {
    name: "home",
  },
  Vacina: {
    name: "stethoscope",
  },
};
{
  /* Pagina Home */
}

const image1 = {
  uri:
    "https://redesuperpopular.com.br/wp-content/uploads/2015/07/Banner-021-300x143.jpg",
};

const Home = () => {
  const { navigate } = useNavigation();

  function ir_ServiceHelp() {
    navigate("ServiceHelp");
  }
  function ir_News() {
    navigate("News");
  }
  function ir_Care() {
    navigate("Care");
  }

  function ir_Developer() {
    navigate("Developer");
  }

  function ir_Version() {
    navigate("Version");
  }
  function Register_Idoso() {
    navigate("RegisterIdoso");
  }
  function ir_Contact() {
    navigate("Contact");
  }
  function ir_Vaccine() {
    navigate("Vaccine");
  }
  function ir_Medication() {
    navigate("Medication");
  }
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <Header />

      <View style={{ flex: 2, backgroundColor: "#444",top:5}}>
        <ScrollView horizontal={true}>
          <View
            style={{
              marginTop: 0,
              width: 280,
              borderWidth: 10,
              borderColor: "#009AED",
              color: "#009AED",
              fontSize: 20,
            
            }}
          >
            <Image
              style={{ width: 260, height: 205 }}
              source={{
                uri:
                  "https://image.freepik.com/vetores-gratis/folheto-informativo-de-vacinacao-contra-coronavirus-desenhado_23-2148835496.jpg",
              }}
            />
          </View>
          <View
            style={{
              marginTop: 0,
              width: 280,
              borderWidth: 10,
              borderColor: "#009AED",
              color: "#009AED",
              fontSize: 20,
              backgroundColor: "white",
            }}
          >
            <Image
              style={{ width: 260, height: 205 }}
              source={{
                uri:
                  "https://image.freepik.com/vetores-gratis/pagina-inicial-de-vacina-de-coronavirus-desenhada-a-mao-plana_23-2148853727.jpg",
              }}
            />
          </View>

          <View
            style={{
              marginTop: 0,
              width: 280,
              borderWidth: 10,
              borderColor: "#009AED",
              color: "#009AED",
              fontSize: 20,
              backgroundColor: "white",
            }}
          >
            <Image
              style={{ width: 260, height: 205 }}
              source={{
                uri:
                  "https://image.freepik.com/vetores-gratis/informacoes-das-fases-da-vacina-contra-o-coronavirus_23-2148889013.jpg",
              }}
            />
          </View>
        </ScrollView>
      </View>
      {/* Definindo a direção com Row */}
      <View
        style={{
          flex: 3,
          backgroundColor: "transparent",
          flexDirection: "row",
        }}
      >
        {/* Criando coluna 1 para cada botão */}
        <View style={styles.StyleCol}>
          {/* Container 1 Botão Vacinação */}
          <View style={styles.ContainerButton}>
            <View style={styles.BotaoDica}>
              <TouchableOpacity
                style={{ alignSelf: "center" }}
                onPress={ir_Vaccine}
              >
                <Image
                  style={styles.ImgDica}
                  source={require("../../assets/ButtonVacinne.png")}
                />
                <Text style={styles.TextButton}>Vacinação</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Container 2 Botão Cuidados */}
          <View style={styles.ContainerButton}>
            <View style={styles.BotaoDica}>
              <TouchableOpacity
                onPress={ir_Care}
                style={{ alignSelf: "center" }}
              >
                <Image
                  style={styles.ImgDica}
                  source={require("../../assets/UseAlcool.png")}
                />
                <Text style={styles.TextButton}>Cuidados</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Container 3 Botão Medicamentos */}
          <View style={styles.ContainerButton}>
            <View style={styles.BotaoDica}>
              <TouchableOpacity
                style={styles.BotaoDica}
                onPress={ir_Medication}
              >
                <Image
                  style={styles.ImgDica}
                  source={require("../../assets/ButtonMedicament.png")}
                />
                <Text style={styles.TextButton}>Medicamentos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Container Coluna 2 */}
        <View style={styles.StyleCol}>
          {/* Container Botão 1 Noticias*/}
          <View style={styles.ContainerButton}>
            <View style={styles.BotaoDica}>
              <TouchableOpacity style={styles.BotaoDica} onPress={ir_News}>
                <Image
                  style={styles.ImgDica}
                  source={require("../../assets/ButtonNews.png")}
                />
                <Text style={styles.TextButton}>Noticias</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Container Botão 2      Atendimento*/}
          <View style={styles.ContainerButton}>
            <View style={styles.BotaoDica}>
              <TouchableOpacity
                style={styles.BotaoDica}
                onPress={ir_ServiceHelp}
              >
                <Image
                  style={styles.ImgDica}
                  source={require("../../assets/ButtonMedical.png")}
                />
                <Text style={styles.TextButton}>Atendimento</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Container Botão 3      Desenvolvedores*/}
          <View style={styles.ContainerButton}>
            <View style={styles.BotaoDica}>
              <TouchableOpacity style={styles.BotaoDica} onPress={ir_Developer}>
                {/* Dica 6 - Evite aglomerações */}
                <Image
                  style={styles.ImgDica}
                  source={require("../../assets/logo.png")}
                />
                <Text style={styles.TextButton}>Desenvolvedores</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/*Coluna 3 */}
        <View style={styles.StyleCol}>
          {/*Container 1 Registro  */}
          <View style={styles.ContainerButton}>
            <View style={styles.BotaoDica}>
              <TouchableOpacity onPress={Register_Idoso}>
                <Image
                  style={styles.ImgDica}
                  source={require("../../assets/ButtonRegister.png")}
                />
                <Text style={styles.TextButton}>Registro</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Container 2 Fale Conosco */}
          <View style={styles.ContainerButton}>
            <View style={styles.BotaoDica}>
              <TouchableOpacity onPress={ir_Contact}>
                <Image
                  style={styles.ImgDica}
                  source={require("../../assets/FaleConosco.png")}
                />
                <Text style={styles.TextButton}>Fale Conosco</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*Container 3 Versão */}
          <View style={styles.ContainerButton}>
            <View style={styles.BotaoDica}>
              <TouchableOpacity onPress={ir_Version}>
                <Image
                  style={styles.ImgDica}
                  source={require("../../assets/Versao.png")}
                />
                <Text style={styles.TextButton}>Versão</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

function Regster() {
  return <Register />;
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#009AED",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#caf0f8",
      }}
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Vacina" component={Vaccine} />
    </Tab.Navigator>
  );
}
