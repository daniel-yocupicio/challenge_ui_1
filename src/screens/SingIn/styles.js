import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    white: {
        backgroundColor: 'white',
    },
    ScreenContainer: {
        backgroundColor: '#FCFCFC99',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    viewContainer: {
        flex: 1,
    },
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

    // part 2
    bottomSection: {
        position: 'absolute',
        bottom: 90.42,
        width: '100%',
    },
    textDescription: {
        fontSize: RFValue(14, 896),
        color: '#828282',
        alignSelf: 'center',
    },
    btn: {
        width: Dimensions.get('window').width * 0.8795,
        height: Dimensions.get('window').height * 0.07477,
        borderRadius: 14,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    txtBtn: {
        color: 'white',
        fontSize: RFValue(18, 896),
    },
    googleIcon: {
        width: Dimensions.get('window').width * 0.0554,
        height: Dimensions.get('window').height * 0.02745,
        marginLeft: Dimensions.get('window').width * 0.08677,
        marginRight: Dimensions.get('window').width * 0.0971,
    },
    facebookIcon: {
        width: Dimensions.get('window').width * 0.02829,
        height: Dimensions.get('window').height * 0.02745,
        marginLeft: Dimensions.get('window').width * 0.08677,
        marginRight: Dimensions.get('window').width * 0.10301,
    },
    btnTop: {
        marginBottom: Dimensions.get('window').height * 0.02232,
        marginTop: Dimensions.get('window').height * 0.04218,
    },

    // part 3
    middleSection: {
        position: 'absolute',
        bottom: Dimensions.get('window').height * 0.3382,
        width: '100%',
    },
    title: {
        fontSize: RFValue(26, 1000),
        color: '#030303',
        fontWeight: '600',
        width: Dimensions.get('window').width * 0.536452,
        marginLeft: Dimensions.get('window').width * 0.05927,
        height: Dimensions.get('window').height * 0.07031,
    },
    flag: {
        width: Dimensions.get('window').width * 0.08208,
        height: Dimensions.get('window').height * 0.02645,
        marginRight: 12.02,
    },
    inputContainer: {
        width: Dimensions.get('window').width * 0.8795,
        height: Dimensions.get('window').height * 0.04414,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 30.61,
    },
    input: {
        flex: 1,
        fontFamily: 'NotoSans-VariableFont_wdth,wght',
        fontSize: RFValue(18, 896),
        color: '#030303',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        lineHeight: 12,
        height: Dimensions.get('window').height * 0.032366,
    },
});
