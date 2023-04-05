import React from 'react';
import {StyleSheet} from 'react-native';
const TopSearch = {
  backgroundColor: '#3787ff',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8%',
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
  },
  topSearch: {
    flex: 22,
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
