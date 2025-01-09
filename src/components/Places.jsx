import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import PlacesCard from "../components/PlacesCard";
import { motion } from "framer-motion";

const categories = [
  {
    category: "Education",
    img: assets.city,
  },
  {
    category: "Private cars",
    img: assets.iste,
  },
  {
    category: "Health",
    img: assets.city,
  },
];

function Places() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full bg-cover bg-center bg-slate-900"
        style={{ backgroundImage: "url('/header_img.jpg')" }}
      >
        <Navbar />
        <div className="w-3/4 m-auto py-10">
          {categories.map((item, index) => {
            return (
              <PlacesCard
                key={index}
                category={item.category}
                icon={item.icon}
                img={item.img}
              />
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Places;
