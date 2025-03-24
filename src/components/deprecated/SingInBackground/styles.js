import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    backGround: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#FCFCFC99',
        top: 0,
        bottom: 0,
    },
    image: {
        width,
        height: height * 0.417578,
        opacity: 1,
    },
    bottomImage: {
        position: 'absolute',
        height: height * 0.3382,
        width,
        bottom: 0,
        opacity: 1,
        left: 0,
        right: 0,
        resizeMode: 'stretch',
    },
});
