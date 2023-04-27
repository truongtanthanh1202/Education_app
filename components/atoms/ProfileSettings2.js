import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {images, fontFamilys, fontSizes} from '../../constants';

const ProfileSettings2 = ({icon, label, value, onPress}) => {
  return (
    <View style={{margin: 8}}>
      {label && (
        <Text
          style={{
            fontSize: 14,
            marginBottom: 16,
            fontFamily: fontFamilys.f3,
            color: 'black',
          }}>
          {label}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          height: 24,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#767473',
            fontSize: 16,
            // fontWeight: 400,
            fontFamily: fontFamilys.f2,
          }}>
          {value}
        </Text>

        <TouchableOpacity
          style={{
            position: 'absolute',
            marginLeft: 320,
          }}>
          <Ionicons
            name="chevron-forward-outline"
            color={'black'}
            size={24}></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileSettings2;
