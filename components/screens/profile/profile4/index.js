import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import {colors, fontSizes, fontFamilys} from '../../../../constants';
import {images} from '../../../../constants';
import UIButton3 from '../../../atoms/UIButton3';
import styles from './style';

function Profile4(props) {
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
          <Text
            style={{
              marginTop: 30,
              fontSize: fontSizes.h2,
              fontWeight: 700,
              color: 'black',
              fontFamily: fontFamilys.f3,
            }}>
            Profile settings
          </Text>
          <Image source={images.account} style={styles.image}></Image>
          <TouchableOpacity
            style={{
              backgroundColor: '#3787ff',
              width: 200,
              height: 40,
              borderRadius: 28,
              justifyContent: 'center',
              marginTop: 12,
              marginBottom: 40,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: 'white',
                textAlign: 'center',
                fontFamily: fontFamilys.f2,
              }}>
              Change profile picture
            </Text>
          </TouchableOpacity>
          <TextInput
            style={{
              flexDirection: 'row',
              height: 50,
              alignItems: 'center',
            }}
            placeholder={'New username'}
            placeholderTextColor={'#757372'}></TextInput>
          <View
            style={{
              height: 1,
              backgroundColor: '#757372',
            }}></View>
        </View>
        <View style={styles.below}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                textAlign: 'center',
                fontFamily: fontFamilys.f3,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
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
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile4;
