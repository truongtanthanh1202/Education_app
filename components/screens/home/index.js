import React from 'react';
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
import {ProgressBar} from '../../atoms';

import styles from './style';

const Home = ({route, navigation}) => {
  const fullName = 'Thanhf';
  const realtimeLearning = 46;
  const targetTimeLearning = 60;
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
              marginBottom: 10,
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
              marginBottom: 4,
            }}></ProgressBar>
        </View>
        <ScrollView style={styles.categoriesContainer}></ScrollView>
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
          <View style={{backgroundColor: 'white'}}>
            {/* Categories and Tracking learning plan */}
            {renderLearingTracking()}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
