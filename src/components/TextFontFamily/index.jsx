import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TextFontFamily = ({children, style}) => {
  return (
    <Text style={[styles.styles, style]}>{children}</Text>
  );
};

export default TextFontFamily;

const styles = StyleSheet.create({
    styles: {
        fontFamily: 'NotoSans-VariableFont_wdth,wght.ttf',
    },
});
