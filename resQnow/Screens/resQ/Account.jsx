import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Header from "../../Components/Header";

const Account = ({ navigation }) => {
  const activeBg = "bg-[#0265bf]";
  const altBg = "bg-gray-200";
  const activeFont = "text-white";
  const altFont = "text-gray-800";
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const [currentTab, setCurrentTab] = useState(false);

  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [mobile, setMobile] = useState("");
  const [savedLocation, setSavedLocation] = useState("");

  const [editMode, setEditMode] = useState(false);

  const [oldPass, setOldPass] = useState("");
  const [newPass1, setNewPass1] = useState("");
  const [newPass2, setNewPass2] = useState("");

  return (
    <View className="bg-white h-full">
      <Header title="Account" />
      <View className="flex-row">
        <TouchableOpacity
          className={`${currentTab === false ? activeBg : altBg}  h-11 w-[50vw]`}
          onPress={() => {
            setCurrentTab(!currentTab);
          }}
        >
          <Text
            className={`${
              currentTab === false ? activeFont : altFont
            } mx-12 mt-3`}
          >
            Account Info
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`${currentTab === true ? activeBg : altBg}  h-11 w-[50vw]`}
          onPress={() => {
            setCurrentTab(!currentTab);
          }}
        >
          <Text
            className={`${
              currentTab === true ? activeFont : altFont
            } mx-7 mt-3`}
          >
            Change Password
          </Text>
        </TouchableOpacity>
      </View>

      {currentTab === false && (
        <ScrollView>
          <View style={styles.formContainer}>
          <Text className="text-lg font-bold ml-1 mb-1">Name</Text>
          <TextInput
            className="w-[89vw]"
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            editable={editMode}
            onChangeText={(text) => {
              setFullName(text);
            }}
          />

          <Text className="text-lg font-bold ml-1 mb-1">Date Of Birth</Text>
          <TextInput
            className="w-[89vw] h-7"
            style={styles.input}
            placeholder="DD/MM/YYYY"
            value={dateOfBirth}
            editable={editMode}
            onChangeText={(text) => {
              setDateOfBirth(text);
            }}
          />

          <Text className="text-lg font-bold ml-1 mt-1 mb-1">Blood Group</Text>
          <View className="w-[89vw] border border-gray-500 rounded-lg mb-1 pb-2">
            <Picker
              selectedValue={selectedBloodGroup}
              onValueChange={(itemValue) => setSelectedBloodGroup(itemValue)}
              style={styles.picker}
              enabled={editMode}
              itemStyle={styles.pickerItem}
            >
              <Picker.Item label="Select..." value="" />
              {bloodGroups.map((group) => (
                <Picker.Item key={group} label={group} value={group} />
              ))}
            </Picker>
          </View>

          <Text className="text-lg font-bold ml-1 mt-2">Mobile Number</Text>
          <TextInput
            className="w-[89vw] h-7 mt-1"
            style={styles.input}
            placeholder="Mobile"
            value={mobile}
            editable={editMode}
            onChangeText={(text) => {
              setMobile(text);
            }}
          />

<Text className="text-lg font-bold ml-1 mt-2">Saved Location</Text>
          <TextInput
            className="w-[89vw] h-7 mt-1"
            style={styles.input}
            placeholder="Type here"
            value={savedLocation}
            editable={editMode}
            onChangeText={(text) => {
              setSavedLocation(text);
            }}
          />

          <TouchableOpacity
            style={styles.button}
            className={`${
              editMode === false ? "bg-[#3498db]" : "bg-green-400"
            } w-[89vw] mt-3`}
            onPress={() => {
              if (editMode === true) {
                // apply condition
                setEditMode(false);
              } else {
                setEditMode(true);
              }
            }}
          >
            <Text style={styles.buttonText}>
              {editMode === false ? "Edit Details" : "Save Changes"}
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      )}
{/* ----------------------------------------------------  */}
      {
        currentTab === true && <View style={styles.formContainer}>
        <Text className="text-lg font-bold ml-1 mb-1">Old Password</Text>
        <TextInput
          className="w-[89vw] text-lg pl-5"
          style={styles.input}
          value={oldPass}
          secureTextEntry
          onChangeText={(text) => {
            setOldPass(text);
          }}
        />

        <Text className="text-lg font-bold ml-1 mb-1">New Password</Text>
        <TextInput
          className="w-[89vw] h-7 text-lg pl-5"
          style={styles.input}
          value={newPass1}
          secureTextEntry
          onChangeText={(text) => {
            setNewPass1(text);
          }}
        />

        <Text className="text-lg font-bold ml-1 mt-2">Confirm New Password</Text>
        <TextInput
          className="w-[89vw] h-7 mt-1 text-lg pl-5"
          style={styles.input}
          value={newPass2}
          secureTextEntry
          onChangeText={(text) => {
            setNewPass2(text);
          }}
        />

        

        <TouchableOpacity
          style={styles.button}
          className={`bg-[#3498db] w-[89vw] mt-3`}
          onPress={() => {
            // do something
          }}
        >
          <Text style={styles.buttonText}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    // backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: "80%",
    maxWidth: 400,
    // elevation: 3, // Shadow on Android
    // shadowColor: '#000', // Shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  picker: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  pickerItem: {
    fontSize: 16,
  },
  selectedText: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default Account;
