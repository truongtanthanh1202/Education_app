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
import {ProgressBar, ProfileValue, ProfileInformation} from '../../../atoms';
const Profile1 = () => {
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
        <ProfileValue
          label="Billed every year"
          value="12 month at $8.00/month"></ProfileValue>
        <View style={{margin: 20}}></View>

        <ProfileInformation label="Profile information"></ProfileInformation>
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

        <View style={styles.below}>
          <ScrollView style={{marginHorizontal: 20, marginTop: 14}}>
            {/* <Text style={{fontSize: 20, fontWeight: 500, marginTop: 20}}>
              Profile information
            </Text> */}
            {/* Profile Section 1 */}
            {renderProfileSection1()}
          </ScrollView>
        </View>
        {/* </View> */}
      </View>
      {/* //Header */}
    </SafeAreaView>
  );
};

export default Profile1;
