import React, {useState, useRef} from 'react';
import {
  Animated,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VideoFrame from '../../../atoms/VideoFrame';
import Pdf from 'react-native-pdf';

const Tab = createMaterialTopTabNavigator();

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

const Lesson = ({route, navigation}) => {
  const {lessonIndex} = route.params;
  const gobackHandler = () => {
    navigation.goBack();
  };
  const renderHeader = props => {
    return (
      <View style={styles.top}>
        <TouchableOpacity style={styles.buttonBack} onPress={gobackHandler}>
          <Ionicons name="chevron-back-outline" size={28} color="#333" />
        </TouchableOpacity>
        <View>
          <Text style={styles.screenTitle}> Lessons {lessonIndex} </Text>
        </View>
        <View style={{flex: 35, height: 28}}>
          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={() => {}}>
            <Ionicons name="bookmark-outline" size={28} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const LessonVideos = props => {
    return (
      <View style={{flex: 1, backgroundColor: '#e4f1f9'}}>
        <VideoFrame
          thumbnail={
            'https://hasura.io/blog/content/images/2019/02/nextjs-serverless-now-hasura-graphql.png'
          }
        />
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: 'Comfortaa-Medium',
              color: '#333',
              fontSize: 16,
              marginLeft: 16,
              marginBottom: 8,
            }}>
            Document for this lesson
          </Text>
          <Pdf
            trustAllCerts={false}
            source={{
              uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
              cache: true,
            }}
            page={6}
            style={{
              flex: 1,
              backgroundColor: '#e4f1f9',
              width: Dimensions.get('window').width,
            }}
          />
        </View>
      </View>
    );
  };

  const LessonTheory = props => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#e4f1f9',
          paddingHorizontal: 12,
        }}>
        <Pdf
          trustAllCerts={false}
          source={{
            uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
            cache: true,
          }}
          spacing={16}
          minScale={0.5}
          maxScale={3}
          style={{
            flex: 1,
            backgroundColor: '#e4f1f9',
            width: Dimensions.get('window').width - 12 * 2,
          }}
        />
      </View>
    );
  };

  const LessonTask = props => {
    return (
      <View
        style={{flex: 1, backgroundColor: '#e4f1f9', paddingHorizontal: 20}}>
        <View style={{flexDirection: 'column', gap: 16}}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
            Quiz on lectures{' '}
          </Text>
          <Text style={{fontSize: 16, color: '#292930', lineHeight: 20}}>
            {
              'Please checkout UET courses website for quizzes on these lectures!!'
            }
          </Text>
        </View>
      </View>
    );
  };

  const renderTabs = props => {
    return (
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Video" component={LessonVideos} />
        <Tab.Screen name="Theory" component={LessonTheory} />
        <Tab.Screen name="Task" component={LessonTask} />
      </Tab.Navigator>
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
      {renderTabs()}
    </SafeAreaView>
  );
};

export default Lesson;

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 18,
        marginHorizontal: 20,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.4)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Animated.Text
              style={{
                opacity: opacity,
                fontSize: 16,
                color: '#333',
                fontFamily: 'Poppins-Medium',
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
