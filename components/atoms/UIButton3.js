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
        height: 60,
        width: 336,
        margin: 12,
        marginHorizontal: 40,
        backgroundColor: props.Backgroundcolor ?? 'white',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Icon name = {"hello"} style ={{
        color: 'black'}}/> */}
      <Text
        style={{
          color: props.TextInnreColor ?? 'black',
          fontSize: fontSizes.h1,
          textAlign: 'center',
          textAlignVertical: 'center',
          fontFamily: 'Poppins-Medium',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default UIButton3;
