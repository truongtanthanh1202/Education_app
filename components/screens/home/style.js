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
    : {elevation: 4, shadowColor: '#171717'};

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
    backgroundColor: 'white',
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
    borderRadius: 10,
    padding: 16,
    zIndex: 1,
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    // shadow properties
    ...shadow,
  },
  categoryScrollList: {
    marginLeft: 10,
    position: 'absolute',
    bottom: 12,
  },
  learningPlanContainer: {
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    ...shadow,
  },
  learningPlanList: {
    maxHeight: 160,
    marginBottom: 4,
  },
  learningPlanItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  learningPlanItemCourse: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'left',
    paddingLeft: 12,
    flex: 80,
    fontSize: 13,
    color: '#333',
  },
  learningPlanItemTarget: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#333',
  },
  buttonMore: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInnerButtonMore: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 16,
    color: '#333',
  },
  describeContainer: {
    flexDirection: 'row',
  },
  describeContainerLeft: {
    flex: 60,
    paddingLeft: 20,
  },
  describeContainerRigt: {
    flex: 40,
    alignItems: 'center',
  },
});

export default styles;
