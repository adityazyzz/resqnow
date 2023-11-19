import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../../Components/Header";
import locationPic from "../../assets/images/location.png";

const Chat = ({ navigation }) => {
  const themeColor = "#0265bf";
  const activeNavColor = "white";
  const altNavColor = "#b2b2b2";
  const activeNavSize = 40;
  const altNavSize = 32;

  const [isKeyboardOpen, setKeyboardOpen] = useState(false);

  const [rescueMessage, setRescueMessage] = useState("please hurryy");
  const [showInChat, setShowInChat] = useState(false);

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

  const sendClicked = () => {
    setShowInChat(true);
    setRescueMessage(null);
  };

  return (
    <View style={styles.columnContainer}>
      <Header title={"Emergency Chat"} />

      {/* // content goes here  */}
      <View style={{ flex: 14, backgroundColor: "white" }}>
        <View className="m-4">
          {isKeyboardOpen === false && <View className="border border-[#f284be]  text-left p-4 rounded-2xl">
            <Text>We have just recieved a ALERT in your location .</Text>
            <Text>Hopefully you are safe and alright. </Text>
            <Text>Is the information correct? Please confirm</Text>
            <View className="flex-row justify-around mt-3">
              <TouchableOpacity onPress={() => {}}>
                <Text className="text-white bg-[#f284be] rounded-full px-4 py-1">
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text className="text-white bg-[#e66766] rounded-full px-4 py-1">
                  Call 122
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text className="text-white bg-[#0265bf] rounded-full px-4 py-1">
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View> }

          {/* // chat  */}
          <ScrollView>
            <View className=" w-full h-full  rounded-2xl ">
              {/* text messages */}
              <View className="h-[53vh] mt-2 bg-slate-50 w-full rounded-2xl">
                <Text className="text-gray-500 text-[13px] text-center mt-2">
                  -- Mon 20/10 Rescue Team is Now Connected --
                </Text>
                <View className="w-full relative">
                  <View className="absolute right-0 rounded-2xl rounded-br-sm mr-3 bg-cyan-500 mt-5 p-4">
                    <Image
                      className="h-20 w-32 rounded-xl "
                      source={locationPic}
                    />
                    <Text className="text-white text-right mt-1 mr-2">Live Location shared</Text>
                  </View>
                </View>

                <View className="mt-[23vh] bg-slate-200  w-[70vw] rounded-2xl rounded-bl-sm ml-3">
                <Text className="m-3 ">The rescue team is on its way to your location !</Text>
                </View>

                
                {showInChat === true && <View className="absolute right-0 bg-cyan-500 mt-[37vh] px-3  w-[37vw] rounded-2xl rounded-br-sm mr-3 ">
                <Text className="m-3 text-white text-[15px]">please hurry !</Text>
                </View>}

              </View>

              {/* // type field */}
              <View className="flex-row justify-between ">
                <TextInput
                  className="bg-[#edffe8] border border-gray-400 h-[7vh] text-black w-[80vw] rounded-full pl-4 text-lg "
                  value={rescueMessage}
                ></TextInput>
                <TouchableOpacity className="mt-1" onPress={sendClicked}>
                  <Text>
                    <Icon name="send-circle" size={45} color={"green"} />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* // navigation  */}
      {isKeyboardOpen === false && <View
        className="pt-2 rounded-tl-2xl rounded-tr-2xl"
        style={{ flex: 1, backgroundColor: themeColor }}
      >
        <View className="w-full" style={styles.rowContainer}>
          
          
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Alert");
            }}
          >
            <Text>
              <Icon
                name="home-lightning-bolt"
                size={altNavSize}
                color={altNavColor}
              />
              Home
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Chat");
            }}
          >
            <Text>
              <Icon
                name="chat-processing"
                size={activeNavSize}
                color={activeNavColor}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>}
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

export default Chat;
