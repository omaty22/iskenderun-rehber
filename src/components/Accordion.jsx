import React ,{useState} from 'react'

function Accordion(props) {
    const [active, setActive] = useState(false);
  return (
    <div className='py-3 mb-4 bg-gray-200 rounded-lg max-w-screen-2xl mx-2'>
      <button onClick={() => setActive(!active) } className='flex justify-between w-full'>
         <span className='pl-2 font-extrabold text-xl lg:text-3xl'>{props.title}</span>
         {active ? <span className='pr-3 lg:text-2xl'>-</span> : <span className='pr-3 lg:text-2xl'>+</span>}

      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
         ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className='overflow-hidden pl-4 pt-2 lg:text-2xl'>{props.answer}</div>
      </div>
    </div>
  )
}

export default Accordion
