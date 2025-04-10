import {createContext} from 'react';

export interface ContextValue {
    showBackground1: () => void,
    hideBackground1: () => void,
    showBackground2: () => void,
    hideBackground2: () => void,
    showBlurBackground2: () => void,
    hideBlurBackground2: () => void,
}

export const UIContext = createContext({} as ContextValue);
