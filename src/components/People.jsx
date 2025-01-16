import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeopleCard from "./PeopleCard";
import { motion } from "framer-motion";

function People() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full bg-cover bg-center bg-slate-900"
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
        <Footer/>
      </motion.div>
    </>
  );
}

export default People;
