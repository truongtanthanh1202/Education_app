import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {colors, fontSizes} from '../../../../constants';

import UIButton3 from '../../../atoms/UIButton3';
import styles from './style';
import Google from '../../../../asset/icons/google';
import Facebook from '../../../../asset/icons/facebook';
function Register1({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.context}>
        <Text style={styles.text}> Welcome! </Text>
        <Text style={styles.text}> Sign up to continue!</Text>
      </View>
      <View style={styles.top}>
        <TouchableOpacity style={styles.button3}>
          <Google width="28" height="28" style={styles.icon}></Google>

          <Text style={styles.textInButton}> Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Facebook width="28" height="28" style={styles.icon}></Facebook>
          <Text style={styles.textInButton}>Sign Up with Facebook</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: '#585d69',
          }}>
          or
        </Text>
      </View>
      <View style={styles.mid}>
        <UIButton3
          title="Sign up with email"
          onPress={() => {
            navigation.navigate('Register2');
          }}></UIButton3>
        <Text style={{fontSize: 12, textAlign: 'center', color: '#585d69'}}>
          {' '}
          By signing up you are agreed with our
        </Text>
        <Text style={{fontSize: 12, textAlign: 'center', color: '#585d69'}}>
          {' '}
          friendly terms and condition
        </Text>
      </View>
      <View style={styles.below}>
        <Text style={{fontSize: 14, textAlign: 'center', color: '#383838'}}>
          Already have an account?
        </Text>
        <UIButton3 title="Sign in"></UIButton3>
      </View>
    </SafeAreaView>
  );
}

export default Register1;
