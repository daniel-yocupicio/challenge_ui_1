import React, { createContext, useReducer, useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';

import NumberInput from '../../components/NumberInput';
import { styles } from './styles';

import Animated, { Easing, FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export const SingInContext = createContext();

const {height} = Dimensions.get('window');

const STATE_INITIAL = {
  phone: '+880',
};

function SingInProvider({ children }) {
  const [state, dispatch] = useReducer(reducerSingIn, STATE_INITIAL);
  const [showNumberInputBool, setShowNumberInputBool] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const translateY = useSharedValue(0);
  const navigation = useRef(undefined);
  const inputRef = useRef(undefined);

  const showNumberInput = () => {
    setShowNumberInputBool(true);
  };

  const hideNumberInput = () => {
    setShowNumberInputBool(false);
  };

  const moveNumberInputUp = () => {
    setShowKeyboard(true);
    translateY.value = withTiming(-(height *  0.25), { duration: 500, easing: Easing.out(Easing.ease) }, () => {});
  };

  const moveNumberInputDown = () => {
    translateY.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.ease) });
    setShowKeyboard(false);
  };

  const setNavigation = (x) => {
    navigation.current = x;
  };

  // animation style
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const focusKeyboard = () => {
    inputRef.current.focus();
  };

  return (
    <SingInContext.Provider value={{
        showNumberInput,
        hideNumberInput,
        moveNumberInputUp,
        moveNumberInputDown,
        setNavigation,
        focusKeyboard,
        state,
    }}>
      {children}
      <View style={styles.safeAreaView}>
        {showNumberInputBool && (
            <Animated.View entering={FadeIn} exiting={FadeOut} style={[styles.inputView, animatedStyle]}>
              <NumberInput
                showSoftInputOnFocus={showKeyboard}
                value={state.phone}
                onFocus={() => {
                  if (navigation.current && !showKeyboard) {
                    navigation.current.navigate('Number');
                  }
                }}
                onChange={e => {
                  dispatch({type: 'set number', payload: e.nativeEvent.text});
                }}
                ref={inputRef}
              />
            </Animated.View>
        )}
      </View>
    </SingInContext.Provider>
  );
}

export default SingInProvider;

const reducerSingIn = (state, action) => {
  switch(action.type) {
    case 'set number':
      return {...state, phone: action.payload};
  }
};
