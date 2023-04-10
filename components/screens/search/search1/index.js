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
      url: 'https://images.squarespace-cdn.com/content/v1/5b464028697a98ff8ade2f62/1626195523488-D2V7CU4PEFLS6GJV4YFZ/2021-5-26+Colored+Pencil+Drawing+WEBSITE.png',
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
