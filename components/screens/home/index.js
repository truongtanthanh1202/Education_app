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
import {ProgressBar, CircularProgress} from '../../atoms';
import HomeMeeting from '../../../asset/img/home_meeting';
import CategoryItem from './CategoryItem';
import CourseItem from './CourseItem';

import styles from './style';

const fakeCourses = [
  {
    id: 1,
    description: 'Build and Deploy a website',
    id_teacher: 'Viet Anh Nguyen',
    thumbnail:
      'https://d3mxt5v3yxgcsr.cloudfront.net/courses/7475/course_7475_image.jpg',
    rate: 5,
  },
  {
    id: 2,
    description: 'Devops with AWS',
    id_teacher: 'Microsoft',
    thumbnail:
      'https://cdn.mindmajix.com/courses/aws-devops-training-110620.png',
    rate: 4.5,
  },
  {
    id: 3,
    description: 'Designing UI-UX',
    id_teacher: 'Google',
    thumbnail:
      'https://product.hstatic.net/200000350979/product/11815017442_1943370500_cd6c686ef9444a1788fc4f63fce0cac8_master.jpg',
    rate: 4.5,
  },
  {
    id: 4,
    description: 'Software Engineering',
    id_teacher: 'Viet Hoang Nguyen',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BNTFjZmE1ZmQtZTBiNi00M2U3LWFhZjktMDM2NThlYTA3OTJiXkEyXkFqcGdeQXVyODQyNDI4ODg@._V1_.jpg',
    rate: 4,
  },
];

const Home = ({route, navigation}) => {
  const fullName = 'Thanhf';
  const realtimeLearning = 46;
  const targetTimeLearning = 60;

  const [moreStatus, setMoreStatus] = useState(false);
  const [moreStatusText, setMoreStatusText] = useState('more');

  const renderHeader = () => {
    return (
      <>
        <View style={styles.headerLeft}>
          <Text style={styles.headerName}>Hi, {fullName}</Text>
          <Text style={styles.headerDescribe}>Let's start learning</Text>
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
      </>
    );
  };

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
            <Text style={{color: '#333', fontFamily: 'Poppins-Medium'}}>
              Leaned today
            </Text>
            <TouchableOpacity>
              <Text style={{color: '#3787ff', fontFamily: 'Poppins-Regular'}}>
                My courses
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 8,
            }}>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
              }}>
              {realtimeLearning}min{' '}
            </Text>

            <Text style={{color: '#000', fontFamily: 'Poppins-Regular'}}>
              / {targetTimeLearning}min
            </Text>
          </View>
          <ProgressBar
            progress="65%"
            containerStyle={{
              width: '100%',
              marginBottom: 2,
            }}></ProgressBar>
        </View>
        <ScrollView style={styles.categoriesContainer}></ScrollView>
      </>
    );
  };

  const renderCategoryScrollList = () => {
    return (
      <ScrollView horizontal={true} style={styles.categoryScrollList}>
        <CategoryItem
          backgroundColor="#ceecfe"
          title="What do you want to learn today ?"
          describe="Get started"
          svgType="homeCategory1"
          reverseDirection={false}
          onPress={() => {
            console.log('heluu1');
          }}></CategoryItem>
        <CategoryItem
          backgroundColor="#bfe4c6"
          title="Setup your learning plan!"
          describe="Calendar"
          svgType="homeCategory2"
          reverseDirection={true}
          onPress={() => {
            console.log('heluu2');
          }}></CategoryItem>
        <CategoryItem
          backgroundColor="#fbf6b5"
          title="Explore in our whole courses @@"
          describe="Let's go"
          svgType="homeCategory3"
          reverseDirection={false}
          onPress={() => {
            console.log('heluu3');
          }}></CategoryItem>
      </ScrollView>
    );
  };

  const renderLearningPlan = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: 'white',
            height: 48,
          }}>
          <Text
            style={{
              position: 'absolute',
              left: 24,
              bottom: 2,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#000',
            }}>
            Learning Plan
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#e4f1f8',
            paddingHorizontal: 20,
            paddingBottom: 12,
          }}>
          <View style={styles.learningPlanContainer}>
            <ScrollView style={styles.learningPlanList}>
              {/* Learning plan item */}
              <TouchableOpacity style={styles.learningPlanItem}>
                <CircularProgress size={24} strokeWidth={3} progress={80} />
                <Text style={styles.learningPlanItemCourse}>
                  Packaging Design
                </Text>
                <Text style={styles.learningPlanItemTarget}>
                  {40}/{48}
                </Text>
              </TouchableOpacity>
              {/* Learning plan item */}
              <TouchableOpacity style={styles.learningPlanItem}>
                <CircularProgress size={24} strokeWidth={3} progress={30} />
                <Text style={styles.learningPlanItemCourse}>
                  Product Design
                </Text>
                <Text style={styles.learningPlanItemTarget}>
                  {6}/{24}
                </Text>
              </TouchableOpacity>

              {/* more section */}
              {moreStatus === true && (
                <>
                  <TouchableOpacity style={styles.learningPlanItem}>
                    <CircularProgress size={24} strokeWidth={3} progress={80} />
                    <Text style={styles.learningPlanItemCourse}>AI</Text>
                    <Text style={styles.learningPlanItemTarget}>
                      {40}/{48}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.learningPlanItem}>
                    <CircularProgress size={24} strokeWidth={3} progress={80} />
                    <Text style={styles.learningPlanItemCourse}>AI</Text>
                    <Text style={styles.learningPlanItemTarget}>
                      {40}/{48}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.learningPlanItem}>
                    <CircularProgress size={24} strokeWidth={3} progress={80} />
                    <Text style={styles.learningPlanItemCourse}>AI</Text>
                    <Text style={styles.learningPlanItemTarget}>
                      {40}/{48}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.learningPlanItem}>
                    <CircularProgress size={24} strokeWidth={3} progress={80} />
                    <Text style={styles.learningPlanItemCourse}>AI</Text>
                    <Text style={styles.learningPlanItemTarget}>
                      {40}/{48}
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </ScrollView>
            <TouchableOpacity
              style={styles.buttonMore}
              onPress={() => {
                setMoreStatus(!moreStatus);
                if (moreStatus === false) setMoreStatusText('hide');
                else setMoreStatusText('more');
              }}>
              <Text style={styles.textInnerButtonMore}>{moreStatusText}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.describeContainer}>
            <View style={styles.describeContainerLeft}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                  color: '#333',
                }}>
                Meetup
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  color: '#333',
                }}>
                Off-line exchange of learning experiences
              </Text>
            </View>

            <View style={styles.describeContainerRigt}>
              <HomeMeeting width={100} height={100} />
            </View>
          </View>
        </View>
      </>
    );
  };

  const renderCoutinueWatchingCategory = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: 'white',
            height: 56,
          }}>
          <Text
            style={{
              position: 'absolute',
              left: 24,
              bottom: 0,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#000',
            }}>
            Cotinue to watch
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 4,
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
              see more
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: '#e4f1f8',
            minHeight: 220,
            paddingBottom: 8,
          }}>
          <ScrollView
            horizontal={true}
            style={{marginLeft: 10, marginVertical: 4}}>
            {fakeCourses.map(course => {
              return (
                <View key={course.id}>
                  <CourseItem
                    source={course.thumbnail}
                    title={course.description}
                    owner={course.id_teacher}
                    rating={course.rate}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </>
    );
  };
  const renderPopularCourseCategory = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: 'white',
            height: 56,
          }}>
          <Text
            style={{
              position: 'absolute',
              left: 24,
              bottom: 0,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#000',
            }}>
            Popular courses
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 4,
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
              see more
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: '#e4f1f8',
            minHeight: 220,
            paddingBottom: 8,
          }}>
          <ScrollView
            horizontal={true}
            style={{marginLeft: 10, marginVertical: 4}}>
            {fakeCourses.map(course => {
              return (
                <View key={course.id}>
                  <CourseItem
                    source={course.thumbnail}
                    title={course.description}
                    owner={course.id_teacher}
                    rating={course.rate}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </>
    );
  };
  const renderLatestCourseCategory = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: 'white',
            height: 56,
          }}>
          <Text
            style={{
              position: 'absolute',
              left: 24,
              bottom: 0,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#000',
            }}>
            Latest Course
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 4,
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
              see more
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: '#e4f1f8',
            minHeight: 220,
            paddingBottom: 8,
          }}>
          <ScrollView
            horizontal={true}
            style={{marginLeft: 10, marginVertical: 4}}>
            {fakeCourses.map(course => {
              return (
                <View key={course.id}>
                  <CourseItem
                    source={course.thumbnail}
                    title={course.description}
                    owner={course.id_teacher}
                    rating={course.rate}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
        style={{height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}}
      />
      <View style={styles.top}>
        {/* Header section */}
        {renderHeader()}
      </View>
      <View style={styles.bellow}>
        <ScrollView>
          <View style={{backgroundColor: 'white', minHeight: 300}}>
            {/* Categories and Tracking learning plan */}
            {renderLearingTracking()}
            <View
              style={{
                backgroundColor: '#e4f1f8',
                height: 250,
              }}>
              {/* Categories section */}
              {renderCategoryScrollList()}
            </View>
          </View>

          <View>
            {/* Learning plan section */}
            {renderLearningPlan()}
          </View>

          <View>
            {/* Cotinue watching section */}
            {renderCoutinueWatchingCategory()}
          </View>

          <View>
            {/* Popular Course section */}
            {renderPopularCourseCategory()}
          </View>

          <View>
            {/* Latest Added Course section */}
            {renderLatestCourseCategory()}
          </View>
          <View
            style={{
              backgroundColor: '#e4f1f8',
              height: 20,
            }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
