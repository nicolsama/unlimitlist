import {
    LOGOUT_CURRENT_USER,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions'
import sessionErrorsReducer from './session_errors_reducer';


const _initialState = Object.freeze({
    id: null
});


const sessionReducer = (state = _initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger;
            return { id: action.user.id };
        case LOGOUT_CURRENT_USER:
            return _initialState;
        default:
            return state;
    }
}

export default sessionReducer;