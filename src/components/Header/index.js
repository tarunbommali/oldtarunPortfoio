import React from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import { useTheme } from '../..//context/darkThemeContext';

const Header = () => {
    const { darkTheme, toggleDarkTheme } = useTheme();
    const location = useLocation(); // Get current location object
    const { pathname } = location; // Extract pathname from location object

    const handleThemeToggle = () => {
        toggleDarkTheme();
    };

    const light = <img src="https://res.cloudinary.com/drdgj0pch/image/upload/v1708451054/sun_tjehtv.png" className='light' alt='light' />;
    const dark = <img src="https://res.cloudinary.com/drdgj0pch/image/upload/v1708451192/moon_ggurcz.png" alt="moon" className='dark' />;

    return (
        <div className='header'>
            <h1 className='logo'>Tb.</h1>
            <ul className='nav-link-list'>
                <li className={`nav-link ${pathname === '/' ? 'active-nav-link' : ''}`}>
                    <Link to="/" className='link'>HOME</Link>
                </li>
                <li className={`nav-link ${pathname === '/skills' ? 'active-nav-link' : ''}`}>
                    <Link to="/skills" className='link'>SKILLS</Link>
                </li>

                <li className={`nav-link ${pathname === '/projects' ? 'active-nav-link' : ''}`}>
                    <Link to="/projects" className='link'>PROJECTS</Link>
                </li>
                <li className={`nav-link ${pathname === '/about' ? 'active-nav-link' : ''}`}>
                    <Link to="/about" className='link'>ABOUT</Link>
                </li>

                <li className={`nav-link ${pathname === '/blogs' ? 'active-nav-link' : ''}`}>
                    <a className='link' href='https://quickreadsblogs.netlify.app/' target='__blank'>BLOGS</a>
                </li>
                <li className='nav-link'>
                    <button onClick={handleThemeToggle} className='theme-button'>
                        {darkTheme ? dark : light}
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Header;
