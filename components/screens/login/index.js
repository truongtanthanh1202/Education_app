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
        <View>
          <TextInput
            style={styles.inputButton}
            // keyboardType="numeric"
            // secureTextEntry={true} // tao dau **** trong password
            autoFocus={true} // tu dong bat ra khi mo app
            placeholder="Email id"
            paddingLeft={50}
            placeholderTextColor="black"
          />
          <Email width="26" height="26" style={styles.icons}></Email>
        </View>

        <View>
          <TextInput
            style={styles.inputButton}
            // keyboardType="numeric"
            secureTextEntry={true}
            autoFocus={true}
            paddingLeft={50}
            placeholder="Password"
            placeholderTextColor="black"
          />
          <Invisible width="26" height="26" style={styles.icons}></Invisible>
        </View>

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
        <View style={{justifyContent: 'center'}}>
          <Google width="28" height="28" style={styles.icon}></Google>

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
