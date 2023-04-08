import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
const ProfileValue = ({icon, label, value, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 68,
        backgroundColor: '#3787ff',
        alignItems: 'center',
        borderRadius: 20,
      }}
      onPress={onPress}>
      {/* Label and Value */}
      <View
        style={{
          flex: 1,
          marginLeft: 20,
        }}>
        {label && (
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 500,
              marginBottom: 8,
            }}>
            {label}
          </Text>
        )}
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: 500,
          }}>
          {value}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 80,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: '#e4f1f8',
          marginRight: 18,
        }}>
        <Text>Upgrade</Text>
        {/* <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 28,
            height: 28,
            tintColor: 'white',
          }}></Image> */}
      </TouchableOpacity>
    </View>
  );
};
export default ProfileValue;
