import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    btn: {
        height: height * 0.07477,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 0.0869,
    },
    txtBtn: {
        color: 'white',
        fontSize: RFValue(18, 896),
    },
});
