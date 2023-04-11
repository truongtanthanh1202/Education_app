import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#e4f1f9',
  },
  context: {
    flex: 100,
    margin: 20,
  },
  top: {
    flex: 80,
  },

  below: {
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  image: {
    width: 150,
    height: 150,
    marginTop: 40,

    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#3787ff',
    width: 92,
    height: 36,
    borderRadius: 28,
    justifyContent: 'center',
    marginHorizontal: 20,

    alignSelf: 'center',
  },
});

export default styles;
