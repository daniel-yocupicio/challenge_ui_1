import React, { useMemo, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import { styles } from './styles';
import BlurBackground from './BlurBackground';
import SingInBackground from '../../components/SingInBackground';
import Animated, { Easing, FadeIn, FadeOut, runOnJS } from 'react-native-reanimated';
import TextFontFamily from '../../components/TextFontFamily';
import { SafeAreaView } from 'react-native-safe-area-context';

const backIcon = require('../../assets/icons/back.png');
const nextIcon = require('../../assets/icons/next.png');
const countryCode = '+880';

const Number = ({navigation}) => {
  const [number, setNumber] = useState(countryCode);
  const [showInfo, setShowInfo] = useState(false);
  const caractersInString = useMemo(() => {
    return number.substring(countryCode.length).length;
  }, [number]);

  return (
    <View style={styles.screenContainer}>
      <SingInBackground />
      <Animated.View entering={FadeIn.duration(300).easing(Easing.ease).withCallback(
        () => {
          runOnJS(setShowInfo)(true);
        }
      )}>
        <BlurBackground />
      </Animated.View>
      <SafeAreaView style={styles.flex1}>
        <KeyboardAvoidingView style={styles.flex1} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {showInfo ? (
              <Animated.View entering={FadeIn.duration(400).easing(Easing.ease)} style={styles.flex1}>
                <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                  <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <TextFontFamily style={styles.title}>
                  Enter your mobile number
                </TextFontFamily>
                <TextFontFamily style={styles.description}>
                  Mobile Number
                </TextFontFamily>
                <View>
                  <View style={styles.inputContainer}>
                    <Image
                      style={styles.flag}
                      source={require('../../assets/icons/flag.png')}
                      resizeMode="cover"
                    />
                    <TextInput
                      style={styles.input}
                      value={number}
                      keyboardType="phone-pad"
                      onChange={e => {
                        setNumber(e.nativeEvent.text);
                      }}
                    />
                  </View>
                </View>
                {caractersInString > 0 && (
                  <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.bottomButtons}>
                    <TouchableOpacity style={styles.nextButton}>
                      <Image source={nextIcon} style={styles.nextIcon} />
                    </TouchableOpacity>
                  </Animated.View>
                )}
              </Animated.View>
            ) :
            (
              <View />
            )
            }
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Number;
