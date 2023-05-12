import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoFrame from '../../atoms/VideoFrame';
import Pdf from 'react-native-pdf';
import axios from 'axios';

// Test data
// Thunmnail: https://www.kindpng.com/picc/m/107-1071309_video-frame-png-frame-design-for-video-transparent.png
// Pdf: http://samples.leanpub.com/thereactnativebook-sample.pdf

const CreateCourse = props => {
  const {role, email, fisrtname, lastname} = props.route.params;
  const [courseName, setCourseName] = useState('none');
  const [courseDescription, setCourseDescription] = useState('none');
  const [thumbnailUrl, setThumbnailUrl] = useState('none');
  const [videoUrl, setVideoUrl] = useState('none');
  const [documentUrl, setDocumentUrl] = useState('none');
  const isValidateOK = () => {
    return (
      courseName.length > 5 &&
      courseDescription.length > 5 &&
      thumbnailUrl.length > 2 &&
      videoUrl.length > 2 &&
      documentUrl.length > 2
    );
  };

  const [viewType, setViewType] = useState('');
  const [viewUrl, setViewUrl] = useState('');
  function goBack() {
    props.navigation.goBack();
  }
  const createCourseToServer = async () => {
    console.log(courseName, courseDescription, thumbnailUrl, videoUrl);
    // const userdata = {
    //   email: email,
    //   description: courseDescription,
    //   name: courseName,
    //   video: videoUrl,
    //   thumbnail: thumbnailUrl,
    //   document: documentUrl,
    // };
    // const res = await axios.post(
    //   `http://10.0.2.2:4848/${role}/createCourse`,
    //   userdata,
    // );
    // const status = res.data.message;
    // console.log(status);
  };
  function renderHeader() {
    return (
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={goBack}>
            <Ionicons name="chevron-back-outline" size={28} color="#333" />
          </TouchableOpacity>
          <View
            style={{
              flex: 90,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
                color: '#333',
              }}>
              Create new Course
            </Text>
          </View>
        </View>
      </View>
    );
  }
  function renderDemoView(type, url) {
    if (type === 'image') {
      return (
        <Image
          resizeMode="cover"
          source={{uri: url}}
          style={{width: '100%', height: 240, borderRadius: 10}}
        />
      );
    } else if (type === 'video') {
      return (
        <View style={{height: 240}}>
          <VideoFrame thumbnail={url} />
        </View>
      );
    } else if (type === 'pdf') {
      return (
        <Pdf
          trustAllCerts={false}
          source={{
            uri: documentUrl,
            cache: true,
          }}
          spacing={16}
          horizontal={true}
          minScale={0.5}
          maxScale={3}
          style={{
            flex: 1,
            backgroundColor: '#e4f1f9',
            width: Dimensions.get('window').width - 12 * 2,
          }}
        />
      );
    } else if (type === '') {
      return (
        <View
          style={{height: 240, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#555',
              textAlign: 'center',
            }}>
            Frame for demo Pdf, Video and Thumbnail
          </Text>
        </View>
      );
    }
  }
  function renderCourseInfoField() {
    return (
      <>
        <View style={styles.profileInforItem}>
          <Text style={styles.titleInputField}>Teacher name</Text>
          <TextInput
            style={styles.inputField}
            value={`${fisrtname}` + ' ' + `${lastname}`}
            placeholderTextColor="black"
            editable={false}></TextInput>
        </View>

        <View style={styles.profileInforItem}>
          <Text style={styles.titleInputField}>Course name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="enter course name"
            placeholderTextColor="#555"
            onChangeText={text => {
              setCourseName(text);
            }}></TextInput>
        </View>

        <View style={styles.profileInforItem}>
          <Text style={styles.titleInputField}>Course description</Text>
          <TextInput
            style={[styles.multilineInput]}
            placeholder="enter course description"
            placeholderTextColor="#555"
            multiline={true}
            numberOfLines={3}
            onChangeText={text => {
              setCourseDescription(text);
            }}></TextInput>
        </View>

        <View style={styles.profileInforItem}>
          <Text style={styles.titleInputField}>Thumbnail url</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputField}
              placeholder="enter image url"
              placeholderTextColor="#555"
              onChangeText={text => {
                setThumbnailUrl(text);
              }}></TextInput>
            <TouchableOpacity
              onPress={() => {
                setViewType('image');
                setViewUrl(thumbnailUrl);
              }}
              style={{
                backgroundColor: '#3787ff',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 6,
                borderRadius: 12,
                marginLeft: 8,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                  color: '#fff',
                }}>
                check
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profileInforItem}>
          <Text style={styles.titleInputField}>Video Intro url</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputField}
              placeholder="enter video url"
              placeholderTextColor="#555"
              onChangeText={text => {
                setVideoUrl(text);
              }}></TextInput>
            <TouchableOpacity
              onPress={() => {
                setViewType('video');
                setViewUrl(videoUrl);
              }}
              style={{
                backgroundColor: '#3787ff',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 6,
                borderRadius: 12,
                marginLeft: 8,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                  color: '#fff',
                }}>
                check
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profileInforItem}>
          <Text style={styles.titleInputField}>Course's document url</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputField}
              placeholder="enter document url"
              placeholderTextColor="#555"
              onChangeText={text => {
                setDocumentUrl(text);
              }}></TextInput>
            <TouchableOpacity
              onPress={() => {
                setViewType('pdf');
                setViewUrl(documentUrl);
              }}
              style={{
                backgroundColor: '#3787ff',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 6,
                borderRadius: 12,
                marginLeft: 8,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                  color: '#fff',
                }}>
                check
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView
        style={{
          flex: 1,
        }}>
        {/* Body */}
        <View
          style={{
            height: 240,
            width: '100%',
            borderRadius: 10,
            borderColor: '#3787ff',
            borderWidth: 2,
          }}>
          {renderDemoView(viewType, viewUrl)}
        </View>
        {renderCourseInfoField()}

        <View style={{height: 40, backgroundColor: 'transparent'}}></View>
      </ScrollView>
      <View style={{flexDirection: 'row', marginTop: 16, marginBottom: 16}}>
        <View
          style={{flex: 50, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.buttonCancel} onPress={goBack}>
            <Text style={styles.textCancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flex: 50, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            disabled={!isValidateOK()}
            style={[
              styles.buttonSubmit,
              {
                opacity: isValidateOK() ? 1 : 0.7,
              },
            ]}
            onPress={createCourseToServer}>
            <Text style={styles.textSubmit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateCourse;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4f1f9',
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 8,
    marginTop: Platform.OS === 'ios' ? 12 : StatusBar.currentHeight,
  },
  profileInforItem: {
    marginTop: 12,
  },
  titleInputField: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
    marginBottom: 2,
  },
  inputField: {
    flex: 1,
    height: Platform.OS === 'ios' ? 48 : 48,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    justifyContent: 'center',
    marginBottom: 4,
  },
  multilineInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
  },
  buttonCancel: {
    minWidth: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonSubmit: {
    minWidth: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#3787ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  textCancel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#222',
  },
  textSubmit: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#fff',
  },
});
