import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

console.disableYellowBox=true;


import Routes from './src/routes/auth.routes';

export default function App() {
 return (
  <NavigationContainer>
     <AuthProvider>
      <StatusBar backgroundColor="#131313" barStyle="light-content"/>
      <Routes/>
     </AuthProvider>
  </NavigationContainer>
  );
}