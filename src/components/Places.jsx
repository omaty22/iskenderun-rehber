import React from "react";
import Navbar from "../components/Navbar";
import PlacesCard from "../components/PlacesCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


function Places() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full bg-cover bg-center bg-slate-900"
        id="Places"
      >
        <Navbar />
        <div className="w-3/4 m-auto py-10 mt-20">
          <PlacesCard category="Lokantalar" img="" />
          <PlacesCard category="Siparış Getirn Marketler" />
          <PlacesCard category="Oteller" />
          <PlacesCard category="Spor Salonları" />
          <PlacesCard category="Park/Gezme yerleri"/>
          <PlacesCard category="Cafe"/>
          <PlacesCard category="Araba Kiralama"/>
        </div>
        <Footer/>
      </motion.div>
    </>
  );
}

export default Places;
