import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Switch,
} from 'react-native';
import {colors, fontSizes} from '../../../../constants';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

import {ProfileSettings, ProfileSettings2} from '../../../atoms';
function Profile3(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.context}>
        <View style={styles.top}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack('Profile1', {});
            }}
            style={{
              position: 'absolute',
              marginLeft: 4,
            }}>
            <Ionicons
              name="chevron-back-outline"
              color={'black'}
              size={24}></Ionicons>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 36,
              textAlign: 'center',
              fontFamily: 'Poppins-Medium',
              color: 'black',
            }}>
            Settings
          </Text>

          <View>
            <ProfileSettings
              onPress={() => {
                props.navigation.navigate('Profile4');
              }}
              label="Account"
              value="Profile settings"></ProfileSettings>
            <View style={{margin: 8}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 8,
                  fontFamily: 'Poppins-Medium',
                  color: 'black',
                }}>
                Notification
              </Text>
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
                  Personalized Notifications
                </Text>
                <Switch
                  trackColor={{false: '#767577', true: '#3787ff'}}
                  thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  marginLeft={84}
                />
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#757372',
                }}></View>
            </View>
            <ProfileSettings
              onPress={() => {
                props.navigation.navigate('Profile5');
              }}
              label="Security"
              value="Password change"></ProfileSettings>
            <ProfileSettings2
              label="Help & Support"
              value="About us"></ProfileSettings2>
            <ProfileSettings2 value="Terms & Condition"></ProfileSettings2>
            <ProfileSettings2 value="Privacy policy"></ProfileSettings2>
          </View>
        </View>
        <View style={styles.below}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Poppins-Medium',
              }}
              onPress={() => {
                // AsyncStorage.clear();
                // props.navigation.replace('Login');
              }}>
              Sign out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile3;
