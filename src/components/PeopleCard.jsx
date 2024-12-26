import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion'

const projectsdata = [
    {
        title: "John Doe",
        description: "05388591235",
        location: "iskenderun"
    },
    {
        title: "Mark tan",
        description: "05397456123",
        location: "iskenderun"
    },
    {
        title: "Jess lam",
        description: "05315935786",
        location: "iskenderun"
    },
]


function PeopleCard(props) {
    
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 630,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]
        };
    

  return (
    <>
        <div className='flex'>
        <img src={props.icon} className='h-25 w-10 pt-10 pb-2'/>
        <p className='pt-12 pb-5 pl-1 font-extrabold text-white' >{props.category}</p>
        </div>
        <Slider {...settings}>
        {
            projectsdata.map((item,index) => {
                return (
                    <motion.div 
                     initial={{opacity: 0,y:100}}
                     transition={{duration: 1.5}} 
                     whileInView={{opacity: 1,y:0}}
                     viewport={{once: true}}
                      key={index} className='rounded-xl w-1/2 float-left text-center bg-gray-500 cursor-pointer hover:text-gray-200 hover:bg-transparent group'>
                        <img src={props.img} className='p-2 w-40 h-40 object-contain block m-auto rounded-full'/> 
                        <h1 className='pt-4 pb-2 font-extrabold'>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='pt-1 pb-1'>Location: {item.location}</p>
                    </motion.div>
                )
            })
        }
        </Slider>
    </>
    )
}

export default PeopleCard;
