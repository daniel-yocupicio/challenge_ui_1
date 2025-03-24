import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import TextFontFamily from '../TextFontFamily';
import { styles } from './styles';

const SingInButton = ({
    onPress = () => {},
    iconStyle = {},
    icon = undefined,
    textButton = '',
    backgroundColor = 'blue',
}) => {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor}]} onPress={onPress}>
        <Image source={icon} style={iconStyle} />
        <TextFontFamily style={styles.txtBtn}>{textButton}</TextFontFamily>
    </TouchableOpacity>
  );
};

export default SingInButton;
