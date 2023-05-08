import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import VideoFrame from '../../../atoms/VideoFrame';
import styles from './style';

const renderHeader = props => {
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

const CourseDetails = props => {
  const {
    courseName,
    courseDescription,
    id_teacher,
    thumbnail,
    rate,
    total_hours,
  } = props.route.params;
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
      <ScrollView>
        {renderHeader(props)}
        <VideoFrame thumbnail={thumbnail} />
        <Text>{courseName}</Text>
        <Text>{courseDescription}</Text>
        <Text>{id_teacher}</Text>
        <Text>{thumbnail}</Text>
        <Text>{rate}</Text>
        <Text>{total_hours}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetails;
