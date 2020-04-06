import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logoutCurrentUser();
    }



    render() {

        if (this.props.currentUser) {

            return (
                <div>
                    <button
                        onClick={this.handleLogout} >
                        Log Out
                        </button>
                    <h3>Welcome, {this.props.currentUser.email}</h3>
                </div>
             )
        } else {
            return (
                <div>
                    <Link to='/api/session'>Sign In</Link><br />
                    <Link to='/api/users'>Sign Up</Link>
                </div>
            )
        }
    }
}

export default Greeting;
