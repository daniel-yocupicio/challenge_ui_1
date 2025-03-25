import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native';

import TextFontFamily from '../../components/TextFontFamily';
import SelectItem from '../../components/SelectItem';
import Button from '../../components/Button';
import { styles } from './styles';

import Animated, { Easing, FadeIn, FadeOut, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

const image = require('../../assets/images/selectlocation.png');

const {height} = Dimensions.get('window');
const FADE_DURATION = 400;

const SelectLocation = ({navigation}) => {
  const [showContent, setShowContent] = useState(true);
  const navigationRef = useRef(undefined);

  const scale = useSharedValue(1);
  const margin = useSharedValue(0);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setShowContent(true);
      };
    }, [])
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, { duration: 400 }) }],
      marginTop: withTiming(margin.value, { duration: 400 }),
      marginBottom: withTiming(margin.value * 1.5, { duration: 400 }),
    };
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();

      setShowContent(false);

      navigationRef.current = e.data.action;
    });

    return unsubscribe;
  }, [navigation]);


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      scale.value = 0.2;
      margin.value = -height * 0.05018;
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      scale.value = 1;
      margin.value = 0;
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToLogin = () => {
    setShowContent(false);
  };

  const callbackHandler = () => {
    if (navigationRef.current) {
      navigation.dispatch(navigationRef.current);
      navigationRef.current = undefined;
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {showContent && (
            <Animated.View
              entering={FadeIn.duration(FADE_DURATION).easing(Easing.ease)}
              exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease).withCallback(
                () => {
                  runOnJS(callbackHandler)();
                }
              )}
            >
              <Animated.View>
                <Animated.Image source={image} style={[styles.image, animatedStyle]} />
                <TextFontFamily style={styles.title}>Select your Location</TextFontFamily>
                <TextFontFamily style={styles.description}>
                  Switch on your location to stay in tune with what's happening in your area
                </TextFontFamily>
              </Animated.View>
              <Animated.View style={styles.dataContainer}>
                <SelectItem title="Your Zone" />
                <View style={styles.space30} />
                <SelectItem title="Your Area" />
                <View style={styles.space40} />
                <Button text="Submit" onPress={goToLogin} />
              </Animated.View>
            </Animated.View>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


export default SelectLocation;
