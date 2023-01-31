import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariant = {
    hidden: {
      y: "5vw",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
      },
    }
  }


  return (
    <>
        <div className="flex items-center justify-center h-screen mb-12 bg-center bg-cover bg-no-repeat bg-[url('/hero.jpg')]">
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/80 z-[2]'></div>
            <div className='text-center z-[2]'>
                <p className='text-white'>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&nbsp;&nbsp;<span className='text-white font-semibold text-lg'>&nbsp;WELCOME TO&nbsp;</span>&nbsp;&nbsp;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;</p>
                <motion.h2 
                    className='text-7xl font-bold my-5 text-orange-300' 
                    initial={{ scale: 0.1, opacity: 0}} 
                    animate={{ scale: 1, opacity: 1}} 
                    transition={{ ease: "circIn", duration: 1.5}}>
                      HOTEL <span className='text-white'>DE</span> NACKA
                </motion.h2>
                <p className='text-white font-semibold'>HOSPITALITY DONE RIGHT</p>
            </div>
        </div>
    </>
  )
}

export default Hero