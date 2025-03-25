import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center', // Para centrar el contenido si es necesario
        paddingBottom: 20, // Espacio adicional para evitar que el teclado tape elementos
    },
    image: {
        width: width * 0.542729,
        height: height * 0.1905,
        alignSelf: 'center',
        marginTop: height * 0.05018,
    },
    title: {
        fontSize: RFValue(26, 896),
        alignSelf: 'center',
        color: '#181725',
        marginBottom: height * 0.01674,
        marginTop: height * 0.04481,
    },
    description: {
        fontSize: RFValue(16, 896),
        alignSelf: 'center',
        textAlign: 'center',
        color: '#7C7C7C',
        width: width * 0.879516,
    },
    dataContainer: {
        marginTop: height * 0.09972,
        alignItems: 'center',
    },
    space40: {
        height: height * 0.04503,
    },
    space30: {
        height: height * 0.03348,
    },
});
