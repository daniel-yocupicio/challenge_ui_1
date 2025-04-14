import React, { FC } from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleProp, TouchableOpacity } from 'react-native';
import TextFontFamily from '../TextFontFamily';
import { styles } from './styles';

interface Props {
  onPress?: () => void,
  iconStyle: StyleProp<ImageStyle>,
  icon: ImageSourcePropType,
  textButton: string,
  backgroundColor: string,
}

const SingInButton : FC<Props> = ({
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
