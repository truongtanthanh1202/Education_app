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

const ProfileInformation = ({icon, label, value, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 308,
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
        <View style={{marginBottom: 10}}>
          <Text style={styles.text}>Full name</Text>
          <View
            style={{
              width: 315,
              height: 40,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <Text style={styles.infoText}>Rakibull Hassan</Text>
          </View>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={styles.text}>Email address</Text>
          <View
            style={{
              width: 315,
              height: 40,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <Text style={styles.infoText}>quickraki@gmail.com</Text>
          </View>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={styles.text}>Password</Text>
          <View
            style={{
              width: 315,
              height: 40,
              borderRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <Text style={styles.infoText}>********</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 5,
  },
  infoText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 5,
    marginLeft: 10,
  },
});
export default ProfileInformation;
