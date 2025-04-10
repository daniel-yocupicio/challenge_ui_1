import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        zIndex: 3,
        backgroundColor: 'white',
    },
    content: {
        width: Dimensions.get('window').width * 0.8795,
        alignSelf: 'center',
    },
    image: {
        width: 10,
        height: 18,
    },
});
