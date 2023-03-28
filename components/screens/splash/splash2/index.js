import React from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

import {images} from '../../../../constants';
import styles from './style';

function Splash2({navigation}) {
  const handlerNextScreen = () => {
    navigation.navigate('Splash3');
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
      <ImageBackground source={images.splash_2} style={styles.image}>
        <View style={styles.container}></View>
        <View style={styles.context}>
          <TouchableOpacity style={styles.button} onPress={handlerNextScreen}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Splash2;
