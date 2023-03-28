import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../../constants';

function CourseItem(props) {
  //   let {name, url, possessor, quantity, rank} = props.course;
  //   // destructuring an object
  //   debugger;
  let {name, url, possessor, quantity, rank} = props.course;
  const {onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{flexDirection: 'row', flex: 1, margin: 5}}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 10,
          marginRight: 15,
        }}
        source={{
          uri: url,
        }}></Image>
      <View
        style={{
          //   backgroundColor: 'pink',
          flex: 1,
          marginRight: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 4,
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: '#757372',
            fontSize: 14,
            marginBottom: 4,
          }}>
          {possessor}
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#757372',
              fontSize: 14,
              marginBottom: 10,
            }}>
            {quantity}
          </Text>
          <View
            style={{
              width: 50,
            }}></View>
          <Text
            style={{
              color: '#757372',
              fontSize: 14,
            }}>
            {rank}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default CourseItem;
