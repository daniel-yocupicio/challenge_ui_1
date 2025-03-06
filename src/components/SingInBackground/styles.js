import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backGround: {
        position: 'absolute',
        height: '100%',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.417578,
        opacity: 1,
    },
    bottomImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3382,
        bottom: 0,
        position: 'absolute',
        opacity: 1,
    },
});
