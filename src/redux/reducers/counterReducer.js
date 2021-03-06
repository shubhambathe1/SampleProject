import { INCREASE_COUNTER, DECREASE_COUNTER, GET_COLOR } from '../actions/actionTypes';

const initialState = {
    counter: 5,
}

export default counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { counter: state.counter + 1 }
        case DECREASE_COUNTER:
            return { counter: state.counter - 1 }
        // case 'GET_COLOR':
        //     return {
        //         ...state,
        //         colors: action.colors
        //     };
    }
    return state;
}
