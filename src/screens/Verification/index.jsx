import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, Keyboard, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import TextFontFamily from '../../components/TextFontFamily';
import { styles } from './styles';

import Animated, { Easing, FadeIn, FadeOut, runOnJS } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

const nextIcon = require('../../assets/icons/next.png');
const FADE_DURATION = 400;

const Verification = ({navigation}) => {
  const [showContent, setShowContent] = useState(true);
  const [code, setCode] = useState('');

  const navigationRef = useRef(undefined);
  const inputRef = useRef(undefined);

  useFocusEffect(useCallback(() => {
    setShowContent(true);
    inputRef.current?.focus();
  }, []));

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();

      setShowContent(false);

      navigationRef.current = e.data.action;
    });

    return unsubscribe;
  }, [navigation]);

  const handleText = (e) => {
    setCode(e.nativeEvent.text);
  };

  const goSelectLocation = () => {
    setShowContent(false);
  };

  const callbackHandler = () => {
    if (navigationRef.current) {
      navigation.dispatch(navigationRef.current);
      navigationRef.current = undefined;
    } else {
      navigation.navigate('SelectLocation');
    }
  };

  return (
    <View style={styles.flex1}>
      <TouchableWithoutFeedback style={styles.flex1} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {showContent && (
          <Animated.View
            entering={FadeIn.duration(FADE_DURATION).easing(Easing.ease)}
            exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease).withCallback(
              () => {
                runOnJS(callbackHandler)();
              }
            )}
          >
            <TextFontFamily style={styles.title}>Enter your 4-digit code</TextFontFamily>
            <TextFontFamily style={styles.description}>Code</TextFontFamily>
            <TextInput
              value={code}
              placeholder="- - - -"
              placeholderTextColor={'#181725'}
              style={styles.input}
              onChange={handleText}
              ref={inputRef}
            />
          </Animated.View>
          )}
        </View>
      </TouchableWithoutFeedback>
      {code.length === 4 && (
        <Animated.View
          entering={FadeIn.duration(FADE_DURATION).easing(Easing.ease)}
          exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease)}
          style={styles.optionsbuttons}
        >
          <TouchableOpacity>
            <TextFontFamily style={styles.resendCode}>Resend Code!</TextFontFamily>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={goSelectLocation}>
            <Image source={nextIcon} style={styles.nextIcon} />
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default Verification;
