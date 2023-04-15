import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {colors, images} from '../../../../constants';
import styles from './style';

function Forgot2({route, navigation}) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Change Password',
      isSelected: 'false',
    },
  ]);
  const {email} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={images.key2}
        style={{
          width: 100,
          height: 100,
          marginBottom: 8,
        }}></Image>
      <Text style={styles.text1}>Enter a Code</Text>
      <Text style={styles.text2}>
        We sent a verification code to your email
      </Text>

      <TextInput
        style={styles.inputText}
        keyboardType="numeric"
        autoFocus={true} // tu dong bat ra khi mo app
        placeholder="Enter OTP code..."
        placeholderTextColor="black" // chu cua holder
      />

      {accountTypes.map(accountType => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Forgot3', {
              email: email,
            });
            setAccountTypes(
              accountTypes.map(eachAccountType => {
                return {
                  ...eachAccountType,
                  isSelected: eachAccountType.name == accountType.name,
                };
              }),
            );
          }}
          style={styles.button}
          isSelected={accountType.isSelected}>
          <Text style={styles.textInnerBtn}>Change Password</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 12,
            color: '#3787ff',
            fontFamily: 'Poppins-Medium',
            borderBottomColor: colors.primary,
            borderBottomWidth: 0.5,
          }}>
          Resend Code
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Forgot2;
