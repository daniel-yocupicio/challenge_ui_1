// react imports
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Image } from 'react-native';

// npm imports
import Animated, { Easing, FlipInYRight, FlipOutYLeft } from 'react-native-reanimated';

// local imports
import { styles } from './styles';

const image = require('../../assets/images/onboarding.png');

export interface REFBackground1 {
    showBackground: () => void,
    hideBackground: () => void,
}

interface Props {
    visible?: boolean,
}

const Background1 = forwardRef<REFBackground1, Props>(({visible = false}, ref) => {
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
            <Animated.View
                entering={FlipInYRight.duration(400).easing(Easing.ease)}
                exiting={FlipOutYLeft.duration(400).easing(Easing.ease)}
                style={[styles.container]}
            >
                <Image source={image} style={styles.image} resizeMode="cover" />
            </Animated.View>
        );
    } else {
        return null;
    }
  });

export default React.memo(Background1);
