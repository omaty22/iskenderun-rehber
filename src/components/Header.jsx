import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div
      className="min-h-screen  bg-cover bg-center flex items-center
    w-full overflow-hidden bg-slate-900 mb-4"
      style={{ backgroundImage: `url(${assets.logo})`}}
      id="Header"
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 100 }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32"
      >
        <h2
          className="text-5xl sm:text-6xl md:text-[82] inline-block
        max-w-3xl font-semibold pb-44 xl:pb-0 xl:text-8xl xl:pt-96"
        >
          أهلا بكم في
        </h2>
        <div className="space-x-6 pb-56 xl:mt-10">
          <a
            className="text-xl font-extrabold border border-black px-8 py-3 rounded hover:text-white hover:bg-black "
            href="#Footer"
          >
            معلومات عن الاتحاد
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
