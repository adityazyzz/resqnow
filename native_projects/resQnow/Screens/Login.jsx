//Login.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid
} from "react-native";
import { Button } from "react-native-paper";

import logo from "../assets/images/logo.jpg"

const Login = ({navigation}) => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Mobile:", mobile);
    console.log("Password:", password);
    // You may want to send a request to your server for authentication

    // For simplicity, let's just log in for now
    ToastAndroid.show("Welcome to resQ !",1500);
    setTimeout(() => {
        navigation.navigate("Home")
    }, 100);
    
    
    
  };

  return (
    <View style={styles.container}>
    <Image source={logo} className="absolute top-[10vh] h-[200px] w-[80vw] rounded-xl"/>
      <Text className="mt-24" style={styles.title}>ResQnow Login</Text>
      <TextInput
      className = "border rounded-sm mt-5"
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setMobile(text)}
      />

      <TextInput
      className = "border rounded-sm"
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity className="w-[80vw]" style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style = {styles.colFlex}>
      <Text className="mt-[10px]" >Are you a new user?</Text> 
      <Button onPress={()=>{navigation.navigate("PhoneNumberVerificationScreen")}}><Text className="underline">SignUp</Text></Button>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  colFlex : {

    flexDirection : "row"
},
});

export default Login;
