import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import {images, fontFamilys, fontSizes} from '../../../../constants';
import {
  ProgressBar,
  ProfileValue,
  ProfileInformation,
  ProfileDetails,
} from '../../../atoms';
const Profile2 = props => {
  let {email, firstName, lastName, password} = props.route.params;

  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          // marginTop: 50,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{
              paddingRight: 6,
            }}>
            <Ionicons name="chevron-back-outline" size={28} color="#333" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: fontSizes.h2,
              color: 'black',
              fontFamily: 'Poppins-Medium',
            }}>
            Profile
          </Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="settings-outline" color={'black'} size={24} />
        </TouchableOpacity>
      </View>
    );
  }
  function renderProfileCard() {
    return (
      <View>
        <Image source={images.account} style={styles.image}></Image>
        {/* Detail */}
        <View>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <ProgressBar
            progress="60%"
            containerStyle={{maginTop: 10}}></ProgressBar>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 2,
              color: 'black',
              fontFamily: fontFamilys.f3,
            }}>
            60% Complete your profile
          </Text>
        </View>
      </View>
    );
  }
  function renderProfileSection1() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileDetails label="Email Address" value={email}></ProfileDetails>
        <ProfileDetails label="Password" value={password}></ProfileDetails>
        <ProfileDetails label="First Name" value={firstName}></ProfileDetails>
        <ProfileDetails label="Last Name" value={lastName}></ProfileDetails>
        <View style={{margin: 20}}></View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.context}>
        {keyboardIsShown == false && (
          <View style={styles.top}>
            {renderHeader()}
            <ScrollView>
              {/* Profile Card */}
              {renderProfileCard()}
            </ScrollView>
          </View>
        )}

        <View style={styles.mid}>
          <ScrollView style={{marginHorizontal: 20, marginTop: 14}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Medium',
                marginTop: 14,
                color: 'black',
              }}>
              Profile information
            </Text>
            {/* Profile Section 1 */}
            {renderProfileSection1()}
          </ScrollView>
        </View>
        <View style={styles.below}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#3787ff',
              borderRadius: 50,
              height: 80,
              marginHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}
              style={styles.button}>
              <Text style={styles.textInButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // need to call api save profile to server
                props.navigation.goBack();
              }}
              style={styles.button}>
              <Text style={styles.textInButton}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </View>
      {/* //Header */}
    </SafeAreaView>
  );
};

export default Profile2;
