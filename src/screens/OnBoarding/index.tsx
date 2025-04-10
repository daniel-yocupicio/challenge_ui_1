/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useState } from 'react';
import { Image, StatusBar, View } from 'react-native';
import TextFontFamily from '../../components/TextFontFamily';
import { styles } from './styles';

// instaled libraries
import { useIsFocused } from '@react-navigation/native';
import Animated, { Easing, FadeIn, FadeOut, runOnJS } from 'react-native-reanimated';
import { UIContext } from '../../Context/UIContext/UIContext';
import Button from '../../components/Button';

const OnBoarding = ({navigation}) => {
  const {showBackground1, hideBackground1} = useContext(UIContext);
  const [isExiting, setIsExiting] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      showBackground1();
      StatusBar.setBarStyle('light-content');
      setIsExiting(false);
    }
  }, [isFocused]);

  const goToSingIn = () => {
    hideBackground1();
    setIsExiting(true);
  };

  return (
    <View style={styles.screen}>
      {!isExiting && (
        <Animated.View
          entering={FadeIn.duration(300).easing(Easing.ease)}
          exiting={FadeOut.duration(300).easing(Easing.ease).withCallback(() => {
            runOnJS(navigation.navigate)('SingIn');
          })}
          style={styles.contentContainer}
        >
            <Image style={styles.iconApp} resizeMode="contain" source={require('../../assets/images/Group.png')} />
            <TextFontFamily style={styles.textTitle}>Welcome to our store</TextFontFamily>
            <TextFontFamily style={styles.textDescription}>Get your groceries in as fast as one hour</TextFontFamily>
            <Button onPress={goToSingIn} />
        </Animated.View>
      )}
    </View>
  );
};

export default OnBoarding;
