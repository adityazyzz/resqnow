import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Home from "./Screens/Home";
import Login from "./Screens/Login"
import Signup from "./Screens/Signup";
import PhoneNumberVerificationScreen from "./Screens/PhoneNumberVerificationScreen";

import GlobalStyles from "./GlobalStylesheet";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Login" 
        // screenOptions={{ animation: "none" }} 
        >
          <Stack.Screen name = "Login" component = {Login} options={{headerShown : false}}/>
          <Stack.Screen name = "PhoneNumberVerificationScreen" component = {PhoneNumberVerificationScreen} options={{headerShown : false}}/>
          <Stack.Screen name = "Signup" component = {Signup} options={{headerShown : false}}/>
          <Stack.Screen name = "Home" component = {Home} options={{headerShown : false}}/>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
