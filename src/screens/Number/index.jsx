import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { Image, KeyboardAvoidingView, Platform, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, SafeAreaView } from 'react-native';

import { SingInContext } from '../../Context/SingInContext';
import SingInBackground from '../../components/SingInBackground';
import BackgroundLayout from '../../components/BackgroundLayout';
import TextFontFamily from '../../components/TextFontFamily';
import { styles } from './styles';

import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

const backIcon = require('../../assets/icons/back.png');
const nextIcon = require('../../assets/icons/next.png');
const countryCode = '+880';

const Number = ({navigation, route}) => {
  const {moveNumberInputUp, moveNumberInputDown, state, focusKeyboard, hideNumberInput, showNumberInput} = useContext(SingInContext);

  const caractersInString = useMemo(() => {
    return state.phone.substring(countryCode.length).length;
  }, [state]);

  useFocusEffect(useCallback(() => {
    showNumberInput();
    moveNumberInputUp();
    // focusKeyboard();
  }, [moveNumberInputUp, showNumberInput]));

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      moveNumberInputDown();
    });

    return unsubscribe;
  }, [moveNumberInputDown, navigation]);

  const goVerificationScreen = () => {
    hideNumberInput();
    navigation.navigate('Verification');
  };

  return (
    <BackgroundLayout backgroundColor={'white'} backgroundComponent={<SingInBackground />}>
      <Animated.View entering={FadeIn.duration(500).easing(Easing.ease)} style={styles.absolute}>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={8}
          reducedTransparencyFallbackColor="white"
        />
      </Animated.View>
      <SafeAreaView style={styles.flex1}>
        <KeyboardAvoidingView style={styles.flex1} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback style={styles.flex1} onPress={Keyboard.dismiss}>
            <View style={styles.contentContainer}>
              <Animated.View entering={FadeIn.duration(400).easing(Easing.ease).delay(300)} style={styles.flex1}>
                <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                  <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <TextFontFamily style={styles.title}>
                  Enter your mobile number
                </TextFontFamily>
                <TextFontFamily style={styles.description}>
                  Mobile Number
                </TextFontFamily>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        {caractersInString > 0 && (
          <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.bottomButtons}>
            <TouchableOpacity style={styles.nextButton} onPress={goVerificationScreen}>
              <Image source={nextIcon} style={styles.nextIcon} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </SafeAreaView>
    </BackgroundLayout>
  );
};

export default Number;
