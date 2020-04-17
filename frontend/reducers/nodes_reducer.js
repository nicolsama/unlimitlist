import {
    RECEIVE_NODES, RECEIVE_NODE, REMOVE_NODE
} from '../actions/node_actions';

import {
    LOGOUT_CURRENT_USER,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';

import {
    selectAllNodes
} from '../selectors/nodes_selector';

export default (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_NODES: 
             
            return selectAllNodes(state, action);
        case RECEIVE_NODE: 
            let newState = Object.assign({}, state);
             
            newState.allNodes[action.node.id] = action.node || action.node
             
            return Object.assign({}, newState );
        case REMOVE_NODE:
            let nextState = Object.assign({}, state); 
            delete nextState[action.nodeId];
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
            
        default:
            return state;
    }
}