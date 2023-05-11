import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoFrame from '../../atoms/VideoFrame';

const LessonCard = props => {
  const [showVideo, setShowVideo] = useState(false);
  function renderIndex(index) {
    if (index < 10) {
      return `0${index}`;
    } else {
      return `${index}`;
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.indexText}>{renderIndex(props.courseIndex)}</Text>
        </View>
        <View
          style={{justifyContent: 'center', flex: 1, marginLeft: 20, gap: 6}}>
          <Text style={styles.courseName}>{props.courseName}</Text>
          <Text style={styles.durationText}>{props.duration} mins</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          {props.enableCard === true ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setShowVideo(!showVideo);
              }}>
              <Ionicons name="play" size={18} color="#fff" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity disabled={true} style={styles.buttonDisable}>
              <Ionicons name="lock-closed" size={20} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {showVideo && (
        <View style={{height: 240}}>
          <VideoFrame thumbnail={props.thumbnail} />
        </View>
      )}
    </View>
  );
};

export default LessonCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  indexText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#222',
  },
  courseName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#666',
  },
  durationText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#222',
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    backgroundColor: '#3787ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisable: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    backgroundColor: '#3787ff',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
});
