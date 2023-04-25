import React from 'react';
import {TouchableOpacity, View, Text, Platform} from 'react-native';

import HomeCategory1 from '../../../asset/img/home_category1';
import HomeCategory2 from '../../../asset/img/home_category2';
import HomeCategory3 from '../../../asset/img/home_category3';

const CategoryItem = props => {
  const homeCategory = _svgType => {
    if (_svgType === 'homeCategory1') {
      return (
        <HomeCategory1 width={100} height={100 * (554 / 689)}></HomeCategory1>
      );
    } else if (_svgType === 'homeCategory2') {
      return (
        <HomeCategory2 width={100} height={100 * (572 / 786)}></HomeCategory2>
      );
    } else if (_svgType === 'homeCategory3') {
      return (
        <HomeCategory3 width={100} height={100 * (826 / 1118)}></HomeCategory3>
      );
    }
  };

  return (
    <View
      style={{
        width: 250,
        height: 153,
        borderRadius: 12,
        backgroundColor: props.backgroundColor,
        marginHorizontal: 10,
        flexDirection: props.reverseDirection === false ? 'row' : 'row-reverse',
      }}>
      <View
        style={{
          flex: 60,
          marginTop: 20,
          marginBottom: 12,
          marginLeft: props.reverseDirection === false ? 12 : 0,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
            color: '#333',
            textAlign: props.reverseDirection === false ? 'left' : 'right',
            marginRight: props.reverseDirection === false ? 0 : 20,
          }}>
          {props.title}
        </Text>
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            maxWidth: 120,
            height: Platform.OS === 'ios' ? 32 : 40,
            borderRadius: 8,
            backgroundColor: '#3787ff',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '25%',
            marginLeft: props.reverseDirection === false ? 0 : '10%',
          }}>
          <Text
            style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#fff'}}>
            {props.describe}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 40, alignItems: 'center', justifyContent: 'center'}}>
        {homeCategory(props.svgType)}
      </View>
    </View>
  );
};

export default CategoryItem;
