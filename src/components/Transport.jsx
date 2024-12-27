import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from "framer-motion"
import TelLocation from '../assets/TelLocation.json'
import Lottie from 'react-lottie'
import DivLeft from '../components/DivLeft'
import DivRight from '../components/DivRight'

function Transport() {
  return (
    <>
    <Navbar/>
    {/*------------------- Header-------------------*/}
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center
    w-full overflow-hidden bg-slate-900'>
    <motion.div 
    initial={{opacity: 0,y:100}}
    transition={{duration: 1.5}} 
    whileInView={{opacity: 1,y:0}}
    viewport={{once: true}}
     className='container text-center mx-auto  px-6  text-white'>
        <div className='lg:w-1/2 lg:mx-auto'>
        <Lottie
            options={{
            loop: true,
            autoplay: true,
            animationData: TelLocation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
            }}
        /> 
        </div>
        <h2 className='text-5xl sm:text-6xl md:text-[82] inline-block
        max-w-3xl font-semibold pt-20 lg:pt-4'>İskenderun'da Ulaşım</h2>
    </motion.div>
    </div>
    {/*------------------- iskenderun içi-------------------*/}
    <div className='flex flex-col gap-4'>
        <DivLeft Hat='49 Sahil Evler' Mah='Barbarus mah, süleymaniye mah, anı meydanı, yeni diş hastanesi, Hilton AVM'/>
        <DivRight Hat='Çarşı' Mah='Çarşı, Millet Parkı, Pac, Anı Myedanı'/>
    </div>
    </>
  )
}

export default Transport
