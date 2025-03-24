import { Dimensions, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingTop: StatusBar.currentHeight + 8,
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
