import React, { useEffect, useState } from 'react'
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import reactjs from "../assets/react.png"
import javascript from "../assets/javascript.png"
import java from '../assets/java.webp'
import inteliiJ from '../assets/intellijeLogo.webp'
import vs from '../assets/vs Logo.webp'
import Cpp from '../assets/cpp-logo.webp'
import node from '../assets/node.png'
import nextjs from '../assets/nextjs.png'

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById('skills')
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [])
    const skillCategories = [
        {
            category: 'Languages',
            skills: [
                { id: 1, src: java, title: 'Java', style: 'shadow-red-500' },
                { id: 2, title: 'Python', style: 'shadow-blue-400' },
                { id: 3, src: javascript, title: 'JavaScript', style: 'shadow-yellow-500' },
                { id: 4, src: Cpp, title: 'C++', style: 'shadow-blue-600' },
            ]
        },
        {
            category: 'Backend & APIs',
            skills: [
                { id: 5, title: 'Django', style: 'shadow-green-700' },
                { id: 6, title: 'Django REST', style: 'shadow-green-600' },
                { id: 7, src: node, title: 'Node.js', style: 'shadow-green-500' },
                { id: 8, title: 'Express.js', style: 'shadow-gray-500' },
                { id: 9, title: 'RESTful API', style: 'shadow-blue-500' },
                { id: 10, title: 'JWT Auth', style: 'shadow-purple-500' },
            ]
        },
        {
            category: 'Databases',
            skills: [
                { id: 11, title: 'MySQL', style: 'shadow-blue-600' },
                { id: 12, title: 'MongoDB', style: 'shadow-green-600' },
                { id: 13, title: 'PostgreSQL', style: 'shadow-blue-700' },
            ]
        },
        {
            category: 'Tools & Dev Workflow',
            skills: [
                { id: 14, src: github, title: 'Git/GitHub', style: 'shadow-gray-400' },
                { id: 15, title: 'Bitbucket', style: 'shadow-blue-600' },
                { id: 16, title: 'Postman', style: 'shadow-orange-500' },
                { id: 17, src: vs, title: 'VS Code', style: 'shadow-blue-500' },
                { id: 18, src: inteliiJ, title: 'IntelliJ IDEA', style: 'shadow-purple-600' },
            ]
        },
        {
            category: 'Frontend (Working Knowledge)',
            skills: [
                { id: 19, src: reactjs, title: 'React.js', style: 'shadow-blue-500' },
                { id: 20, title: 'Redux Toolkit', style: 'shadow-purple-500' },
                { id: 21, src: nextjs, title: 'Next.js', style: 'shadow-gray-700' },
                { id: 22, src: tailwind, title: 'Tailwind CSS', style: 'shadow-sky-400' },
            ]
        },
        {
            category: 'Core Computer Science',
            skills: [
                { id: 23, title: 'DSA', style: 'shadow-red-500' },
                { id: 24, title: 'DBMS', style: 'shadow-blue-500' },
                { id: 25, title: 'OS', style: 'shadow-green-500' },
                { id: 26, title: 'Networks', style: 'shadow-purple-500' },
                { id: 27, title: 'OOPs', style: 'shadow-yellow-500' },
            ]
        },
    ]
  return (
    <div id='skills' className='w-full py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
      
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
          <h2 className='text-5xl md:text-6xl font-bold text-gradient mb-4'>Skills & Expertise</h2>
          <p className='text-xl text-gray-400'>Backend Developer | Full Stack Capabilities</p>
        </div>

        <div className='space-y-16'>
          {skillCategories.map(({ category, skills }, idx) => (
            <div 
              key={idx} 
              className={`glass-effect rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover-lift ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className='text-2xl md:text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3'>
                <span className='w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full animate-pulse'></span>
                {category}
              </h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {skills.map(({ id, src, title, style }, skillIdx) => (
                  <div 
                    key={id} 
                    className={`glass-effect rounded-xl p-6 hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer group hover-glow ${style} ${
                      isVisible ? 'animate-scaleIn' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${idx * 0.1 + skillIdx * 0.05}s` }}
                  >
                    {src ? (
                      <img src={src} alt={title} className='w-16 h-16 mx-auto object-contain group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300' />
                    ) : (
                      <div className='w-16 h-16 mx-auto flex items-center justify-center text-4xl font-bold text-gradient group-hover:scale-125 transition-transform'>
                        {title.charAt(0)}
                      </div>
                    )}
                    <p className='mt-4 text-center text-sm font-semibold text-gray-300 group-hover:text-white transition'>{title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills