import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Navigation bar
import Navbar from './components/screens/nav-bar';

//Screen components
import {Splash1, Splash2, Splash3, Splash4} from './components/screens/splash';
import Login from './components/screens/login';
import {Register1, Register2, Register3} from './components/screens/register';
import {
  Forgot1,
  Forgot2,
  Forgot3,
  Forgot4,
} from './components/screens/forgot-password';
import {Profile3, Profile4, Profile5} from './components/screens/profile';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="Splash4" component={Splash4} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register1" component={Register1} />
        <Stack.Screen name="Register2" component={Register2} />
        <Stack.Screen name="Register3" component={Register3} />
        <Stack.Screen name="Forgot1" component={Forgot1} />
        <Stack.Screen name="Forgot2" component={Forgot2} />
        <Stack.Screen name="Forgot3" component={Forgot3} />
        <Stack.Screen name="Forgot4" component={Forgot4} />
        <Stack.Screen name="Profile5" component={Profile5} />

        <Stack.Screen name="Navbar" component={Navbar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
