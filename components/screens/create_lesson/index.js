import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoFrame from '../../atoms/VideoFrame';

const CreateLesson = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>hihi create lesson</Text>
    </SafeAreaView>
  );
};

export default CreateLesson;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4f19',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
