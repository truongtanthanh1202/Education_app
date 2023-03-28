import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import UIButton3 from '../../../atoms/UIButton3';
import styles from './style';

function Register1({navigation}) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Sign Up with Google ',
      isSelected: 'false',
    },
    {
      name: 'Sign Up with Facebook',
      isSelected: 'false',
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.context}>
        <Text style={styles.text}> Welcome! </Text>
        <Text style={styles.text}> Sign up to continue!</Text>
      </View>
      <View style={styles.top}>
        {accountTypes.map(accountType => (
          <UIButton3
            onPress={() => {
              setAccountTypes(
                accountTypes.map(eachAccountType => {
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  };
                }),
              );
            }}
            title={accountType.name}
            isSelected={accountType.isSelected}></UIButton3>
        ))}
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: '#585d69',
          }}>
          or
        </Text>
      </View>
      <View style={styles.mid}>
        <UIButton3
          title="Sign up with email"
          onPress={() => {
            navigation.navigate('Register2');
          }}></UIButton3>
        <Text style={{fontSize: 12, textAlign: 'center', color: '#585d69'}}>
          {' '}
          By signing up you are agreed with our
        </Text>
        <Text style={{fontSize: 12, textAlign: 'center', color: '#585d69'}}>
          {' '}
          friendly terms and condition
        </Text>
      </View>
      <View style={styles.below}>
        <Text style={{fontSize: 14, textAlign: 'center', color: '#383838'}}>
          Already have an account?
        </Text>
        <UIButton3 title="Sign in"></UIButton3>
      </View>
    </SafeAreaView>
  );
}

export default Register1;
