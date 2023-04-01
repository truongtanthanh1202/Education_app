import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {images} from '../../../../constants';
import styles from './style';
import Invisible from '../../../../asset/icons/invisible';

function Forgot3({navigation}) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Save Password',
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
        <Text style={styles.text1}>Change Password</Text>

        <Text style={styles.text2}>Your password length consist of</Text>
        <Text style={styles.text2}>6-characters</Text>
      </View>

      <View style={styles.mid}>
        <View>
          <Invisible width="28" height="28" style={styles.icon}></Invisible>

          <TextInput
            style={styles.inputText}
            //   keyboardType="numeric"

            paddingLeft={50}
            //   secureTextEntry={true} // tao dau **** trong password
            autoFocus={true} // tu dong bat ra khi mo app
            placeholder="New Password"
            placeholderTextColor="black" // chu cua holder
          />
        </View>
        <View>
          <Invisible width="28" height="28" style={styles.icon}></Invisible>

          <TextInput
            style={styles.inputText}
            //   keyboardType="numeric"

            paddingLeft={50}
            //   secureTextEntry={true} // tao dau **** trong password
            autoFocus={true} // tu dong bat ra khi mo app
            placeholder="Confirm Password"
            placeholderTextColor="black" // chu cua holder
          />
        </View>

        {accountTypes.map(accountType => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Forgot4');
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
            <Text style={styles.textInnerBtn}>Save Password</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.below}></View>
    </SafeAreaView>
  );
}

export default Forgot3;
