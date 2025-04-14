import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
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
});
