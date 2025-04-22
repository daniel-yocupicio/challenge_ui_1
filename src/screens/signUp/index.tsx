import { NavigationAction, NavigationProp, useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Image, Keyboard, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { RootStackParamsLogin } from '../../navigation/StackLoginModule';
import { styles } from './styles';
import TextFontFamily from '../../components/TextFontFamily';
import Button from '../../components/Button';
import Animated, { Easing, FadeIn, FadeOut, runOnJS } from 'react-native-reanimated';
import { useUserStore } from '../../store/user';
import CustomInput from '../../components/CustomInput';
import { scaleHeight } from '../../utils/transformDimensions';

const logo = require('../../assets/icons/logo.png');

const FADE_DURATION = 500;

const SignUp = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const navigationRef = useRef<NavigationAction | null | string>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamsLogin>>();
  const isFocused = useIsFocused();

  // zustand
  const login = useUserStore(state => state.login);

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
              <TextFontFamily style={styles.title}>Sign Up</TextFontFamily>
              <TextFontFamily style={styles.subtitle}>Enter your credentials to continue</TextFontFamily>

              <CustomInput
                label="User name"
                letterSpacing={0}
                hasSecureMode={false}
                placeholder="Type your user name"
                onChange={() => {}}
                marginBottom={scaleHeight(30)}
              />
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

export default SignUp;

//               <Button text="Sing Up" onPress={() => {}} />

/*
              <View style={styles.passwordcontainer}>
                <View style={styles.inputContainer}>
                  <TextFontFamily style={styles.inputLabel}>Password</TextFontFamily>
                  <View style={styles.securePassword}>
                    <TextInput placeholderTextColor="#7c7c7c" placeholder="Type your password" secureTextEntry={securePassword} style={styles.input} />
                    <TouchableOpacity style={styles.eyeContainer} onPress={handlePassword}>
                      <Image source={eye} style={styles.eye} resizeMode="contain" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextFontFamily style={styles.forgotPassword}>By continuing you agree to out <TextFontFamily style={styles.greenText}>Terms of Service</TextFontFamily> and <TextFontFamily style={styles.greenText}>Privacy Policy</TextFontFamily> </TextFontFamily>
              </View>
*/
