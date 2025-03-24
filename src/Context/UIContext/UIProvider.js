import React, {useReducer, useRef} from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';
import { Dimensions, StyleSheet, View } from 'react-native';
import Background1 from '../../components/Background1';
import Background2 from '../../components/Background2';

const {height, width} = Dimensions.get('window');

const INITIAL_STATE = {
    bgColor: '#53B175',
};

export const UIProvider = ({children}) => {
    const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);
    const background1Ref = useRef(undefined);
    const background2Ref = useRef(undefined);

    // Onboarding background (:v)
    const showBackground1 = () => {
        background1Ref.current.showBackground();
    };

    const hideBackground1 = () => {
        dispatch({type: 'set bgColor', payload: '#ffffff'});
        background1Ref.current.hideBackground();
    };

    // SingIn bg (Number, Verification, SelectLocation, etc.)
    const showBackground2 = () => {
        background2Ref.current.showBackground();
    };

    const hideBackground2 = () => {
        background2Ref.current.hideBackground();
    };

    const showBlurBackground2 = () => {
        background2Ref.current.showBlur();
    };

    const hideBlurBackground2 = () => {
        background2Ref.current.hideBlur();
    };

    return (
        <UIContext.Provider value={{
            showBackground1,
            hideBackground1,
            showBackground2,
            hideBackground2,
            showBlurBackground2,
            hideBlurBackground2,
        }}>
            <View style={[styles.container, {backgroundColor: state.bgColor}]}>
                <Background1 ref={background1Ref} />
                <Background2 ref={background2Ref} />
            </View>
            {children}
        </UIContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        height,
        width,
        backgroundColor: 'white',
        position: 'absolute',
    },
});
