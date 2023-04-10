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
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 24,
          marginBottom: 14,
        }}>
        {/* Label and Value */}
        <View
          style={{
            flex: 1,
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
            }}>
            {value}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ProfileValue;
