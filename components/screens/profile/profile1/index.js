import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import {images, fontSizes, fontFamilys} from '../../../../constants';
import {ProgressBar, ProfileValue, ProfileInformation} from '../../../atoms';
const Profile1 = props => {
  const initialEmail = props.route.params.email;
  const initialPassword = props.route.params.password;

  const [refreshing, setRefreshing] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    //Service to get the data from the server to render
    const userdata = {
      email: initialEmail,
      password: initialPassword,
    };
    const res = await axios.post(`http://10.0.2.2:4848/me/logintest`, userdata);
    const data = res.data.user;
    // console.log(data);

    let temp = [
      {name: 'Email', value: data.email},
      {name: 'First name', value: data.firstName},
      {name: 'Last name', value: data.lastName},
      {name: 'Password', value: data.password},
    ];
    // console.log(temp);
    setRefreshing(false);
    setDataSource(temp);
  };
  const onRefresh = () => {
    //Clear old data of the list
    setDataSource([]);
    //Call the Service to get the latest data
    getData();
  };

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          // marginTop: 50,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: fontSizes.h2,
            fontWeight: 600,
            color: 'black',
            fontFamily: fontFamilys.f3,
          }}>
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Profile3');
          }}>
          <Ionicons name="settings-outline" color={'black'} size={24} />
        </TouchableOpacity>
      </View>
    );
  }
  function renderProfileCard() {
    return (
      <View>
        <Image source={images.avatar} style={styles.image}></Image>
        {/* Detail */}
        <View>
          <Text style={styles.name}>Thanh Truong</Text>
          <ProgressBar
            progress="60%"
            containerStyle={{maginTop: 10}}></ProgressBar>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 2,
              color: 'black',
              fontFamily: fontFamilys.f3,
            }}>
            60% Complete your profile
          </Text>
        </View>
      </View>
    );
  }
  function renderProfileSection1() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue
          label="Billed every year"
          value="12 month at $8.00/month"></ProfileValue>
        <View style={{margin: 12}}></View>

        {/* profile infor (full name, email, password) section*/}
        <View
          style={{
            minHeight: Platform.OS === 'ios' ? 312 : 340,
            backgroundColor: '#3787ff',
            borderRadius: 20,
          }}>
          {/* Label and Value */}
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              marginVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Montserrat-Medium',
                }}>
                Profile Information
              </Text>

              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Profile2');
                }}>
                <Ionicons
                  name="create-outline"
                  size={24}
                  marginLeft={100}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>

            {refreshing ? <ActivityIndicator /> : null}
            <FlatList
              data={dataSource}
              renderItem={({item, index}) => (
                <View style={styles.profileInforItem}>
                  <Text style={styles.titleInputField}>{item.name}</Text>
                  <TextInput
                    style={styles.inputField}
                    value={item.value}
                    secureTextEntry={item.name === 'Password' ? true : false}
                    editable={false}
                    placeholderTextColor="black"></TextInput>
                </View>
              )}
              refreshControl={
                <RefreshControl
                  //refresh control used for the Pull to Refresh
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            />
          </View>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.context}>
        <View style={styles.top}>
          {renderHeader()}

          <ScrollView>
            {/* Profile Card */}
            {renderProfileCard()}
          </ScrollView>
        </View>

        <View style={styles.below}>
          <View style={{marginHorizontal: 20, marginTop: 14}}>
            {/* Profile Section 1 */}
            {renderProfileSection1()}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile1;
