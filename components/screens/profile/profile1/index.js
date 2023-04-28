import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import {images, fontSizes, fontFamilys} from '../../../../constants';
import {ProgressBar, ProfileValue, ProfileInformation} from '../../../atoms';
const Profile1 = props => {
  let firstName = 'Thanh';
  let lastName = 'Truong';
  let fullname = firstName + ' ' + lastName;
  let email = 'truongtanthanh@gmail.com';
  let password = '123456';
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
            fontSize: fontSizes.h2,
            fontWeight: 600,
            color: 'black',
            fontFamily: fontFamilys.f3,
          }}>
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Profile3');
          }}>
          <Ionicons name="settings-outline" color={'black'} size={24} />
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
          <Text style={styles.name}>Thanh Truong</Text>
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
        <ProfileValue
          label="Billed every year"
          value="12 month at $8.00/month"></ProfileValue>
        <View style={{margin: 12}}></View>

        {/* profile infor (full name, email, password) section*/}
        <View
          style={{
            minHeight: 200,
            backgroundColor: '#3787ff',
            borderRadius: 20,
          }}>
          {/* Label and Value */}
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              marginVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Montserrat-Medium',
                }}>
                Profile Information
              </Text>

              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Profile2');
                }}>
                <Ionicons
                  name="create-outline"
                  size={24}
                  marginLeft={100}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.profileInforItem}>
              <Text style={styles.titleInputField}>Your full name</Text>
              <TextInput
                style={styles.inputField}
                value={fullname}
                editable={false}
                placeholderTextColor="black"></TextInput>
            </View>

            <View style={styles.profileInforItem}>
              <Text style={styles.titleInputField}>Email address</Text>
              <TextInput
                style={styles.inputField}
                value={email}
                editable={false}
                placeholderTextColor="black"></TextInput>
            </View>

            <View style={styles.profileInforItem}>
              <Text style={styles.titleInputField}>Password</Text>
              <TextInput
                style={styles.inputField}
                secureTextEntry={true}
                value={password}
                editable={false}
                placeholderTextColor="black"></TextInput>
            </View>
          </View>
        </View>
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
            {/* Profile Section 1 */}
            {renderProfileSection1()}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile1;
