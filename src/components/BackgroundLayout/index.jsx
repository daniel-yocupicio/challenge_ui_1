import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const BackgroundLayout = ({ children, backgroundComponent, backgroundColor = 'white' }) => {
  return (
    <View style={[styles.screenContainer, { backgroundColor }]}>
      <View style={styles.backgroundContainer}>
        {backgroundComponent}
      </View>
      <View style={styles.contentContainer}>
        {children}
      </View>
    </View>
  );
};

export default React.memo(BackgroundLayout);
