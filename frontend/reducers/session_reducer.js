import {
    LOGOUT_CURRENT_USER,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions'
import sessionErrorsReducer from './session_errors_reducer';

const _nullUser = {
    id: null
}

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, _nullUser);
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {
                id: action.user.id
            });
        default:
            return state;
    }
}

export default sessionReducer;