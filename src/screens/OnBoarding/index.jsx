/* eslint-disable react-hooks/exhaustive-deps */

import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Image, TouchableOpacity, StatusBar } from 'react-native';
import BackgroundLayout from '../../components/BackgroundLayout';
import TextFontFamily from '../../components/TextFontFamily';
import { styles } from './styles';

// instaled libraries
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import Animated, { Easing, FadeIn, FadeOut, runOnJS } from 'react-native-reanimated';
import {  FlipInYRight, FlipOutYLeft } from 'react-native-reanimated';
import { SingInContext } from '../../Context/SingInContext';

const OnBoarding = ({navigation}) => {
  const {hideNumberInput} = useContext(SingInContext);
  const [hasGreenbg, setHasGreenbg ] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);

  useFocusEffect(useCallback(() => {
    if (isFocused) {
      setIsExiting(false);
      hideNumberInput();
    }
  }, [isFocused]));

  const backgroundComponent = useMemo(() => (
    !isExiting && (
      <Animated.View
        entering={FlipInYRight.duration(400).easing(Easing.ease)}
        exiting={FlipOutYLeft.duration(400).easing(Easing.ease).withCallback(() => {
          runOnJS(navigation.navigate)('SingIn');
        })}
        style={styles.animatedContainer}
      >
        <Image
          source={require('../../assets/images/onboarding.png')}
          resizeMode="cover"
          style={styles.backgroundImage}
        />
      </Animated.View>
    )
  ), [isExiting]);


  const goToSingIn = () => {
    setHasGreenbg(false);
    setIsExiting(true);
  };

  return (
    <BackgroundLayout
      backgroundColor={hasGreenbg ? '#53B175' : '#ffffff'}
      backgroundComponent={backgroundComponent}
    >
      {!isExiting && (
        <Animated.View
          entering={FadeIn.duration(300).easing(Easing.ease).delay(250)}
          exiting={FadeOut.duration(100).easing(Easing.ease)}
          style={styles.contentContainer}
        >
            <Image style={styles.iconApp} resizeMode="contain" source={require('../../assets/images/Group.png')} />
            <TextFontFamily style={styles.textTitle}>Welcome to our store</TextFontFamily>
            <TextFontFamily style={styles.textDescription}>Get your groceries in as fast as one hour</TextFontFamily>
            <TouchableOpacity onPress={goToSingIn} style={styles.btn}>
                <TextFontFamily style={styles.textBtn}>
                    Get started!
                </TextFontFamily>
            </TouchableOpacity>
        </Animated.View>
      )}
    </BackgroundLayout>
  );
};

export default OnBoarding;
