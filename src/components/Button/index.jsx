import React from 'react';
import { styles } from './styles';
import TextFontFamily from '../TextFontFamily';
import { TouchableOpacity } from 'react-native';

const Button = ({onPress = () => {}, text = 'Get started!'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
        <TextFontFamily style={styles.textBtn}>
            {text}
        </TextFontFamily>
    </TouchableOpacity>
  );
};

export default Button;
