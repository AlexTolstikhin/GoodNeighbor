import React from 'react';
import { TextInput } from 'react-native';
import { TextInputStyles } from '../styles/inputs';

const NumberInput = ({
  onChange,
  value = '',
  placeholder,
}) => (
  <TextInput
    onChangeText={onChange}
    value={value}
    placeholder={placeholder}
    keyboardType="phone-pad"
    style={TextInputStyles}
    placeholderTextColor="#676665"
  />
);

export default NumberInput;