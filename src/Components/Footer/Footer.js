import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
            <footer className='text-center footer'>
                <p>Copyright &copy; {(new Date()).getFullYear()} My Website</p>
            </footer>
    );
};

export default Footer;