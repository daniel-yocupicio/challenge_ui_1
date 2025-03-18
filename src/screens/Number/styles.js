import { Dimensions, StyleSheet, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

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
        marginTop: 8,
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
    },
    description: {
        fontSize: RFValue(16, 896),
        color: '#7c7c7c',
        fontWeight: '600',
        marginTop: 27.58,
        marginBottom: 10,
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
});
