import React from 'react'
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';

function Sorular() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full bg-cover bg-center bg-slate-900"
        id="Sorular"
      >
        <Navbar />
    </motion.div> 
    </>
  )
}

export default Sorular
