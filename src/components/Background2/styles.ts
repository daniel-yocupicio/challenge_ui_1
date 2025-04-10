import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    absoluteBlur: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 0,
    },
    backGround: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#FCFCFC99',
        top: 0,
        bottom: 0,
    },
    viewTop: {
        width,
        height: height * 0.417578,
    },
    viewBottom: {
        position: 'absolute',
        height: height * 0.3382,
        width,
        bottom: 0,
    },
    topImage: {
        width,
        height: height * 0.417578,
        opacity: 1,
    },
    bottomImage: {
        height: height * 0.3382,
        width,
        opacity: 1,
        left: 0,
        right: 0,
        resizeMode: 'stretch',
    },
});
