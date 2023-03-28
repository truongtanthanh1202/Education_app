import React from 'react';
import {StyleSheet} from 'react-native';

const TEXT = {
  textAlign: 'center',
  fontSize: 12,
};
const Button = {
  height: 48,
  borderRadius: 28,
  marginLeft: 24,
  marginRight: 24,
  justifyContent: 'center',
  alignItem: 'center',
  margin: 8,
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
  },
  mid: {
    flex: 30,
  },
  below: {
    flex: 30,
  },

  inputButton: {
    ...Button,
    backgroundColor: 'white',
  },
  buttonSignIn: {
    ...Button,
    backgroundColor: '#3787ff',
  },
  text1: {
    ...TEXT,
    color: 'black',
    fontSize: 26,
    fontWeight: 500,
    marginTop: 10,
  },
  text2: {
    ...TEXT,
    fontSize: 14,
    color: '#383838',

    marginTop: 2,
  },
  text3: {
    margin: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
  },
});

export default styles;
