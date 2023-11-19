import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../../Components/Header";
import locationPic from "../../assets/images/location.png";
import alert1 from "../../assets/images/pic1.jpg"
import alert2 from "../../assets/images/pic2.jpg"

const Alert = ({ navigation }) => {
  const themeColor = "#0265bf";
  const activeNavColor = "white";
  const altNavColor = "#b2b2b2";
  const activeNavSize = 40;
  const altNavSize = 32;

  const [showAlert, setShowAlert] = useState(true);
  const [showChat, setShowChat] = useState(false);

const [showHeading, setShowHeading] = useState(false);
const [showSendLocation, setShowSendLocation] = useState(false);
const [showBotReply, setShowBotReply] = useState(false);


const needHelpClicked = ()=>{
  setShowChat(true);

  setTimeout(() => {
    setShowHeading(true);
    setShowSendLocation(true);
  }, 500);

  setTimeout(() => {
    setShowBotReply(true);
  }, 1200);
}

  return (
    <View style={styles.columnContainer}>
      <Header title={"Emergency Alert"} />

      {/* // content goes here  */}
      <View style={{ flex: 14, backgroundColor: "white" }}>
        <View className="m-4">
          {
            showAlert === true && <View className="border border-[#f284be]  text-left p-4 rounded-2xl">
            <Text>We have just recieved a ALERT in your location .</Text>
            <Text>Hopefully you are safe and alright. </Text>
            <Text>Is the information correct? Please confirm</Text>
            <View className="flex-row justify-around mt-3">
              <TouchableOpacity onPress={() => {setShowAlert(false)}}>
                <Text className="text-white bg-[#f284be] rounded-full px-4 py-1">
                  I am okay
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => {needHelpClicked(); setShowAlert(false)}}>
                <Text className="text-white bg-[#0265bf] rounded-full px-4 py-1">
                  Need Help!
                </Text>
              </TouchableOpacity>
            </View>
          </View> 
          }

          {/* // chat  */}
          {showChat === true && <ScrollView>
            <View className=" w-full h-full  rounded-2xl ">
              {/* text messages */}
              <View className="h-[40vh] mt-2  w-full rounded-2xl">
             
                  {showHeading === true && <Text className="text-gray-500 text-[13px] text-center mt-2">
                  -- Mon 20/10 Rescue Team is Now Connected --
                </Text>}

                {showSendLocation === true && <View className="w-full relative">
                  <View className="absolute right-0 rounded-2xl rounded-br-sm mr-3 bg-cyan-500 mt-5 p-4">
                    <Image
                      className="h-20 w-32 rounded-xl "
                      source={locationPic}
                    />
                    <Text className="text-white text-right mt-1 mr-2">Live Location shared</Text>
                  </View>
                </View>}

                {showBotReply === true && <View className="mt-[23vh] bg-slate-200  w-[70vw] rounded-2xl rounded-bl-sm ml-3">
                <Text className="m-3 ">The rescue team is on its way to your location !</Text>
                </View>}
              </View>
              
            </View>
          </ScrollView>}


          {/* // alerts  */}
          <View className="mt-2">
            <Image source={alert1} className="h-32 rounded-lg w-full mt-2 mb-2" />
            <Image source={alert2} className="h-32 rounded-lg w-full" />
          </View>
          
        </View>
      </View>

      {/* // navigation  */}
      <View
        className="pt-2 rounded-tl-2xl rounded-tr-2xl"
        style={{ flex: 1, backgroundColor: themeColor }}
      >
        <View className="w-full" style={styles.rowContainer}>
          
          
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomePage");
            }}
          >
            <Text>
              <Icon
                name="home"
                size={altNavSize}
                color={altNavColor}
              />
 
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Alert");
            }}
          >
            <Text>
              <Icon
                name="alert-rhombus"
                size={activeNavSize}
                color={activeNavColor}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  columnContainer: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
};

export default Alert;
