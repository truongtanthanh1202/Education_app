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
  KeyboardAvoidingView,
  Keyboard,
  navigation,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Filter from '../../../../asset/icons/filter';
import {images} from '../../../../constants';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';

/**
 * ListView from a map of objects
 * FlatList
 */
function Search1(props) {
  useEffect(() => {
    getData();
  }, []);
  let [listData, setListData] = useState(true);
  let [listFilter, setListFilter] = useState(true);

  const [searchText, setSearchText] = useState('');
  const getData = async () => {
    //Service to get the data from the server to render
    const userdata = {
      keyword: '',
    };
    const res = await axios.post(
      `http://localhost:4848/search/search_keyword`,
      userdata,
    );

    setListData(res.data);
    setListFilter(res.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.top}>
        <View>
          <TextInput
            autoCorrect={false}
            onChangeText={text => {
              setSearchText(text);
              let list = listData.filter(eachCourse =>
                eachCourse.description
                  .toLowerCase()
                  .includes(text.toLowerCase()),
              );
              setListFilter(list);
            }}
            style={{
              height: 65,
              marginTop: 24,
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
              top: 30,
              right: 22,
              width: 50,
              height: 50,
            }}
            source={images.icon_search}></Image>
        </View>

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
              color: 'black',
            }}>
            Your search result
          </Text>
          <TouchableOpacity>
            <Filter width="28" height="28" style={styles.icon}></Filter>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mid}>
        <FlatList
          data={listFilter}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                alert(`You press course's name: ${item.description}`);
              }}
              style={{flexDirection: 'row', flex: 1, margin: 5}}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'cover',
                  borderRadius: 10,
                  marginRight: 15,
                }}
                source={{
                  uri: item.thumbnail,
                }}></Image>
              <View
                style={{
                  //   backgroundColor: 'pink',
                  flex: 1,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginBottom: 8,
                  }}>
                  {item.description}
                </Text>
                <Text
                  style={{
                    color: '#757372',
                    fontSize: 14,
                    marginBottom: 8,
                  }}>
                  {item.nameOfteacher}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="person-outline"
                    size={14}
                    color={'gray'}
                    marginTop={1}></Ionicons>
                  <Text
                    style={{
                      color: '#757372',
                      fontSize: 14,
                      marginBottom: 8,
                      marginLeft: 4,
                    }}>
                    {item.amountOfstudents} students
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="star"
                    size={12}
                    color="#3787ff"
                    marginTop={1}></Ionicons>
                  <Text
                    style={{
                      color: '#757372',
                      fontSize: 14,
                      marginLeft: 4,
                      marginBottom: 10,
                    }}>
                    {item.rating}
                  </Text>
                </View>

                <View
                  style={{
                    width: 50,
                  }}></View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* <View style={styles.below}></View> */}
    </SafeAreaView>
  );
}

export default Search1;
