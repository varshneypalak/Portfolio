import React, { useEffect, useState } from 'react'
import AmazonClone from '../assets/AmazonClone.png'
import FunFood from '../assets/FunFood.png'
import QuoteGenerator from '../assets/QuoteGenrator.png'
import SnakeLeader from '../assets/SnakeLeader.png'
import Todo from '../assets/ToDo.png'
import currencyConverter from '../assets/currencyConverter.png'
import PasswordGen from '../assets/PasswordGenerator.png'

const Projects = () => {
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

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const majorProjects = [
    {
      id: 1,
      title: 'VideoTube Backend',
      subtitle: 'Content Platform',
      github: 'https://github.com/varshneypalak/VideoTube',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      achievements: [
        'Built backend services for video uploads, metadata management, search, and visibility controls.',
        'Designed secure JWT-based authentication and authorization to protect private content.',
        'Optimized content discovery by structuring MongoDB collections and applying indexes for efficient queries.'
      ]
    },
    {
      id: 2,
      title: 'HealthBooker Backend',
      subtitle: 'Transactional Scheduling System',
      github: 'https://github.com/varshneypalak/HealthBooker',
      tech: ['Python', 'Django', 'PostgreSQL'],
      achievements: [
        'Developed RESTful backend APIs to manage users, doctor availability, and appointment scheduling.',
        'Designed normalized relational schemas with foreign keys and constraints for strong data consistency.',
        'Ensured atomic appointment booking operations within single database transactions, preventing double bookings.'
      ]
    }
  ]

  const minorProjects = [
    { id: 3, title: 'Food Website', src: FunFood, href: 'https://github.com/varshneypalak/Funfood', demo: 'https://funfood1503.netlify.app' },
    { id: 4, title: 'Snake & Leader', src: SnakeLeader, href: 'https://github.com/varshneypalak/SnakeLeader', demo: 'https://snakeandleader1503.netlify.app' },
    { id: 5, title: 'Quote Generator', src: QuoteGenerator, href: 'https://github.com/varshneypalak/QuoteGenerator', demo: 'https://quotegenerator1503.netlify.app' },
    { id: 6, title: 'Amazon Clone', src: AmazonClone, href: 'https://github.com/varshneypalak/AmazonClone', demo: 'https://amazonclone1503.netlify.app' },
    { id: 7, title: 'ToDo', src: Todo, href: 'https://github.com/varshneypalak/ToDo', demo: 'https://todo1503.netlify.app' },
    { id: 8, title: 'Currency Converter', src: currencyConverter, href: 'https://github.com/varshneypalak/CourrencyConverter', demo: 'https://currencyconverter1503.netlify.app' },
    { id: 9, title: 'Password Generator', src: PasswordGen, href: 'https://github.com/varshneypalak/passwordGenerator', demo: 'https://passwordgenerator1503.netlify.app' }
  ]
  return (
    <div id='projects' className='w-full py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
      
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
          <h2 className='text-5xl md:text-6xl font-bold text-gradient mb-4'>Projects</h2>
          <p className='text-xl text-gray-400'>Building scalable solutions and innovative applications</p>
        </div>

        {/* Major Projects */}
        <div className='mb-20'>
          <h3 className='text-3xl font-bold text-blue-400 mb-10 flex items-center gap-3'>
            <span className='w-3 h-10 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full animate-pulse'></span>
            Major Projects
          </h3>
          <div className='space-y-8'>
            {majorProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`glass-effect rounded-2xl p-8 border-l-4 border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group hover-lift relative overflow-hidden ${
                  isVisible
                    ? idx === 0
                      ? 'animate-slideInLeft'
                      : 'animate-slideInLeft animation-delay-500'
                    : 'opacity-0 -translate-x-20'
                }`}
              >
                {/* Hover Shimmer */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <div className='absolute inset-0 animate-shimmer'></div>
                </div>
                
                <div className='flex flex-col md:flex-row justify-between items-start gap-4 mb-6 relative z-10'>
                  <div>
                    <h4 className='text-3xl font-bold text-white group-hover:text-gradient transition-all duration-300'>{project.title}</h4>
                    <p className='text-xl text-blue-400 mt-2'>{project.subtitle}</p>
                  </div>
                  <a 
                    href={project.github} 
                    target='_blank' 
                    className='px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-2 group/btn relative overflow-hidden'
                  >
                    <span className='absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity'>
                      <div className='absolute inset-0 animate-shimmer'></div>
                    </span>
                    <span className='relative z-10'>View on GitHub</span>
                    <span className='relative z-10 group-hover/btn:translate-x-1 transition-transform'>→</span>
                  </a>
                </div>
                <div className='flex flex-wrap gap-3 mb-6 relative z-10'>
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className='px-4 py-2 glass-effect rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 hover:border-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className='space-y-3 relative z-10'>
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className='flex gap-3 text-gray-300 hover:text-white transition-all duration-300 group/item'>
                      <span className='text-blue-400 mt-1 group-hover/item:scale-125 group-hover/item:rotate-90 transition-all duration-300'>▹</span>
                      <span className='leading-relaxed'>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Minor Projects */}
        <div>
          <h3 className='text-3xl font-bold text-purple-400 mb-10 flex items-center gap-3'>
            <span className='w-3 h-10 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full animate-pulse'></span>
            Minor Projects
          </h3>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {minorProjects.map(({ id, src, demo, href, title }, idx) => (
              <div 
                key={id} 
                className={`glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group hover-lift relative ${
                  isVisible ? 'animate-scaleIn' : 'opacity-0'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className='overflow-hidden relative'>
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10'></div>
                  <img 
                    src={src} 
                    alt={title} 
                    className='w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500' 
                  />
                </div>
                <div className='p-6'>
                  <h4 className='text-xl font-bold text-white mb-4 group-hover:text-gradient transition-all'>{title}</h4>
                  <div className='flex gap-3'>
                    <a 
                      href={href} 
                      target='_blank'
                      className='flex-1 py-3 text-center glass-effect rounded-lg font-medium hover:bg-blue-500/20 hover:border-blue-500/50 border border-transparent transition-all hover:scale-105'
                    >
                      Code
                    </a>
                    <a 
                      href={demo} 
                      target='_blank'
                      className='flex-1 py-3 text-center bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 relative overflow-hidden group/btn'
                    >
                      <span className='absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity'>
                        <div className='absolute inset-0 animate-shimmer'></div>
                      </span>
                      <span className='relative z-10'>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects