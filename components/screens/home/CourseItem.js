import React from 'react';
import {View, Image, Text, TouchableOpacity, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const shadow =
  Platform.OS === 'ios'
    ? {
        shadowColor: '#171717',
        shadowOffset: {width: -1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
      }
    : {elevation: 2, shadowColor: '#171717'};

const renderRatingStars = rating => {
  let real = Math.floor(rating);
  let imagine = rating - real;
  let starsContainer = [];
  for (let i = 0; i < real; i++) {
    starsContainer.push(
      <Ionicons name="star" size={12} color="#ff9d42"></Ionicons>,
    );
  }
  if (imagine > 0) {
    starsContainer.push(
      <Ionicons name="star-half" size={12} color="#ff9d42"></Ionicons>,
    );
  }

  return starsContainer.map((icon, index) => {
    return <Text key={index}>{icon}</Text>;
  });
};

const CourseItem = props => {
  const _source =
    props.source ??
    'https://d3mxt5v3yxgcsr.cloudfront.net/courses/7475/course_7475_image.jpg';
  const _title = props.title ?? 'Create and Deploy a website';
  const _owner = props.owner ?? 'Thanh Truong';
  const _rating = props.rating ?? 5;
  const _member = props.member ?? 563;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        width: 140,
        height: 220,
        borderRadius: 6,
        backgroundColor: 'white',
        marginHorizontal: 10,
        ...shadow,
      }}>
      <Image
        source={{
          uri: _source,
        }}
        resizeMode="cover"
        style={{width: 140, height: 130, borderRadius: 6}}
      />
      <View style={{marginHorizontal: 2, height: 90}}>
        <View style={{minHeight: 44, maxHeight: 52}}>
          <Text
            style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#222'}}>
            {_title}
          </Text>
        </View>
        <Text
          style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: '#888'}}>
          {_owner}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 4,
            marginHorizontal: 2,
            height: 20,
          }}>
          <Text
            style={{
              color: '#3787ff',
              flex: 20,
              textAlign: 'left',
              fontSize: 14,
            }}>
            {_rating}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flex: 35,
            }}>
            {renderRatingStars(_rating)}
          </View>
          <Text
            style={{
              color: '#3787ff',
              flex: 45,
              textAlign: 'right',
              fontSize: 14,
            }}>
            ({_member})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseItem;
