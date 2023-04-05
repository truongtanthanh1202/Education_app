import React from 'react';
import {StyleSheet} from 'react-native';
const TopSearch = {
  backgroundColor: '#3787ff',
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 15,

  borderRadius: 20,
  height: 40,
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
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
  },
  topSearch: {
    flex: 22,
    marginLeft: 20,
    justifyContent: 'center',
  },
  mid: {
    flex: 50,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  below: {
    flex: 8,
  },
});
export default styles;
