import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: Dimensions.get('window').width * 0.8795,
        alignSelf: 'center',
    },
    title: {
        fontSize: RFValue(26, 1000),
        color: '#030303',
        fontWeight: '600',
        marginBottom: height * 0.03078,
        marginTop: height * 0.0727,
    },
    description: {
        fontSize: RFValue(16, 896),
        color: '#7c7c7c',
        fontWeight: '600',
        marginBottom: height * 0.01116,
    },
    input: {
        fontFamily: 'NotoSans-VariableFont_wdth,wght',
        fontSize: RFValue(18, 896),
        color: '#030303',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        lineHeight: 12,
        height: Dimensions.get('window').height * 0.032366,
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
    },
    optionsbuttons: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.8795,
        alignSelf: 'center',
    },
    nextButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#53B175',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextIcon: {
        width: 10,
        height: 18,
    },
    resendCode: {
        color: '#53B175',
        fontSize: RFValue(18, 896),
    },
});

