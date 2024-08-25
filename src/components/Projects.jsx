import React from 'react'
import AmazonClone from '../assets/AmazonClone.png'
import FunFood from '../assets/FunFood.png'
import QuoteGenerator from '../assets/QuoteGenrator.png'
import SnakeLeader from '../assets/SnakeLeader.png'
import Todo from '../assets/ToDo.png'
import currencyConverter from '../assets/currencyConverter.png'
import PasswordGen from '../assets/PasswordGenerator.png'
const Projects = () => {
  const project =[
    {
      id:1 ,
      title:'Food Website',
      src:FunFood,
      css:'h-12 m-4',
      href:'https://github.com/varshneypalak/Funfood',
      demo:'https://funfood1503.netlify.app'

    },
    {
      id:2 ,
      title:'Snake & Leader',
      src:SnakeLeader,
      href:'https://github.com/varshneypalak/SnakeLeader',
      demo:'https://snakeandleader1503.netlify.app'
    },
    {
      id:3 ,
      title:'Quote Generator',
      src:QuoteGenerator,
      href:'https://github.com/varshneypalak/QuoteGenerator',
      demo:'https://quotegenerator1503.netlify.app'
    },
    {
      id:4 ,
      title:'Amazon Clone',
      src:AmazonClone,
      href:'https://github.com/varshneypalak/AmazonClone',
      demo:'https://amazonclone1503.netlify.app'
    },
    {
      id:5 ,
      title:'ToDo',
      src:Todo,
      href:'https://github.com/varshneypalak/ToDo',
      demo:'https://todo1503.netlify.app'
    },
    {
      id:6 ,
      title:'Currency Converter',
      src:currencyConverter,
      href:'https://github.com/varshneypalak/CourrencyConverter',
      demo:'https://currencyconverter1503.netlify.app'
    },
    {
      id:7 ,
      title:'Password Generator',
      src:PasswordGen,
      href:'https://github.com/varshneypalak/passwordGenerator',
      demo:'https://passwordgenerator1503.netlify.app'
    },
  ]
  return (
    <div
        id='projects'
      className='w-full text-white flex md:mt-48 flex-col md:h-screen max-w-screen-lg p-4 mx-auto justify-center h-full'
    >
      {/* <div
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '
      > */}
        <div className='pb-8 mt-28 '>
          <p className='text-6xl  font-bold border-b-4 border-gray-500 inline-block p-2  mt-12 '>
            Projects
          </p>
          <p className='py-6'>
            Check out some of my work right here
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10  sm:px-0'>
          {project.map(({id , src ,demo , href ,title}) =>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
               src={src} 
               alt=""
               className='rounded-md h-15 duration-200 hover:scale-105'
               />
               <h3 className='p-4 align-middle justify-center flex {css}'>{title}</h3>
               <div className='flex items-center justify-center'>
                
               <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={href} target='_blank'>Repo </a></button>
               <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo} target='_blank'>Demo</a></button>
               </div>
          </div>
          ))}
          
        </div>
      {/* </div> */}
    </div>
  )
}

export default Projects