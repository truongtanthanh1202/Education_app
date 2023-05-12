import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import {Tabs} from 'react-native-collapsible-tab-view';
import VideoFrame from '../../../atoms/VideoFrame';
import styles from './style';
import axios from 'axios';

const avatar = require('../../../../asset/img/img_avatar.jpeg');

const CourseDetails = props => {
  const {
    role,
    email,
    courseName,
    courseDescription,
    id_teacher,
    thumbnail,
    rate,
    total_hours,
    totalLessons,
    completedLessons,
    id_course,
  } = props.route.params;
  const Overview = () => {
    return (
      <View style={{flex: 1, marginHorizontal: 20, gap: 24, marginBottom: 48}}>
        <View style={{flexDirection: 'column', gap: 24, marginTop: 24}}>
          <Text
            style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}>
            Introduction
          </Text>
          <Text style={{fontFamily: 'Poppins-Regular'}}>
            Aliquam volutpat ut odio at euismod. Maecenas molestie quam vitae
            nulla tincidunt, non pretium ex accumsan
          </Text>
          <Text style={{fontFamily: 'Poppins-Regular'}}>
            Quisque aliquam, arcu quis euismod tincidunt, ex nunc molestie urna,
            ut ultricies nisi felis id est.
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#3787ff',
              alignItems: 'center',
              paddingVertical: 20,
              borderRadius: 32,
            }}>
            <Text style={{fontSize: 18, color: 'white'}}> See more </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'column', gap: 24}}>
          <Text
            style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}>
            Feedback
          </Text>
        </View>

        {/* Begin Feedback */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              paddingHorizontal: 52,
              paddingVertical: 24,
              backgroundColor: 'white',
              borderRadius: 24,
            }}>
            <View style={{flexDirection: 'row', gap: 4}}>
              <Ionicons name="star" size={18} color="#ff9d42" />
              <Text
                style={[
                  styles.screenTitle,
                  {fontSize: 16, fontWeight: 'bold'},
                ]}>
                {' '}
                4.7{' '}
              </Text>
            </View>
            <Text
              style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}>
              {' '}
              Reviews{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              paddingHorizontal: 52,
              paddingVertical: 24,
              backgroundColor: 'white',
              borderRadius: 24,
            }}>
            <View style={{flexDirection: 'row', gap: 4}}>
              <Ionicons name="person-outline" size={18} />
              <Text
                style={[
                  styles.screenTitle,
                  {fontSize: 16, fontWeight: 'bold'},
                ]}>
                {' '}
                753{' '}
              </Text>
            </View>
            <Text
              style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}>
              {' '}
              Students{' '}
            </Text>
          </View>
        </View>

        {/* This is 3 mock comments */}
        <View style={{flexDirection: 'row', gap: 16, paddingRight: 8}}>
          <Image
            source={avatar}
            resizeMode="cover"
            style={{
              width: Platform.OS === 'ios' ? 40 : 48,
              height: Platform.OS === 'ios' ? 40 : 48,
              borderRadius: 32,
            }}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              @mannes_sammy{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              31 mins ago{' '}
            </Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
              Quisque leo neque, venenatis eget lorem a, aliquam efficitur
              sapien.
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', gap: 16, paddingRight: 8}}>
          <Image
            source={avatar}
            resizeMode="cover"
            style={{
              width: Platform.OS === 'ios' ? 40 : 48,
              height: Platform.OS === 'ios' ? 40 : 48,
              borderRadius: 32,
            }}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              @james{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              01 hour ago{' '}
            </Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
              Great course.
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', gap: 16, paddingRight: 8}}>
          <Image
            source={avatar}
            resizeMode="cover"
            style={{
              width: Platform.OS === 'ios' ? 40 : 48,
              height: Platform.OS === 'ios' ? 40 : 48,
              borderRadius: 32,
            }}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              @mouni{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              11 hours ago{' '}
            </Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
              Aliquam sodales elementum felis.
            </Text>
          </View>
        </View>
        {/* End Feedback */}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#3787ff',
              alignItems: 'center',
              paddingVertical: 20,
              borderRadius: 32,
            }}>
            <Text style={{fontSize: 18, color: 'white'}}> Load more </Text>
          </TouchableOpacity>
        </View>

        {/* Begin Comments */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}>
            5 Comments
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'grey',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: 32,
            }}>
            <Text style={{fontSize: 16, color: 'white'}}> Add comment </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', gap: 16, paddingRight: 12}}>
          <Image
            source={avatar}
            resizeMode="cover"
            style={{
              width: Platform.OS === 'ios' ? 40 : 48,
              height: Platform.OS === 'ios' ? 40 : 48,
              borderRadius: 32,
            }}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>
              @mouni{' '}
            </Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>
              11 mins ago . Student
            </Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
              How to get better at line? I am really stuck
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', gap: 16, paddingRight: 12}}>
          <Image
            source={avatar}
            resizeMode="cover"
            style={{
              width: Platform.OS === 'ios' ? 40 : 48,
              height: Platform.OS === 'ios' ? 40 : 48,
              borderRadius: 32,
            }}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>
              @simon{' '}
            </Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>
              32 mins ago . Student
            </Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
              How can I upload img to cloud?
            </Text>
          </View>
        </View>
        {/* End Comments */}
      </View>
    );
  };

  const mockLessons = [
    {
      id: 1,
      title: 'Introduction to cimics\ndrawing course',
      thumbnail:
        'https://img-b.udemycdn.com/course/750x422/1259404_72d4_21.jpg',
      description:
        'Proin in erat ante. Ut dictum massa non tellus pulvinar, id pellentesque nunc hendrerit. Quisque iaculis ultrices dapibus. In nec dui et quam faucibus faucibus eget in tellus.',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      thumbnail: 'https://img-c.udemycdn.com/course/750x422/2400268_3fbb_4.jpg',
      description:
        'Proin in erat ante. Ut dictum massa non tellus pulvinar, id pellentesque nunc hendrerit. Quisque iaculis ultrices dapibus. In nec dui et quam faucibus faucibus eget in tellus.',
    },
    {
      id: 3,
      title: 'Curabitur euismod lacus lorem',
      thumbnail:
        'https://the.ismaili/sites/default/files/styles/carousel_banner/public/picture-of-a-person-drawing-1.jpg?itok=CNvEhBYk',
      description:
        'Proin in erat ante. Ut dictum massa non tellus pulvinar, id pellentesque nunc hendrerit. Quisque iaculis ultrices dapibus. In nec dui et quam faucibus faucibus eget in tellus.',
    },
    {
      id: 4,
      title: 'Quisque leo neque',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHb9l6LS6HfXxHsKx0J-QgCe5RzysV0yyhWQ&usqp=CAU',
      description:
        'Proin in erat ante. Ut dictum massa non tellus pulvinar, id pellentesque nunc hendrerit. Quisque iaculis ultrices dapibus. In nec dui et quam faucibus faucibus eget in tellus.',
    },
  ];
  const [lessonsData, setLessonsData] = useState(mockLessons);
  const Lessons = () => {
    const getLessons = async () => {
      const userdata = {
        email: email,
        id_course: id_course,
      };
      const res = await axios.post(
        `http://10.0.2.2:4848/${role}/MyLessons`,
        userdata,
      );
      const resData = res.data;
      setLessonsData(resData);
      console.log(resData);
    };
    useEffect(() => {
      getLessons();
    }, []);
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          gap: 16,
          marginBottom: 48,
          paddingTop: 32,
        }}>
        {role === 'teacher' && (
          <TouchableOpacity
            onPress={() => {
              console.log(id_course);
              props.navigation.navigate('CreateLesson', {
                id_course: id_course,
              });
            }}
            activeOpacity={0.7}
            style={{
              borderColor: '#3787ff',
              borderWidth: 1,
              borderRadius: 6,
              padding: 12,
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'transparent',
                paddingHorizontal: 30,
                paddingVertical: 8,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#777',
                borderWidth: 1,
                borderRadius: 6,
              }}>
              <Text
                style={{
                  fontSize: 50,
                  color: '#777',
                }}>
                +
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'transparent',
                marginHorizontal: 28,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                  lineHeight: 28,
                  color: '#555',
                }}>
                {`Create new lesson for \nthis course`}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {lessonsData.map((lesson, index) => {
          return (
            <View style={{flexDirection: 'column', gap: 12}} key={index}>
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                style={{flexDirection: 'row', gap: 8, marginRight: 12}}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Lesson', {
                      lessonIndex: index + 1,
                    });
                  }}>
                  <Image
                    source={{uri: lesson.thumbnail}}
                    resizeMode="cover"
                    style={{width: 150, height: 90}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingVertical: 4,
                  }}>
                  <Text
                    style={[
                      styles.screenTitle,
                      {
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginRight: 40,
                      },
                    ]}>
                    {lesson.description}
                  </Text>
                  <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>
                    Lesson {index + 1}{' '}
                  </Text>
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                    lineHeight: 20,
                  }}>
                  {lesson.topic}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  const renderHeader = () => {
    const data = [
      {label: 'English', value: 'English'},
      {label: 'Vietnamese', value: 'Vietnamese'},
    ];
    const [language, setLanguage] = React.useState('English');
    return (
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
              <Ionicons name="bookmark-outline" size={28} color="#555" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const renderIntroduction = () => {
    return (
      <View
        style={{
          flexDirection: 'column',
          paddingHorizontal: 16,
          paddingVertical: 16,
          gap: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
            gap: 8,
          }}>
          <Image
            source={require('../../../../asset/img/img_avatar.jpeg')}
            resizeMode="cover"
            style={{
              width: Platform.OS === 'ios' ? 40 : 48,
              height: Platform.OS === 'ios' ? 40 : 48,
              borderRadius: 32,
            }}></Image>
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
              fontSize: 16,
              color: '#333',
              marginTop: 16,
            }}>
            {' '}
            {id_teacher}{' '}
          </Text>
        </View>

        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 22,
            color: 'black',
          }}>
          {courseName}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 0,
            alignItems: 'center',
            gap: 72,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="time-outline" size={24} />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#333',
                marginTop: 2,
              }}>
              {' '}
              {total_hours} hour
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="videocam-outline" size={24} />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#333',
                marginTop: 2,
              }}>
              {' '}
              12 Lessons
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
            gap: 68,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="star-outline" size={24} />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#333',
                marginTop: 2,
              }}>
              {' '}
              {rate} (753){' '}
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="person-outline" size={24} />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#333',
                marginTop: 2,
              }}>
              {' '}
              2K students{' '}
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontFamily: 'Poppins-Relugar',
            fontSize: 14,
            color: '#555',
            marginTop: 12,
          }}>
          {courseDescription}
        </Text>
      </View>
    );
  };
  const tabViewHeader = () => {
    return (
      <>
        {renderHeader()}
        <VideoFrame thumbnail={thumbnail} />
        {renderIntroduction()}
      </>
    );
  };
  const renderBody = () => {
    const HEADER_HEIGHT = 350;
    return (
      <Tabs.Container
        headerHeight={HEADER_HEIGHT}
        headerContainerStyle={{
          backgroundColor: '#e4f1f9',
        }}
        renderHeader={tabViewHeader}>
        <Tabs.Tab name={'Overview'}>
          <Tabs.ScrollView>{Overview()}</Tabs.ScrollView>
        </Tabs.Tab>

        <Tabs.Tab name={'Lessons'}>
          <Tabs.ScrollView>{Lessons()}</Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
      />
      {renderBody()}
    </SafeAreaView>
  );
};

export default CourseDetails;
