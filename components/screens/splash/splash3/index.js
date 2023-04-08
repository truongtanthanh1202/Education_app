import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {images} from '../../../../constants';
import styles from './style';
import ArrowRight from '../../../../asset/icons/arrow_right';
const Splash3 = ({navigation}) => {
  const handlerNextScreen = () => {
    navigation.navigate('Splash4');
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground source={images.splash_3} style={styles.image}>
        <View style={styles.container}></View>
        <View style={styles.context}>
          <TouchableOpacity style={styles.button} onPress={handlerNextScreen}>
            <Text style={styles.text}>Get Started</Text>
            <ArrowRight width="28" height="28" style={styles.icon}></ArrowRight>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash3;
