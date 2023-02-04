import React from 'react'
import { motion } from 'framer-motion'

const gallery = () => {
  return (
    <>
        <motion.div initial={{ opacity: 0, y: 400}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 1}} id='gallery' className="overflow-hidden text-neutral-700 ">
            <div className="container px-5 py-2 mx-auto sm:pt-24 sm:px-32">
                <p className='text-center font-semibold text-4xl text-neutral-900 mb-10'>Gallery
                </p>
                <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-full sm:w-1/2">
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="/gallery/img-1.jpg"/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="/gallery/img-2.jpg"/>
                    </div>
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="/gallery/img-3.jpg"/>
                    </div>
                </div>
                <div className="flex flex-wrap w-full sm:w-1/2">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="/gallery/img-4.jpg"/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="/gallery/img-5.jpg"/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="/gallery/img-6.jpg"/>
                    </div>
                </div>
                </div>
            </div>
        </motion.div>
    </>
  )
}

export default gallery