import React, { useCallback, useContext, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';

import { SingInContext } from '../../Context/SingInContext';
import SingInBackground from '../../components/SingInBackground';
import BackgroundLayout from '../../components/BackgroundLayout';
import TextFontFamily from '../../components/TextFontFamily';
import SingInButton from '../../components/SingInButton';
import { styles } from './styles';

import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const SingIn = ({ navigation }) => {
  const {showNumberInput, hideNumberInput, setNavigation} = useContext(SingInContext);
  const [showContent, setShowContent] = useState(false);
  const isFocused = useIsFocused();

  useFocusEffect(useCallback(() => {
    showNumberInput();
    setShowContent(true);
    setNavigation(navigation);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []));

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle('dark-content');
    }
  }, [isFocused]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      hideNumberInput();
    });

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <BackgroundLayout backgroundComponent={<SingInBackground />} backgroundColor={'white'}>
      {showContent && (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
          <TextFontFamily style={styles.title}>
            Get your groceries with nectar
          </TextFontFamily>
          <TextFontFamily style={styles.description}>Or connect with social media</TextFontFamily>
          <View style={styles.buttonsContainer}>
            <SingInButton
              icon={require('../../assets/icons/google.png')}
              textButton="Continue with Google"
              iconStyle={styles.googleIcon}
              backgroundColor="#5383EC"
            />
            <SingInButton
              icon={require('../../assets/icons/facebook.png')}
              textButton="Continue with Facebook"
              iconStyle={styles.facebookIcon}
              backgroundColor="#4A66AC"
            />
          </View>
        </Animated.View>
      )}
    </BackgroundLayout>
  );
};

export default SingIn;
