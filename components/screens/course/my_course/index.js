import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import styles from './style';
import {ProgressBar} from '../../../atoms';
import Ionicons from 'react-native-vector-icons/Ionicons';

const realtimeLearning = 28;
const targetTimeLearning = 60;

const dataSource = [
  {
    id: 1,
    courseName: 'Build and Deploy a website',
    courseDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make`,
    id_teacher: 'Viet Anh Nguyen',
    thumbnail:
      'https://d3mxt5v3yxgcsr.cloudfront.net/courses/7475/course_7475_image.jpg',
    rate: 5,
    total_hours: 16,
    totalLessons: 24,
    completedLessons: 24,
  },
  {
    id: 2,
    courseName: 'Devops with AWS',
    courseDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to`,
    id_teacher: 'Microsoft',
    thumbnail:
      'https://cdn.mindmajix.com/courses/aws-devops-training-110620.png',
    rate: 4.5,
    total_hours: 14,
    totalLessons: 24,
    completedLessons: 14,
  },
  {
    id: 3,
    courseName: 'Software Engineering',
    courseDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever`,
    id_teacher: 'Viet Hoang Nguyen',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BNTFjZmE1ZmQtZTBiNi00M2U3LWFhZjktMDM2NThlYTA3OTJiXkEyXkFqcGdeQXVyODQyNDI4ODg@._V1_.jpg',
    rate: 4,
    total_hours: 12,
    totalLessons: 18,
    completedLessons: 12,
  },
];

const renderLearingTracking = () => {
  return (
    <>
      <View style={styles.trackingCard}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}>
          <Text style={{color: '#fff', fontFamily: 'Poppins-Medium'}}>
            Leaned today
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}>
            {realtimeLearning}min{' '}
          </Text>

          <Text style={{color: '#fff', fontFamily: 'Poppins-Regular'}}>
            / {targetTimeLearning}min
          </Text>
        </View>
        <ProgressBar
          progress={`${(realtimeLearning * 100) / targetTimeLearning}` + '%'}
          progressStyle={{
            backgroundColor: '#333',
          }}
          containerStyle={{
            width: '100%',
            marginBottom: 2,
            backgroundColor: '#fff',
          }}></ProgressBar>
      </View>
    </>
  );
};

const MyCourse = props => {
  const {role, email, fisrtname, lastname} = props.route.params;
  console.log(fisrtname, lastname, role, email);
  const handleToCreateCourse = () => {
    props.navigation.navigate('CreateCourse', {
      role: role,
      email: email,
      fisrtname: fisrtname,
      lastname: lastname,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
        style={{
          height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        }}
      />
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="chevron-back-outline" size={28} color="#333" />
          </TouchableOpacity>
          <View
            style={{
              flex: 90,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Poppins-Medium',
                fontSize: 22,
                color: '#333',
              }}>
              {role === 'teacher' && '      '}My courses
            </Text>
          </View>
          {role === 'teacher' && (
            <TouchableOpacity
              onPress={handleToCreateCourse}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#3787ff',
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 12,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                  color: '#fff',
                }}>
                + Create
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={{paddingHorizontal: 20, marginBottom: 20}}>
        {renderLearingTracking()}
      </View>
      <View style={styles.coursesList}>
        <FlatList
          data={dataSource}
          numColumns={2}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('CourseDetails', {
                  courseName: item.courseName,
                  courseDescription: item.courseDescription,
                  id_teacher: item.id_teacher,
                  thumbnail: item.thumbnail,
                  rate: item.rate,
                  total_hours: item.total_hours,
                  totalLessons: item.totalLessons,
                  completedLessons: item.completedLessons,
                });
              }}
              activeOpacity={0.7}
              key={index}
              style={styles.coursesListItem}>
              <Text style={styles.coursesListItemTitle}>{item.courseName}</Text>
              <ProgressBar
                progress={
                  `${(item.completedLessons * 100) / item.totalLessons}` + '%'
                }
                progressStyle={{
                  backgroundColor: '#fff',
                }}
                containerStyle={{
                  width: '100%',
                  marginBottom: 2,
                  backgroundColor: '#333',
                }}></ProgressBar>
              {item.completedLessons === item.totalLessons && (
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                  }}>
                  Completed
                </Text>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop:
                    item.completedLessons === item.totalLessons ? 8 : 28,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      color: '#fff',
                      fontSize: 16,
                    }}>
                    {item.completedLessons}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      color: '#fff',
                      fontSize: 14,
                    }}>
                    /{item.totalLessons}
                  </Text>
                </View>
                <TouchableOpacity style={styles.coursesListButtonPlay}>
                  <Ionicons name="caret-forward" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyCourse;
