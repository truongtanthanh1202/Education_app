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
  TextInput,
} from 'react-native';
import {images, fontSizes, fontFamilys} from '../../constants';

const ProfileDetails = ({icon, label, value, onChangeText}) => {
  return (
    <View>
      {label && (
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 8,
            color: 'black',
            fontFamily: fontFamilys.f3,
          }}>
          {label}
        </Text>
      )}
      <TextInput
        style={{
          flexDirection: 'row',
          height: 50,
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 24,
          marginBottom: 14,
          fontFamily: 'Poppins-Medium',
          fontSize: 14,
        }}
        secureTextEntry={label === 'Password' ? true : false}
        editable={
          label === 'Password' || label === 'Email Address' ? false : true
        }
        onChangeText={onChangeText}
        paddingLeft={20}
        value={value}
        placeholderTextColor={'black'}
        color>
        {/* <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
            }}>
            {value}
          </Text> */}
        {/* </View> */}
      </TextInput>
    </View>
  );
};
export default ProfileDetails;
