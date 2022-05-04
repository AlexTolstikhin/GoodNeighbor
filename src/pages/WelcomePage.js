import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import HeroWelcomePageImage from '../assets/images/WelcomeHero.png';

const windowObject = Dimensions.get('window');
const ratio = windowObject.width / 541;

const welcomePageStyles = {
  imageStyles: {
    height: 362 * ratio,
    width: windowObject.width,
  },
};

const WelcomePage = () => {
  const onGetStartedClick = () => {};
  const onSignInClick = () => {};
  return (
    <View>
      <View>
        <Image
          source={HeroWelcomePageImage}
          style={welcomePageStyles.imageStyles}
        />
      </View>
      <View>
        <Text>Welcome to GoodNeighbor</Text>
        <Text>
          Making it easy for neighbors and co-workers to pickup food for each
          other, saving on delivery fees and helping local restaurants.
        </Text>
      </View>
      <View>
        <Button onPress={onGetStartedClick} title="Get Started" />
        <Button onPress={onSignInClick} title="Sign In" />
      </View>
    </View>
  );
};

export default WelcomePage;
