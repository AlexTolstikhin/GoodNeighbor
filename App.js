/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as routes from './src/constants/routes';

import InitialPage from './src/pages/InitialPage';
import WelcomePage from './src/pages/WelcomePage';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator
        initialRouteName={routes.INITIAL_PAGE}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={InitialPage} name={routes.INITIAL_PAGE} />
        <Stack.Screen component={WelcomePage} name={routes.WELCOME_PAGE} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
