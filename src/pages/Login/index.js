import React from "react";

import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation();

  return (
    <View style={style.container}>
     <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{top:100}}>

       <Text>Oi</Text>
     </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
});
