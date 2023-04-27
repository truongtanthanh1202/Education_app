import React from 'react';
import {StyleSheet, Platform, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f1f9',
  },
  fixedContainer: {
    flex: 43,
  },
  scrollContainer: {
    flex: 57,
    backgroundColor: 'lightblue',
  },
  headerContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  headerLeft: {},
  headerRight: {},
  headerName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#000',
    lineHeight: 26,
    marginTop: 12,
  },
});

export default styles;
