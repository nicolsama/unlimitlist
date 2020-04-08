import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentUser) {

            return (
                <div>
                    <button
                        className='HeaderButton'
                        onClick={this.props.logout}>
                    Log Out</button>
                </div>
             )
        } else {

            let linkValue;
            let newPath; 

            if (this.props.linkPath == '/api/users') { 
                linkValue ='Sign In'; 
                newPath = '/api/session';
            } else { 
                linkValue = 'Sign Up';
                newPath = '/api/users';
            }

            return (
                <div>
                    <Link 
                        to={newPath} 
                        className='HeaderButton'>
                        {linkValue}
                    </Link>
                </div>
            )
        }
    }
}

export default Greeting;
