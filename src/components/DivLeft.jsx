import React from 'react'
import Bus from '../assets/Bus.json'
import Lottie from 'react-lottie'
import {motion} from 'framer-motion'

function DivLeft(props) {
    if(props.Hat === ''){
        return (<motion.div 
            initial={{opacity: 0,x:-200}}
            transition={{duration: 1.5}} 
            whileInView={{opacity: 1,x:0}}
            viewport={{once: true}}
             className='max-w-screen-2xl mx-2 h-40 bg-slate-900 text-white'>
                <div className='container flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold text-center pb-8 pt-4 xl:text-4xl'>Taksi Durakları</h1>
                <p className='text-center xl:text-3xl'>{props.Mah} <a className='text-blue-600 hover:underline font-bold'  href="https://www.taksi-duraklari.com/taksi-duraklari/hatay/iskenderun">Tıkalyın</a></p>
            </div>
    </motion.div>
                )
    }
  return (
    <motion.div 
    initial={{opacity: 0,x:-200}}
    transition={{duration: 1.5}} 
    whileInView={{opacity: 1,x:0}}
    viewport={{once: true}}
     className='max-w-screen-2xl mx-2 h-40 bg-slate-900 text-white'>
        <div className='flex '>
            <div className='border-r-slate-600 border-r-4 pt-5 px-5'>
                <h1 className='text-2xl font-bold'>{props.Hat}</h1>
                <Lottie
            options={{
            loop: true,
            autoplay: true,
            animationData: Bus,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
            }}
            height= {100}
            width= {150}
        />
            </div>
            <div className='container flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold text-center pb-8 xl:text-4xl'>Şehir İçi</h1>
                <p className='text-center xl:text-3xl'>{props.Mah}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default DivLeft
