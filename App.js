/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, Image, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as routes from './src/constants/routes';

import InitialPage from './src/pages/InitialPage';
import SignIn from './src/pages/SignIn';
import WelcomePage from './src/pages/WelcomePage';
import VerifyPhonePage from './src/pages/VerifyPhone';


const App = () => {
  const Stack = createNativeStackNavigator();
  const commonOptions = {
    headerShown: false
  };
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator
        initialRouteName={routes.INITIAL_PAGE}
      >
        <Stack.Screen
          component={InitialPage}
          name={routes.INITIAL_PAGE}
          options={{ ...commonOptions }}
        />
        <Stack.Screen
          component={WelcomePage}
          name={routes.WELCOME_PAGE}
          options={{ ...commonOptions }}
        />
        <Stack.Screen
          component={SignIn}
          name={routes.SIGN_IN}
          options={{
            headerBackTitleVisible: false,
            title: "",
            headerLeft: () => (
                  <Icon.Button
                    backgroundColor="transparent"
                    name="chevron-left"
                    color="black"
                  />
              ),
          }}
        />
        <Stack.Screen
          component={VerifyPhonePage}
          name={routes.VERIFY_PHONE}
          options={{
            headerBackTitleVisible: false,
            title: "Verify Phone",
            headerLeft: () => (
              <Icon.Button
                backgroundColor="transparent"
                name="close"
                color="black"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
