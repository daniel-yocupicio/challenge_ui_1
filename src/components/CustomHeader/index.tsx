import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const icon = require('../../assets/icons/back.png');

const CustomHeader = ({}) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {marginTop: top + 8}]}>
        <View style={styles.content}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Image source={icon} style={styles.image} />
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default React.memo(CustomHeader);
