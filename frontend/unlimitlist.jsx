import {signup, login, logout} from './actions/session_actions';
import {fetchAllNodes, fetchNode, createNode, deleteNode, updateNode} from './util/node_api_util';
// import { login } from './util/session_api_util'; 

// ^ TESTING
import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        delete window.currentUser;
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }

    //TESTING
    window.fetchAllNodes = fetchAllNodes; 
    window.fetchNode = fetchNode;
    window.createNode = createNode; 
    window.updateNode = updateNode; 
    window.deleteNode = deleteNode;
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TESTING

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});