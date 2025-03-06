import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    ScreenContainerGreen: {
        flex: 1,
        backgroundColor: '#53B175',
    },
    ScreenContainerWhite: {
        flex: 1,
        backgroundColor: 'white',
    },
    animatedContainer: {
        flex: 1,
    },
    backgroundImage: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    contentContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: Dimensions.get('window').height * 0.101,
    },
    iconApp: {
        height: Dimensions.get('window').height * 0.0625,
        width: Dimensions.get('window').width * 0.117,
    },
    textTitle: {
        color: 'white',
        fontSize: RFValue(48, 896),
        textAlign: 'center',
        marginBottom: Dimensions.get('window').height * 0.0212,
    },
    textDescription: {
        color: 'white',
        textAlign: 'center',
        fontSize: RFValue(16, 896),
        marginBottom: Dimensions.get('window').height * 0.0446,
    },
    btn: {
        backgroundColor: '#53B175',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.0747,
        borderRadius: 10,
    },
    textBtn: {
        color: 'white',
        fontSize: RFValue(18, 896),
    },
});
