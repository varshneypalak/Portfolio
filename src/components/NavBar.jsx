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
            link: 'Experience',
            href: '#experience',
        },
        {
            id: 4,
            link: 'Projects',
            href: '#projects',
        },
        {
            id: 5,
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
        <div className="flex justify-between items-center w-full h-20 px-6 text-white glass-effect fixed z-50 shadow-lg">
            <div className="flex items-center">
                <img className="h-16 w-28 object-contain" src={logo} alt="Logo" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-2">
                {links.map(({ link, id, href }) => (
                    <li key={id}>
                        <a 
                            href={href}
                            className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div
                onClick={handleNavToggle}
                className="cursor-pointer z-10 text-gray-300 hover:text-white md:hidden transition"
            >
                {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-xl">
                    {links.map(({ link, id, href }) => (
                        <li key={id} className="py-4">
                            <a 
                                href={href} 
                                onClick={closeNavOnClick}
                                className="text-2xl font-medium text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                            >
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
