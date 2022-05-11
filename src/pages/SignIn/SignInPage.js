import React, { useState } from 'react';
import { KeyboardAvoidingView, View, TextInput } from 'react-native';
import { VERIFY_PHONE } from '../../constants/routes';
import PageBodyText from '../../components/PageBodyText';
import PageWrapper from '../../components/PageWrapper';
import RoundedButtonFullWidth from '../../components/RoundedButtonFullWidth';
import NumberInput from '../../components/NumberInput';

const SignInPage = ({ navigation }) => {
  const [number, setNumber] = useState('');

  const onSendButtonPress = () => {
    navigation.navigate(VERIFY_PHONE)
  };

  return(
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} keyboardVerticalOffset={100}>
        <PageWrapper customStyles={{ justifyContent: 'space-between' }} >
        <View>
          <PageBodyText headerText="Sign in" subHeaderText="We will send a one time code to your registered mobile number" />
          <NumberInput
            onChange={setNumber}
            value={number}
            placeholder="Phone"
          />
        </View>
        <RoundedButtonFullWidth onPress={onSendButtonPress} label="Send one time code" withBackground />
      </PageWrapper>
    </KeyboardAvoidingView>
  );
};


export default SignInPage;