import { stateContext } from './UIProvider';

type uiActionType = {type: 'set bgColor', payload: string}

export function uiReducer(state : stateContext, action : uiActionType) {
    switch(action.type) {
        case 'set bgColor':
            return {...state, bgColor: action.payload};

        default:
            return state;
    }
}
