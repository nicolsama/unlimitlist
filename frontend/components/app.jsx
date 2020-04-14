import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch, HashRouter, withRouter} from 'react-router-dom';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import {AuthRoute, NodeRoute} from '../util/route_util';
import NodeListContainer from './nodes/nodes_list_container';
import NodeListFocusContainer from './nodes/node_list_focus_container';
import Logo from './logo/logo';
import Nav from './navs/nav_main';
const App = () => (
    <div>
        <header>
            <AuthRoute path="/" component={Logo}/>
            <Route path="/" component={GreetingContainer} /> 
            <NodeRoute path="/" component={Nav} />
        </header> 

        <NodeRoute exact path="/" component={NodeListContainer} />
        <NodeRoute path="/nodes/:id" component={NodeListFocusContainer} />

        
        <AuthRoute path="/api/login" component={LoginFormContainer} />
        <AuthRoute path="/api/signup" component={SignupFormContainer} />

    </div>
);

export default App;