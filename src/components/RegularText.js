import React from 'react';
import { Text } from 'react-native';

const RegularText = ({ children, styleOf, customStyles }) => (
  <Text style={{ ...styleOf, ...customStyles, }}>
    {children}
  </Text>
);

export default RegularText;