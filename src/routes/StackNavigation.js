import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Testando a rota de usuário não logado, substituir pela login pois é a primeira rota do app
import Register from "../pages/News";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
