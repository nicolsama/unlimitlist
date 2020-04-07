import {
    RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const _initialstate = [];
const sessionErrorsReducer = (state = _initialstate, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        case RECEIVE_CURRENT_USER:
            return _initialstate;
        default:
            return _initialstate;
    }
};

export default sessionErrorsReducer;