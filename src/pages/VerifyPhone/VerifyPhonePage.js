import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput } from 'react-native';
import { SIGN_IN } from '../../constants/routes';
import PageWrapper from '../../components/PageWrapper';
import RoundedButtonFullWidth from '../../components/RoundedButtonFullWidth';
import NumberInput from '../../components/NumberInput';

const VeifyPhonePage = ({ navigation }) => {
  const [number, setNumber] = useState(null);

  const onVerifyAndSignInPress = () => {
    navigation.navigate(SIGN_IN)
  };

  return(
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} keyboardVerticalOffset={100}>
        <PageWrapper customStyles={{ justifyContent: 'space-between' }} >
        <View>
          <NumberInput
            onChange={setNumber}
            value={number}
            placeholder="Verification code"
          />
          <Text>
            We have sent a verification code to your number ***2345
          </Text>
          <Text>
            Send code again
          </Text>
        </View>
        <RoundedButtonFullWidth onPress={onVerifyAndSignInPress} label="Send one time code" withBackground />
      </PageWrapper>
    </KeyboardAvoidingView>
  );
};


export default VeifyPhonePage;