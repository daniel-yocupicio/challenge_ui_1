// React imports
import React, { FC, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, StyleProp, ViewStyle } from 'react-native';

// npm imports
import Animated, { AnimatedStyle, Easing, FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { NavigationProp, RouteProp, useFocusEffect, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

// local imports
import NumberInput, { REFNumberInput } from '../../components/NumberInput';
import { RootStackParamsLogin } from '../../navigation/StackLoginModule';
import { UIContext } from '../../Context/UIContext/UIContext';
import TextFontFamily from '../../components/TextFontFamily';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useFormatPhoneNumber from '../../hooks/useFormatPhoneNumber';

const nextIcon = require('../../assets/icons/next.png');

const FADE_DURATION = 400;

type LoginScreenRouteProp = RouteProp<RootStackParamsLogin, 'Number'>;

const Number : FC = () => {
  // hooks from navigation
  const route = useRoute<LoginScreenRouteProp>();
  const navigation = useNavigation<NavigationProp<RootStackParamsLogin>>();
  const isFocused = useIsFocused();

  // hooks from react
  const {showBlurBackground2, hideBlurBackground2} = useContext(UIContext);
  const [showContent, setShowContent] = useState<boolean>(true);
  const inputRef = useRef<REFNumberInput>({} as REFNumberInput);
  const layoutRef = useRef<number | null>(null);

  // reanimated hook
  const translateY = useSharedValue(0);

  // hook from react-native-safe-area-context
  const {top} = useSafeAreaInsets();

  // custom hook
  const {string, handleNumber} = useFormatPhoneNumber('+880');

  // consts
  const {y} = route.params; // position from inputnumber
  const headerHeight = top + 18 + 8; // 18 = icon height in custom header, 8 in margin top

  // styles
  const inputstyle :  StyleProp<AnimatedStyle<StyleProp<ViewStyle>>> = {position: 'absolute', top: y - headerHeight, alignSelf: 'center'};

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  /**
   * Effect hook from react navigation to execute functions when navigate to this screen.
   */
  useFocusEffect(useCallback(() => {
    showBlurBackground2();
    inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []));

  /**
   * Effect to do animations before to return a previous screen.
   */
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();

      setShowContent(false);
      translateY.value = withTiming(0, { duration: FADE_DURATION, easing: Easing.ease });
      hideBlurBackground2();

      setTimeout(() => {
        navigation.dispatch(e.data.action);
      }, FADE_DURATION + 1);
    });

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  /**
   * Effect to change state when the screen is focused.
   */
  useEffect(() => {
    if (isFocused) {
      setShowContent(true);
    }
  }, [isFocused]);

  return (
      <View style={styles.flex1}>
        <TouchableWithoutFeedback style={styles.flex1} onPress={Keyboard.dismiss}>
          <View style={styles.flex1}>
            {showContent && (
              <Animated.View
                entering={FadeIn.duration(FADE_DURATION + 200).easing(Easing.ease)}
                exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease)}
                style={styles.width}
                onLayout={e => {
                  if (layoutRef.current === null) {
                    const h = e.nativeEvent.layout.height;
                    layoutRef.current = h;

                    translateY.value = withTiming(-(y - (h + top)), { duration: FADE_DURATION, easing: Easing.ease });
                  }
                }}
              >
                <TextFontFamily style={styles.title}>
                  Enter your mobile number
                </TextFontFamily>
                <TextFontFamily style={styles.description}>
                  Mobile Number
                </TextFontFamily>
              </Animated.View>
            )}

            <Animated.View style={[inputstyle, animatedStyle]}>
              <NumberInput
                ref={inputRef}
                value={string}
                showSoftInputOnFocus={true}
                onChange={e => handleNumber(e.nativeEvent.text)}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
        {string.length === 17 && (
          <Animated.View
            entering={FadeIn.duration(FADE_DURATION).easing(Easing.ease)}
            exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease)}
            style={styles.bottomButtons}
          >
            <TouchableOpacity style={styles.nextButton} onPress={() => {
              setShowContent(false);

              setTimeout(() => {
                navigation.navigate('Verification');
              }, FADE_DURATION );
            }}>
              <Image source={nextIcon} style={styles.nextIcon} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
  );
};

export default Number;
