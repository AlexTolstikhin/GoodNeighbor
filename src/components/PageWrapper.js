import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
  }
})

const PageWrapper = ({
  backgroundColor = '#FFFFFF',
  children,
  customStyles = {},
}) => (
  <View backgroundColor={backgroundColor} style={{...styles.container, ...customStyles}}>
    {children}
  </View>
);

export default PageWrapper;
