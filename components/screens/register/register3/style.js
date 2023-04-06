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
    alignItems: 'center',
  },

  text1: {
    ...TEXT,
    color: 'black',
    fontSize: 28,
    fontWeight: 500,
    marginBottom: 2,
  },
  text2: {
    ...TEXT,
    fontSize: 12,
    fontWeight: 500,
    color: '#383838',
    lineHeight: 18,
    // marginTop: 2,
  },
  button: {
    marginTop: 60,
    borderColor: colors.primary,
    borderWidth: 1,
    height: 52,
    width: 330,
    borderRadius: 28,
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
    fontWeight: 600,
  },
});

export default styles;
