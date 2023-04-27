import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {images, fontFamilys, fontSizes} from '../../constants';

const ProfileSettings = ({icon, label, value, onPress}) => {
  return (
    <View style={{margin: 8}}>
      {label && (
        <Text
          style={{
            fontSize: 14,
            marginBottom: 8,
            fontFamily: fontFamilys.f3,
            color: 'black',
          }}>
          {label}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          height: 30,
          alignItems: 'center',
          marginBottom: 14,
        }}>
        <Text
          style={{
            color: '#767473',
            fontSize: fontSizes.h1,
            fontWeight: 400,
            fontFamily: fontFamilys.f2,          }}>
          {value}
        </Text>

        <TouchableOpacity
          onPress={onPress}
          style={{
            position: 'absolute',
            marginLeft: 260,
            height: 38,
            width: 80,
            backgroundColor: 'white',
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontFamily: fontFamilys.f3,
              color: 'black',
            }}>
            manage
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#757372',
        }}></View>
    </View>
  );
};
export default ProfileSettings;
