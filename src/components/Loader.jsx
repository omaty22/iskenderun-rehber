import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/PreLoad.json'

function Loader() {
  return (
    <div className='min-h-screen text-white flex  items-center justify-center trnsition ease-in-out duration-700'>
        <Lottie
            options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
            }}
            height={300}
            width={400}
        /> 
    </div>
  )
}

export default Loader
