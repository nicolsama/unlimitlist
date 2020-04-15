import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Logo = (props) => {
    return (<NavLink to="/" id='logolink'><span className='logoContainer'>
                <img
                    src="assets/logo3.png"
                    className="logoImg" />
                            UnlimitList
            </span></NavLink>
            )
}
export default Logo; 