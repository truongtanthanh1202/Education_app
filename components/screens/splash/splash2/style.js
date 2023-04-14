import React from 'react';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 80,
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
    height: Platform.OS === 'ios' ? 68 : 60,
    width: 196,
    backgroundColor: '#3787ff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: '38%',
  },
  icon: {
    marginRight: '12%',
  },
});

export default styles;
