import React from 'react'
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import PeopleCard from './PeopleCard';
import {motion} from 'framer-motion';

function People() {

  return (
    <>
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
       className='h-full bg-cover bg-center' style={{backgroundImage: "url('/header_img.png')"} } id='People'>
    <Navbar/>
    <div className='w-3/4 m-auto py-10'>
    <PeopleCard category="education" icon={assets.book} img={assets.profilepic}/>
    <PeopleCard category="private cars" icon={assets.car} img={assets.profilepic}/>
    <PeopleCard category="health" icon={assets.car}  img={assets.profilepic}/>
    </div>
    </motion.div>
    </>
  )
}

export default People;