import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, TextInput, FlatList} from 'react-native';
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
      name: 'Learn how to draw cartoon face in easy way!',
      url: 'https://images.squarespace-cdn.com/content/v1/5b464028697a98ff8ade2f62/1626195523488-D2V7CU4PEFLS6GJV4YFZ/2021-5-26+Colored+Pencil+Drawing+WEBSITE.png',

      possessor: 'Ben White',
      quantity: '2k students',
      rate: '4.0',
    },
    {
      name: 'Sketch book essential for everyone!',
      url: 'https://images.squarespace-cdn.com/content/v1/5b464028697a98ff8ade2f62/1626195523488-D2V7CU4PEFLS6GJV4YFZ/2021-5-26+Colored+Pencil+Drawing+WEBSITE.png',

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
      <View style={styles.top}>
        <View
          style={{
            flex: 70,
            // backgroundColor: 'yellow',
            justifyContent: 'center',
            // flexDirection: 'row',
          }}>
          <TextInput
            autoCorrect={false}
            onChangeText={text => {
              setSearchText(text);
            }}
            style={{
              height: 70,
              marginTop: 55,

              marginHorizontal: 15,
              backgroundColor: 'white',
              //   paddingHorizontal: 20,
              borderRadius: 5,
            }}
            placeholder="Search for new Courses!"
            paddingLeft={12}
            placeholderTextColor="black"></TextInput>
          <Image
            style={{
              position: 'absolute',
              top: 85,
              right: 22,
            }}
            source={images.icon_search}></Image>
        </View>
        <View
          style={{
            flex: 30,
            // backgroundColor: 'yellow',
            // justifyContent: 'center',
          }}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
              margin: 20,
            }}>
            Your search result
          </Text>
        </View>
      </View>
      <View style={styles.mid}>
        {/* <ScrollView>
          {courses.map(eachCourse => (
            <CourseItem
              onPress={() => {
                alert(`You press item's name: ${eachCourse.name}`);
              }}
              course={eachCourse}
            />
          ))}
        </ScrollView> */}

        {filteredCourses().length > 0 ? (
          <FlatList
            data={filteredCourses()}
            renderItem={({item}) => (
              <CourseItem
                onPress={() => {
                  alert(`You press course's name: ${eachCourse.name}`);
                }}
                course={item}
                key={item.name}
              />
            )}
            keyExtractor={eachCourse => eachCourse.name}
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
        {/* <FlatList
          data={courses}
          renderItem={({item}) => <CourseItem course={item} key={item.name} />}
          keyExtractor={eachCourse => eachCourse.name}
        /> */}
        {/* <FlatList
          data={foods}
          renderItem={({item}) => (
            <CourseItem course={eachCourse} key={eachCourse.name} />
          )}
          keyExtractor={eachCourse => eachCourse.name}
        /> */}
      </View>
      <View style={styles.below}></View>
    </View>
  );
}

export default Search1;
