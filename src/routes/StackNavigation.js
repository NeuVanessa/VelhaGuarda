import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Login from '../pages/Login';
// Testando a rota de usuário não logado, substituir pela login pois é a primeira rota do app
import Home from "../pages/Home";
import Register from '../pages/Register';
import RecEmail from '../pages/RecPasswordEmail';
import RecPassword from '../pages/RecPassword';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="RecEmail"
          component={RecEmail}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="RecPassword"
          component={RecPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
