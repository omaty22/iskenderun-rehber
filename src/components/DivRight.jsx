import React from 'react'
import Location from '../assets/Location.json'
import Lottie from 'react-lottie'
import {motion} from 'framer-motion'

function DivRight(props) {
    return (
      <motion.div 
      initial={{opacity: 0,x:-200}}
    transition={{duration: 1.5}} 
    whileInView={{opacity: 1,x:0}}
      viewport={{once: true}}
       className='max-w-screen-2xl mx-2 min-h-40 max-h-52 bg-slate-900 text-white'>
          <div className='flex '>
          <div className='container flex flex-col justify-center items-center'>
                  <h1 className='text-2xl font-bold text-center pb-6'>Şehir Dışı</h1>
                  <p className='text-center'>{props.Mah}  <a className='font-bold text-blue-600 hover:underline' href={props.link}> Tıklayınız</a></p>
              </div>
              <div className='border-l-slate-600 border-l-4 pt-5'>
                  <h1 className='text-2xl font-bold pl-6'>{props.Hat}</h1>
                  <Lottie
              options={{
              loop: true,
              autoplay: true,
              animationData: Location,
              rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
              },
              }}
              height= {100}
              width= {150}
          />
              </div>
          </div>
      </motion.div>
    )
  }

export default DivRight
