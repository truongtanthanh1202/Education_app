import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../../../constants';

const TEXT = {
  textAlign: 'center',
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4f1f9',
  },

  top: {
    flex: 45,
    justifyContent: 'center',
  },
  mid: {
    flex: 55,
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  text1: {
    ...TEXT,
    color: 'black',
    fontSize: 30,
    fontFamily: 'Poppins-Medium',
    marginTop: 4,
    marginBottom: 4,
  },
  text2: {
    ...TEXT,
    fontSize: 14,
    color: '#888',
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 50,
    lineHeight: 24,
    marginTop: 2,
    marginBottom: 32,
  },
  text3: {
    ...TEXT,
    fontSize: 14,
    color: '#3787ff',
  },
  inputText: {
    height: Platform.OS === 'ios' ? 52 : 52,
    fontFamily: 'Poppins-Medium',
    width: 330,
    borderRadius: 28,
    borderColor: '#3787ff',
    borderWidth: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    margin: 8,
  },
  button: {
    borderColor: colors.primary,
    borderWidth: 1,
    height: 52,
    width: 330,
    borderRadius: 28,
    margin: 5,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInnerBtn: {
    color: 'white',
    fontSize: fontSizes.h1,
    fontFamily: 'Poppins-Medium',
  },
  icon: {
    position: 'absolute',
    marginTop: 22,
    marginLeft: 35,
  },
});

export default styles;
