import React from 'react';
import {StyleSheet, Platform, StatusBar} from 'react-native';

const shadow =
  Platform.OS === 'ios'
    ? {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }
    : {elevation: 20, shadowColor: '#52006A'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f1f8', //#e4f1f8
    paddingBottom: Platform.OS === 'ios' ? 60 : 76,
  },
  top: {
    backgroundColor: '#fff',
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },
  bellow: {
    flex: 90,
    backgroundColor: 'lightyellow',
  },
  headerLeft: {},
  headerRight: {},
  headerName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#000',
    lineHeight: 24,
    marginTop: 12,
  },
  headerDescribe: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
  },
  trackingCard: {
    backgroundColor: '#e4f1f8',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 16,
    // shadow properties
    ...shadow,
  },
});

export default styles;
