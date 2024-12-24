import React from 'react'
import { motion } from "framer-motion"

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center
    w-full overflow-hidden bg-slate-900' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
    <motion.div 
    initial={{opacity: 0,y:100}}
    transition={{duration: 1.5}} 
    whileInView={{opacity: 1,y:0}}
    viewport={{once: true}}
     className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82] inline-block
        max-w-3xl font-semibold pt-20'>İskenderun'a Hoş Geldiniz</h2>
        <div className='space-x-6 mt-16'>
            <a className='border border-white px-8 py-3 rounded hover:text-gray-500 ' href="#About">About</a>
            <a className='bg-blue-500 px-8 py-3 rounded hover:text-blue-300' href="#Contact">Contact us</a>
        </div>
    </motion.div>
    </div>
  )
}

export default Header
