import React from 'react';
import './Description.css'
const Description = () => {
    return (
        <div className='description'>
            <div className="container mx-auto">
                <main className='px-8 w-3/4 float-left box-border'>
                    <h1 className='text-2xl font-normal py-2.5'>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </main>
                <aside className='p-8 w-1/4 float-right box-border text-white bg-black'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </aside>
            </div>
        </div>
    );
};

export default Description;