import React from 'react';
import {StyleSheet} from 'react-native';
import {images, fontFamilys, fontSizes} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: 'white',
  },
  context: {
    flex: 100,
  },
  top: {
    flex: 35,
    marginHorizontal: 20,
  },

  mid: {
    flex: 55.5,
    backgroundColor: '#e4f1f9',
  },
  below: {
    flex: 10.5,
    backgroundColor: '#e4f1f9',
  },
  name: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    marginVertical: 5,
    fontFamily: 'Poppins-Medium',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  profileSectionContainer: {
    marginTop: 20,

    borderColor: '#3787ff',
  },
  textInButton: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  button: {
    backgroundColor: '#e4f1f8',
    width: 140,
    height: 48,
    borderRadius: 28,
    justifyContent: 'center',
    marginLeft: 28,
    marginTop: 16,
  },
});

export default styles;
