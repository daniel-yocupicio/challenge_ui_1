import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: width * 0.879516,
    },
    input: {
        borderRadius: 5,
        fontFamily: 'NotoSans-VariableFont_wdth,wght',
        marginTop: height * 0.01116,
        fontSize: RFValue(18, 896),
        flex: 1,
        letterSpacing: 0,
    },
    list: {
        backgroundColor: '#fff',
        marginTop: 0,
        borderRadius: 5,
        elevation: 2,
    },
    item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E2E2E2',
        borderBottomWidth: 1,
    },
    iconContainer: {
      width: width * 0.0914,
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: height * 0.02616,
    },
    title: {
        fontSize: RFValue(16, 896),
        color: '#7C7C7C',
    },
    icon: {
        width: width * 0.0314,
        height: height * 0.0078125,
    },
});
