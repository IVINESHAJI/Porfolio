import React from 'react';
import '../styles/navbar.css'
import portImg from '../images/Port_Img.png'

const Navbar = () => {
    return(
        <>
        <nav>
            <div className='navHead'>
                <img src={ portImg } alt='PortImage' className='portImage'/>
                <ul className='navPoints'>
                    <li >
                        <a href='/'>Home</a>
                    </li>
                    <li >
                        <a href='/About'>About</a>
                    </li>
                    <li >
                        <a href='/Contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;