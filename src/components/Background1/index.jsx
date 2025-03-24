import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Image, View } from 'react-native';

import Animated, { Easing, FlipInYRight, FlipOutYLeft } from 'react-native-reanimated';
import { styles } from './styles';

const image = require('../../assets/images/onboarding.png');

const green = '#53B175';
const white = '#ffffff';

const Background1 = forwardRef(({visible = false}, ref) => {
    const [isVisible, setIsVisible] = useState(visible);
    const colorRef = useRef(green);

    useImperativeHandle(ref, () => ({
        showBackground: () => {
         setIsVisible(true);
        },
        hideBackground: () => {
         colorRef.current = white;
         setIsVisible(false);
        },
      }));

    if (isVisible) {
        return (
            <View style={[{backgroundColor: colorRef.current}, styles.flex1]}>
                <Animated.View
                    entering={FlipInYRight.duration(400).easing(Easing.ease)}
                    exiting={FlipOutYLeft.duration(400).easing(Easing.ease)}
                    style={[styles.container, {backgroundColor: colorRef.current}]}
                >
                    <Image source={image} style={styles.image} resizeMode="cover" />
                </Animated.View>
            </View>
        );
    } else {
        return null;
    }
  });

export default React.memo(Background1);
