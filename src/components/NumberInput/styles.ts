import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.8795,
        height: Dimensions.get('window').height * 0.04414,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
    },
    flag: {
        width: Dimensions.get('window').width * 0.08208,
        height: Dimensions.get('window').height * 0.02645,
        marginRight: 12.02,
    },
    input: {
        fontFamily: 'NotoSans-VariableFont_wdth,wght',
        fontSize: RFValue(18, 896),
        color: '#030303',
        flex: 1,
        paddingVertical: 0,
        textAlignVertical: 'center', 
        includeFontPadding: false,  
        height: Dimensions.get('window').height * 0.0441,
    },
});
