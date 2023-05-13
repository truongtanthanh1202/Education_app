import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {images} from '../../../../constants';
import styles from './style';
import Invisible from '../../../../asset/icons/invisible';
import axios from 'axios';

function Forgot3({route, navigation}) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Save Password',
      isSelected: 'false',
    },
  ]);
  const {email} = route.params;
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
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
      <Text style={styles.text2}>
        Your password length consist of 6-characters
      </Text>

      <View style={styles.mid}>
        <View>
          <Invisible width="24" height="24" style={styles.icon}></Invisible>

          <TextInput
            onChangeText={text => {
              setPassword(text);
            }}
            style={styles.inputText}
            paddingLeft={50}
            autoFocus={true}
            secureTextEntry={true}
            placeholder="New Password"
            placeholderTextColor="#333"
          />
        </View>
        <View>
          <Invisible width="24" height="24" style={styles.icon}></Invisible>

          <TextInput
            onChangeText={text => {
              setConfirmPassword(text);
            }}
            style={styles.inputText}
            paddingLeft={50}
            secureTextEntry={true}
            placeholder="Confirm Password"
            placeholderTextColor="#333"
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
                  confirmpassword: confirmpassword,
                },
              );
              const data = res.data;
              if (data.message === '200') {
                navigation.navigate('Forgot4', {
                  email: email,
                });
              } else {
                alert('Passwords do not match');
              }

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
