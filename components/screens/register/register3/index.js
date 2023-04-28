import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import axios from 'axios';

import {images} from '../../../../constants';
import styles from './style';

function Register3(props) {
  const {role} = props.route.params;
  const {email} = props.route.params;
  const {password} = props.route.params;

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
            onPress={async () => {
              const userdata = {
                email: email,
                password: password,
              };
              const res = await axios.post(
                `http://10.0.2.2:4848/me/logintest`,
                userdata,
              );
              const data = res.data;
              console.log(JSON.stringify(data), 'Acount created successfully');
              props.navigation.navigate('Navbar', {
                data: data,
              });
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
