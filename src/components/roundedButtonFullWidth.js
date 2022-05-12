  import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Buttons, Colors, Typography } from '../styles';

const RoundedButtonFullWidth = ({ disabled, label, onPress, withBackground = false }) => (
  <TouchableOpacity disabled={disabled} onPress={onPress} style={styles({ disabled, withBackground }).button}>
    <Text style={styles({ disabled, withBackground }).text}>{label}</Text>
  </TouchableOpacity>
);

const styles = ({ disabled, withBackground }) => StyleSheet.create({
  button: {
    ...Buttons.fullWidthRoundedButton,
    ...withBackground && {
      backgroundColor: Colors.pineGreen700,
    },
    ...disabled === true && {
      backgroundColor: Colors.cloud200,
      color: Colors.cloud500,
      borderColor: Colors.cloud200,
    }
  },
  text: {
    ...Typography.buttonPrimary,
    ...withBackground && {
      color: Colors.cloud50,
    },
    ...withBackground === false && {
      color: Colors.pineGreen700
    },
    ...disabled === true && {
      color: Colors.cloud500,
    }
  }
});

export default RoundedButtonFullWidth;