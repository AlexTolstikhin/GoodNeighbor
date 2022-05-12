import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text } from 'react-native';
import { SIGN_IN } from '../../constants/routes';
import PageWrapper from '../../components/PageWrapper';
import RegularText from '../../components/RegularText';
import RoundedButtonFullWidth from '../../components/RoundedButtonFullWidth';
import NumberInput from '../../components/NumberInput';
import { bodyOne } from '../../styles/typography';

const VeifyPhonePage = ({ navigation }) => {
  const [verificationNumber, setVerificationNumber] = useState(null);

  const onVerifyAndSignInPress = () => {
    navigation.navigate(SIGN_IN)
  };

  return(
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} keyboardVerticalOffset={80}>
        <PageWrapper customStyles={{ justifyContent: 'space-between' }} >
        <View>
          <NumberInput
            onChange={setVerificationNumber}
            value={verificationNumber}
            placeholder="Verification code"
          />
          <RegularText styleOf={bodyOne}>
            We have sent a verification code to your number ***2345
          </RegularText>
          <RegularText customStyles={{ marginTop: 24, fontSize: 18, lineHeight: 20 }} styleOf={bodyOne}>
            Send code again
          </RegularText>
        </View>
        <RoundedButtonFullWidth onPress={onVerifyAndSignInPress} label="Verify and Sign in" withBackground />
      </PageWrapper>
    </KeyboardAvoidingView>
  );
};


export default VeifyPhonePage;