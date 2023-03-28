import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import styles from './style';
import {images} from '../../../../constants';

function Splash4(props) {
  const handelToLogin = () => {
    props.navigation.navigate('Login');
  };
  const handelToSignup = () => {
    props.navigation.navigate('Register1');
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground source={images.splash_4} style={styles.image}>
        <SafeAreaView style={styles.container}></SafeAreaView>
        <View style={styles.context}>
          <TouchableOpacity style={styles.button1} onPress={handelToLogin}>
            <Text style={styles.text1}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={handelToSignup}>
            <Text style={styles.text2}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Splash4;
