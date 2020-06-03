import * as SessionAPIUtil from '../util/session_api_util'
import fetchAllNodes from '../actions/node_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER, 
    user: currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER, 
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS, 
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const login = (user) => dispatch => {
    return  (
        SessionAPIUtil.login(user)
            .then((user) => dispatch(receiveCurrentUser(user)), (e) => dispatch(receiveErrors(e)))
)};

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
        .then((user) => dispatch(logoutCurrentUser(user)), (e) => dispatch(receiveErrors(e)))
);

export const signup = (user) => dispatch => (
    SessionAPIUtil.signup(user)
        .then((user) => dispatch(receiveCurrentUser(user)), (e) => dispatch(receiveErrors(e)))
);