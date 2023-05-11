import React, {useState} from 'react';
import {
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CourseTab1 from '../../../asset/img/course_tab1';
import CourseTab2 from '../../../asset/img/course_tab2';
import HomeCategory1 from '../../../asset/img/home_category1';
import HomeCategory2 from '../../../asset/img/home_category2';
import HomeCategory3 from '../../../asset/img/home_category3';
import LessonCard from './lesson_card';

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
  const renderOverviewCatalogue = () => {
    const [descriptionHeight, setDescriptionHeight] = useState(100);
    const randomImage = () => {
      const ImgArray = [
        <CourseTab1
          width={160}
          height={160}
          style={{position: 'absolute', bottom: 0, right: 0}}
        />,
        <CourseTab2
          width={160}
          height={160}
          style={{position: 'absolute', bottom: 0, right: 0}}
        />,
        <HomeCategory1
          width={160}
          height={160}
          style={{position: 'absolute', bottom: 0, right: 0}}
        />,
        <HomeCategory2
          width={160}
          height={160}
          style={{position: 'absolute', bottom: 0, right: 0}}
        />,
        <HomeCategory3
          width={160}
          height={160}
          style={{position: 'absolute', bottom: 0, right: 0}}
        />,
      ];
      return ImgArray[Math.floor(Math.random() * ImgArray.length)];
    };
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            paddingTop: 16,
            height: 180,
          }}>
          <View style={{flex: 45, backgroundColor: 'transparent'}}>
            <Text
              style={{
                fontFamily: 'Comfortaa-Bold',
                fontSize: 18,
                color: '#000',
                marginTop: 8,
              }}>
              {courseName}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                color: '#777',
                position: 'absolute',
                bottom: 16,
              }}>
              {`Teacher: \n` + id_teacher}
            </Text>
          </View>
          <View style={{flex: 55, backgroundColor: 'transparent'}}>
            {randomImage()}
          </View>
        </View>
        <Text
          style={{
            fontFamily: 'Comfortaa-Medium',
            fontSize: 14,
            color: '#555',
            marginLeft: 20,
            marginTop: 4,
          }}>
          {total_hours} hours . {24} lessons
        </Text>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 12,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 15,
              color: '#000',
              marginBottom: 8,
            }}>
            About this course
          </Text>
          <ScrollView style={{height: descriptionHeight}}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 12,
                color: '#777',
                textAlign: 'justify',
              }}>
              {courseDescription}
            </Text>
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              let nextHeight = descriptionHeight === 100 ? 'auto' : 100;
              setDescriptionHeight(nextHeight);
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: descriptionHeight === 100 ? 16 : 0,
            }}>
            {descriptionHeight === 100 ? (
              <Ionicons name="chevron-down-outline" size={24} color="#666" />
            ) : (
              <Ionicons name="chevron-up-outline" size={24} color="#666" />
            )}
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const renderCoursesOverviewLesson = () => {
    const allLessons = [
      {
        title: 'Block model',
        duration: '15:40',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0519/4383/3779/products/63695-rear_1024x1024.jpg?v=1626989681',
      },
      {
        title: 'Containers',
        duration: '15:55',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0519/4383/3779/products/63695-rear_1024x1024.jpg?v=1626989681',
      },
      {
        title: 'Div Blocks, typography',
        duration: '25:15',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0519/4383/3779/products/63695-rear_1024x1024.jpg?v=1626989681',
      },
      {
        title: 'Spacing, indents',
        duration: '24:15',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0519/4383/3779/products/63695-rear_1024x1024.jpg?v=1626989681',
      },
    ];
    return (
      <View>
        {allLessons.map((lesson, index) => {
          return (
            <View key={index} style={{marginVertical: 10}}>
              <LessonCard
                courseIndex={index + 1}
                courseName={lesson.title}
                duration={lesson.duration}
                enableCard={index > 1 ? false : true}
                thumbnail={lesson.thumbnail}
              />
            </View>
          );
        })}
      </View>
    );
  };
  const renderBottomContent = () => {
    function handerRegisterThisCoure() {
      console.log('Register this course to server');
    }
    const shadow =
      Platform.OS === 'ios'
        ? {
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }
        : {elevation: 4, shadowColor: '#171717'};
    return (
      <View
        style={{
          position: 'absolute',
          width: '100%',
          flexDirection: 'row',
          backgroundColor: '#e4f1f9',
          bottom: 0,
          paddingHorizontal: 20,
          paddingTop: 12,
          paddingBottom: 20,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          ...shadow,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            height: 48,
            paddingHorizontal: 24,
            backgroundColor: '#fff',
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 16,
          }}>
          <Ionicons name="star-outline" size={20} color="#3787ff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handerRegisterThisCoure}
          activeOpacity={0.7}
          style={{
            height: 48,
            flex: 1,
            paddingHorizontal: 24,
            backgroundColor: '#3787ff',
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontFamily: 'Poppins-Medium', color: '#fff', fontSize: 16}}>
            Enroll now
          </Text>
        </TouchableOpacity>
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
      <ScrollView style={{flex: 1}}>
        {renderOverviewCatalogue()}
        {renderCoursesOverviewLesson()}
      </ScrollView>
      <View style={{height: 80, backgroundColor: 'transparent'}}></View>
      {renderBottomContent()}
    </SafeAreaView>
  );
};

export default CourseEnroll;
