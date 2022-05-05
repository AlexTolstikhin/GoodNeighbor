import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { bodyOne, headerOne } from '../styles/typography';

const PageBodyText = ({ headerText, subHeaderText }) => (
  <>
    <Text style={styles.headerText}>{headerText}</Text>
    <Text style={styles.bodyText}>
      {subHeaderText}
    </Text>
  </>
);

const styles = StyleSheet.create({
  headerText: {
    ...headerOne
  },
  bodyText: {
    ...bodyOne
  }
});

export default PageBodyText;