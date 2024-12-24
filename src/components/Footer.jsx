import React from 'react'
import { motion } from "framer-motion"
import { Facebook,Instagram,Linkedin } from 'lucide-react';
import { Slide, Fade } from "react-awesome-reveal";

function Footer() {
    const Year = new Date().getFullYear();
  return (
    <>
     <motion.footer 
     initial={{opacity: 0,y:100}}
     transition={{duration: 1.5}} 
     whileInView={{opacity: 1,y:0}}
     viewport={{once: true}}
     className="text-white relative w-full mt-10">
       <div className='bg-slate-800 top-0 left-0 overflow-hidden'>
       <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className='relative block fill-white'></path>
    </svg>
    <div className='grid md:grid-cols-3 sm:grid-cols-1 p-20 gap-10'>
        <div className='flex flex-col gap-5'> 
            <Fade cascade damping={0.05}>
            <h2 className='text-3xl font-bold'>About Me</h2>
            <p className='lg:my-2 mb-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias laborum earum maxime qui, ullam saepe deleniti veritatis nihil eius suscip</p>
            </Fade>
        </div>
        <div className='flex flex-col gap-5 md:ml-10'> 
        <Fade cascade damping={0.05}>
            <h2 className='text-3xl font-bold'>Quick Navigasion</h2>
            <ul className='lg:my-10 mb-4 md:flex md:felx-row md:gap-5'>
                <li className='mb-2'><a className='hover:underline hover:text-gray-300'  href="/">Home</a></li>
                <li className='mb-2'><a className='hover:underline hover:text-gray-300' href="/People">People</a></li>
                <li className='mb-2'><a className='hover:underline hover:text-gray-300' href="/Places">Places</a></li>
                <li><a className='hover:underline hover:text-gray-300' href="/">Transport</a></li>
            </ul>
            </Fade>
        </div>
        <div className='flex flex-col gap-5'> 
        <Fade cascade damping={0.5}>
            <h2 className='text-3xl font-bold'>Follow Me</h2>
            <ul className='mb-4 flex felx-row gap-7'>
                <li className='my-4'><a href=""><Facebook size={24} fill='blue'></Facebook> Facebook</a></li>
                <li className='my-4'><a href=""><Instagram size={24} fill='purple'></Instagram> Instagram</a></li>
                <li className='my-4'><a href=""><Linkedin size={24} fill='blue'></Linkedin> Linkedin</a></li>
            </ul> 
            </Fade>    
        </div>
    </div>
    <div className='flex justify-center  md:p-5 '>
        <p className='text-center sm:pb-20 '>&copy; {Year} All Rights Reserved. Designed by <a href="https://www.linkedin.com/in/akshay-madrikar-1a2b3b1b8/">Omar Abdullah</a></p>
       </div>
    </div>
      </motion.footer>
    </>
  )
}

export default Footer
