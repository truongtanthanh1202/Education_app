import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './style';
import {fontFamilys, images} from '../../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

function Search2(props) {
  const [KeyboardIsShow, setKeyboardIsShow] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
    getData();
  }, []);

  let [listData, setListData] = useState(true);
  let [listFilter, setListFilter] = useState(true);

  // const [products, setProducts] = useState([
  //   {
  //     _id: '645122329451dd9e7c3ce72b',
  //     description: 'NodeJS',
  //     id_teacher: '645121377e97678961980776',
  //     lesson: [
  //       {
  //         id_lesson: '4567899',
  //         _id: '645122329451dd9e7c3ce72c',
  //       },
  //     ],
  //     thumbnail:

  const [searchText, setSearchText] = useState('');
  const getData = async () => {
    //Service to get the data from the server to render
    const userdata = {
      keyword: '',
    };
    const res = await axios.post(
      `http://10.0.2.2:4848/search/search_keyword`,
      userdata,
    );

    setListData(res.data);
    setListFilter(res.data);
  };

  const filteredCourses = () =>
    // listData.filter(eachCourse =>
    //   eachCourse.description.toLowerCase().includes(searchText.toLowerCase()),
    // );
    console.log('render view');
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            flex: 50,
            // backgroundColor: 'yellow',
            justifyContent: 'center',
            // flexDirection: 'row',
          }}>
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
                height: 60,
                marginTop: 55,

                backgroundColor: 'white',
                borderRadius: 5,
              }}
              placeholder="Search for new Courses!"
              paddingLeft={12}
              placeholderTextColor="black"></TextInput>
            <Image
              style={{
                position: 'absolute',
                top: 65,
                right: 16,
                width: 40,
                height: 40,
              }}
              source={images.icon_search}></Image>
          </View>
        </View>
      </View>

      {KeyboardIsShow == false && (
        <View style={styles.topSearch}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 20,
              fontFamily: fontFamilys.f3,
              marginTop: 28,
              fontWeight: 500,
              color: 'black',
            }}>
            Top searches
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.textTopSearch}>photography</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.textTopSearch}>craft</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.textTopSearch}>art</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.textTopSearch}>procreate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.textTopSearch}>marketing</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.textTopSearch}>UX design</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={styles.mid}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            fontFamily: fontFamilys.f3,
            marginTop: 28,
            marginBottom: 12,
            color: 'black',
          }}>
          Categories
        </Text>
        <View>
          <FlatList
            data={listFilter}
            numColumns={2}
            renderItem={({item, index}) => (
              <View
                style={{
                  flex: 0.5,
                  height: 160,
                  marginLeft: index % 2 == 0 ? 0 : 16,
                  marginTop: index == 0 && index == 1 ? 4 : 14,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <ImageBackground
                    style={{
                      flex: 1,
                      height: 160,
                      resizeMode: 'cover',
                      borderRadius: 8,
                      overflow: 'hidden',
                    }}
                    source={{
                      uri: item.thumbnail,
                    }}>
                    <LinearGradient
                      colors={['#00000000', '#000000']}
                      style={{height: '100%', width: '100%'}}></LinearGradient>
                  </ImageBackground>

                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 500,
                      position: 'absolute',
                      top: 120,
                    }}>
                    {item.description}
                  </Text>
                </View>
              </View>
            )}></FlatList>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Search2;
