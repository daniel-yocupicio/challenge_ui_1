import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Image, TextInput, View } from 'react-native';
import { styles } from './styles';

const NumberInput = forwardRef(({
  onFocus = () => {},
  showSoftInputOnFocus = true,
  onChange = () => {},
  onLayout = () => {},
  value = '+880',
}, ref) => {
  const refInput = useRef(undefined);

  const openKeyboard = () => {
    refInput.current.focus();
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      openKeyboard();
    },
  }));

  return (
    <View style={styles.container} onLayout={onLayout}>
        <Image
          style={styles.flag}
          source={require('../../assets/icons/flag.png')}
          resizeMode="cover"
        />
        <TextInput
          ref={refInput}
          style={styles.input}
          value={value}
          onFocus={onFocus}
          showSoftInputOnFocus={showSoftInputOnFocus}
          onChange={onChange}
          keyboardType="phone-pad"
        />
    </View>
  );
});

export default NumberInput;
