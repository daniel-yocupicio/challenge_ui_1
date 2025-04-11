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
import { UIContext } from '../../Context/UIContext/UIContext';
import TextFontFamily from '../../components/TextFontFamily';
import SingInButton from '../../components/SingInButton';
import NumberInput from '../../components/NumberInput';
import { styles } from './styles';
import { RootStackParamsLogin } from '../../navigation/StackLoginModule';

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

  const fadeOpacityContent = useSharedValue(0);
  const navigation = useNavigation<NavigationProp<RootStackParamsLogin>>();
  const isFocused = useIsFocused();

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

  const fadeStyleContent = useAnimatedStyle(() => ({
    opacity: fadeOpacityContent.value,
  }));

  const handleNavigation = useCallback(() => navigation.navigate('Number', { y: layoutRef.current.y as number }), [navigation]);

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
              if (!layoutRef.current) {
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
            />
          </View>
        </Animated.View>
      </View>
  );
};

export default SingIn;
