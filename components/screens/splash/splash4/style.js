import React from 'react';
import {StyleSheet} from 'react-native';

import {colors, fontSizes} from '../../../../constants';

const button = {
  borderColor: colors.primary,
  borderWidth: 1,
  height: 70,
  width: 354,
  margin: 8,
  marginHorizontal: 20,
  borderRadius: 40,
  alignItems: 'center',
  justifyContent: 'center',
};

const text = {
  fontSize: fontSizes.h1,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontFamily: 'Poppins',
  fontWeight: 600,
};

const styles = StyleSheet.create({
  container: {
    flex: 70,
    justifyContent: 'center',
  },
  context: {
    flex: 30,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  button1: {
    ...button,
    backgroundColor: colors.primary,
  },
  text1: {
    ...text,
    color: 'white',
  },
  button2: {
    ...button,
    backgroundColor: '#e4f1f8',
  },
  text2: {
    ...text,
    color: colors.primary,
  },
});

export default styles;
