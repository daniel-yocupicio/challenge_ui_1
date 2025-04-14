// REACT imports
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Image, Keyboard, NativeSyntheticEvent, TextInput, TextInputChangeEventData, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

// npm imports
import Animated, { Easing, FadeIn, FadeOut, runOnJS } from 'react-native-reanimated';
import { NavigationAction, NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';

// local imports
import { RootStackParamsLogin } from '../../navigation/StackLoginModule';
import TextFontFamily from '../../components/TextFontFamily';
import { styles } from './styles';

const nextIcon = require('../../assets/icons/next.png');
const FADE_DURATION = 400;

const Verification : FC = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [code, setCode] = useState<string>('');

  const navigationRef = useRef<NavigationAction | null>(null);
  const inputRef = useRef<TextInput | null>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamsLogin>>();

  /**
   * effect to show components and open keyboard.
   */
  useFocusEffect(useCallback(() => {
    setShowContent(true);
    inputRef.current?.focus();
  }, []));

  /**
   * effect to handle goback event
   */
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();

      setShowContent(false);

      navigationRef.current = e.data.action;
    });

    return unsubscribe;
  }, [navigation]);

  /**
   * function to set text in code state.
   */
  const handleText = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setCode(e.nativeEvent.text);
  };

  /**
   * function to quit view component and start the navigation to selectlocation screen.
   */
  const goSelectLocation = () => {
    setShowContent(false);
  };

  /**
   * function to handle type of navigation, it can be go back o navigation to the next screen.
   */
  const callbackHandler = () => {
    if (navigationRef.current) {
      navigation.dispatch(navigationRef.current);
      navigationRef.current = null;
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
              ref={inputRef}
              value={code}
              placeholder="----"
              placeholderTextColor={'#181725'}
              style={styles.input}
              onChange={handleText}
              keyboardType="number-pad"
              maxLength={4}
            />
          </Animated.View>
          )}
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.optionsbuttons}>
        <TouchableOpacity>
          <TextFontFamily style={styles.resendCode}>Resend Code!</TextFontFamily>
        </TouchableOpacity>
        {code.length === 4 && (
          <Animated.View
            entering={FadeIn.duration(FADE_DURATION).easing(Easing.ease)}
            exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease)}
          >
            <TouchableOpacity style={styles.nextButton} onPress={goSelectLocation}>
              <Image source={nextIcon} style={styles.nextIcon} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
};

export default Verification;
