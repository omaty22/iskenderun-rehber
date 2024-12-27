import React,{useEffect, useState} from 'react'
import {assets} from '../assets/assets'

function Navbar() {

  const [showmobilemenu, setshowmobilemenu] = React.useState(false)

  useEffect(() => {
    if(showmobilemenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    } 
  }, [showmobilemenu])

  /*
  bg-transparent
  */ 
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center
        py-4 px-6 md:px-20 lg:px-32 bg-slate-950 max-w-screen-2xl'>
            <img src={assets.iste} alt="" className='w-10 h-10 '/>
            <ul className='hidden md:flex gap-7 text-white' >
                <a href="/Land" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="/People" className='cursor-pointer hover:text-gray-400'>People</a>
                <a href="/Places" className='cursor-pointer hover:text-gray-400'>Places</a>
                <a href="/" className='cursor-pointer hover:text-gray-400'>Transport</a>
            </ul>
            <img onClick={()=> showmobilemenu ? setshowmobilemenu(flase): setshowmobilemenu(true)} src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer'/>
        </div>
        {/*------------------- mobile menu -------------------*/}
            {
            <div className={`${showmobilemenu ? ` w-full` : `hidden`} overflow-hidden flex flex-col DropDownMenu`}>
          <ul className='flex flex-col gap-4'>
            <a onClick={()=> setshowmobilemenu(false)} href="/Land" className='px-4 py-2 rounded-lg inline-block hover:text-white hover:bg-slate-800'>Home</a> 
            <a onClick={()=> setshowmobilemenu(false)} href="/People" className='px-4 py-2 rounded-lg inline-block hover:text-white hover:bg-slate-800'>People</a>
            <a onClick={()=> setshowmobilemenu(false)} href="/Places" className='px-4 py-2 rounded-lg inline-block hover:text-white hover:bg-slate-800'>Places</a>
            <a onClick={()=> setshowmobilemenu(false)} href="/" className='px-2 py-2 rounded-lg inline-block hover:text-white hover:bg-slate-800'>Transport</a>
          </ul>
        </div>
           }
            
        
    </div>
  )
}

export default Navbar
