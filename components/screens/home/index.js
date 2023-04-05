import React from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4f1f9',
      }}>
      <Ionicons name="home-outline" size={32} />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
