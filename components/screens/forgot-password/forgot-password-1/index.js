import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';

import {images} from '../../../../constants';
import styles from './style';
import ForgotPasswordSVG from '../../../../asset/img/forgot-password-svg';

function Forgot1({navigation}) {
  const statusBarHeight = StatusBar.currentHeight;
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Continue',
      isSelected: 'false',
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <ForgotPasswordSVG
          width="50%"
          height="50%"
          style={{
            alignSelf: 'center',
            marginBottom: 16,
            marginTop: statusBarHeight,
          }}></ForgotPasswordSVG>
        <Text style={styles.text1}>Forgot Password</Text>

        <Text style={styles.text2}>A handful of model sentence structures</Text>
      </View>

      <View style={styles.mid}>
        <TextInput
          style={styles.inputText}
          //   keyboardType="numeric"

          paddingLeft={12}
          //   secureTextEntry={true} // tao dau **** trong password
          autoFocus={true} // tu dong bat ra khi mo app
          placeholder="Email"
          placeholderTextColor="black" // chu cua holder
        />
        {accountTypes.map(accountType => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Forgot2');
              setAccountTypes(
                accountTypes.map(eachAccountType => {
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  };
                }),
              );
            }}
            style={styles.button}
            isSelected={accountType.isSelected}>
            <Text style={styles.textInnerBtn}>Continue</Text>
          </TouchableOpacity>
        ))}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 8,
          }}>
          <Text>We sent a</Text>
          <Text style={styles.text3}> Veritication Code </Text>
          <Text>to your Email</Text>
        </View>
      </View>

      <View style={styles.below}></View>
    </SafeAreaView>
  );
}

export default Forgot1;
