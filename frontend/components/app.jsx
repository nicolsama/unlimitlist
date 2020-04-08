import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route, HashRouter, withRouter} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {AuthRoute, NodeRoute} from '../util/route_util';
import NodeListContainer from './nodes/nodes_list_container';

const App = () => (
    <div>
        <header>
            <span className='logoContainer'>
                <img 
                    src="assets/unlimitlist-logo copy.png" 
                    className="logoImg" /> 
                    UnlimitList
                </span>
            <Route path="/" component={GreetingContainer} /> 
        </header>
        
        <NodeRoute path="/" component={NodeListContainer} />
        <AuthRoute path="/api/session" component={LoginFormContainer} />
        <AuthRoute path="/api/users" component={SignupFormContainer} />

    </div>
);

export default App;