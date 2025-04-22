import React, { FC, useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import TextFontFamily from '../TextFontFamily';

interface Props {
    onChange: () => void,
    label: string,
    placeholder: string,
    inputType?: string,
    iconRight?: any,
    hasSecureMode?: boolean
    letterSpacing?: number,
    marginTop?: number,
    marginBottom?: number,
}

const eyeIcon = require('../../assets/icons/eye.png');

const CustomInput : FC<Props> = ({label, placeholder, iconRight, hasSecureMode, marginTop = 0, marginBottom = 0, letterSpacing = 0}) => {
    const [secureInput, setSecureInput] = useState(hasSecureMode);

    const handleSecureMode = () => setSecureInput(prev => !prev);

    return (
        <View style={{marginTop, marginBottom}}>
            <View style={styles.container}>
                <View>
                        <TextFontFamily style={styles.label}>{label}</TextFontFamily>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholderTextColor="#7c7c7c"
                                placeholder={placeholder}
                                secureTextEntry={secureInput}
                                style={[styles.input, {letterSpacing}]}
                            />
                            {hasSecureMode && (
                                <TouchableOpacity onPress={handleSecureMode}>
                                    <Image source={eyeIcon} style={styles.icon} resizeMode="center" />
                                </TouchableOpacity>
                            )}
                            {iconRight && (
                                <Image source={iconRight} style={styles.icon} resizeMode="center" />
                            )}
                        </View>
                    </View>
            </View>
        </View>
    );
};

export default CustomInput;
