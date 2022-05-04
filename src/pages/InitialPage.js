import React, { useEffect } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import * as routes from '../constants/routes';
import HomeImageSVG from '../assets/images/HeroImage.png';
import useImageDimensions from '../hooks/useImageDimensions';

const HomePage = ({ navigation }) => {
  const { imageDimensions } = useImageDimensions();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.WELCOME_PAGE);
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.topSection}>
        <Text style={styles.textStyles}>Good Neighbor</Text>
      </View>
      <View style={styles.lowerSection}>
        <Image source={HomeImageSVG} style={imageDimensions} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
})

export default HomePage;