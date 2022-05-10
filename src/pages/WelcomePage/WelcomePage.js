import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import RoundedButtonFullWidth from '../../components/roundedButtonFullWidth';
import { SIGN_IN } from '../../constants/routes';
import PageBodyText from '../../components/pageBodyText';
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
    mainContainer,
    middleSection,
    topSection,
  } = styles;
  return (
    <View style={mainContainer}>
      <View style={topSection}>
        <Image
          source={HeroWelcomePageImage}
          style={imageDimensions}
        />
      </View>
      <PageBodyText
        headerText="Welcome to GoodNeighbor"
        subHeaderText="Making it easy for neighbors and co-workers to pickup food for each
        other, saving on delivery fees and helping local restaurants."
      />
      <View style={bottomSection}>
        <View style={buttonWrapper}>
          <RoundedButtonFullWidth onPress={onGetStartedClick} label="Get Started" withBackground />
        </View>
        <View style={buttonWrapper}>
          <RoundedButtonFullWidth onPress={onSignInClick} label="Sign In" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  topSection: {
    flex: 80,
    justifyContent: 'center'
  },
  middleSection: {
    flex: 20,
    marginHorizontal: 20
  },
  bottomSection: {
    flex: 25,
  },
  buttonWrapper: {
    marginVertical: 5
  },
});

export default WelcomePage;
