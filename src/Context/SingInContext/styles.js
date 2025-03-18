import { Dimensions, StyleSheet } from 'react-native';

const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    safeAreaView: {
        position: 'absolute',
        width: width,
        height: height,
        top: 0,
    },
    inputView: {
        position: 'absolute',
        bottom: height * 0.36,
        alignSelf: 'center',
    },
});
