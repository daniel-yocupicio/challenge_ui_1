import React, { FC } from 'react';

import { TouchableOpacity } from 'react-native';
import TextFontFamily from '../TextFontFamily';
import { styles } from './styles';

interface Props {
  onPress?: () => void,
  text?: string,
}

const Button : FC<Props> = ({onPress = () => {}, text = 'Get started!'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
        <TextFontFamily style={styles.textBtn}>
            {text}
        </TextFontFamily>
    </TouchableOpacity>
  );
};

export default Button;
