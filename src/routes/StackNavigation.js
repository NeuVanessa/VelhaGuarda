import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Login from '../pages/Login';
// Testando a rota de usuário não logado, substituir pela login pois é a primeira rota do app
import Home from "../pages/Home";
// Testando a rota de atendimento.
import ServiceHelp from '../pages/ServiceHelp'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="ServiceHelp"
          component={ServiceHelp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
