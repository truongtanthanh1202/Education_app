import React from 'react';
import {StyleSheet} from 'react-native';
const TopSearch = {
  backgroundColor: '#3787ff',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8%',
  borderRadius: 20,
  height: 40,
  //   marginRight: 20,
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    paddingHorizontal: 20,

    backgroundColor: '#e4f1f9',
  },
  button1: {
    ...TopSearch,
    minWidth: 40,
  },
  textTopSearch: {
    color: 'white',
    fontSize: 12,
    fontWeight: 500,
    fontFamily: 'Poppins',
    paddingLeft: 20,
    paddingRight: 20,
  },
  top: {
    flex: 15,
    justifyContent: 'center',
    // backgroundColor: 'purple',
  },
  topSearch: {
    flex: 22,
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  mid: {
    flex: 50,
    paddingTop: 10,
    // flexDirection: 'row',
  },
  below: {
    flex: 8,
    // justifyContent: 'center',
    backgroundColor: 'pink',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
export default styles;
