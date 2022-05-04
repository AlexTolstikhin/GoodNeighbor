import React, { useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import { Dimensions } from 'react-native';
import * as routes from '../constants/routes';
import HomeImageSVG from '../assets/images/HeroImage.png';

const windowObject = Dimensions.get('window');
const ratio = windowObject.width / 541;

const HomePageStyles = {
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  lowerSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  textStyles: {
    fontFamily: 'Sriracha',
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 50,
    textAlign: 'center',
    color: '#FCFBFA',
  },
  mainWrapper: {
    height: '100%',
    backgroundColor: '#004D40',
  },
  imageStyles: {
    height: 362 * ratio,
    width: windowObject.width,
  },
};

const HomePage = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.WELCOME_PAGE);
    }, 3000);
  }, [navigation]);

  return (
    <View style={HomePageStyles.mainWrapper}>
      <View style={HomePageStyles.topSection}>
        <Text style={HomePageStyles.textStyles}>Good Neighbor</Text>
      </View>
      <View style={HomePageStyles.lowerSection}>
        <Image source={HomeImageSVG} style={HomePageStyles.imageStyles} />
      </View>
    </View>
  );
};

export default HomePage;
