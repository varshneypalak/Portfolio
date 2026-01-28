import React from 'react';
import {FaGithub ,FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/1.png'
const Footer = () => {
  const links = [
    {
      id:1,
      child:(
        <>
        <FaLinkedin size={30} />
        </>
      ),
      href:'https://www.linkedin.com/in/palak-varshney-0b955b256/'
    },
    {
      id:2,
      child:(
        <>
        <FaGithub size={30} />
        </>
      ),
      href:'https://github.com/varshneypalak'
    },
    {
      id:3,
      child:(
        <>
        <HiOutlineMail size={30} />
        </>
      ),
      href:'mailto:vashneypalak@gmail.com'
    },
    {
      id:4,
      child:(
        <>
        <FaInstagram size={30} />
        </>
      ),
      href:'https://www.instagram.com/vars_hneypalak/?next=%2F'
    },
  ]
  return (
    <footer className="w-full py-12 border-t border-white/10">
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='text-center md:text-left'>
            <p className='text-2xl font-bold text-gradient mb-2'>Palak Varshney</p>
            <p className='text-gray-400'>Backend Developer | Full Stack Engineer</p>
          </div>
          
          <ul className='flex gap-6'>
            {links.map(({id, href, child}) => (
              <li key={id}>
                <a 
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='glass-effect p-3 rounded-xl hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center'
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className='mt-8 pt-8 border-t border-white/10 text-center'>
          <p className='text-gray-400'>© {new Date().getFullYear()} Palak Varshney. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
