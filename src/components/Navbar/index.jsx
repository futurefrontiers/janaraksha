import React from 'react';

import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav id='navbar' className='navbar'>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/projects' className={({ isActive }) => (isActive ? 'active' : '')}>
                        Projects
                    </NavLink>
                </li>
                <li className='dropdown'>
                    <Link to='/donations'>
                        <span>Services</span> <i className='bi bi-chevron-down dropdown-indicator' />
                    </Link>
                    <ul>
                        <li>
                            <Link to='/donations/organ'>Organ Donation</Link>
                        </li>
                        <li>
                            <Link to='/donations/blood'>Blood Donation</Link>
                        </li>
                        <li>
                            <Link to='/donations/food'>Food Donation</Link>
                        </li>
                        <li>
                            <Link to='/donations/financial'>Financial Assistance</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : '')}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
