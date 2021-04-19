// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import Icon from "react-native-vector-icons/Ionicons";

// import Login from "../pages/Home";
// import Register from "../pages/Register";

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const icons = {
//   Cuidados: {
//     name: "ios-home",
//   },
//   Register: {
//     name: "ios-people",
//   },


// };

// function Tabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           const { name } = icons[route.name];
//           return <Icon name={name} color={color} size={size} />;
//         },
//       })}
//       tabBarOptions={{
//         style: {
//           backgroundColor: "#283593",
//         },
//         activeTintColor: "#FFF",
//       }}
//     >
//       <Tab.Screen name="Home" component={Login} />
//       <Tab.Screen name="Register" component={Register} />

//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Cuidados"
//         component={Tabs}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen name="Register" component={Register} />
     
//     </Stack.Navigator>
//   );
// }
