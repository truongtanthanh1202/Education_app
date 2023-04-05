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
} from 'react-native';
import styles from './style';
import {images} from '../../../../constants';
import LinearGradient from 'react-native-linear-gradient';
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
      url: 'https://static.stringee.com/blog/images/web-developer-2.jpeg',
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
            justifyContent: 'center',
          }}>
          <TextInput
            autoCorrect={false}
            onChangeText={text => {
              setSearchText(text);
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
              top: 75,
              right: 16,
              width: 40,
              height: 40,
            }}
            source={images.icon_search}></Image>
        </View>
      </View>

      <View style={styles.topSearch}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            fontFamily: 'Poppins',
            marginTop: 28,
            fontWeight: 500,
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

      <View style={styles.mid}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            fontFamily: 'Poppins',
            marginTop: 28,
            marginBottom: 12,
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
                      uri: item.url,
                    }}>
                    <LinearGradient
                      colors={['#00000000', '#000000']}
                      style={{height: '100%', width: '100%'}}></LinearGradient>
                  </ImageBackground>
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
