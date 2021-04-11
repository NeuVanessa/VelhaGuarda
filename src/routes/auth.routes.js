import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import Login from "../pages/Login";


const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

<AuthStack.Screen
        name="Registrar"
        component={Registrar}
        options={{
          headerStyle: {
            backgroundColor: "#003F63",
            borderBottomWidth: 1,
            borderBottomColor: "#A1A5A6",
          },
          headerTintColor: "#FFF",
          headerBackTitleVisible: false,
          headerTitle: "Retornar",
        }}
      
      />

      <AuthStack.Screen
        name="Solcitar Senha"
        component={EsqueciSenha}
        options={{
       
          headerShown: false,
         
        }}
      />

<AuthStack.Screen
        name="Mudar Senha"
        component={MudarSenha}
        options={{
        
          headerShown: false
         
        }}
      />
      
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;