import React from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {images} from '../../../../constants';

//Style component
import styles from './style';

const Splash1 = ({navigation}) => {
  const handleNextScreen = () => {
    navigation.navigate('Splash2');
  };
  setTimeout(handleNextScreen, 5000);
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
      <ImageBackground
        source={images.splash_1}
        style={styles.image}
        onLoad={handleNextScreen}></ImageBackground>
    </View>
  );
};

export default Splash1;
