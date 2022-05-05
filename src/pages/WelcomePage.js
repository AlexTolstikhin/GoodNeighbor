import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import RoundedButtonFullWidth from '../components/roundedButtonFullWidth';
import HeroWelcomePageImage from '../assets/images/WelcomeHero.png';
import useImageDimensions from '../hooks/useImageDimensions';
import { bodyOne, headerOne } from '../styles/typography';

const WelcomePage = () => {
  const { imageDimensions } = useImageDimensions();
  const onGetStartedClick = () => {};
  const onSignInClick = () => {};
  const {
    bodyText,
    bottomSection,
    buttonWrapper,
    headerText,
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
      <View style={middleSection}>
        <Text style={headerText}>Welcome to GoodNeighbor</Text>
        <Text style={bodyText}>
          Making it easy for neighbors and co-workers to pickup food for each
          other, saving on delivery fees and helping local restaurants.
        </Text>
      </View>
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
  headerText: {
    ...headerOne
  },
  bodyText: {
    ...bodyOne
  }
});

export default WelcomePage;
