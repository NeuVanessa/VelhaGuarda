import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Header from "../../components/HeaderHome";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";
import Vaccine from "../Vaccine";

const icons = {
  Inicio: {
    name: "home",
  },
  Vacina: {
    name: "stethoscope",
  },
};

function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
    </View>
  );
}

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
        inactiveTintColor:'#caf0f8',

      }}
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Vacina" component={Vaccine} />
      
    </Tab.Navigator>
  );
}
