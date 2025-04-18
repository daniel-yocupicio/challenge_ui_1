// REACT imports
import React, {FC, useCallback, useContext, useEffect, useRef, useState} from 'react';
import { StatusBar, View } from 'react-native';

// npm imports
import { NavigationProp, useIsFocused, useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  FadeIn,
  Easing,
  FadeOut,
} from 'react-native-reanimated';

// local imports
import { RootStackParamsLogin } from '../../navigation/StackLoginModule';
import { UIContext } from '../../Context/UIContext/UIContext';
import TextFontFamily from '../../components/TextFontFamily';
import SingInButton from '../../components/SingInButton';

import { styles } from './styles';
import NumberInput from '../../components/NumberInput';

const FADE_DURATION : number = 300;
const imgGoogle = require('../../assets/icons/google.png');
const imgFacebook = require('../../assets/icons/facebook.png');

interface LayoutRef {
  y?: number,
  height?: number,
}

const SingIn : FC = () => {
  const {showBackground2, hideBackground2} = useContext(UIContext);
  const [showInput, setShowInput] = useState<boolean>(true);
  const layoutRef = useRef<LayoutRef>({} as LayoutRef);

  const navigation = useNavigation<NavigationProp<RootStackParamsLogin>>();
  const fadeOpacityContent = useSharedValue(0);
  const isFocused = useIsFocused();

  const fadeStyleContent = useAnimatedStyle(() => ({
    opacity: fadeOpacityContent.value,
  }));

  /**
   * Effect to do animations before to return a previous screen.
   */
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();

      fadeOpacityContent.value = withTiming(0, { duration: FADE_DURATION });
      setShowInput(false);
      hideBackground2();

      setTimeout(() => {
        navigation.dispatch(e.data.action);
      }, FADE_DURATION + 1);
    });

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  /**
   * Effect to animate components and show background.
   */
  useEffect(() => {
    if (isFocused) {
      showBackground2();
      StatusBar.setBarStyle('dark-content');
      fadeOpacityContent.value = withTiming(1, { duration: FADE_DURATION });
    } else {
      fadeOpacityContent.value = withTiming(0, { duration: FADE_DURATION });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  /**
   * Function to handle a navigation to the next screen, this
   * function is executed when finish fade Opacity Content animation.
   */
  const handleNavigation = useCallback(() => navigation.navigate('Number', { y: layoutRef.current.y as number }), [navigation]);

  /**
   * Function to handle focus event in NumberInput component.
   */
  const handleNumberInputFocus = useCallback(() => {
    fadeOpacityContent.value = withTiming(0, { duration: FADE_DURATION }, () => {
      runOnJS(handleNavigation)();
    });
  }, [fadeOpacityContent, handleNavigation]);

  return (
      <View style={styles.container}>
        <Animated.View style={fadeStyleContent}>
          <TextFontFamily style={styles.title}>
            Get your groceries with nectar
          </TextFontFamily>
        </Animated.View>
        {showInput ? (
          <Animated.View
            onLayout={e => {
              if (!layoutRef.current.y) {
                const {y, height} = e.nativeEvent.layout;
                layoutRef.current = {y, height};
              }
            }}
            style={[styles.numberInputContainer]}
            entering={FadeIn.duration(FADE_DURATION).easing(Easing.ease)}
            exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease)}
          >
            <NumberInput
              showSoftInputOnFocus={false}
              onFocus={handleNumberInputFocus}
            />
          </Animated.View>
        ) : (<View style={{height: layoutRef.current.height}} />)}
        <Animated.View style={fadeStyleContent}>
          <TextFontFamily style={styles.description}>
            Or connect with social media
          </TextFontFamily>
          <View style={styles.buttonsContainer}>
            <SingInButton
              icon={imgGoogle}
              textButton="Continue with Google"
              iconStyle={styles.googleIcon}
              backgroundColor="#5383EC"
            />
            <SingInButton
              icon={imgFacebook}
              textButton="Continue with Facebook"
              iconStyle={styles.facebookIcon}
              backgroundColor="#4A66AC"
              onPress={() => {}}
            />
          </View>
        </Animated.View>
      </View>
  );
};

export default SingIn;
