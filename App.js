/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as routes from './src/constants/routes';

import InitialPage from './src/pages/InitialPage';
import SignIn from './src/pages/SignIn';
import WelcomePage from './src/pages/WelcomePage';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator
        initialRouteName={routes.INITIAL_PAGE}
      >
        <Stack.Screen component={InitialPage} name={routes.INITIAL_PAGE} options={{ headerShown: false }} />
        <Stack.Screen component={WelcomePage} name={routes.WELCOME_PAGE} options={{ headerShown: false }} />
        <Stack.Screen component={SignIn} name={routes.SIGN_IN} options={{ headerShown: true, headerBackImageSource: require('./src/assets/images/CloseIcon.png'), headerBackTitleVisible: false, title: "" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
