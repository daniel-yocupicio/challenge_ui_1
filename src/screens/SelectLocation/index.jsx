import React from 'react';
import { Image, View } from 'react-native';

import TextFontFamily from '../../components/TextFontFamily';
import SelectItem from '../../components/SelectItem';
import Button from '../../components/Button';
import { styles } from './styles';

import Animated from 'react-native-reanimated';

const image = require('../../assets/images/selectlocation.png');

const SelectLocation = ({}) => {
  return (
    <View style={styles.screen}>
      <Animated.View>
        <Image source={image} style={styles.image}/>
        <TextFontFamily style={styles.title}>Select your Location</TextFontFamily>
        <TextFontFamily style={styles.description}>Swithch on your location to stay in tune with what's happening in your area</TextFontFamily>
      </Animated.View>
      <View style={styles.infoContainer}>
        <SelectItem title={'Your Zone'} />
        <View style={styles.space30} />
        <SelectItem title={'Your Area'} />
        <View style={styles.space40} />
        <Button text="Submit" />
      </View>
    </View>
  );
};

export default SelectLocation;
