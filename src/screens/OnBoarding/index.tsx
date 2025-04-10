// react imports
import React, { FC, useContext, useEffect, useState } from 'react';
import { Image, StatusBar, View } from 'react-native';

// npm imports
import { NavigationProp, useIsFocused, useNavigation } from '@react-navigation/native';
import Animated, { Easing, FadeIn, FadeOut, runOnJS } from 'react-native-reanimated';

// local imports
import { RootStackParamsLogin } from '../../navigation/StackLoginModule';
import { UIContext } from '../../Context/UIContext/UIContext';
import TextFontFamily from '../../components/TextFontFamily';
import Button from '../../components/Button';
import { styles } from './styles';

const OnBoarding : FC = () => {
  const {showBackground1, hideBackground1} = useContext(UIContext);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParamsLogin>>();
  const isFocused = useIsFocused();

  /**
   * effect in first render, change status bar theme, show background 1
   * and set true value in state to show components.
   */
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle('light-content');
      setIsExiting(false);
      showBackground1();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  /**
   * function to change a state value to unmount a component from the tree,
   * the expected component to unmount is an animated.view.
   */
  const goToSingIn = () => {
    setIsExiting(true);
    hideBackground1();
  };

  /**
   * function to handle a navigation to the next screen, this function
   * is executed when the component animated.view has unmounted
   */
  const handleNavigation = () => navigation.navigate('SingIn');

  return (
    <View style={styles.screen}>
      {!isExiting && (
        <Animated.View
          entering={FadeIn.duration(300).easing(Easing.ease)}
          exiting={FadeOut.duration(300).easing(Easing.ease).withCallback(() => {
            runOnJS(handleNavigation)();
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
