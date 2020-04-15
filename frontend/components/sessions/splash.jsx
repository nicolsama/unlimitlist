import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { login } from '../../actions/session_actions';


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
    }


    render() { 

            return ( <div className="splashContainer">
            <h2><span>Overwhelmed?</span> We can help!</h2>
            <p>Unlimitlist offers a simpler way to stay organized. If you have a crazy job or an ambitious project, we will be your trusty sidekick.
            </p>
                <div className="splashForm">
                    <input 
                        type="text" 
                        placeholder="Enter your email">
                    </input>
                    <button>
                        Sign Up
                    </button>
                </div>
                <div 
                className="splashForm">
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
    fetchAllNodes: () => dispatch(fetchAllNodes())
});

export default connect(msp, mdp)(Splash);
