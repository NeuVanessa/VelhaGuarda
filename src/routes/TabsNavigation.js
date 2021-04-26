// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import Icon from "react-native-vector-icons/Ionicons";

// import Login from "../pages/Home";
// import Home from "../pages/Home";
// import Vaccine from "../pages/Vaccine";
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const icons = {
//   Home: {
//     name: "ios-home",
//   },
//   Vaccine: {
//     name: "ios-people",
//   },


// };

// function Tabs() {
//   return (
//     <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ color, size }) => {
//         const { name } = icons[route.name];
//         return <Icon name={name} color={color} size={size} />;
//       },
//     })}
//     tabBarOptions={{
//       style: {
//         backgroundColor: "#009AED",
//       },
//       activeTintColor: "#fff",
//       inactiveTintColor: "#caf0f8",
//     }}
//   >
//     <Tab.Screen name="Inicio" component={Home} />
//     <Tab.Screen name="Vacina" component={Vaccine} />
    
//   </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Tabs}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen name="Vaccine" component={Vaccine} />
     
//     </Stack.Navigator>
//   );
// }
