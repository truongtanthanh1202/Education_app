import React from 'react';
import {Platform, StyleSheet} from 'react-native';

const TEXT = {
  textAlign: 'center',
  fontSize: 12,
};
const Button = {
  height: Platform.OS === 'ios' ? 52 : 60,
  width: 330,
  borderRadius: 28,
  justifyContent: 'center',
};
const styles = StyleSheet.create({
  container: {
    flex: 100,
    justifyContent: 'center',
    backgroundColor: '#e4f1f9',
  },

  top: {
    flex: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid: {
    flex: 35,
    alignItems: 'center',
  },
  below: {
    flex: 25,
  },
  inputButton: {
    ...Button,
    marginTop: 10,
    backgroundColor: 'white',
    fontFamily: 'Poppins-Regular',
  },
  buttonSignIn: {
    ...Button,
    marginVertical: 8,
    backgroundColor: '#3787ff',
  },
  text1: {
    ...TEXT,
    color: 'black',
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
  },
  text2: {
    ...TEXT,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#383838',
    marginTop: 12,
  },
  text3: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  icon: {
    position: 'absolute',
    marginLeft: 90,
  },
  icons: {
    position: 'absolute',
    marginTop: 26,
    marginLeft: 20,
  },
});

export default styles;
