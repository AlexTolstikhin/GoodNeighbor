import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bodyOne, headerOne } from '../styles/typography';

const PageBodyText = ({ headerText, subHeaderText }) => (
  <View style={styles.container}>
    <Text style={styles.headerText}>{headerText}</Text>
    <Text style={styles.bodyText}>
      {subHeaderText}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  headerText: {
    ...headerOne
  },
  bodyText: {
    ...bodyOne
  },
  container: {
    flex: 20,
    marginHorizontal: 20
  },
});

export default PageBodyText;