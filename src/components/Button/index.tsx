import React from 'react';
import { styles } from './styles';
import TextFontFamily from '../TextFontFamily';
import { TouchableOpacity } from 'react-native';

interface Props {
  onPress?: () => void,
  text?: string,
}

const Button = ({onPress = () => {}, text = 'Get started!'} : Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
        <TextFontFamily style={styles.textBtn}>
            {text}
        </TextFontFamily>
    </TouchableOpacity>
  );
};

export default Button;
