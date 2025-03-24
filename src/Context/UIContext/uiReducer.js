export function uiReducer(state, action) {
    switch(action.type) {
        case 'set bgColor':
            return {...state, bgColor: action.payload};

        default:
            return state;
    }
}
