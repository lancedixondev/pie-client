import React from 'react';
import './logout.css';
import logout from '../../assests/images.jpg'

const Logout = props => {
    return(

        <div>
            <img id='logout' alt='power button' src={logout}></img>
        </div>
    )
}

export default Logout;