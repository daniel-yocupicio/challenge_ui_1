// REACT imports
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native';

// npm imports
import Animated, { Easing, FadeIn, FadeOut, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { NavigationAction, NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';

// local imports
import TextFontFamily from '../../components/TextFontFamily';
import SelectItem from '../../components/SelectItem';
import Button from '../../components/Button';
import { styles } from './styles';
import { RootStackParamsLogin } from '../../navigation/StackLoginModule';


const image = require('../../assets/images/selectlocation.png');

const {height} = Dimensions.get('window');
const FADE_DURATION = 400;

const zoneData = [
  { id: '1', label: 'Zone 1' },
  { id: '2', label: 'Zone 2' },
  { id: '3', label: 'Zone 3' },
  { id: '4', label: 'Zone 4' },
  { id: '5', label: 'Zone 5' },
  { id: '6', label: 'Zone 6' },
];

const areaData = [
  { id: '1', label: 'Area 1' },
  { id: '2', label: 'Area 2' },
  { id: '3', label: 'Area 3' },
  { id: '4', label: 'Area 4' },
  { id: '5', label: 'Area 5' },
  { id: '6', label: 'Area 6' },
];

const SelectLocation : FC = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const navigationRef = useRef<NavigationAction | null>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamsLogin>>();

  const scale = useSharedValue(1);
  const margin = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, { duration: 400 }) }],
      marginTop: withTiming(margin.value, { duration: 400 }),
      marginBottom: withTiming(margin.value * 1.5, { duration: 400 }),
    };
  });

  /**
   * first effect when the screen has focus, show te content.
   */
  useFocusEffect(
    useCallback(() => {
      setShowContent(true);
    }, [])
  );

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
   * effect to animate image when the keyboard is open.
   */
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

  /**
   * function to quit view component and start the navigation to login screen.
   */
  const goToLogin = () => {
    setShowContent(false);
  };

  /**
   * function to handle type of navigation, it can be go back o navigation to the next screen.
   */
  const callbackHandler = () => {
    if (navigationRef.current) {
      navigation.dispatch(navigationRef.current);
      navigationRef.current = null;
    } else {
      navigation.navigate('Login');
    }
  };

    return (
      <View style={{flex: 1}}>
        {showContent && (
          <Animated.View
            entering={FadeIn.duration(FADE_DURATION).easing(Easing.ease)}
            exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease).withCallback(
              () => {
                runOnJS(callbackHandler)();
              }
            )}
            style={styles.screen}
          >
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
                  <Animated.Image source={image} style={[styles.image, animatedStyle]} />
                  <TextFontFamily style={styles.title}>Select your Location</TextFontFamily>
                  <TextFontFamily style={styles.description}>
                    Switch on your location to stay in tune with what's happening in your area
                  </TextFontFamily>
                  <Animated.View style={styles.dataContainer}>
                    <SelectItem title="Your Zone" placeholder="Type your zone" data={zoneData} />
                    <View style={styles.space30} />
                    <SelectItem title="Your Area" placeholder="Type your area" data={areaData} />
                    <View style={styles.space40} />
                    <Button text="Submit" onPress={goToLogin} />
                  </Animated.View>
                </ScrollView>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </Animated.View>
        )}
      </View>
    );
};


export default SelectLocation;
