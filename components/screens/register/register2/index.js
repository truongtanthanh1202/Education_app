import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';

import {images} from '../../../../constants';
import User from '../../../../asset/icons/user';
import Invisible from '../../../../asset/icons/invisible';
import Email from '../../../../asset/icons/email';

import {isValidEmail, isValidPassword} from '../../../utilies/Validations';
import styles from './style';
import {Use} from 'react-native-svg';

function Register2({navigation}) {
  //states for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  // state to store email, password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValidationOK = () =>
    email.length >= 0 &&
    password.length >= 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Create Account ',
      isSelected: 'false',
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          source={images.account}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
          }}></Image>
        <Text style={styles.text1}> Create an Account</Text>
        <Text style={styles.text2}>
          {' '}
          A handful of model sentence structures
        </Text>
      </View>

      <View style={styles.mid}>
        <View>
          <User width="28" height="28" style={styles.icon}></User>

          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            //   secureTextEntry={true} // tao dau **** trong password
            autoFocus={true} // tu dong bat ra khi mo app
            placeholder="Username"
            paddingLeft={50}
            placeholderTextColor="black" // chu cua holder
          />
        </View>

        <View style={{height: 12}}></View>
        <View>
          <Email width="28" height="28" style={styles.icon}></Email>

          <TextInput
            onChangeText={text => {
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Please enter valid email',
              );
              setEmail(text);
            }}
            style={styles.inputText}
            keyboardType="numeric"
            paddingLeft={50}
            //   secureTextEntry={true} // tao dau **** trong password
            autoFocus={true} // tu dong bat ra khi mo app
            placeholder="Email id"
            placeholderTextColor="black" // chu cua holder
          />
          <Text
            style={{
              color: 'red',
              fontSize: 12,
              marginLeft: 32,
            }}>
            {errorEmail}
          </Text>
        </View>
        <View>
          <Invisible width="28" height="28" style={styles.icon}></Invisible>

          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 6 characters',
              );
              setPassword(text);
            }}
            style={styles.inputText}
            keyboardType="numeric"
            secureTextEntry={true} // tao dau **** trong password
            autoFocus={true} // tu dong bat ra khi mo app
            placeholder="Password"
            paddingLeft={50}
            placeholderTextColor="black" // chu cua holder
          />
        </View>

        <Text
          style={{
            color: 'red',
            fontSize: 12,
            marginLeft: 32,
          }}>
          {errorPassword}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 60,
          }}>
          <Text style={styles.text2}> I hereby agree to</Text>
          <Text style={styles.text3}> terms of</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 60,
          }}>
          <Text style={styles.text3}> service</Text>
          <Text style={styles.text2}> and</Text>
          <Text style={styles.text3}> privacy policy</Text>
        </View>
      </View>

      <View style={styles.below}>
        {accountTypes.map(accountType => (
          <TouchableOpacity
            disabled={isValidationOK() == false}
            onPress={() => {
              navigation.navigate('Register3');
              alert(`Email = ${email}, password= ${password}`);
              setAccountTypes(
                accountTypes.map(eachAccountType => {
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  };
                }),
              );
            }}
            isSelected={isValidationOK() == true ? true : false}
            style={styles.button}>
            <Text style={styles.textInnerBtn}>Create Account</Text>
          </TouchableOpacity>
        ))}
        <View
          style={{
            margin: 4,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#585859',
              textAlign: 'center',
            }}>
            Already have an account?
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                color: '#5297fe',
                textDecorationLine: 'underline',
              }}>
              {' '}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register2;
