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
const ProfileDetails = ({icon, label, value, onPress}) => {
  return (
    <View>
      {label && (
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 8,
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
        }}
        paddingLeft={20}
        placeholder={value}
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
