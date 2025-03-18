import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    contentContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: height * 0.101,
    },
    iconApp: {
        height: height * 0.0625,
        width: width * 0.117,
    },
    textTitle: {
        color: 'white',
        fontSize: RFValue(48, 896),
        textAlign: 'center',
        marginBottom: height * 0.0212,
    },
    textDescription: {
        color: 'white',
        textAlign: 'center',
        fontSize: RFValue(16, 896),
        marginBottom: height * 0.0446,
    },
    btn: {
        backgroundColor: '#53B175',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.9,
        height: height * 0.0747,
        borderRadius: 10,
    },
    textBtn: {
        color: 'white',
        fontSize: RFValue(18, 896),
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
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
        width: '100%',
        height: '100%',
    },
});
