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
    flex: 45,
    justifyContent: 'center',
  },
  mid: {
    flex: 55,
    alignItems: 'center',
  },

  text1: {
    ...TEXT,
    color: 'black',
    fontSize: 28,
    fontFamily: 'Poppins-Medium',
  },
  text2: {
    ...TEXT,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#383838',
    marginHorizontal: 50,
  },
  button: {
    marginTop: 60,
    borderColor: colors.primary,
    borderWidth: 1,
    height: Platform.OS === 'ios' ? 52 : 60,
    width: 330,
    borderRadius: 30,
    margin: 5,
    marginHorizontal: 20,
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
