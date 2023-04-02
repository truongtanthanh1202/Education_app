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
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    borderColor: '#3787ff',
    borderRadius: 25,
    height: 50,
    margin: 10,
    marginHorizontal: 110,
    backgroundColor: '#3787ff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Poppins',
    letterSpacing: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: '20%',
  },
  icon: {
    marginRight: '12%',
  },
});

export default styles;
