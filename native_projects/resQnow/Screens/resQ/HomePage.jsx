import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../Components/Header';

const HomePage = ({navigation})=> {
  const themeColor = "#0265bf";
  const activeNavColor = "white";
  const altNavColor = "#b2b2b2";
  const activeNavSize = 40;
  const altNavSize = 32;


    return (
      <View style={styles.columnContainer}>

        <Header title={"HomePage"} />

      {/* // content goes here  */}
      <View style={{flex : 14, backgroundColor:"white"}}>
          <View className="h-[20vh] w-full bg-yellow-200">
            <View></View>
          </View>
      </View>

      {/* // navigation  */}
      <View className="pt-2 rounded-tl-2xl rounded-tr-2xl" style={{flex : 1, backgroundColor:themeColor}}>
      <View className = "w-full" style={styles.rowContainer}>

                <TouchableOpacity onPress={()=>{navigation.navigate("HomePage")}}>
                    <Text><Icon name="home" size={activeNavSize} color={activeNavColor} /></Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate("Alert")}}>
                    <Text><Icon name="alert-rhombus" size={altNavSize} color={altNavColor} /></Text>
                </TouchableOpacity>
            </View>
      </View>

    </View>
    )
  }

  const styles = {
    rowContainer : {
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center"
    },
    columnContainer :{
        flex : 1,
        flexDirection : "column"
    }
}

export default HomePage;