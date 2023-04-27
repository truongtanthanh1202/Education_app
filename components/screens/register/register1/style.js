import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 100,
    justifyContent: 'center',
    backgroundColor: '#e4f1f9',
  },
  context: {
    flex: 25,
    justifyContent: 'center',
  },
  top: {
    flex: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid: {
    flex: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  below: {
    flex: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  button3: {
    borderColor: 'white',
    borderWidth: 1,
    height: 60,
    width: 336,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInButton: {
    color: 'black',
    fontSize: fontSizes.h1,
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins-Medium',
  },
  icon: {marginLeft: '8%', marginRight: '8%'},
});

export default styles;
