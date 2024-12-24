import React from 'react'
import Navbar from './Navbar';
import { assets } from '../assets/assets';
import PeopleCard from './PeopleCard';

function People() {

  return (
    <>
    <div className='h-full bg-cover bg-center' style={{backgroundImage: "url('/header_img.png')"} } id='People'>
    <Navbar/>
    <div className='w-3/4 m-auto py-10'>
    <PeopleCard category="education" icon={assets.book} img={assets.profilepic}/>
    <PeopleCard category="private cars" icon={assets.car} img={assets.profilepic}/>
    <PeopleCard category="health" icon={assets.car}  img={assets.profilepic}/>
    </div>
    </div>
    </>
  )
}

export default People;