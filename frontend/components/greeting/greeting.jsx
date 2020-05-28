import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentUser) return null;

            let linkValue;
            let newPath; 

            if (this.props.linkPath == '/api/login') {
                linkValue = "Sign Up"; 
                newPath = '/api/signup'
            } else { 
                linkValue = 'Log In';
                newPath = '/api/login';
            }

            return (
                <div>
                    <Link 
                        to={newPath} 
                        className='headerButton'>
                        {linkValue}
                    </Link>
                </div>
            )
        }

}

export default Greeting;
