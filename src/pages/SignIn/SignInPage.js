import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PageBodyText from '../../components/pageBodyText';


const SignInPage = () => {
  const [number, setNumber] = useState(null);
  const { mainContainer } = styles;
  return(
    <View style={mainContainer}>
      <PageBodyText headerText="Sign in" subHeaderText="We will send a one time code to your registered mobile number" />
      <TextInput
        onChangeText={setNumber}
        value={number}
        placeholder="Phone"
        keyboardType="numeric"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
  },
})

export default SignInPage;