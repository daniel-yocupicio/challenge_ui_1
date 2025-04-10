// REACT imports
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Image, View } from 'react-native';

// npm imports
import Animated, { Easing, FadeIn, FadeInDown, FadeInUp, FadeOut, FadeOutDown, FadeOutUp } from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';

// local imports
import { styles } from './styles';

const imgTop = require('../../assets/images/singin.png');
const imgBottom = require('../../assets/images/bottomsingin.png');

const FADE_DURATION = 400;

export interface REFBackground2 {
  showBackground: () => void,
  hideBackground: () => void,
  showBlur: () => void,
  hideBlur: () => void,
}

interface Props {
  visible?: boolean,
}

const Background2 = forwardRef<REFBackground2, Props>(({visible = false}, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(visible);
    const [hasBlur, setHasBlur] = useState<boolean>(false);

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
                source={imgTop}
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
                source={imgBottom}
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
