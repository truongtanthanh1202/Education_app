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
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileInformation = ({icon, label, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 250,
        backgroundColor: '#3787ff',
        // alignItems: 'center',
        borderRadius: 20,
      }}
      onPress={onPress}>
      {/* Label and Value */}
      <View
        style={{
          flex: 1,
          marginLeft: 20,
          marginTop: 18,
        }}>
        <View style={{flexDirection: 'row'}}>
          {label && (
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 600,
                marginBottom: 20,
              }}>
              {label}
            </Text>
          )}

          {
            <TouchableOpacity onPress={onPress}>
              <Ionicons
                name="create-outline"
                size={24}
                marginLeft={100}
                color={'white'}
              />
            </TouchableOpacity>
          }
        </View>

        <Text style={styles.text}>Email Address</Text>
        <Text style={styles.text}>Password</Text>
        <Text style={styles.text}>First Name</Text>
        <Text style={styles.text}>Last Name</Text>
      </View>
      {/* <TouchableOpacity
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
      </TouchableOpacity> */}
      {/* <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 28,
            height: 28,
            tintColor: 'white',
          }}></Image> */}
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 20,
  },
});
export default ProfileInformation;
