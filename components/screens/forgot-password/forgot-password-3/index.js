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
import Invisible from '../../../../asset/icons/invisible';
import axios from 'axios';

function Forgot3({ route, navigation }) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Save Password',
      isSelected: 'false',
    },
  ]);
  const { email } = route.params;
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          source={images.key2}
          style={{
            width: 100,
            height: 100,
            marginTop: '25%',
            alignSelf: 'center',
            marginBottom: 12,
          }}></Image>
        <Text style={styles.text1}>Change Password</Text>

        <Text style={styles.text2}>Your password length consist of</Text>
        <Text style={styles.text2}>6-characters</Text>
      </View>

      <View style={styles.mid}>
        <View>
          <Invisible width="24" height="24" style={styles.icon}></Invisible>

          <TextInput
            onChangeText={text => {
              setPassword(text);
            }}
            style={styles.inputText}
            //   keyboardType="numeric"

            paddingLeft={50}
            //   secureTextEntry={true} // tao dau **** trong password
            autoFocus={true} // tu dong bat ra khi mo app
            placeholder="New Password"
            placeholderTextColor="black" // chu cua holder
          />
        </View>
        <View>
          <Invisible width="24" height="24" style={styles.icon}></Invisible>

          <TextInput
            onChangeText={text => {
              setConfirmPassword(text);
            }}
            style={styles.inputText}
            //   keyboardType="numeric"

            paddingLeft={50}
            //   secureTextEntry={true} // tao dau **** trong password
            autoFocus={true} // tu dong bat ra khi mo app
            placeholder="Confirm Password"
            placeholderTextColor="black" // chu cua holder
          />
        </View>

        {accountTypes.map(accountType => (
          <TouchableOpacity
            onPress={async () => {
              const res = await axios.post(
                `http://10.0.2.2:4848/me/resetPassword`,
                {
                  email: email,
                  password: password,
                  confirmpassword: confirmpassword
                },
              );
              alert(JSON.stringify(res.data));
              navigation.navigate('Forgot4', {
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
            <Text style={styles.textInnerBtn}>Save Password</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Forgot3;
