import React, { useCallback, useEffect, useState } from 'react';
import { Image, View, TouchableOpacity, StatusBar } from 'react-native';
import TextFontFamily from '../../components/TextFontFamily';
import { styles } from './styles';

// instaled libraries
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import Animated, { Easing, runOnJS } from 'react-native-reanimated'; // runOnJs es una funcion especial para ejecutar algo en la animación
// FlipInEasyY, FlipOutEasyY before imports
import {  FlipInYRight, FlipOutYLeft } from 'react-native-reanimated'; // documentation: https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#exiting



const OnBoarding = ({navigation}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [hasGreenbg, setHasGreenbg ] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);

  useFocusEffect(useCallback(() => {
    if (isExiting && isFocused) {
      setIsExiting(false);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]));


  const goToSingIn = () => {
    setHasGreenbg(false);
    setIsExiting(true);
  };

  return (
    <View style={[styles.ScreenContainerWhite, hasGreenbg && styles.ScreenContainerGreen]}>
        {!isExiting && (
            <Animated.View
                entering={FlipInYRight.duration(300).easing(Easing.ease)}
                exiting={FlipOutYLeft.duration(300).easing(Easing.ease).withCallback(() => {
                            runOnJS(navigation.navigate)('SingIn'); // Navega después de que termine la animación
                })}
                style={styles.animatedContainer}
            >
                    <Image source={require('../../assets/images/onboarding.png')} resizeMode="cover" style={styles.backgroundImage} />
                    <View style={styles.contentContainer}>
                        <Image style={styles.iconApp} resizeMode="contain" source={require('../../assets/images/Group.png')} />
                        <TextFontFamily style={styles.textTitle}>Welcome to our store</TextFontFamily>
                        <TextFontFamily style={styles.textDescription}>Get your groceries in as fast as one hour</TextFontFamily>
                        <TouchableOpacity onPress={goToSingIn} style={styles.btn}>
                            <TextFontFamily style={styles.textBtn}>
                                Get started!
                            </TextFontFamily>
                        </TouchableOpacity>
                    </View>
            </Animated.View>
        )}
    </View>
  );
};

export default OnBoarding;
