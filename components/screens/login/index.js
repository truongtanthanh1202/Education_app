import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import Google from '../../../asset/icons/google';
import Invisible from '../../../asset/icons/invisible';
import Email from '../../../asset/icons/email';
import {images, fontSizes} from '../../../constants';
import styles from './style';
import {isValidEmail, isValidPassword} from '../../utilies/Validations';

function Login({navigation}) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Sign in ',
      isSelected: 'false',
    },
  ]);
  const handlerToSignup = () => {
    console.log('Process to sign up');
  };
  //states for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  // state to store email, password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlerToLogin = () => {
    navigation.navigate('Navbar');
  };
  const isValidationOK = () =>
    email.length >= 0 &&
    password.length >= 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.top}>
        <Image
          source={images.lock}
          style={{
            width: 100,
            height: 100,
            marginTop: '25%',
            marginBottom: 10,
          }}></Image>
        <Text style={styles.text1}>Welcome Back!</Text>
        <Text style={styles.text2}>A handful of model sentence structures</Text>
      </View>

      <View style={styles.mid}>
        <View>
          <TextInput
            onChangeText={text => {
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Please enter valid email',
              );
              setEmail(text);
            }}
            style={styles.inputButton}
            // keyboardType="numeric"
            // secureTextEntry={true} // tao dau **** trong password
            autoFocus={true} // tu dong bat ra khi mo app
            placeholder="Email id"
            paddingLeft={50}
            placeholderTextColor="black"
          />
          <Text
            style={{
              color: 'red',
              fontSize: 12,
              marginLeft: 32,
            }}>
            {errorEmail}
          </Text>
          <Email width="24" height="24" style={styles.icons}></Email>
        </View>

        <View>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 6 characters',
              );
              setPassword(text);
            }}
            style={styles.inputButton}
            // keyboardType="numeric"
            secureTextEntry={true}
            autoFocus={true}
            paddingLeft={50}
            placeholder="Password"
            placeholderTextColor="black"
          />
          <Text
            style={{
              color: 'red',
              fontSize: 12,
              marginLeft: 32,
            }}>
            {errorPassword}
          </Text>
          <Invisible width="24" height="24" style={styles.icons}></Invisible>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Forgot1');
          }}>
          <Text
            style={{
              color: '#5297fe',
              textDecorationLine: 'underline',
              marginLeft: 210,
              marginVertical: 10,
            }}>
            {' '}
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isValidationOK() == false}
          style={styles.buttonSignIn}
          onPress={handlerToLogin}
          isSelected={isValidationOK() == true ? true : false}>
          <Text
            style={{
              color: 'white',
              fontSize: fontSizes.h1,
              textAlign: 'center',
              textAlignVertical: 'center',
              fontWeight: 600,
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.below}>
        <Text style={styles.text3}>(or)</Text>
        <View style={{justifyContent: 'center'}}>
          <Google width="24" height="24" style={styles.icon}></Google>

          <TouchableOpacity
            style={{
              // alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={styles.text3}> Sign in with Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 20,
          }}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register1');
            }}>
            <Text
              style={{
                color: '#5297fe',
                textDecorationLine: 'underline',
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
