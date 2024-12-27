import React from 'react'
import Bus from '../assets/Bus.json'
import Lottie from 'react-lottie'
import {motion} from 'framer-motion'

function DivRight(props) {
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
                  <h1 className='text-2xl font-bold text-center pb-6'>Şehir İçi</h1>
                  <p className='text-center'>{props.Mah}</p>
              </div>
          </div>
      </motion.div>
    )
  }

export default DivRight
