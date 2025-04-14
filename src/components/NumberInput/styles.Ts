import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
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
    flag: {
        width: Dimensions.get('window').width * 0.08208,
        height: Dimensions.get('window').height * 0.02645,
        marginRight: 12.02,
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
