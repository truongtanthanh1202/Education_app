import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {colors, fontSizes} from '../../constants';
const ProgressBar = ({containerStyle, progress}) => {
  return (
    <View
      style={{
        width: '65%',
        height: 8,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#757372',
        ...containerStyle,
      }}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          height: '100%',
          width: progress,
          borderRadius: 10,
          backgroundColor: '#3787ff',
        }}></View>
    </View>
  );
};
export default ProgressBar;