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

import styles from './style';

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
          reverseDirection={false}></CategoryItem>
        <CategoryItem
          backgroundColor="#bfe4c6"
          title="Setup your learning plan!"
          describe="Calendar"
          svgType="homeCategory2"
          reverseDirection={true}></CategoryItem>
        <CategoryItem
          backgroundColor="#fbf6b5"
          title="Explore in our whole courses @@"
          describe="Let's go"
          svgType="homeCategory3"
          reverseDirection={false}></CategoryItem>
      </ScrollView>
    );
  };

  const renderLearingPlan = () => {
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
            {renderLearingPlan()}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
