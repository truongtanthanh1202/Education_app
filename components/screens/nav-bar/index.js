import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, Keyboard} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../home';
import {Search1, Search2} from '../search';
import Course from '../course';
import Profile from '../profile';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  const [bottomMarginStatus, setbottomMarginStatus] = useState(20);
  useEffect(() => {
    const showNavBar = Keyboard.addListener('keyboardDidShow', () => {
      setbottomMarginStatus(0);
    });
    const hideNavBar = Keyboard.addListener('keyboardDidHide', () => {
      setbottomMarginStatus(20);
    });

    return () => {
      showNavBar.remove();
      hideNavBar.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: bottomMarginStatus,
          left: 20,
          right: 20,
          elevation: 0.2,
          backgroundColor: '#fff',
          borderRadius: 15,
          minHeight: 60,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Course') {
            iconName = focused ? 'terminal' : 'terminal-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Ionicons name={iconName} size={size} color={color} />
              <Text
                disabled={focused ? false : true}
                style={{
                  color: focused ? '#3788ff' : '#333',
                }}>
                {route.name}
              </Text>
            </View>
          );
        },
        // '#3788ff',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search2} />
      <Tab.Screen name="Course" component={Course} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Navbar;
