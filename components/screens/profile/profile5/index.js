import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import {colors, fontSizes} from '../../../../constants';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

import {ProfileSettings, ProfileSettings2} from '../../../atoms';
function Profile5() {
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
          <TouchableOpacity>
            <Ionicons name="chevron-back-outline" size={24}></Ionicons>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 36,
              marginTop: 12,
              marginLeft: 12,
              fontFamily: 'Poppins-Medium',
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
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Poppins-Medium',
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
