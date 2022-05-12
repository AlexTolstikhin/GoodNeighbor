import React, { useState } from 'react';
import { KeyboardAvoidingView, View, TextInput } from 'react-native';
import { VERIFY_PHONE } from '../../constants/routes';
import PageBodyText from '../../components/PageBodyText';
import PageWrapper from '../../components/PageWrapper';
import RoundedButtonFullWidth from '../../components/RoundedButtonFullWidth';
import NumberInput from '../../components/NumberInput';
import { formatPhoneNumber } from '../../utils/formatters';
import { phoneNumberValidator } from '../../utils/validators';


const SignInPage = ({ navigation }) => {
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState(null);
  const handlePhoneNumberUpdate = (phoneNumber) => setFormattedPhoneNumber(formatPhoneNumber(phoneNumber, formattedPhoneNumber));


  const onSendButtonPress = () => {
    navigation.navigate(VERIFY_PHONE)
  };

  return(
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} keyboardVerticalOffset={80}>
        <PageWrapper customStyles={{ justifyContent: 'space-between' }} >
        <View>
          <PageBodyText headerText="Sign in" subHeaderText="We will send a one time code to your registered mobile number" />
          <NumberInput
            onChange={handlePhoneNumberUpdate}
            value={formattedPhoneNumber}
            placeholder="Phone"
          />
        </View>
        <RoundedButtonFullWidth disabled={!phoneNumberValidator(formattedPhoneNumber)} onPress={onSendButtonPress} label="Send one time code" withBackground />
      </PageWrapper>
    </KeyboardAvoidingView>
  );
};


export default SignInPage;