import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 80,
    justifyContent: 'center',
  },
  context: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    borderColor: '#3787ff',
    borderRadius: 40,
    height: 68,
    width: 196,
    backgroundColor: '#3787ff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
    fontFamily: 'Poppins',
    letterSpacing: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: '25%',
  },
  icon: {
    marginRight: '10%',
  },
});

export default styles;
