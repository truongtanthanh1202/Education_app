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
    backgroundColor: '#e4f1f9',
  },

  top: {
    flex: 40,
    justifyContent: 'center',
  },
  mid: {
    flex: 60,
    alignItems: 'center',
  },

  text1: {
    ...TEXT,
    color: '#222',
    fontSize: 30,
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
  },
  text2: {
    ...TEXT,
    fontSize: 14,
    color: '#888',
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 32,
    lineHeight: 24,
  },
  button: {
    borderColor: colors.primary,
    borderWidth: 1,
    height: Platform.OS === 'ios' ? 52 : 58,
    width: 330,
    borderRadius: 28,
    margin: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  textInnerBtn: {
    color: 'white',
    fontSize: fontSizes.h1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
export default styles;
