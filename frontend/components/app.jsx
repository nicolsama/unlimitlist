import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route, HashRouter, withRouter} from 'react-router-dom';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import {AuthRoute, NodeRoute} from '../util/route_util';
import NodeListContainer from './nodes/nodes_list_container';
import Logo from './logo/logo';
const App = () => (
    <div>
        <header>
            <AuthRoute path="/" component={Logo}/>
            <Route path="/" component={GreetingContainer} /> 
            {/* Search Bar component as Node Route */}
        </header> 
        <NodeRoute path="/" component={NodeListContainer} />
        <AuthRoute path="/api/session" component={LoginFormContainer} />
        <AuthRoute path="/api/users" component={SignupFormContainer} />

    </div>
);

export default App;