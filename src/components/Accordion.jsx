import React ,{useState} from 'react'
import { motion } from "framer-motion";
import { Slide, Fade } from "react-awesome-reveal";

function Accordion(props) {
    const [active, setActive] = useState(false);
  return (
    <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
     className='py-3 mb-4 bg-gray-200 rounded-lg max-w-screen-2xl mx-2'> 
      <button onClick={() => setActive(!active) } className='flex justify-between w-full'>
         {active ? <span className='pl-3 lg:text-2xl'>-</span> : <span className='pl-3 lg:text-2xl'>+</span>}
         <span className='pr-2 font-extrabold text-xl lg:text-3xl text-right'>{props.title}</span>
      </button>
      {active ?
      <Fade cascade damping={0.05}>
      <Slide>
      <div className={`grid overflow-hidden transition-all duration-100 ease-in-out text-slate-600 text-sm
         ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className='overflow-hidden pr-4 pt-2 lg:text-2xl text-right'>{props.answer}</div>
      </div>
      </Slide>  
      </Fade>
      : null}
    </motion.div>
  )
}

export default Accordion
