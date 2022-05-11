import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import RoundedButtonFullWidth from '../../components/RoundedButtonFullWidth';
import { SIGN_IN } from '../../constants/routes';
import PageBodyText from '../../components/PageBodyText';
import PageWrapper from '../../components/PageWrapper';
import HeroWelcomePageImage from '../../assets/images/WelcomeHero.png';
import useImageDimensions from '../../hooks/useImageDimensions';

const WelcomePage = ({ navigation }) => {
  const { imageDimensions } = useImageDimensions();
  const onGetStartedClick = () => {};
  const onSignInClick = () => {
    navigation.navigate(SIGN_IN)
  };
  const {
    bottomSection,
    buttonWrapper,
    middleSection,
    topSection,
  } = styles;
  return (
    <PageWrapper>
      <View style={topSection}>
        <Image
          source={HeroWelcomePageImage}
          style={imageDimensions}
        />
      </View>
      <View style={middleSection}>
        <PageBodyText
          headerText="Welcome to GoodNeighbor"
          subHeaderText="Making it easy for neighbors and co-workers to pickup food for each
          other, saving on delivery fees and helping local restaurants."
        />
      </View>
      <View style={bottomSection}>
        <RoundedButtonFullWidth onPress={onGetStartedClick} label="Get Started" withBackground />
        <RoundedButtonFullWidth onPress={onSignInClick} label="Sign In" />
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  topSection: {
    flex: 80,
    justifyContent: 'center'
  },
  middleSection: {
    flex: 20,
  },
  bottomSection: {
    flex: 25,
    justifyContent: 'space-evenly'
  },
});

export default WelcomePage;
