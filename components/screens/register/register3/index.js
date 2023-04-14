import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {images} from '../../../../constants';
import styles from './style';

function Register3(props) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Forgot Password ',
      isSelected: 'false',
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          source={images.success}
          style={{
            width: 120,
            height: 120,
            alignSelf: 'center',
          }}></Image>
      </View>

      <View style={styles.mid}>
        <Text style={styles.text1}>Account Created Successfully!</Text>

        <Text style={styles.text2}>
          If you are going to use a passage of Lorem ipsum, you need to be sure
          there isn't anything embarrassing.
        </Text>
        {accountTypes.map(accountType => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Navbar');
              setAccountTypes(
                accountTypes.map(eachAccountType => {
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  };
                }),
              );
            }}
            isSelected={accountType.isSelected}
            style={styles.button}>
            <Text style={styles.textInnerBtn}>Let's start learning</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Register3;
