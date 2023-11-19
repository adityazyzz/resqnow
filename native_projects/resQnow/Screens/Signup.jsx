//Login.js

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Keyboard
} from "react-native";
import { Button } from "react-native-paper";

import logo from "../assets/images/logo.jpg"

const Signup = ({navigation}) => {
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // Keyboard is open
        setKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // Keyboard is closed
        setKeyboardOpen(false);
      }
    );

    return () => {
      // Clean up listeners when the component is unmounted
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLogin = () => {
    // Add your login logic here
    console.log("FullName:", fullName);
    console.log("Password:", password);
    console.log("bloodGroup:", bloodGroup);
    // You may want to send a request to your server for authentication

    // For simplicity, let's just log in for now
    ToastAndroid.show("Welcome to resQ !",1500);
    setTimeout(() => {
        navigation.navigate("Home")
    }, 100);
    

  };

  return (
    <View style={styles.container}>
    {isKeyboardOpen === false && <Image source={logo} className="absolute top-[10vh] h-[200px] rounded-xl w-[80vw]"/>}
    {isKeyboardOpen === false && <Text className="mt-32" style={styles.title}>Sign Up</Text>}
      
      <TextInput
      className = "border rounded-sm "
        style={styles.input}
        placeholder="Enter Full Name"
        onChangeText={(text) => setFullName(text)}
      />

<TextInput
      className = "border rounded-sm"
        style={styles.input}
        placeholder="Enter Blood Group"
     
        onChangeText={(text) => setBloodGroup(text)}
      />

      <TextInput
      className = "border rounded-sm"
        style={styles.input}
        placeholder="Set a password"
       
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity className="w-[80vw]" style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <View style = {styles.colFlex}>
      <Text className="mt-[10px]" >Already have an account?</Text> 
      <Button onPress={()=>{navigation.navigate("Login");}}><Text className="underline">LogIn</Text></Button>

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

export default Signup;
