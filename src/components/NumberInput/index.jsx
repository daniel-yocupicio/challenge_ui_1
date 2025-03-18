import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { styles } from './styles';

const NumberInput = ({
    onFocus = () => {},
    showSoftInputOnFocus = true,
    onChange = () => {},
    onLayout = () => {},
    value = '+880',
    ref,
}) => {
  return (
    <View style={styles.container} onLayout={onLayout}>
        <Image
          style={styles.flag}
          source={require('../../assets/icons/flag.png')}
          resizeMode="cover"
        />
        <TextInput
          ref={ref}
          style={styles.input}
          value={value}
          onFocus={onFocus}
          showSoftInputOnFocus={showSoftInputOnFocus}
          onChange={onChange}
          keyboardType="phone-pad"
        />
    </View>
  );
};

export default NumberInput;
