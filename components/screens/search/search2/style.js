import React from 'react';
import {StyleSheet} from 'react-native';
const TopSearch = {
  backgroundColor: '#3787ff',
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 15,

  borderRadius: 20,
  height: 40,
  //   marginRight: 20,
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    // justifyContent: 'center',
    backgroundColor: '#e4f1f9',
  },
  button1: {
    ...TopSearch,
    width: 100,
  },
  button2: {
    ...TopSearch,
    width: 70,
  },
  button3: {
    ...TopSearch,
    width: 60,
  },
  top: {
    flex: 15,
    justifyContent: 'center',
    // backgroundColor: 'purple',
  },
  topSearch: {
    flex: 22,
    marginLeft: 20,
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  mid: {
    flex: 50,
    // backgroundColor: 'yellow',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    // flexDirection: 'row',
  },
  below: {
    flex: 8,
    // justifyContent: 'center',
    // backgroundColor: 'pink',
  },
});
export default styles;
