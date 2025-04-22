import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from '../../utils/transformDimensions';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
        width: scaleWidth(364.12),
        paddingBottom: scaleHeight(10.55),
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
    },
    label: {
        color: '#7c7c7c',
        fontSize: RFValue(16, 896),
        marginBottom: scaleHeight(10),
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: scaleHeight(29),
        fontFamily: 'NotoSans-VariableFont_wdth,wght',
        fontSize: RFValue(18, 896),
        paddingVertical: 0,
        textAlignVertical: 'center',
        includeFontPadding: false,
        color: '#181725',
    },
    icon: {
        height: scaleHeight(29),
        width: scaleHeight(29),
    },
});
