import {
    combineReducers
} from "redux";

import usersReducer from "./users_reducer";
import nodesReducer from "./nodes_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer, 
    nodes: nodesReducer,
});

export default entitiesReducer;