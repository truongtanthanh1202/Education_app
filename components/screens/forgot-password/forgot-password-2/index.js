import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { images } from '../../../../constants';
import styles from './style';
//import axios from 'axios';

function Forgot2({ route, navigation }) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Change Password',
      isSelected: 'false',
    },
  ]);
  const { email } = route.params;
  const [otp, setOTP] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          source={images.key2}
          style={{
            width: 100,
            height: 100,
            marginTop: '25%',
            marginBottom: 12,
          }}></Image>
        <Text style={styles.text1}>Enter a Code</Text>

        <Text style={styles.text2}>We sent a verification code to</Text>
        <Text style={styles.text2}>your email </Text>
      </View>

      <View style={styles.mid}>
        <TextInput
          onChangeText={text => {
            setOTP(text);
          }}
          style={styles.inputText}
          //   keyboardType="numeric"

          paddingLeft={12}
          //   secureTextEntry={true} // tao dau **** trong password
          autoFocus={true} // tu dong bat ra khi mo app
          placeholder="Enter OTP code..."
          placeholderTextColor="black" // chu cua holder
        />

        {accountTypes.map(accountType => (
          <TouchableOpacity
            onPress={async () => {
              // const res = await axios.post(
              //   `http://10.0.2.2:4848/check/checkOTP`,
              //   {
              //     email: email,
              //     otp: otp
              //   },
              // );
              // alert(JSON.stringify(res.data));
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
              textDecorationLine: 'underline',
            }}>
            {' '}
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Forgot2;
