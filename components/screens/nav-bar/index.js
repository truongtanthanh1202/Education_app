import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';

import Home from '../home';
import {Search1, Search2} from '../search';
import Course from '../course';
import Profile from '../profile';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 16,
          left: 12,
          right: 12,
          elevation: 0.2,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 60,
        },
        tabBarIcon: ({focused}) => {
          let iconName = route.name;
          let iconSource = '../../../asset/icons/' + route.name + '.png';
          //   console.log(iconSource);

          return (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../../asset/icons/Home.png')}
                // source={require(iconSource)}
                resizeMode="contain"
                style={{
                  width: 32,
                  height: 32,
                  tintColor: focused ? '#3788ff' : '#333',
                }}
              />
              <Text
                disabled={focused ? false : true}
                style={{
                  color: focused ? '#3788ff' : '#333',
                }}>
                {iconName}
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
