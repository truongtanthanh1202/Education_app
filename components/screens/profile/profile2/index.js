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

import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import {images} from '../../../../constants';
import {
  ProgressBar,
  ProfileValue,
  ProfileInformation,
  ProfileDetails,
} from '../../../atoms';
const Profile2 = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          // marginTop: 50,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
          }}>
          Profile
        </Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} />
        </TouchableOpacity>
      </View>
    );
  }
  function renderProfileCard() {
    return (
      <View>
        <Image source={images.avatar} style={styles.image}></Image>
        {/* Detail */}
        <View>
          <Text style={styles.text1}>Rakibull Hassan</Text>
          <ProgressBar
            progress="60%"
            containerStyle={{maginTop: 10}}></ProgressBar>
          <Text style={{textAlign: 'center', marginTop: 2}}>
            60% Complete your profile
          </Text>
        </View>
      </View>
    );
  }
  function renderProfileSection1() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileDetails
          label="Email Address"
          value="quickraki@gmail.com"></ProfileDetails>
        <ProfileDetails label="Password" value="12345678"></ProfileDetails>
        <ProfileDetails label="First Name" value="Rakibull"></ProfileDetails>
        <ProfileDetails label="Last Name" value="Hassan"></ProfileDetails>
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
        <View style={styles.top}>
          {renderHeader()}

          <ScrollView>
            {/* Profile Card */}
            {renderProfileCard()}
          </ScrollView>
        </View>

        <View style={styles.mid}>
          <ScrollView style={{marginHorizontal: 20, marginTop: 14}}>
            <Text style={{fontSize: 20, fontWeight: 500, marginTop: 14}}>
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
              height: 90,
              marginHorizontal: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#e4f1f8',
                width: 120,
                height: 50,
                borderRadius: 28,
                justifyContent: 'center',
                margin: 20,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: 'black',
                  textAlign: 'center',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#e4f1f8',
                width: 160,
                height: 50,
                borderRadius: 28,
                justifyContent: 'center',
                marginLeft: 16,
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: 'black',
                  textAlign: 'center',
                }}>
                Save
              </Text>
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
