import React from 'react';
import './header.style.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header__header-content container">
                <div>
                    <Link to={'/'}>Logo</Link>
                </div>
                <div>
                    <Link to={'/'}>Home</Link>
                </div>
                <div>
                    <Link to={'details'}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
