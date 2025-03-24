import { BlurView } from '@react-native-community/blur';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Image, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, FadeInUp, FadeOut, FadeOutDown, FadeOutUp } from 'react-native-reanimated';
import { styles } from './styles';

const FADE_DURATION = 400;

const Background2 = forwardRef(({visible = false}, ref) => {
    const [isVisible, setIsVisible] = useState(visible);
    const [hasBlur, setHasBlur] = useState(false);

    useImperativeHandle(ref, () => ({
        showBackground: () => {
          setIsVisible(true);
        },
        hideBackground: () => {
          setHasBlur(false);
          setIsVisible(false);
        },
        showBlur: () => {
          setHasBlur(true);
        },
        hideBlur: () => {
          setHasBlur(false);
        },
      }));

    if (isVisible) {
      return (
        <View style={styles.container}>
          <View style={styles.backGround}>
            <Animated.View
              entering={FadeInUp.duration(FADE_DURATION).easing(Easing.ease)}
              exiting={FadeOutUp.duration(FADE_DURATION).easing(Easing.ease)}
              style={styles.viewTop}>
              <Image
                source={require('../../assets/images/singin.png')}
                style={styles.topImage}
                resizeMode="cover"
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.duration(FADE_DURATION).easing(Easing.ease)}
              exiting={FadeOutDown.duration(FADE_DURATION).easing(Easing.ease)}
              style={styles.viewBottom}
            >
              <Image
                source={require('../../assets/images/bottomsingin.png')}
                style={styles.bottomImage}
                resizeMode="cover"
              />
            </Animated.View>
          </View>
          {hasBlur && (
              <Animated.View
                  entering={FadeIn.duration(FADE_DURATION).easing(Easing.ease)}
                  exiting={FadeOut.duration(FADE_DURATION).easing(Easing.ease)}
                  style={[styles.absoluteBlur]}
              >
                  <BlurView
                      style={styles.absoluteBlur}
                      blurType="light"
                      blurAmount={5}
                      reducedTransparencyFallbackColor="white"
                  />
              </Animated.View>
          )}
        </View>
      );
    } else {
      return null;
    }
  });

export default React.memo(Background2);
