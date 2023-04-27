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
      url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/812DiPC+UCS._AC_UF894,1000_QL80_.jpg',
    },
    {
      name: 'Marketing',    
        url: 'https://www.insegment.com/blog/wp-content/uploads/2016/04/The-Role-of-Marketing-1.jpg',

    },
    {
      name: 'Photography',
      url: 'https://cdn.ceoworld.biz/wp-content/uploads/2021/03/wealthy-photographer.jpg',

    },
    {
      name: 'Calligraphy & lettering',
      url: 'https://images.squarespace-cdn.com/content/v1/57919d3ab3db2b28ff821d48/1479442745914-16R12UIXAJVLZS4MOC45/Botts+Logo+Scan-transparent-1.png',
    },
    {
      name: 'UX design',
      url: 'https://www.acquisition-international.com/wp-content/uploads/2021/09/UI-UX-Design.jpg',
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
            // backgroundColor: 'yellow',
            justifyContent: 'center',
            // flexDirection: 'row',
          }}><TextInput
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
            top: 65,
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
          style={{fontSize: 20,
            fontWeight: 500, fontFamily: 'Poppins',
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
                style={{ flex: 0.5,
                  height: 160,  marginLeft: index % 2 == 0 ? 0 : 16,
                  marginTop: index == 0 && index == 1 ? 4 : 14,
                }}>
            <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <ImageBackground
                  style={{ flex: 1,
                    height: 160,
                    resizeMode: 'cover',
                    borderRadius: 8,
                    overflow: 'hidden',
                    
                  }}
                  source={{
                    uri: item.url, }}>
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
    </View>
  );
}
export default Search2;
