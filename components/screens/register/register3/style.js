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
    flex: 35,
    justifyContent: 'center',
  },
  mid: {
    flex: 30,
  },
  below: {
    flex: 35,
  },
  text1: {
    ...TEXT,
    color: 'black',
    fontSize: 30,
    fontWeight: 500,
  },
  text2: {
    ...TEXT,
    fontSize: 14,
    color: '#383838',
    lineHeight: 20,
    marginTop: 2,
  },
  button: {
    borderColor: colors.primary,
    borderWidth: 1,
    height: 55,
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
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 700,
  },
});

export default styles;
