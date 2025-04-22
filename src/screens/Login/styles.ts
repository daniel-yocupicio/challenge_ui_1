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
        marginBottom: scaleHeight(40),
    },
    inputContainer: {
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        paddingBottom: scaleHeight(10.55),
        width: scaleWidth(364.12),
        display: 'flex',
    },
    inputLabel: {
        color: '#7c7c7c',
        fontSize: RFValue(16, 896),
        marginBottom: scaleHeight(10),
        width: scaleWidth(364.12),
    },
    input: {
        fontFamily: 'NotoSans-VariableFont_wdth,wght',
        fontSize: RFValue(18, 896),
        paddingVertical: 0,
        textAlignVertical: 'center',
        includeFontPadding: false,
        letterSpacing: 0,
        height: scaleHeight(29),
        color: '#181725',
        flex: 1,
    },
    securePassword: {
        flexDirection: 'row',
        width: scaleWidth(364.12),
        justifyContent: 'center',
        alignItems: 'center',
    },
    eyeContainer: {
        width: scaleWidth(25),
        alignItems: 'center',
        justifyContent: 'center',
    },
    passwordcontainer: {
        marginTop: scaleHeight(30),
        marginBottom: scaleHeight(30),
    },
    forgotPassword: {
        fontSize: RFValue(14, 896),
        alignSelf: 'flex-end',
        marginBottom: scaleHeight(30),
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
    eye: {
        width: scaleWidth(19.93),
        height: scaleHeight(18.92),
    },
});
