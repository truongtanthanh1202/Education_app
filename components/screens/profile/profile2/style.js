import React from 'react';
import {StyleSheet} from 'react-native';

const TEXT = {
  textAlign: 'center',
  fontSize: 12,
};
const Button = {
  height: 52,
  width: 330,
  borderRadius: 28,
  justifyContent: 'center',
  alignItem: 'center',
  margin: 8,
};
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
    flex: 45,
    backgroundColor: '#e4f1f9',
  },
  below: {
    flex: 20,
    backgroundColor: '#e4f1f9',
  },
  text1: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 500,
    marginVertical: 5,
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
});

export default styles;
