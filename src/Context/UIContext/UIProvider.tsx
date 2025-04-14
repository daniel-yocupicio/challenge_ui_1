import React, {useReducer, useRef, FC} from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';
import { Dimensions, StyleSheet, View } from 'react-native';
import Background1, {REFBackground1} from '../../components/Background1';
import Background2, {REFBackground2} from '../../components/Background2';
import Background3, { REFBackground3 } from '../../components/Background3';

const {height, width} = Dimensions.get('screen');

export interface StateContext {
    bgColor: string,
}

interface Props {
    children: React.ReactNode,
}

const INITIAL_STATE : StateContext = {
    bgColor: '#53B175',
};

export const UIProvider : FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);
    const background1Ref = useRef<REFBackground1>({} as REFBackground1);
    const background2Ref = useRef<REFBackground2>({} as REFBackground2);
    const background3Ref = useRef<REFBackground3>({} as REFBackground3);

    // Onboarding background
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

    // login background
    const showBackground3 = () => {
        background3Ref.current.showBackground();
    };
    const hideBackground3 = () => {
        dispatch({type: 'set bgColor', payload: '#ffffff'});
        background3Ref.current.hideBackground();
    };

    return (
        <UIContext.Provider value={{
            showBackground1,
            hideBackground1,
            showBackground2,
            hideBackground2,
            showBlurBackground2,
            hideBlurBackground2,
            showBackground3,
            hideBackground3,
        }}>
            <View style={[styles.container, {backgroundColor: state.bgColor}]}>
                <Background1 ref={background1Ref} />
                <Background2 ref={background2Ref} />
                <Background3 ref={background3Ref} />
            </View>
            {children}
        </UIContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        height,
        width,
        position: 'absolute',
        top: 0,
        bottom: 0,
    },
});
