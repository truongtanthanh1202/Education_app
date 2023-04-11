import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Filter from '../../../../asset/icons/filter';
import {images} from '../../../../constants';
import CourseItem from '../CourseItem';
import styles from './style';

/**
 * ListView from a map of objects
 * FlatList
 */
function Search1(props) {
  //list of courses = state
  const [courses, setCourses] = useState([
    {
      name: 'Adobe illustrator for all beginner artist',
      url: 'data:image/jpeg;base64,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',
      possessor: 'Samule Doe',
      quantity: '2k students',
      rate: '4.0',
    },
    {
      name: 'Digital illustration technique for senior',
      url: 'https://images.squarespace-cdn.com/content/v1/63e144e0a830473fe168bcf7/1678465712818-2AM90E67ZF5IO55SVTP2/2022-10-17%2BColored%2BPencil%2BDrawing%2Bfor%2BBeginners%2BWEBSITE.png',

      possessor: 'Sarrah Morry',
      quantity: '1k students',
      rate: '4.2',
    },
    {
      name: 'Learn how to draw cartoon in easy way!',
      url: 'https://cdn.vox-cdn.com/thumbor/pJB_CR9CHm2vjKnRXt8EEGYq7ws=/0x85:2000x1585/1400x1400/filters:focal(0x85:2000x1585):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49502491/Tom_and_Jerry_.0.0.jpg',

      possessor: 'Ben White',
      quantity: '2k students',
      rate: '4.0',
    },
    {
      name: 'Sketch book essential for everyone!',
      url: 'https://product.hstatic.net/200000350979/product/11815017442_1943370500_cd6c686ef9444a1788fc4f63fce0cac8_master.jpg',

      possessor: 'Hector Bellerin',
      quantity: '3k students',
      rate: '4.7',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const filteredCourses = () =>
    courses.filter(eachCourse =>
      eachCourse.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.top}>
        <TextInput
          autoCorrect={false}
          onChangeText={text => {
            setSearchText(text);
          }}
          style={{
            height: 65,
            marginTop: 75,
            marginHorizontal: 15,
            backgroundColor: 'white',
            borderRadius: 5,
          }}
          placeholder="Search for new Courses!"
          paddingLeft={12}
          placeholderTextColor="black"></TextInput>

        <Image
          style={{
            position: 'absolute',
            top: 75,
            right: 22,
            width: 50,
            height: 50,
          }}
          source={images.icon_search}></Image>

        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
          }}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
              margin: 30,
            }}>
            Your search result
          </Text>
          <TouchableOpacity>
            <Filter width="28" height="28" style={styles.icon}></Filter>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mid}>
        {filteredCourses().length > 0 ? (
          <FlatList
            data={filteredCourses()}
            renderItem={({item}) => (
              <CourseItem
                onPress={() => {
                  alert(`You press course's name: ${item.name}`);
                }}
                course={item}
                key={item.name}
              />
            )}
            keyExtractor={item => item.name}
          />
        ) : (
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
              }}>
              Not Found!
            </Text>
          </View>
        )}
      </View>
      <View style={styles.below}></View>
    </View>
  );
}

export default Search1;
