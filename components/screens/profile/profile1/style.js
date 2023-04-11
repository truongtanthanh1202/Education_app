import React from 'react';
import {StyleSheet} from 'react-native';

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

  below: {
    flex: 65,
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
