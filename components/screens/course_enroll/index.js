import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

const CourseEnroll = props => {
  const {
    courseName,
    courseDescription,
    id_teacher,
    thumbnail,
    rate,
    total_hours,
  } = props.route.params;
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="chevron-back-outline" size={28} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
      />
      {renderHeader()}
      <Text>{courseName}</Text>
      <Text>{courseDescription}</Text>
      <Text>{id_teacher}</Text>
      <Text>{thumbnail}</Text>
      <Text>{rate}</Text>
      <Text>{total_hours}</Text>
    </SafeAreaView>
  );
};

export default CourseEnroll;
