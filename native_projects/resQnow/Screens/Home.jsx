import React from "react";
import HomePage from "./resQ/HomePage";
import Alert from "./resQ/Alert";
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
        <Stack.Screen name = "HomePage" component = {HomePage} options={{headerShown : false}}/>

        <Stack.Screen name = "Alert" component = {Alert} options={{headerShown : false}}/>

        <Stack.Screen name = "Account" component = {Account} options={{headerShown : false}}/>
      </Stack.Navigator>

  </NavigationContainer>
  );
};


export default Home;
