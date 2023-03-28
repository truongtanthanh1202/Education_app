import React, {Component} from 'react';
import {TouchableOpacity, Text, Icon} from 'react-native';
import {colors, fontSizes} from '../../constants';
function UIButton3(props) {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: 'white',
        borderWidth: 1,
        height: 50,
        margin: 5,
        marginHorizontal: 40,
        backgroundColor: 'white',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Icon name = {"hello"} style ={{
        color: 'black'}}/> */}
      <Text
        style={{
          color: 'black',
          fontSize: fontSizes.h1,
          textAlign: 'center',
          textAlignVertical: 'center',
          fontWeight: '500',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default UIButton3;
