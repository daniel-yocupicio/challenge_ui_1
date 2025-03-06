import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';

const SingInBackground = () => {
  return (
    <View style={styles.backGround}>
      <Image
        source={require('../../assets/images/singin.png')}
        style={styles.image}
        resizeMode="cover"
        />
      <Image
        source={require('../../assets/images/bottomsingin.png')}
        style={styles.bottomImage}
        resizeMode="cover"
        />
    </View>
  );
};

export default SingInBackground;
