import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 100,
    // justifyContent: 'center',
    backgroundColor: '#e4f1f9',
  },

  top: {
    flex: 25,
    justifyContent: 'center',
    // backgroundColor: 'purple',
  },
  mid: {
    flex: 65,
    // backgroundColor: 'yellow',
    paddingLeft: 15,
    paddingTop: 10,
    // flexDirection: 'row',
  },
  below: {
    flex: 10,
    // justifyContent: 'center',
    backgroundColor: 'pink',
  },
  icon: {
    marginLeft: 160,

    marginTop: 25,
  },
});
export default styles;
