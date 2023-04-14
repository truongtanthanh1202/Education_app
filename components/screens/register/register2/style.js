import React from 'react';
import {StyleSheet, Platform} from 'react-native';
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
    flex: 35,
    justifyContent: 'center',
  },
  mid: {
    flex: 45,
  },
  below: {
    flex: 20,
    alignItems: 'center',
  },
  dropdown: {
    height: Platform.OS === 'ios' ? 52 : 58,
    width: 330,
    borderRadius: 28,
    borderColor: '#333',
    borderWidth: 1.3,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  inputText: {
    height: Platform.OS === 'ios' ? 52 : 58,
    width: 330,
    borderRadius: 28,
    borderColor: '#333',
    borderWidth: 1.3,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 8,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 52,
  },
  text1: {
    ...TEXT,
    color: 'black',
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    marginBottom: 12,
  },
  text2: {
    ...TEXT,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#383838',
  },
  text3: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#3787ff',
    justifyContent: 'center',
    marginTop: 2,
  },
  button: {
    borderColor: colors.primary,
    borderWidth: 1,
    height: Platform.OS === 'ios' ? 56 : 60,
    width: 330,
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'ios' ? 16 : 16,
  },
  textInnerBtn: {
    color: 'white',
    fontSize: fontSizes.h1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Medium',
  },
  icon: {
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '4%',
    left: 56,
  },
});

export default styles;
