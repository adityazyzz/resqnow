import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';

const PhoneNumberVerificationScreen = ({navigation}) => {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = () => {
    // Implement logic to send verification code to the provided phone number
    // For simplicity, let's just log the phone number and toggle the code sent state
    console.log('Sending verification code to:', `${countryCode}${phoneNumber}`);
    setIsCodeSent(true);
  };

  const handleVerifyCode = () => {
    // Implement logic to verify the entered code
    // For simplicity, let's just log the verification code
    console.log('Verifying code:', verificationCode);
    navigation.navigate("Signup")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phone Number Verification</Text>

      {!isCodeSent ? (
        <>
          {/* <View style={styles.countryPickerContainer}>
            <CountryPicker
              {...{
                countryCode,
                withFlag: true,
                withFilter: true,
                withAlphaFilter: true,
                withCallingCode: true,
                withModal: true,
                onSelect: (country) => setCountryCode(country.cca2),
              }}
              containerButtonStyle={styles.countryPickerButton}
              countryCode={countryCode=== null ? "IN" :countryCode }
              withFilter
            />
          </View> */}

          <PhoneInput
            ref={(ref) => (this.phoneInput = ref)}
            style={styles.input}
            textStyle={styles.phoneInputText}
            initialCountry="US"
            initialValue='+91'
            onChangePhoneNumber={(text) => setPhoneNumber(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSendCode}>
            <Text className="h-6 w-[70vw]" style={styles.buttonText}>Send Verification Code</Text>
          </TouchableOpacity>

        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter verification code"
            keyboardType="numeric"
            onChangeText={(text) => setVerificationCode(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
            <Text className={"h-6 w-[70vw]"} style={styles.buttonText}>Verify Code</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  countryPickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  countryPickerButton: {
    paddingHorizontal: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 8,
  },
  phoneInputText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PhoneNumberVerificationScreen;
