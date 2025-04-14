// REACT imports
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Image, View } from 'react-native';

// npm imports
import Animated, { Easing, FadeInDown, FadeInUp, FadeOutDown, FadeOutUp } from 'react-native-reanimated';

// local imports
import { styles } from './styles';

const imgTop = require('../../assets/images/login.png');
const imgBottom = require('../../assets/images/bottomsingin.png');

const FADE_DURATION = 400;

export interface REFBackground3 {
  showBackground: () => void,
  hideBackground: () => void,
}

interface Props {
  visible?: boolean,
}

const Background3 = forwardRef<REFBackground3, Props>(({visible = false}, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(visible);

    useImperativeHandle(ref, () => ({
        showBackground: () => {
          setIsVisible(true);
        },
        hideBackground: () => {
          setIsVisible(false);
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
        </View>
      );
    } else {
      return null;
    }
  });

export default React.memo(Background3);
