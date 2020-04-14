import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentUser) {
            return ( null )
        } else {
            let linkValue;
            let newPath; 

            if (this.props.linkPath == '/api/signup') { 
                linkValue ='Log In'; 
                newPath = '/api/login';
            } else { 
                linkValue = 'Sign Up';
                newPath = '/api/signup';
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
}

export default Greeting;
