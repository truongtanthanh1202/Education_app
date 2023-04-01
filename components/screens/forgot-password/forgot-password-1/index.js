import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {images} from '../../../../constants';
import Email from '../../../../asset/icons/email';

import styles from './style';

function Forgot1({navigation}) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Continue',
      isSelected: 'false',
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          source={images.key2}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginBottom: 12,
          }}></Image>
        <Text style={styles.text1}>Forgot Password</Text>

        <Text style={styles.text2}>A handful of model sentence structures</Text>
      </View>

      <View style={styles.mid}>
        <Email width="28" height="28" style={styles.icon}></Email>

        <TextInput
          style={styles.inputText}
          //   keyboardType="numeric"

          paddingLeft={55}
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
