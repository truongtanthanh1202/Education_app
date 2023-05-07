import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StatusBar,
  Text,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingButtonText from '../../atoms/SettingButtonBoolean';

import styles from './style';

const shadow =
  Platform.OS === 'ios'
    ? {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }
    : {elevation: 4, shadowColor: '#171717'};

const Schedule = props => {
  const data = [
    {label: 'English', value: 'English'},
    {label: 'Vietnamese', value: 'Vietnamese'},
  ];
  const [language, setLanguage] = React.useState('English');
  const [notifications, setNotifications] = React.useState(true);
  const {role, email} = props.route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
        style={{
          height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        }}
      />
      <View style={styles.top}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            style={{flex: 35}}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="chevron-back-outline" size={28} color="#333" />
          </TouchableOpacity>
          <Dropdown
            style={{
              flex: 40,
              backgroundColor: '#3787ff',
              height: 26,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 4,
            }}
            placeholderStyle={{
              fontSize: 14,
              color: 'white',
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
            }}
            selectedTextStyle={{
              fontSize: 14,
              color: 'white',
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
            }}
            iconStyle={{width: 20, height: 20, tintColor: 'white'}}
            labelField="label"
            valueField="value"
            value={language}
            data={data}
            placeholder="English"
            renderLeftIcon={() => (
              <View style={{paddingRight: 4}}>
                <Ionicons name="globe-outline" size={18} color="white" />
              </View>
            )}
            onChange={item => {
              setLanguage(item.value);
            }}
          />
          <View style={{flex: 35, height: 28}}>
            <TouchableOpacity
              style={{position: 'absolute', right: 0}}
              onPress={() => {}}>
              <Ionicons
                name="notifications-circle-outline"
                size={28}
                color="#555"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 16}}>
          <SettingButtonText
            label="Hey, Thanhf.-. do you want to sync notifications to your Google calendar"
            iconRight="chevron-forward-outline"
            isSelected={notifications}
            onPress={() => {
              setNotifications(!notifications);
            }}
          />
        </View>
      </View>
      <View style={styles.below}>
        <View style={{marginVertical: 16}}>
          <Text
            style={{fontFamily: 'Poppins-Medium', color: '#333', fontSize: 20}}>
            Today Class Schedule
          </Text>
        </View>
        <View></View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#3787ff',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 16,
              borderRadius: 28,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="add" color="#fff" size={24} />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 15,
                  color: '#fff',
                }}>
                Add New Schedule
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Schedule;
