import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

interface Props {
  children: React.ReactNode,
  style: StyleProp<TextStyle>
}

const TextFontFamily : FC<Props> = ({children, style = {}}) => {
  return (
    <Text adjustsFontSizeToFit style={[styles.styles, style]}>{children}</Text>
  );
};

export default TextFontFamily;

const styles = StyleSheet.create({
    styles: {
        fontFamily: 'NotoSans-VariableFont_wdth,wght',
    },
});
