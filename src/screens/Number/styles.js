import { Dimensions, StyleSheet, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    flex1: {
        flex: 1,
    },
    paddingStatusbar: {
        paddingTop: StatusBar.currentHeight,
    },
    width: {
        width: Dimensions.get('window').width * 0.8795,
        alignSelf: 'center',
    },
    contentContainer: {
        width: Dimensions.get('window').width * 0.8795,
        alignSelf: 'center',
        flex: 1,
        bottom: 0,
        top: 0,
    },
    backButton: {
        marginTop: StatusBar.currentHeight + 8,
        marginBottom: height * 0.0727,
        width: 10,
    },
    backIcon: {
        width: 10,
        height: 18,
    },
    title: {
        fontSize: RFValue(26, 1000),
        color: '#030303',
        fontWeight: '600',
        width: Dimensions.get('window').width * 0.536452,
        height: Dimensions.get('window').height * 0.07031,
        marginTop: height * 0.0727,
    },
    description: {
        fontSize: RFValue(16, 896),
        color: '#7c7c7c',
        fontWeight: '600',
        marginTop: height * 0.03078,
        marginBottom: height * 0.01116,
        height: height * 0.032366,
    },
    bottomButtons: {
        position: 'absolute',
        width: Dimensions.get('window').width * 0.8795,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 2,
        bottom: 20,
        alignItems: 'flex-end',
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
    zero: {
        height: 0,
    },
    box: {
        marginTop: (height * 0.0727) + (height * 0.03078) + (height * 0.01116) + StatusBar.currentHeight + 8,
        height: Dimensions.get('window').height * 0.07031 + 18 + height * 0.032366,
    },
    numberInputContainer: {
        marginBottom: height * 0.692912,
    },
});

/*
        marginTop: StatusBar.currentHeight + 8,
        marginBottom: height * 0.0727,
        marginTop: height * 0.03078,
        marginBottom: height * 0.01116,
*/
