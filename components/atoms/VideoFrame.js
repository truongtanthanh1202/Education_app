import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
const deviveWidth = Dimensions.get('window').width;

const VideoFrame = props => {
  return (
    <View style={styles.container}>
      <VideoPlayer
        video={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        autoplay={false}
        pauseOnPress={true}
        fullScreenOnLongPress={true}
        disableFullscreen={false}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{
          uri:
            props.thumbnail ??
            'https://d3mxt5v3yxgcsr.cloudfront.net/courses/7475/course_7475_image.jpg',
        }}
        endWithThumbnail={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
    backgroundColor: 'lightblue',
  },
});

export default VideoFrame;
