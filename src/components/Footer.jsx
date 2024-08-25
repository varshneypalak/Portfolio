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
    <footer className="text-white py-6 text-center">
       <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
       <div className='flex flex-row justify-center'>
      
      <ul className='flex flex-row justify-center'>
        {links.map(({id , href , child})=>(
          <li key={id}
          className='m-3 md:m-12 hover:scale-110 duration-200'>
             <a 
             href={href}
             target='_blank'
             rel='noreferrer'
             >
              {child}
             </a>
          </li>
        ))}
      </ul>
      </div>
      <div className="mb-4">
        <p>© Palak Varshney</p>
      </div>
    </footer>
  );
};

export default Footer;
