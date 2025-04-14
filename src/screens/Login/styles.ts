import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from '../../utils/transformDimensions';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        height: scaleHeight(55.64),
        width: scaleWidth(47.84),
        marginTop: scaleHeight(68.42),
        alignSelf: 'center',
    },
    title: {
        marginTop: scaleHeight(100.21),
        fontSize: RFValue(26, 896),
        color: '#181725',
        marginBottom: scaleHeight(15),
        width: scaleWidth(364.12),
        alignSelf: 'center',
    },
    subtitle: {
        color: '#7c7c7c',
        fontSize: RFValue(16, 896),
        width: scaleWidth(364.12),
        alignSelf: 'center',
    },
    emailcontainer: {
        width: scaleWidth(364.12),
        alignSelf: 'center',
        marginTop: scaleHeight(40),
    },
    emaillabel: {
        color: '#7c7c7c',
        fontSize: RFValue(16, 896),
        marginBottom: scaleHeight(10),
    },
    emailinput: {
        color: '#181725',
        fontSize: RFValue(18, 896),
        padding: 0,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        fontFamily: 'NotoSans-VariableFont_wdth,wght',
        paddingBottom: 0,
    },
    passwordcontainer: {
        width: scaleWidth(364.12),
        alignSelf: 'center',
        marginTop: scaleHeight(30),
        marginBottom: scaleHeight(30),
    },
    passwordlabel: {
        color: '#7c7c7c',
        fontSize: RFValue(16, 896),
        marginBottom: scaleHeight(10),
    },
    passwordinput: {
        color: '#181725',
        fontSize: RFValue(18, 896),
        padding: 0,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        fontFamily: 'NotoSans-VariableFont_wdth,wght',
        paddingBottom: 0,
    },
    forgotPassword: {
        fontSize: RFValue(14, 896),
        alignSelf: 'flex-end',
        marginTop: scaleHeight(20),
    },
    dontHaveAccount: {
        color: '#181725',
        fontSize: RFValue(14, 896),
    },
    singup: {
        color: '#53b175',
        fontSize: RFValue(14, 896),
    },
    row: {
        flexDirection: 'row',
    },
    singupContainer: {
        alignSelf: 'center',
        marginTop: scaleHeight(25),
    },
    inputIconContainer: {
        justifyContent: 'center',
    },
    eyeContainer: {
        position: 'absolute',
        right: 0,
        height: '100%',
        justifyContent: 'center',
        width: scaleWidth(22),
        alignItems: 'center',
    },
    eye: {
        width: scaleWidth(19.93),
        height: scaleHeight(18.92),
    },
});
