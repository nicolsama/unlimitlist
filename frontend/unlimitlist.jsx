import {signup, login, logout} from './actions/session_actions';
// ^ TESTING
import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    // TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup; 
    window.login = login; 
    window.logout = logout;
    // TESTING
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});