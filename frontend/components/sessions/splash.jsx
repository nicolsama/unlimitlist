import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { withRouter } from "react-router-dom";
import { fetchAllNodes } from '../../actions/node_actions';
import SplashFormContainer from './splash_form_container';


class Splash extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "demo@email.com",
            password: '1234567'
        }
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
    }

    handleDemoLogin(e) {
        const user = this.state;
        this.props.demoLogin(user)
            .then(this.props.fetchAllNodes);
    }


    render() { 

            return ( <div className="splashContainer">
            <h2><span>Overwhelmed?</span> We can help!</h2>
            <p>Unlimitlist offers a simpler way to stay organized. If you have a crazy job or an ambitious project, we will be your trusty sidekick.
            </p>

                <SplashFormContainer/>
                <div 
                className="demo">
                    <span id='splashSignIn'>Not sure?
                    </span>
                    <a
                        to='api/login' 
                        id="demoLogin"
                        onClick={this.handleDemoLogin}>
                        Try the Demo Account
                    </a>
                </div>
            </div>)
    }
}

const msp = (state) => ({
})

const mdp = (dispatch) => ({
    demoLogin: (user) => dispatch(login(user)),
    fetchAllNodes: (search) => dispatch(fetchAllNodes(search))
});

export default connect(msp, mdp)(Splash);
