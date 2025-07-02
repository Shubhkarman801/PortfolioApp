import React from 'react'
import { motion } from 'framer-motion';

const Hello = () => {
  return (
    <motion.h1
      className="text-4xl   text-white font-poppins"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <span className='text-purple-300'>Hey there</span>, I am Shubhkarman Singh.
    </motion.h1>

  )
}

export default Hello