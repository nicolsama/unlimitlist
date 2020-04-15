import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import logoimg from 'assets/logo' // gives image path

const Logo = (props) => {
    return (<NavLink to="/" id='logolink'>
        <span className='logoContainer'>
            {/* <img src="/logo" alt="logo" /> */}
            <img src={require('/logo.jpg')} />
            UnlimitList
        </span>
        </NavLink>
            )
}
export default Logo; 