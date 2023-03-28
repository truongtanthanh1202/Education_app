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

import {images, fontSizes} from '../../../constants';
import styles from './style';

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
            alignSelf: 'center',
          }}></Image>
        <Text style={styles.text1}>Welcome Back!</Text>
        <Text style={styles.text2}>A handful of model sentence structures</Text>
      </View>

      <View style={styles.mid}>
        <TextInput
          style={styles.inputButton}
          // keyboardType="numeric"
          // secureTextEntry={true} // tao dau **** trong password
          autoFocus={true} // tu dong bat ra khi mo app
          placeholder="Email id"
          paddingLeft={12}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.inputButton}
          // keyboardType="numeric"
          secureTextEntry={true}
          autoFocus={true}
          paddingLeft={12}
          placeholder="Password"
          placeholderTextColor="black"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Forgot1');
          }}>
          <Text
            style={{
              color: '#5297fe',
              textDecorationLine: 'underline',
              marginLeft: 255,
              marginBottom: 12, // TODO FIX
            }}>
            {' '}
            Forgot Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignIn}>
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
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.text3}> Sign in with Google</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 20,
          }}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={handlerToSignup}>
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

export default Login;
