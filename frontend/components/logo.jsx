import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoimg from '../../app/assets/images/logo.jpg' // gives image path

const Logo = (props) => {
    return (<NavLink to="/" id='logolink'>
        <span className='logoContainer'>
            <img src="/logo" alt="logo" />
            UnlimitList
        </span>
        </NavLink>
            )
}
export default Logo; 