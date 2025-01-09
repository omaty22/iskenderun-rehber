import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div
      className="min-h-screen  bg-cover bg-center flex items-center
    w-full overflow-hidden bg-slate-900 mb-4"
      style={{ backgroundImage: `url(${assets.header_img})`}}
      id="Header"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32"
      >
        <h2
          className="text-5xl sm:text-6xl md:text-[82] inline-block
        max-w-3xl font-semibold pt-56 xl:text-8xl  xl:pt-96"
        >
        Hoş Geldiniz
        </h2>
        <div className="space-x-6 mt-16">
          <a
            className="border border-black px-8 py-3 rounded hover:text-white hover:bg-black "
            href="#About"
          >
            About
          </a>
          <a
            className="bg-blue-500 px-8 py-3 rounded hover:text-black text-white "
            href="#Contact"
          >
            Contact us
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
