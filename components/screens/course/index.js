import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CourseTab1 from '../../../asset/img/course_tab1';
import CourseTab2 from '../../../asset/img/course_tab2';

import styles from './style';

const renderHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Text style={styles.headerName}>Course</Text>
      </View>
      <View style={styles.headerRight}>
        <View
          style={{
            width: Platform.OS === 'ios' ? 36 : 42,
            height: Platform.OS === 'ios' ? 36 : 42,
            borderRadius: Platform.OS === 'ios' ? 50 : 60,
            alignSelf: 'center',
            overflow: 'hidden',
          }}>
          <Image
            source={require('../../../asset/img/img_account.png')}
            resizeMode="cover"
            style={{
              width: Platform.OS === 'ios' ? 36 : 42,
              height: Platform.OS === 'ios' ? 36 : 42,
            }}></Image>
        </View>
      </View>
    </View>
  );
};

const renderTopSearch = () => {
  return (
    <View style={{marginTop: 16, marginHorizontal: 20}}>
      <TextInput
        placeholder="Find course"
        placeholderTextColor="#222"
        style={{
          height: 50,
          borderRadius: 38,
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 44,
          fontFamily: 'Poppins-Medium',
          fontSize: 16,
        }}></TextInput>
      <Ionicons
        name="search"
        size={24}
        color="#333"
        style={{position: 'absolute', left: 10, top: 12}}
      />
      <Ionicons
        name="options"
        size={24}
        color="#333"
        style={{position: 'absolute', right: 10, top: 12}}
      />
    </View>
  );
};

const renderCourseNavigator = () => {
  return (
    <View
      style={{
        marginTop: 32,
        flexDirection: 'row',
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity
        style={{
          height: 72,
          flex: 50,
          marginRight: 8,
          backgroundColor: '#3787ff',
          borderRadius: 16,
        }}>
        <CourseTab1
          height={82}
          width={100}
          style={{position: 'absolute', bottom: 0, left: 8}}
        />
        <View
          style={{
            height: 24,
            backgroundColor: 'white',
            position: 'absolute',
            right: 0,
            bottom: 8,
            paddingLeft: 8,
            paddingRight: 6,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              color: '#3787ff',
            }}>
            My course
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 72,
          flex: 50,
          marginLeft: 8,
          backgroundColor: '#3787ff',
          borderRadius: 16,
        }}>
        <CourseTab2
          height={82}
          width={100}
          style={{position: 'absolute', bottom: 0}}
        />
        <View
          style={{
            height: 24,
            backgroundColor: 'white',
            position: 'absolute',
            right: 0,
            bottom: 8,
            paddingLeft: 8,
            paddingRight: 6,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              color: '#3787ff',
            }}>
            Schedule
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const renderCategoriesOptions = () => {
  const categories = ['All', 'Popular', 'New'];
  return (
    <View
      style={{
        height: 56,
        alignItems: 'center',
        paddingHorizontal: 24,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={{
          minWidth: 68,
          paddingHorizontal: 4,
          paddingVertical: 2,
          backgroundColor: '#3787ff',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
        }}>
        <Text
          style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 14}}>
          All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Course = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
        style={{height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}}
      />
      <View style={styles.fixedContainer}>
        {/* Fixed container section */}
        {renderHeader()}
        {renderTopSearch()}
        {renderCourseNavigator()}
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            marginTop: 12,
          }}>
          <Text
            style={{
              position: 'absolute',
              left: 24,
              bottom: 4,
              fontFamily: 'Poppins-Medium',
              fontSize: 20,
              color: '#000',
            }}>
            Choise your course
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 12,
              right: 24,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Comportaa-Medium',
                fontSize: 16,
                color: '#3787ff',
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        {renderCategoriesOptions()}
      </View>
      <View style={styles.scrollContainer}></View>
    </SafeAreaView>
  );
};

export default Course;
