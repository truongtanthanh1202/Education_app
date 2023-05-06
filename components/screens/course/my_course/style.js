import React from 'react';
import {StyleSheet, Platform, StatusBar, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const shadow =
  Platform.OS === 'ios'
    ? {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }
    : {elevation: 4, shadowColor: '#171717'};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4f1f9',
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    marginBottom: 20,
  },
  trackingCard: {
    backgroundColor: '#3787ff',
    borderRadius: 20,
    padding: 16,
    width: '100%',
    alignSelf: 'center',
    // shadow properties
    ...shadow,
  },
  coursesList: {
    paddingHorizontal: 10,
    flex: 1,
  },
  coursesListItem: {
    margin: 10,
    backgroundColor: '#3787ff',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderRadius: 20,
    width: deviceWidth / 2 - 30,
    height: 190,
  },
  coursesListItemTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: 15,
    minHeight: 88,
  },
  coursesListButtonPlay: {
    width: 40,
    height: 40,
    backgroundColor: '#222',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
