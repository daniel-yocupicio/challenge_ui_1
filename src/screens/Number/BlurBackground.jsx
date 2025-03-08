import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';

const BlurBackground = () => {
  return (
    <Text>a</Text>
  )
}

export default BlurBackground

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

    /*<Canvas style={styles.container}>
        <Image
            image={image}
            x={0}
            y={0}
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').height * 0.417578}
            fit="cover"
        />
        <BackdropBlur
            blur={4}
            clip={{ x: 0, y: 0, width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        >
        <Fill color="rgba(255, 255, 255, 0.6)" />
      </BackdropBlur>
    </Canvas>*/
