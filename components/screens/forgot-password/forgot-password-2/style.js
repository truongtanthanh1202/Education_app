import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../../../constants';

const TEXT = {
  textAlign: 'center',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4f1f9',
  },

  text1: {
    ...TEXT,
    color: 'black',
    fontSize: 30,
    fontFamily: 'Poppins-Medium',
  },
  text2: {
    ...TEXT,
    fontSize: 14,
    color: '#383838',
    lineHeight: 20,
    marginTop: 2,
    fontFamily: 'Poppins-Regular',
    marginBottom: 16,
  },
  text3: {
    ...TEXT,
    fontSize: 14,
    color: '#3787ff',
  },
  inputText: {
    height: Platform.OS === 'ios' ? 52 : 58,
    width: 330,
    borderRadius: 28,
    borderColor: '#3787ff',
    borderWidth: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    margin: 8,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 20,
  },
  button: {
    borderColor: colors.primary,
    borderWidth: 1,
    height: Platform.OS === 'ios' ? 52 : 58,
    width: 330,
    borderRadius: 28,
    margin: 12,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInnerBtn: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;
