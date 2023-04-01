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
    flex: 45,
  },
  below: {
    flex: 20,
  },

  inputText: {
    height: 55,
    borderRadius: 28,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItem: 'center',
    margin: 8,
    fontSize: 15,
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
    fontSize: 14,
    color: '#3787ff',
    justifyContent: 'center',
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
  icon: {
    position: 'absolute',
    marginTop: 22,
    marginLeft: 35,
  },
});

export default styles;
