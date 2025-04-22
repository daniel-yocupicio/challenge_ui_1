// REACT imports
import React, { FC, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Image, Keyboard, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

// npm imports
import { NavigationAction, NavigationProp, useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import Animated, { Easing, FadeIn, FadeOut, runOnJS } from 'react-native-reanimated';

// local imports
import { RootStackParamsLogin } from '../../navigation/StackLoginModule';
import { UIContext } from '../../Context/UIContext/UIContext';
import TextFontFamily from '../../components/TextFontFamily';
import { useUserStore } from '../../store/user';
import Button from '../../components/Button';
import { styles } from './styles';
import CustomInput from '../../components/CustomInput';
import { scaleHeight } from '../../utils/transformDimensions';

const logo = require('../../assets/icons/logo.png');

const FADE_DURATION = 500;

const Login : FC = () => {
  const {hideBackground2, showBackground2, showBlurBackground2, showBackground3, hideBackground3} = useContext(UIContext);

  const [showContent, setShowContent] = useState<boolean>(true);
  const navigationRef = useRef<NavigationAction | null | string>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamsLogin>>();
  const isFocused = useIsFocused();

  // zustand
  const login = useUserStore(state => state.login);

  useFocusEffect(useCallback(() => {
    hideBackground2();
    showBackground3();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []));

  useEffect(() => {
    if (isFocused) {
      setShowContent(true);
    }
  }, [isFocused]);

  /**
   * effect to catch navigate action type (goback).
   */
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();

      setShowContent(false);

      navigationRef.current = e.data.action;
    });

    return unsubscribe;
  }, [navigation]);

  /**
   * function to set a route to navigate to signup.
   */
  const goToSignUp = () => {
    setShowContent(false);
    navigationRef.current = 'SignUp';
  };

  /**
   * function to set a route to navigate to home
   */
  const validateUser = () => {
    setShowContent(false);
    navigationRef.current = 'Home';
  };

  /**
   * function to handle type of navigation, it can be go back o navigation to the next screen.
   */
    const callbackHandler = () => {
      if (typeof navigationRef.current !== 'string') {
        navigation.dispatch(navigationRef.current as NavigationAction);
        navigationRef.current = null;
        hideBackground3();
        showBackground2();
        showBlurBackground2();
      } else {
        if (navigationRef.current === 'Home') {
          navigationRef.current = null;

          // change state to update the navigator and load a dinamic stack
          login();

        } else if (navigationRef.current === 'SignUp') {
          navigation.navigate('SignUp');
          navigationRef.current = null;
        }
      }
    };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {showContent && (
          <Animated.View
            entering={FadeIn.duration(FADE_DURATION).easing(Easing.ease)}
            exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease).withCallback(
              () => {
                runOnJS(callbackHandler)();
              }
            )}
            style={styles.container}
          >
              <Image source={logo} style={styles.logo} resizeMode="contain" />
              <TextFontFamily style={styles.title}>Login</TextFontFamily>
              <TextFontFamily style={styles.subtitle}>Enter your emails and password</TextFontFamily>

              <CustomInput
                label="Email"
                letterSpacing={0}
                hasSecureMode={false}
                placeholder="Type your e-mail"
                onChange={() => {}}
                marginBottom={scaleHeight(30)}
              />
              <CustomInput
                label="Password"
                letterSpacing={0}
                hasSecureMode={true}
                placeholder="Type your password"
                onChange={() => {}}
                marginBottom={scaleHeight(20)}
              />
              <TextFontFamily style={styles.forgotPassword}>Forgot Password?</TextFontFamily>

              <Button text="Log In" onPress={validateUser} />
              <View style={[styles.row, styles.singupContainer]}>
              <TextFontFamily style={styles.dontHaveAccount}>Don't have an account?</TextFontFamily>
              <TouchableOpacity onPress={goToSignUp}>
                <TextFontFamily style={styles.singup}> Singup</TextFontFamily>
              </TouchableOpacity>
              </View>
          </Animated.View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

/*

*/
