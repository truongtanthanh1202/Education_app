import React from 'react';
import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f1f9',
  },
  header: {
    backgroundColor: '#e4f1f9',
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
});

export default styles;
