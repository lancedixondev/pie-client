import React from 'react';
import './navbar.css';
import piePic from '../../assests/download.jpg'
import Logout from '../Logout/Logout'

const Navbar = (props) => {
    return(

        <div>
            <nav>
            
                <img id="piePic" alt="pie" src={piePic}></img>
                <Logout />
            </nav>
        </div>

    )
}

export default Navbar;