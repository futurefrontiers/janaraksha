import React from 'react';

const Navbar = () => {
    return (
        <nav id='navbar' className='navbar'>
            <ul>
                <li>
                    <a href='index.html' className='active'>
                        Home
                    </a>
                </li>
                <li>
                    <a href='about.html'>About</a>
                </li>
                <li>
                    <a href='services.html'>Services</a>
                </li>
                <li>
                    <a href='projects.html'>Projects</a>
                </li>
                <li className='dropdown'>
                    <a href='#'>
                        <span>Donations</span> <i className='bi bi-chevron-down dropdown-indicator' />
                    </a>
                    <ul>
                        <li>
                            <a href='#'>Organ Donation</a>
                        </li>
                        <ul></ul>
                        <li>
                            <a href='#'>Blood Donation</a>
                        </li>
                        <li>
                            <a href='#'>Food Donation</a>
                        </li>
                        <li>
                            <a href='#'>Financial assistance</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href='contact.html'>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
