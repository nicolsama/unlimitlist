import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Splash = () => (
    <div className="splashContainer">
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
                <span id='splashSignIn'>Already have an account?
                </span>
                <Link to='api/login'>Sign In</Link>
            </div>
    </div>
)

export default Splash;