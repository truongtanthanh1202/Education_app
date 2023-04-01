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
  },
  mid: {
    flex: 20,
    marginTop: 5,
  },
  below: {
    flex: 25,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
  },
  button3: {
    borderColor: 'white',
    borderWidth: 1,
    height: 50,
    margin: 5,
    marginHorizontal: 40,
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  textInButton: {
    color: 'black',
    fontSize: fontSizes.h1,
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    fontWeight: '500',
  },
  icon: {marginLeft: '8%', marginRight: '8%'},
});

export default styles;
