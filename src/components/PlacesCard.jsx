import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Slide, Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

let Data = [];
let image;

const newTab = (location) => {
  window.open(location, "_blank");
};

function PlacesCard(props) {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  if (props.category === "المطاعم العربية و الحلويات") {
      Data = assets.PlacesResturants;
      image = assets.Resturantİmg
    }
    if (props.category === "ماركتات للتوصيل المنزلي") {
      Data = assets.PlacesMarket;
      image= assets.Marketİmg;
    }
    if (props.category === "الفنادق") {
      Data = assets.PlacesOtel;
      image= assets.PlacesHotel;
    }
    if (props.category === "النوادي") {
      Data = assets.PlacesGym;
      image= assets.Sporİmg;
    }
    if (props.category === "المستشفيات") {
      Data = assets.hospitalData;
      image= assets.hospitalimg;
    }
    if (props.category === "الحدائق") {
      Data = assets.PlacesParks;
      image = assets.Parkİmg;
    }
    if (props.category === "مقاهي") {
      Data = assets.PlacesCafe;
      image= assets.Cafeİmg;
    }
    if (props.category === "مكاتب تأجير السيارات") {
      Data = assets.PlacesRent;
      image= assets.Rentİmg;
    }
    if (props.category === "خدمات عامة") {
      Data = assets.generaldata;
      image = assets.general;
    }
    if (props.category === "سكنات الطلاب") {
      Data = assets.dormdata;
      image = assets.dorm;
    }

  return (
    <>
      <p className="pt-12 pb-5 pr-3 font-extrabold text-white text-3xl text-right">
        {props.category}
      </p>
      <Slider {...settings}>
        {Data.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={index}
              className="relative rounded-xl w-1/2 h-60 float-left overflow-hidden group bg-slate-950"
            >
              <div className="absolute w-full h-full py-2" > 
              <h1 className="text-white font-mono font-semibold text-center text-xl">
              {item.title}
              </h1> 
                <img src={image} className="w-full h-full m-auto pb-4" />
              </div>
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop:blur-sm duration-500">
                <div className="text-white text-center flex flex-col items-center justify-center h-full px-2">
                  <Slide cascade>
                    <h1 className="text-3xl font-semibold pb-2">
                      {item.title}
                    </h1>
                    <Fade cascade damping={0.05}>
                      <p className=" my-2">{item.description}</p>
                    </Fade>
                    <p className=" my-2">{item.phone}</p>
                    <button
                      onClick={() =>
                        newTab(
                          item.location
                        )
                      }
                      className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300"
                    >
                      Location
                    </button>
                  </Slide>
                </div>
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </>
  );
}
export default PlacesCard;
