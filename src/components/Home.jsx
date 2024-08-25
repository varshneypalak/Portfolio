import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import HeroImage from '../assets/heroImage.jpg'
const Home = () => {

    return (
        <div
            id='home'
            className=' w-full md:h-screen'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center  justify-center md:justify-between h-full px-4  mb-11 md:flex-row md:p-5  space-x-4'>
                <div className='flex flex-col   md:items-start  justify-center items-center h-full space-y-4' >

                    <h1 className='text-3xl sm:text-5xl font-bold text-white  mt-32'>
                        I'm
                        <span className='text-blue-500 '>

                            <span className='text-blue-500'>
                                <Typewriter
                                    words={[' Palak Varshney', ' a Frontend Developer']}
                                    loop={Infinity}
                                    cursorStyle='|'
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={1000}
                                />
                            </span>
                        </span>
                    </h1>
                    <p className='text-gray-500 py-3 text-2xl sm:text-md flex  justify-center '>
                        Fueled by a passion for coding and design, I build user-friendly, responsive interfaces that engage users. My problem-solving skills ensure that every project not only looks good but also works smoothly, bringing your ideas to life on the web.</p>
                        <button className='text-white w-fit p-4 my-5 flex justify-center md:flex-col rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        <a href="Resume.pdf" download='Palak Varshney Resume.pdf'>Resume</a>

                    </button>
                </div>
                
                <div>
                    <img src={HeroImage} alt="myprofile" className=' w-64 md:w-auto mx-auto my-5 rounded-2xl  flex justify-center ' />
                </div>
            </div>


        </div>


    )

}
export default Home