import React, {useCallback, useEffect, useRef} from 'react';
import { StatusBar, View } from 'react-native';
import SingInBackground from '../../components/SingInBackground';
import BackgroundLayout from '../../components/BackgroundLayout';
import TextFontFamily from '../../components/TextFontFamily';
import SingInButton from '../../components/SingInButton';
import NumberInput from '../../components/NumberInput';
import { styles } from './styles';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  FadeIn,
} from 'react-native-reanimated';

const FADE_DURATION = 300;

const SingIn = () => {
  const layoutRef = useRef(undefined);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const fadeOpacityContent = useSharedValue(0);
  const fadeOpacityInput = useSharedValue(0);

  useFocusEffect(
    useCallback(() => {
      fadeOpacityInput.value = withTiming(1, { duration: FADE_DURATION });
      return () => {
        fadeOpacityInput.value = 0;
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();

      fadeOpacityInput.value = withTiming(0, { duration: FADE_DURATION });
      fadeOpacityContent.value = withTiming(0, { duration: FADE_DURATION });

      setTimeout(() => {
        navigation.dispatch(e.data.action);
      }, FADE_DURATION + 1);
    });

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  useEffect(() => {
    if (isFocused) {
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

  const handleNumberInputFocus = () => {
    fadeOpacityContent.value = withTiming(0, { duration: FADE_DURATION }, () => {
      runOnJS(navigation.navigate)('Number', {y: layoutRef.current});
    });
  };
  return (
    <BackgroundLayout backgroundComponent={<SingInBackground />}>
      <View style={styles.container}>
        <Animated.View style={fadeStyleContent}>
          <TextFontFamily style={styles.title}>
            Get your groceries with nectar
          </TextFontFamily>
        </Animated.View>
        <Animated.View
          onLayout={e => {
            if (!layoutRef.current) {
              layoutRef.current = e.nativeEvent.layout.y;
            }
          }}
          style={[styles.numberInputContainer]}
          entering={FadeIn}
        >
          <NumberInput
            showSoftInputOnFocus={false}
            onFocus={handleNumberInputFocus}
          />
        </Animated.View>
        <Animated.View style={fadeStyleContent}>
          <TextFontFamily style={styles.description}>Or connect with social media</TextFontFamily>
          <View style={styles.buttonsContainer}>
            <SingInButton
              icon={require('../../assets/icons/google.png')}
              textButton="Continue with Google"
              iconStyle={styles.googleIcon}
              backgroundColor="#5383EC"
            />
            <SingInButton
              icon={require('../../assets/icons/facebook.png')}
              textButton="Continue with Facebook"
              iconStyle={styles.facebookIcon}
              backgroundColor="#4A66AC"
            />
          </View>
        </Animated.View>
      </View>
    </BackgroundLayout>
  );
};

export default SingIn;
