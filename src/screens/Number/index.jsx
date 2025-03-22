import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, Dimensions } from 'react-native';

import SingInBackground from '../../components/SingInBackground';
import BackgroundLayout from '../../components/BackgroundLayout';
import TextFontFamily from '../../components/TextFontFamily';
import { styles } from './styles';

import Animated, { Easing, FadeIn, FadeOut, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import NumberInput from '../../components/NumberInput';

const backIcon = require('../../assets/icons/back.png');
const nextIcon = require('../../assets/icons/next.png');
const countryCode = '+880';

const {height} = Dimensions.get('window');
const FADE_DURATION = 400;

const Number = ({route}) => {
  const navigation = useNavigation();
  const [showBlur, setShowBlur] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [showBackButton, setShowBackButton] = useState(true);
  const [value, setValue] = useState('+880');
  const inputRef = useRef(undefined);
  const isFocused = useIsFocused();
  const {y} = route.params;

  const translateY = useSharedValue(0);

  const caractersInString = useMemo(() => {
    return value.substring(countryCode.length).length;
  }, [value]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();

      setShowBlur(false);
      setShowContent(false);
      setShowBackButton(false);
      translateY.value = withTiming(0, { duration: FADE_DURATION, easing: Easing.ease });

      setTimeout(() => {
        navigation.dispatch(e.data.action);
      }, FADE_DURATION + 1);
    });

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  useEffect(() => {
    if (isFocused) {
      setShowContent(true);
    }
  }, [isFocused]);

  useFocusEffect(useCallback(() => {
    translateY.value = withTiming(-(height * 0.25 - 8), { duration: FADE_DURATION, easing: Easing.ease });
    inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []));

  const handleGoBack = () => {
    navigation.goBack();
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <BackgroundLayout backgroundComponent={<SingInBackground />}>
      {showBlur && (
        <Animated.View entering={FadeIn.duration(FADE_DURATION + 200).easing(Easing.ease)} exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease)} style={[styles.absolute]}>
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={5}
            reducedTransparencyFallbackColor="white"
          />
        </Animated.View>
      )}
      <View style={styles.flex1}>
        <TouchableWithoutFeedback style={styles.flex1} onPress={Keyboard.dismiss}>
          <View style={styles.flex1}>
            {showBackButton && (
              <Animated.View entering={FadeIn.duration(FADE_DURATION + 200).easing(Easing.ease)} style={styles.width}>
                <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                  <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
              </Animated.View>
            )}
            {showContent && (
              <Animated.View entering={FadeIn.duration(FADE_DURATION + 200).easing(Easing.ease)} exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease)} style={styles.width}>
                <TextFontFamily style={styles.title}>
                  Enter your mobile number
                </TextFontFamily>
                <TextFontFamily style={styles.description}>
                  Mobile Number
                </TextFontFamily>
              </Animated.View>
            )}

            <Animated.View style={[{position: 'absolute', top: y, alignSelf: 'center'}, animatedStyle]}>
              <NumberInput
                showSoftInputOnFocus={true}
                ref={inputRef}
                onChange={e => setValue(e.nativeEvent.text)}
                value={value}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
        {caractersInString > 0 && (
          <Animated.View entering={FadeIn.duration(400).easing(Easing.ease)} exiting={FadeOut.duration(400).easing(Easing.ease)} style={styles.bottomButtons}>
            <TouchableOpacity style={styles.nextButton} onPress={() => {
              setShowContent(false);

              setTimeout(() => {
                runOnJS(navigation.navigate)('Verification');
              }, FADE_DURATION + 1);
            }}>
              <Image source={nextIcon} style={styles.nextIcon} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </BackgroundLayout>
  );
};

export default Number;
