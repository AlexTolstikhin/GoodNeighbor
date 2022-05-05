  import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Buttons, Colors, Typography } from '../styles';

const RoundedButtonFullWidth = ({ label, onPress, withBackground = false }) => (
  <TouchableOpacity onPress={onPress} style={styles({ withBackground }).button}>
    <Text style={styles({ withBackground }).text}>{label}</Text>
  </TouchableOpacity>
);

const styles = ({ withBackground }) => StyleSheet.create({
  button: {
    ...Buttons.fullWidthRoundedButton,
    ...withBackground && {
      backgroundColor: Colors.pineGreen700,
    },
  },
  text: {
    ...Typography.buttonPrimary,
    ...withBackground && {
      color: Colors.cloud50,
    },
    ...withBackground === false && {
      color: Colors.pineGreen700
    }
  }
});

export default RoundedButtonFullWidth;