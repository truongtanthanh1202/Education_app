import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CourseTab1 from '../../../asset/img/course_tab1';
import CourseTab2 from '../../../asset/img/course_tab2';

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

const fakeCourses = [
  {
    id: 1,
    description: 'Build and Deploy a website',
    id_teacher: 'Viet Anh Nguyen',
    thumbnail:
      'https://d3mxt5v3yxgcsr.cloudfront.net/courses/7475/course_7475_image.jpg',
    rate: 5,
    total_hours: 16,
  },
  {
    id: 2,
    description: 'Devops with AWS',
    id_teacher: 'Microsoft',
    thumbnail:
      'https://cdn.mindmajix.com/courses/aws-devops-training-110620.png',
    rate: 4.5,
    total_hours: 14,
  },
  {
    id: 3,
    description: 'Designing UI-UX',
    id_teacher: 'Google',
    thumbnail:
      'https://product.hstatic.net/200000350979/product/11815017442_1943370500_cd6c686ef9444a1788fc4f63fce0cac8_master.jpg',
    rate: 4.5,
    total_hours: 13,
  },
  {
    id: 4,
    description: 'Software Engineering',
    id_teacher: 'Viet Hoang Nguyen',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BNTFjZmE1ZmQtZTBiNi00M2U3LWFhZjktMDM2NThlYTA3OTJiXkEyXkFqcGdeQXVyODQyNDI4ODg@._V1_.jpg',
    rate: 4,
    total_hours: 12,
  },
];

const filterCourse = option => {
  if (option === 'All') {
    return fakeCourses;
  } else if (option === 'Popular') {
    return fakeCourses.filter(course => {
      return course.rate > 4;
    });
  } else if (option === 'New') {
    return fakeCourses;
  }
};

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

const Course = props => {
  const userRole = props.route.params.role;
  const initialEmail = props.route.params.email;

  const categories = [
    {
      isActive: active,
      name: 'All',
    },
    {
      isActive: false,
      name: 'Popular',
    },
    {
      isActive: false,
      name: 'New',
    },
  ];
  const [option, setOption] = useState('All');
  const [active, setActive] = useState(true);
  const [hideFlatlist, setHideFlatlist] = useState(false);
  useEffect(() => {
    const showNavBar = Keyboard.addListener('keyboardDidShow', () => {
      setHideFlatlist(true);
    });
    const hideNavBar = Keyboard.addListener('keyboardDidHide', () => {
      setHideFlatlist(false);
    });

    return () => {
      showNavBar.remove();
      hideNavBar.remove();
    };
  }, []);
  const handlerToMyCourse = () => {
    props.navigation.navigate('MyCourse', {
      role: userRole,
      email: initialEmail,
    });
  };
  const handlerToSchedule = () => {
    props.navigation.navigate('Schedule', {
      role: userRole,
      email: initialEmail,
    });
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <View style={styles.fixedContainer}>
            {/* Fixed container section */}
            {renderHeader()}
            {renderTopSearch()}
            {
              <View
                style={{
                  marginTop: 32,
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                }}>
                <TouchableOpacity
                  onPress={handlerToMyCourse}
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
                  onPress={handlerToSchedule}
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
            }
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

            <View
              style={{
                height: 56,
                alignItems: 'center',
                paddingHorizontal: 24,
                flexDirection: 'row',
              }}>
              {categories.map((category, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.7}
                    onPress={() => {
                      if (category.isActive == false) {
                        setActive(!active);
                      }
                      setOption(category.name);
                      // console.log(category.name, category.isActive);
                    }}
                    style={{
                      minWidth: 68,
                      paddingHorizontal: 4,
                      paddingVertical: 2,
                      backgroundColor:
                        category.isActive === true ? '#3787ff' : '#fff',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 16,
                      marginRight: 20,
                      ...shadow,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                        color: category.isActive === true ? '#fff' : '#333',
                        fontSize: 14,
                      }}>
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={styles.scrollContainer}>
            {!hideFlatlist && (
              <FlatList
                data={filterCourse(option)}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      padding: 10,
                      marginHorizontal: 20,
                      backgroundColor: 'white',
                      marginBottom: 16,
                      borderRadius: 12,
                      flexDirection: 'row',
                      ...shadow,
                    }}>
                    <View
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 6,
                        overflow: 'hidden',
                        elevation: 2,
                        shadowColor: '#171717',
                        shadowColor: '#171717',
                        shadowOffset: {width: -2, height: 4},
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                      }}>
                      <Image
                        source={{
                          uri: item.thumbnail,
                        }}
                        resizeMode="cover"
                        style={{width: 70, height: 70, borderRadius: 6}}
                      />
                    </View>
                    <View style={{marginLeft: 28}}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          fontSize: 16,
                          lineHeight: 18,
                          color: '#222',
                          maxHeight: 36,
                        }}>
                        {item.description}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="person" color="#555" size={12} />
                        <Text
                          style={{marginLeft: 2, fontFamily: 'Poppins-Medium'}}>
                          {item.id_teacher}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 4,
                        }}>
                        <Ionicons
                          name="star"
                          size={12}
                          color="#ff9d42"></Ionicons>
                        <Text
                          style={{
                            color: '#555',
                            fontWeight: '500',
                            fontSize: 14,
                          }}>
                          {item.rate}
                        </Text>
                        <Text
                          style={{
                            backgroundColor: '#3787ff',
                            color: '#fff',
                            paddingHorizontal: 8,
                            paddingTop: 4,
                            paddingBottom: 2,
                            borderRadius: 10,
                            fontFamily: 'Poppins-Regular',
                            fontSize: 12,
                            lineHeight: 14,
                            marginLeft: 12,
                          }}>
                          {item.total_hours} hours
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}></FlatList>
            )}
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Course;
