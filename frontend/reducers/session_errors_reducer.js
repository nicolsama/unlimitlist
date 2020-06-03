import {
    RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER, 
    CLEAR_ERRORS
} from '../actions/session_actions';

const _initialstate = [];
const sessionErrorsReducer = (state = _initialstate, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        case RECEIVE_CURRENT_USER:
            return _initialstate;
        case CLEAR_ERRORS: 
            return _initialstate; 
        default:
            return state;
    }
};

export default sessionErrorsReducer;