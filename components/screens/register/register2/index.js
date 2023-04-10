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

import {images, colors} from '../../../../constants';
import User from '../../../../asset/icons/user';
import Invisible from '../../../../asset/icons/invisible';
import Email from '../../../../asset/icons/email';
import SelectDropdown from 'react-native-select-dropdown';
import {isValidEmail, isValidPassword} from '../../../utilies/Validations';
import styles from './style';
import {Use} from 'react-native-svg';

function Register2({navigation}) {
  //states for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  // state to store email, password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValidationOK = () =>
    email.length >= 0 &&
    password.length >= 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Create Account ',
      isSelected: 'false',
    },
  ]);
  const roles = ['Teacher', 'Student'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          source={images.account}
          style={{
            width: 100,
            height: 100,
            margin: 20,
            alignSelf: 'center',
          }}></Image>
        <Text style={styles.text1}> Create an Account</Text>
        <Text style={styles.text2}>
          {' '}
          A handful of model sentence structures
        </Text>
      </View>

      <View style={styles.mid}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 12,
          }}>
          <SelectDropdown
            buttonStyle={{
              backgroundColor: '#3787ff',
              borderRadius: 28,
              width: 330,
            }}
            buttonTextStyle={{color: 'white', fontWeight: 500}}
            defaultButtonText={'Choose a role'}
            dropdownStyle={{borderRadius: 16}}
            data={roles}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
        <View>
          <User width="24" height="24" style={styles.icon}></User>
          <TextInput
            style={styles.inputText}
            autoFocus={true}
            placeholder="Username"
            paddingLeft={48}
            placeholderTextColor="black"
          />
        </View>

        <View style={{height: 12}}></View>
        <View>
          <Email width="24" height="24" style={styles.icon}></Email>

          <TextInput
            onChangeText={text => {
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Please enter valid email',
              );
              setEmail(text);
            }}
            style={styles.inputText}
            paddingLeft={48}
            placeholder="Email id"
            placeholderTextColor="black"
          />
          <Text
            style={{
              color: 'red',
              fontSize: 12,
              marginLeft: 32,
            }}>
            {errorEmail}
          </Text>
        </View>
        <View>
          <Invisible width="24" height="24" style={styles.icon}></Invisible>

          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 6 characters',
              );
              setPassword(text);
            }}
            style={styles.inputText}
            secureTextEntry={true} // tao dau **** trong password
            placeholder="Password"
            paddingLeft={48}
            placeholderTextColor="black"
          />
        </View>

        <Text
          style={{
            color: 'red',
            fontSize: 12,
            marginLeft: 32,
          }}>
          {errorPassword}
        </Text>
      </View>

      <View style={styles.below}>
        {accountTypes.map(accountType => (
          <TouchableOpacity
            disabled={isValidationOK() == false}
            onPress={() => {
              navigation.navigate('Register3');
              alert(`Email = ${email}, password= ${password}`);
              setAccountTypes(
                accountTypes.map(eachAccountType => {
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  };
                }),
              );
            }}
            isSelected={isValidationOK() == true ? true : false}
            style={styles.button}>
            <Text style={styles.textInnerBtn}>Create Account</Text>
          </TouchableOpacity>
        ))}
        <View
          style={{
            margin: 4,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#585859',
              textAlign: 'center',
            }}>
            Already have an account?
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                color: '#5297fe',
                textDecorationLine: 'underline',
              }}>
              {' '}
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register2;
