import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: width,
        height: height,
    },
    title: {
        fontSize: RFValue(24, 896),
        color: '#030303',
        fontWeight: '600',
        width: width * 0.536452,
        marginLeft: width * 0.05927,
    },
    description: {
        fontSize: RFValue(14, 896),
        color: '#7c7c7c',
        fontWeight: '600',
        alignSelf: 'center',
        marginBottom: height * 0.042187,
        marginTop: height * 0.04464,
        textAlign: 'center',
    },
    buttonsContainer: {
        gap: height * 0.02232,
        width: width * 0.8795,
        alignSelf: 'center',
        marginBottom: height * 0.10091,
    },
    googleIcon: {
        width: width * 0.0554,
        height: height * 0.02745,
        marginRight: width * 0.0971,
    },
    facebookIcon: {
        width: width * 0.02829,
        height: height * 0.02745,
        marginRight: width * 0.10301,
    },
    numberInputContainer: {
        alignSelf: 'center',
    },
});
