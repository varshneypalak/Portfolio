import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from '../assets/1.png';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home',
            href: '#home',
        },
        {
            id: 2,
            link: 'Skills',
            href: '#skills',
        },
        {
            id: 3,
            link: 'Projects',
            href: '#projects',
        },
        {
            id: 4,
            link: 'Contact',
            href: '#contact',
        },
    ];

    const handleNavToggle = () => setNav(!nav);

    const closeNavOnClick = () => {
        if (window.innerWidth <= 768) {
            setNav(false);
        }
    };

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
            <div>
                <img className="h-20 w-32 md:w-39" src={logo} alt="Logo" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex">
                {links.map(({ link, id, href }) => (
                    <li
                        key={id}
                        className="px-6 cursor-pointer capitalize font-bold text-lg text-gray-400 hover:text-white duration-200"
                    >
                        <a href={href}>{link}</a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div
                onClick={handleNavToggle}
                className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
            >
                {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
                    {links.map(({ link, id, href }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 text-gray-400 hover:text-white duration-200"
                        >
                            <a href={href} onClick={closeNavOnClick}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
