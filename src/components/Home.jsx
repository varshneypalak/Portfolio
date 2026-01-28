import React, { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import HeroImage from '../assets/heroImage.jpg'

const Home = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div id='home' className='w-full min-h-screen flex items-center pt-20 relative overflow-hidden'>
            {/* Animated Background Elements */}
            <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow'></div>
            <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500'></div>
            
            <div className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 gap-12 relative z-10'>
                <div className={`flex-1 space-y-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
                    <div className='inline-block'>
                        <span className='px-4 py-2 glass-effect rounded-full text-sm font-medium text-blue-400 animate-fadeInDown'>👋 Welcome to my portfolio</span>
                    </div>
                    
                    <h1 className='text-5xl md:text-7xl font-bold animate-fadeInUp animation-delay-200'>
                        Hi, I'm
                        <span className='block text-gradient mt-2 animate-gradient'>
                            <Typewriter
                                words={['Palak Varshney', 'Backend Developer', 'Full Stack Engineer', 'Problem Solver']}
                                loop={Infinity}
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                    
                    <p className='text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl animate-fadeInUp animation-delay-400'>
                        Backend Developer specializing in building <span className='text-blue-400 font-semibold'>scalable APIs</span> and optimizing <span className='text-purple-400 font-semibold'>system performance</span>. 
                        Passionate about clean code, database optimization, and solving complex technical challenges.
                    </p>
                    
                    <div className='flex flex-wrap gap-4 animate-fadeInUp animation-delay-600'>
                        <button className='group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden'>
                            <span className='absolute inset-0 animate-shimmer'></span>
                            <a href="Resume.pdf" download='Palak Varshney Resume.pdf' className='flex items-center gap-2 relative z-10'>
                                Download Resume
                                <span className='group-hover:translate-x-1 transition-transform'>→</span>
                            </a>
                        </button>
                        <a href='#contact' className='px-8 py-4 glass-effect rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2'>
                            Let's Connect
                            <span className='text-blue-400'>✉</span>
                        </a>
                    </div>
                    
                    {/* Stats */}
                    <div className='flex flex-wrap gap-6 pt-6 animate-fadeInUp animation-delay-700'>
                        <div className='glass-effect px-6 py-3 rounded-xl hover-lift'>
                            <p className='text-3xl font-bold text-gradient'>95%</p>
                            <p className='text-sm text-gray-400'>Performance Boost</p>
                        </div>
                        <div className='glass-effect px-6 py-3 rounded-xl hover-lift animation-delay-100'>
                            <p className='text-3xl font-bold text-gradient'>73%</p>
                            <p className='text-sm text-gray-400'>Query Reduction</p>
                        </div>
                        <div className='glass-effect px-6 py-3 rounded-xl hover-lift animation-delay-200'>
                            <p className='text-3xl font-bold text-gradient'>10K+</p>
                            <p className='text-sm text-gray-400'>Requests Optimized</p>
                        </div>
                    </div>
                </div>
                
                <div className={`flex-1 flex justify-center ${isVisible ? 'animate-fadeInUp animation-delay-300' : 'opacity-0'}`}>
                    <div className='relative'>
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse-glow'></div>
                        <div className='absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full animate-float'></div>
                        <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full animate-float animation-delay-500'></div>
                        <img 
                            src={HeroImage} 
                            alt="Profile" 
                            className='relative w-72 md:w-96 rounded-3xl shadow-2xl border-4 border-white/10 hover:scale-105 hover:rotate-2 transition-all duration-500 hover-glow' 
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Home