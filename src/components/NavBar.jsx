import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import logo from '../assets/1.png'
import { HiRefresh } from 'react-icons/hi'


const NavBar = () => {
    const [nav, setnav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home',
            href: '#home'
        },
        {
            id: 2,
            link: 'Skills',
            href: '#skills'
        },
        {
            id: 3,
            link: 'Projects',
            href: '#projects'
        },
        {
            id: 4,
            link: 'contact',
            href: '#contact'
        }

    ]
    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed transparent
        '>
            <div>
                {/* <h1 className='text-5xl font-signature'></h1> */}
                <div><img className=' h-30 w-32 md:w-39' src={logo} /></div>
            </div>
            <ul className='hidden md:flex'>
                {
                    links.map(({ link, id, href }) => (
                        <li key={id}
                            className='px-10 cursor-pointer capitalize font-bold
                            text-xl text-gray-500 hover:scale-110 duration-200'>
                            <a
                                href={href}
                            >
                                {link}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div onClick={() => { setnav(!nav) }}
                className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes /> : <FaBars />}
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>

                    {
                        links.map(({ link, id, href }) => (
                            <li key={id}
                                className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200' >
                                <a
                                    href={href}
                                >
                                    {link}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>

    )
}

export default NavBar