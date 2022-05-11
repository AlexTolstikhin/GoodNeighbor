import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bodyOne, headerOne } from '../styles/typography';

const PageBodyText = ({ headerText, subHeaderText }) => (
  <View>
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
});

export default PageBodyText;