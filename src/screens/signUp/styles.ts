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
    termsText: {
      fontFamily: 'NotoSans-VariableFont_wdth,wght',
      fontSize: RFValue(14, 896),
      width: scaleWidth(364.12),
      color: '#7c7c7c',
      marginBottom: scaleHeight(30.03),
    },
    green: {
      color: '#53b175',
    },
    row: {
      flexDirection: 'row',
    },
    dontHaveAccount: {
      color: '#181725',
      fontSize: RFValue(14, 896),
    },
    singup: {
      color: '#53b175',
      fontSize: RFValue(14, 896),
    },
    singupContainer: {
      alignSelf: 'center',
      marginTop: scaleHeight(25),
    },
  });
