import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { faker } from "@faker-js/faker";
import { Slide, Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
// Setting the seed again resets the sequence.
faker.seed(123);

const newTab = (url) => {
  window.open(url, "_blank").focus();
};

const dummyData = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  title: faker.person.firstName(),
  description: faker.lorem.sentence(),
  phone: "05384559660",
}));

/*
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
*/

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
          slidesToScroll: 2,
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

  return (
    <>
      <p className="pt-12 pb-5 pl-1 font-extrabold text-white text-3xl">
        {" "}
        {props.category}
      </p>
      <Slider {...settings}>
        {dummyData.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={index}
              className="relative rounded-xl w-1/2 h-60 float-left overflow-hidden group"
            >
              <div className="absolute w-full h-full">
                <img src={props.img} className="w-full h-full m-auto" />
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
                          "https://www.google.com/maps/place/%C4%B0skenderun+Technical+University+ISTE/@36.5775248,36.1542869,17z/data=!3m1!4b1!4m6!3m5!1s0x152f58e76c45ad8b:0xf98a91f01da61525!8m2!3d36.5775248!4d36.1542869!16s%2Fg%2F11b7_m4m15?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
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
