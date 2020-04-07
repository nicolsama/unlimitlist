import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route, HashRouter, withRouter } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import AuthRoute from '../util/route_util';

const App = () => (
    <div>
        <header>
            <span className='logo'>UnlimitList</span>
            <Route path="/" component={GreetingContainer} /> 
        </header>

        <AuthRoute path="/api/session" component={LoginFormContainer} />
        <AuthRoute path="/api/users" component={SignupFormContainer} />
    </div>
);

export default App;