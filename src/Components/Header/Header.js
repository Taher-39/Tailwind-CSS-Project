import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='bg-black text-white py-5'>
                <div className="container mx-auto">
                    <ul className='list-none p-0'>
                        <li className='inline'><a className='pr-16 text-xl no-underline' href="#">Home</a></li>
                        <li className='inline'><a className='pr-16 text-xl no-underline' href="#">About</a></li>
                        <li className='inline'><a className='pr-16 text-xl no-underline' href="#">Services</a></li>
                        <li className='inline'><a className='pr-16 text-xl no-underline' href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;