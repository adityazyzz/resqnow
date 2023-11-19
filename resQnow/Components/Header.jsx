import React from 'react'
import { Appbar, Text} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {Image, StyleSheet, View, TouchableOpacity} from "react-native"
import logo from "../assets/images/logo.png"

const Header = ({title}) => {

  const navigation = useNavigation();

  const isHome = title === "Home" ? true : false;


  return (
    <Appbar.Header>
    {title === "Account" && <Appbar.BackAction onPress={() => {navigation.goBack()}} />}
  

    {title === "resQ" && <View><Image source={logo} className = "h-10 w-32"/></View>}
    {title !== "resQ" && <Appbar.Content title={title} titleStyle={{fontSize : 22 , color : "black"}} />}


    {title === "Account" && <TouchableOpacity
          style={styles.button}
          className={`bg-[#e66766] w-[20vw] h-8 mr-3`}
          onPress={() => {
            // do something
          }}
        >
          <Text style={styles.buttonText}>
            Log Out
          </Text>
        </TouchableOpacity>}
    {title !== "Account" && <Appbar.Action className="absolute right-2" icon="account-circle" size={32} onPress={() => {navigation.navigate("Account")}} />}
  </Appbar.Header>
  );

}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
})
export default Header