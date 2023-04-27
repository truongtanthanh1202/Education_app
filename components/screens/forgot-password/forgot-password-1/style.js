import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../../../constants';

const TEXT = {
  textAlign: 'center',
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    justifyContent: 'center',
    backgroundColor: '#e4f1f9',
  },

  top: {
    flex: 45,
    justifyContent: 'center',
  },
  mid: {
    flex: 55,
    // alignItems: 'center',
  },

  text1: {
    ...TEXT,
    color: 'black',
    fontSize: 28,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 12,
  },
  text2: {
    ...TEXT,
    fontSize: 14,
    color: '#888',
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 50,
  },
  text3: {
    ...TEXT,
    fontSize: 14,
    color: '#3787ff',
    fontFamily: 'Poppins-Medium',
  },
  describe: {
    ...TEXT,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  inputText: {
    height: 52,
    width: 330,
    borderRadius: 28,
    borderColor: '#3787ff',
    borderWidth: 1,
    marginHorizontal: 30,
    margin: 9,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    justifyContent: 'center',
  },
  button: {
    borderColor: colors.primary,
    borderWidth: 1,
    height: 52,
    width: 330,
    borderRadius: 28,
    margin: 9,
    marginHorizontal: 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInnerBtn: {
    color: 'white',
    fontSize: fontSizes.h1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 700,
  },
  icon: {
    position: 'absolute',
    marginTop: 22,
    marginLeft: 42,
  },
});

export default styles;
