import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
// Testando a rota de usuário não logado, substituir pela login pois é a primeira rota do app
import Home from "../pages/Home";
import Register from "../pages/Register";
import RecEmail from "../pages/RecPasswordEmail";
import RecPassword from "../pages/RecPassword";
import News from "../pages/News";
import Care from "../pages/Cuidados";
import Version from "../pages/Version";
import Developer from "../pages/Developer";
import RegisterIdoso from "../pages/RegisterIdoso";
import Contact from "../pages/Contact";
import ServiceHelp from "../pages/ServiceHelp";
import Vaccine from "../pages/Vaccine";
import Medication from "../pages/Medication";
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
        <Stack.Screen
          options={{ headerShown: false }}
          name="News"
          component={News}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Care"
          component={Care}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Version"
          component={Version}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Developer"
          component={Developer}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterIdoso"
          component={RegisterIdoso}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Contact"
          component={Contact}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ServiceHelp"
          component={ServiceHelp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Vaccine"
          component={Vaccine}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Medication"
          component={Medication}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
