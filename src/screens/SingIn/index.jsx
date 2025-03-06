import React, { useEffect, useState } from 'react';
import { Image, StatusBar, TextInput, TouchableOpacity, View } from 'react-native';
import TextFontFamily from '../../components/TextFontFamily';
import { styles } from './styles';

// import libraries
import Animated, { Easing, FadeIn, FadeOut, runOnJS } from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';
import SingInBackground from '../../components/SingInBackground';

const SingIn = ({navigation}) => {
  const [blur, setBlur] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle('dark-content');
      setBlur(false);
    }
  }, [isFocused]);

  return (
    <View style={styles.white}>
      <View style={styles.ScreenContainer}>
        <View style={styles.viewContainer}>
          <SingInBackground />

          {!blur && (
            <Animated.View
              style={styles.viewContainer}
              entering={FadeIn.duration(200).easing(Easing.ease)}
              exiting={FadeOut.duration(200).easing(Easing.ease).withCallback(() => {
                runOnJS(navigation.navigate)('Number');
              })}
            >
              <View style={styles.middleSection}>
                <TextFontFamily style={styles.title}>
                  Get your groceries with nectar
                </TextFontFamily>
                <View style={styles.inputContainer}>
                  <Image
                    style={styles.flag}
                    source={require('../../assets/icons/flag.png')}
                    resizeMode="cover"
                  />
                  <TextInput
                    style={styles.input}
                    value="+880"
                    onFocus={() => {
                    // go to the number screen, before add animation to add blur and quit buttons
                      setBlur(true);
                    }}
                    showSoftInputOnFocus={false}
                  />
                </View>
              </View>

              <View style={styles.bottomSection}>
                <TextFontFamily style={styles.textDescription}>
                  Or connect with social media
                </TextFontFamily>
                <TouchableOpacity style={[styles.btn, {backgroundColor: '#5383EC'}, styles.btnTop]}>
                  <Image
                    source={require('../../assets/icons/google.png')}
                    style={styles.googleIcon}
                  />
                  <TextFontFamily style={styles.txtBtn}>
                    Continue with Google
                  </TextFontFamily>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, {backgroundColor: '#4A66AC'}]}>
                  <Image
                    source={require('../../assets/icons/facebook.png')}
                    style={styles.facebookIcon}
                  />
                  <TextFontFamily style={styles.txtBtn}>
                    Continue with Facebook
                  </TextFontFamily>
                </TouchableOpacity>
              </View>
            </Animated.View>
          )}

        </View>
      </View>
    </View>
  );
};

export default SingIn;
