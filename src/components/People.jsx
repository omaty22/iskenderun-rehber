import React from "react";
import Navbar from "../components/Navbar";
import PeopleCard from "./PeopleCard";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

function People() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/header_img.png')" }}
        id="People"
      >
        <Navbar />
        <div className="w-3/4 m-auto py-10">
          <PeopleCard category="Elektrik Cihazlar" />
          <PeopleCard category="Özel Araçlar" />
          <PeopleCard category="Basım Yayılım" />
          <PeopleCard category="Sağlık" />
          <PeopleCard category="Emlak" />
        </div>
      </motion.div>
    </>
  );
}

export default People;
