import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import BackgroundLayout from '../../components/BackgroundLayout';
import SingInBackground from '../../components/SingInBackground';
import TextFontFamily from '../../components/TextFontFamily';
import { styles } from './styles';
import { BlurView } from '@react-native-community/blur';
import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';
import SelectLocation from '../SelectLocation';

const backIcon = require('../../assets/icons/back.png');
const nextIcon = require('../../assets/icons/next.png');

const Verification = ({navigation}) => {
  const [code, setCode] = useState('');

  const handleText = (e) => {
    setCode(e.nativeEvent.text);
  };

  const goSelectLocation = () => {
    navigation.navigate('SelectLocation');
  };

  return (
    <BackgroundLayout backgroundComponent={<SingInBackground />} backgroundColor={'white'}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={8}
        reducedTransparencyFallbackColor="white"
      />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <TextFontFamily style={styles.title}>Enter your 4-digit code</TextFontFamily>
        <TextFontFamily style={styles.description}>Code</TextFontFamily>
        <Animated.View entering={FadeIn.duration(400).easing(Easing.ease)} exiting={FadeOut}>
          <TextInput
            value={code}
            placeholder="- - - -"
            placeholderTextColor={'#181725'}
            style={styles.input}
            onChange={handleText}
          />
        </Animated.View>
      </SafeAreaView>
      {code.length === 4 && (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.optionsbuttons}>
          <TouchableOpacity>
            <TextFontFamily style={styles.resendCode}>Resend Code!</TextFontFamily>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={goSelectLocation}>
            <Image source={nextIcon} style={styles.nextIcon} />
          </TouchableOpacity>
        </Animated.View>
      )}
    </BackgroundLayout>
  );
};

export default Verification;
