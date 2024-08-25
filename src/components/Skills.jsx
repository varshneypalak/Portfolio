import React from 'react'
import html from "../assets/html.png"
import github from "../assets/github.png"
import css from "../assets/css.png"
import tailwind from "../assets/tailwind.png"
import reactjs from "../assets/react.png"
import javascript from "../assets/javascript.png"
import java from '../assets/java.webp'
import inteliiJ from '../assets/intellijeLogo.webp'
import vs from '../assets/vs Logo.webp'
import Cpp from '../assets/cpp-logo.webp'
import figma from '../assets/Figma-logo.webp'
import canva from '../assets/canva-logo.webp'
const Skills = () => {
    const tech =[
         {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
         },
         {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
         },
         {
            id:3,
            src:javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
         },
         {
            id:4,
            src:reactjs,
            title:'React',
            style:'shadow-blue-500'
         },
         {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
         },
         {
            id:6,
            src:github,
            title:'Github',
            style:'shadow-gray-400'
         },
         {
            id:7,
            src:java,
            title:'Java',
            style:'shadow-gray-400'
         },
         {
            id:8,
            src:Cpp,
            title:'C++',
            style:'shadow-gray-400'
         },
         {
            id:9,
            src:inteliiJ,
            title:'Intellij Idea',
            style:'shadow-gray-400'
         },{
            id:10,
            src:vs,
            title:'VS Code',
            style:'shadow-gray-400'
         },
         {
            id:11,
            src:figma,
            title:'Figma',
            style:'shadow-gray-400'
         },
         {
            id:12,
            src:canva,
            title:'Canva',
            style:'shadow-gray-400'
         },
    ]
  return (
   
    <>
    <div id='skills' className=' w-full flex flex-wrap flex-col'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
       <p className='text-6xl  font-bold border-b-4 border-gray-500 inline-block p-2  mt-12'>
            Skills
       </p>
       <p className='py-6'>
        These are the technologies I've worked with
       </p>
      </div>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-10 text-center py-8 px-3 md:px-60'>
        {
            tech.map(({id,src,title,style})=>(
                <div key={id}
                className={`shadow-md hover:scale-105 duration-500 py-10 rounded-lg  ${style}`}
               >
                   <img src={src} alt='' className='w-20 mx-auto'/> 
                   <p className='mt-4 text-white'>{title}</p>
                </div>
            ))
        }
        

      </div>
    </div>
    </>
  )
}

export default Skills