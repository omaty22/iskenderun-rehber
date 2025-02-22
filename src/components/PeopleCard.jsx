import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

let Data = [];

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

  if (props.category === "الأجهزة الكهربائية") {
    Data = assets.ElektrikCihazlar;
  }
  if (props.category === "خدمات السيارات") {
    Data = assets.privatecarsdata;
  }
  if (props.category === "الطباعة ( لافتات وكروت )") {
    Data = assets.BasımYayılım;
  }
  if (props.category === "الصحة") {
    Data = assets.SağlıkData;
  }
  if (props.category === "السماسرة") {
    Data = assets.EmlakData;
  }

  return (
    <>
      <p className="pt-12 pb-5 pl-1 font-extrabold text-white text-3xl text-right">
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
              className="rounded-xl w-1/2 float-left text-center bg-gray-500 cursor-pointer hover:text-gray-200 hover:bg-transparent group"
            >
              <img
                src={assets.profilepic}
                className="p-2 w-40 h-40 object-contain block m-auto rounded-full"
              />
              <h1 className="pt-4 pb-2 font-extrabold text-2xl">{item.title}</h1>
              <p>{item.description}</p>
              <p className="pt-1 pb-1 font-bold text-xl">{item.location}</p>
            </motion.div>
          );
        })}
      </Slider>
    </>
  );
}

export default PeopleCard;
