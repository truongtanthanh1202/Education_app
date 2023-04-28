import React from 'react';
import {StyleSheet} from 'react-native';
import {images, fontFamilys, fontSizes} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: 'white',
  },
  context: {
    flex: 100,
  },
  top: {
    flex: 35,
    marginHorizontal: 20,
  },

  below: {
    flex: 65,
    backgroundColor: '#e4f1f9',
  },
  name: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    marginVertical: 5,
    fontFamily: 'Poppins-Medium',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  profileSectionContainer: {
    marginTop: 12,
    borderColor: '#3787ff',
  },
  profileInforItem: {
    marginTop: 12,
  },
  titleInputField: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: 'white',
    marginLeft: 4,
    marginBottom: 2,
  },
  inputField: {
    height: Platform.OS === 'ios' ? 48 : 48,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    justifyContent: 'center',
    marginBottom: 4,
  },
});

export default styles;
