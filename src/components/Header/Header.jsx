import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/react.svg'
import './Header.css'

const logo = 'https://webeontheme.com/html/novaly/v2/images/logo.png';

const Header = () => {
    return (
        <header className='header-area'>
            <div className="container">
                <div className="row">
                    <div className="logo-area">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className="main-menu">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/review">Review</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div> 
        </header>
    );
};

export default Header;