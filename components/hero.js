import {useContext} from 'react'
import { motion } from 'framer-motion';
import SiteDetails from "@/scripts/siteDetails"

const Hero = () => {
  const {siteName} = useContext(SiteDetails)
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
            <div className='absolute top-0 bottom-0 left-0 right-0 h-screen bg-black/80 z-[2]'></div>
            <div className='text-center z-[2]'>
                <div className='text-white'>
                        <span className='text-white font-semibold text-lg'>&nbsp;WELCOME TO&nbsp;</span>
                </div>
                <motion.h2 
                    className='text-7xl font-bold my-5 text-orange-300' 
                    initial={{  opacity: 0}} 
                    animate={{ opacity: 1}} 
                    transition={{ delay: 1, duration: 5}}>
                      {siteName}
                </motion.h2>
                <p className='text-white font-semibold'>HOSPITALITY DONE RIGHT</p>
            </div>
        </div>
    </>
  )
}

export default Hero