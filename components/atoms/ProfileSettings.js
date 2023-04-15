import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
const ProfileSettings = ({icon, label, value, onPress}) => {
  return (
    <View style={{margin: 8}}>
      {label && (
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 8,
            fontFamily: 'Poppins-Medium',
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
            fontSize: 16,
            fontWeight: 400,

            fontFamily: 'Poppins-Medium',
          }}>
          {value}
        </Text>

        <TouchableOpacity
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
              fontWeight: 500,
              fontFamily: 'Poppins-Medium',
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
