import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Image, NativeSyntheticEvent, TextInput, TextInputChangeEventData, TextInputFocusEventData, View } from 'react-native';

import { styles } from './styles';

const img = require('../../assets/icons/flag.png');

interface Props {
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
  showSoftInputOnFocus?: boolean,
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void,
  onLayout?: () => void,
  value?: string,
}

export interface REFNumberInput {
  focus: () => void
}

const NumberInput = forwardRef<REFNumberInput, Props>(({
  onFocus,
  showSoftInputOnFocus = true,
  onChange = () => {},
  onLayout = () => {},
  value = '+880',
}, ref) => {
  const refInput = useRef<TextInput>(null);

  const openKeyboard = () => {
    if (refInput.current !== null) {
      refInput.current.focus();
    }
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
          source={img}
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
          maxLength={17}
        />
    </View>
  );
});

export default NumberInput;
