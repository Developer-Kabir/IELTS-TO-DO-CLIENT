import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='copyright-container'>
            <p>Copyrights &copy; {year} Kabir Hossain. All rights reserved.</p>
        </div>
    );
};

export default Footer;