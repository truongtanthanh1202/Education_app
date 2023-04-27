import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import {colors, fontSizes, fontFamilys} from '../../../../constants';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

import {ProfileSettings, ProfileSettings2} from '../../../atoms';
function Profile5(props) {
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
              props.navigation.goBack();
            }}>
            <Ionicons
              name="chevron-back-outline"
              color={'black'}
              size={24}></Ionicons>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 36,
              marginTop: 12,
              marginLeft: 12,
              fontFamily: fontFamilys.f3,
              color: 'black',
            }}>
            Password change
          </Text>
          <TextInput
            style={{
              flexDirection: 'row',
              height: 40,
              alignItems: 'center',
            }}
            placeholder={'Enter old password'}
            placeholderTextColor={'#757372'}></TextInput>
          <View
            style={{
              height: 1,
              backgroundColor: '#757372',
              marginBottom: 40,
            }}></View>
          <TextInput
            style={{
              flexDirection: 'row',
              height: 40,
              alignItems: 'center',
            }}
            placeholder={'Enter new password'}
            placeholderTextColor={'#757372'}></TextInput>
          <View
            style={{
              height: 1,
              backgroundColor: '#757372',
              marginBottom: 40,
            }}></View>
          <TextInput
            style={{
              flexDirection: 'row',
              height: 40,
              alignItems: 'center',
            }}
            placeholder={'Confirm new password'}
            secureTextEntry={true}
            placeholderTextColor={'#757372'}></TextInput>
          <View
            style={{
              height: 1,
              backgroundColor: '#757372',
              marginBottom: 75,
            }}></View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.goBack('Profile3', {});
            }}>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                textAlign: 'center',
                fontFamily: fontFamilys.f3,
              }}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>

        <View></View>
      </View>
      <View style={styles.below}></View>
    </SafeAreaView>
  );
}

export default Profile5;
