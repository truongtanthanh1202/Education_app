import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './style';
import {images} from '../../../../constants';
function Search2(props) {
  const [products, setProducts] = useState([
    {
      name: 'Interior design',
      url: 'https://cdn.mos.cms.futurecdn.net/y2Rdj6nWE3qA2vu56EqRra-1200-80.jpg',
    },
    {
      name: 'Traditional art',
      url: 'https://www.re-thinkingthefuture.com/wp-content/uploads/2019/07/A258-50-Brilliant-House-Interior-Design-Projects-for-your-inspiration.jpg',
    },
    {
      name: '3D Animation',
      url: 'https://images.squarespace-cdn.com/content/v1/5b464028697a98ff8ade2f62/1626195523488-D2V7CU4PEFLS6GJV4YFZ/2021-5-26+Colored+Pencil+Drawing+WEBSITE.png',
    },
    {
      name: 'Marketing',
      url: 'https://images.squarespace-cdn.com/content/v1/5b464028697a98ff8ade2f62/1626195523488-D2V7CU4PEFLS6GJV4YFZ/2021-5-26+Colored+Pencil+Drawing+WEBSITE.png',
    },
    {
      name: 'Photography',
      url: 'https://images.squarespace-cdn.com/content/v1/5b464028697a98ff8ade2f62/1626195523488-D2V7CU4PEFLS6GJV4YFZ/2021-5-26+Colored+Pencil+Drawing+WEBSITE.png',
    },
    {
      name: 'Calligraphy & lettering',
      url: 'https://images.squarespace-cdn.com/content/v1/5b464028697a98ff8ade2f62/1626195523488-D2V7CU4PEFLS6GJV4YFZ/2021-5-26+Colored+Pencil+Drawing+WEBSITE.png',
    },
    {
      name: 'UX design',
      url: 'https://images.squarespace-cdn.com/content/v1/5b464028697a98ff8ade2f62/1626195523488-D2V7CU4PEFLS6GJV4YFZ/2021-5-26+Colored+Pencil+Drawing+WEBSITE.png',
    },
    {
      name: 'Web develop',
      url: 'https://images.squarespace-cdn.com/content/v1/5b464028697a98ff8ade2f62/1626195523488-D2V7CU4PEFLS6GJV4YFZ/2021-5-26+Colored+Pencil+Drawing+WEBSITE.png',
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
            flex: 50,
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
              height: 60,
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
              top: 70,
              right: 22,
              width: 50,
              height: 50,
            }}
            source={images.icon_search}></Image>
        </View>
      </View>

      <View style={styles.topSearch}>
        <Text
          style={{
            fontSize: 24,
            margin: 10,
            fontWeight: 500,
          }}>
          Top searches
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity style={styles.button1}>
            <Text
              style={{
                color: 'white',
              }}>
              photography
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text
              style={{
                color: 'white',
              }}>
              craft
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <Text
              style={{
                color: 'white',
              }}>
              art
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity style={styles.button1}>
            <Text
              style={{
                color: 'white',
              }}>
              procreate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text
              style={{
                color: 'white',
              }}>
              marketing
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity style={styles.button1}>
            <Text
              style={{
                color: 'white',
              }}>
              UX design
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mid}>
        <Text
          style={{
            fontSize: 24,
            margin: 10,
            fontWeight: 500,
            marginTop: 0,
          }}>
          Categories
        </Text>
        <View style={{flex: 1}}>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({item, index}) => (
              <View
                style={{
                  backgroundColor: index % 2 == 0 ? 'red' : 'green',
                  flex: 0.5,
                  height: 160,
                  marginLeft: index % 2 == 0 ? 10 : 0,
                  marginTop: index == 0 && index == 1 ? 10 : 5,
                  marginRight: 10,
                  marginBottom: 5,
                  borderRadius: 10,
                }}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Image
                    style={{
                      //   width: 168,
                      flex: 1,
                      height: 160,
                      resizeMode: 'cover',
                      borderRadius: 10,
                    }}
                    source={{
                      uri: item.url,
                    }}></Image>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 22,
                      fontWeight: 500,
                      position: 'absolute',
                      top: 120,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </View>
            )}></FlatList>
        </View>
      </View>
      <View style={styles.below}></View>
    </View>
  );
}
export default Search2;
