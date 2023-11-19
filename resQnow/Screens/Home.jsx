import {
  View,
} from "react-native";
import React from "react";

import Alert from "./resQ/Alert";

import Chat from "./resQ/Chat";
import Account from "./resQ/Account";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = ({navigation}) => {

  const Stack = createNativeStackNavigator()
 
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="HomePage" 
      screenOptions={{ animation: "none" }} 
      >
        <Stack.Screen name = "Alert" component = {Alert} options={{headerShown : false}}/>

        <Stack.Screen name = "Chat" component = {Chat} options={{headerShown : false}}/>

        <Stack.Screen name = "Account" component = {Account} options={{headerShown : false}}/>
      </Stack.Navigator>

  </NavigationContainer>
  );
};


export default Home;
