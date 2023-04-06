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
    alignItems: 'center',
  },

  inputText: {
    height: 52,
    width: 330,
    borderRadius: 28,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
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
    marginBottom: 12,
  },
  text2: {
    ...TEXT,
    fontSize: 14,
    fontWeight: 500,
    color: '#383838',
    marginTop: 2,
  },
  text3: {
    fontSize: 14,
    fontWeight: 500,
    color: '#3787ff',
    justifyContent: 'center',
    marginTop: 2,
  },
  button: {
    borderColor: colors.primary,
    borderWidth: 1,
    height: 52,
    width: 330,
    borderRadius: 28,
    margin: 5,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  textInnerBtn: {
    color: 'white',
    fontSize: fontSizes.h1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 600,
  },
  icon: {
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '4%',
    marginLeft: 45,
  },
});

export default styles;
