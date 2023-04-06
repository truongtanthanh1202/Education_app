import React from 'react';
import {StyleSheet} from 'react-native';

const TEXT = {
  textAlign: 'center',
  fontSize: 12,
};
const Button = {
  height: 52,
  width: 330,
  borderRadius: 28,
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
    marginTop: 16,
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
    fontWeight: 500,
    color: '#383838',
    marginTop: 12,
  },
  text3: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
  },
  icon: {
    position: 'absolute',
    marginLeft: 90,
  },
  icons: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 20,
  },
});

export default styles;
