import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const icon = require('../../assets/icons/back.png');

const CustomHeader = ({}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Image source={icon} style={styles.image} />
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default React.memo(CustomHeader);
