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
import {images, fontSizes, fontFamilys} from '../../constants';

const ProfileInformation = ({icon, label, value, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 304,
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
                fontWeight: 500,
                marginBottom: 16,
                fontFamily: fontFamilys.f1,
              }}>
              {label}
            </Text>
          )}

          {
            <TouchableOpacity onPress={onPress}>
              <Ionicons
                name="create-outline"
                size={24}
                marginLeft={Platform.OS === 'ios' ? 90 : 108}
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
    fontSize: fontSizes.h1,
    fontWeight: 500,
    marginBottom: 5,
    fontFamily: fontFamilys.f1,
  },
  infoText: {
    color: 'gray',
    fontSize: fontSizes.h1,
    marginBottom: 5,
    marginLeft: 10,
    // fontFamily:fontFamilys.f1,
  },
});
export default ProfileInformation;
