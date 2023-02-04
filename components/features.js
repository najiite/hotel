import {useContext} from 'react'
import SiteDetails from "@/scripts/siteDetails"
import { FaBuilding, FaSwimmingPool, FaHouzz } from "react-icons/fa"
import { MdRestaurant } from "react-icons/md"
import { motion } from 'framer-motion'

const features = () => {
    const {siteName} = useContext(SiteDetails)
  return (
    <>
        <div id='features' className='text-neutral-700 pb-10'>
            <div className='text-center'>
                <h3 className='text-black text-4xl sm:mx-[30%]'>Discover the ultimate hotel experience at {siteName}</h3>
                <div className='sm:mx-[20%]'>
                        
                    <p className='p-5'>Amenities play a significant role in making your stay at our hotel an unforgettable experience. Our hotel is designed to provide a welcoming, clean and comfortable environment that exudes relaxation and comfort. From our well-appointed common areas, attractive landscaping and décor, we aim to make your stay as enjoyable as possible.</p>
                    <p className='p-5'>We also offer a range of additional amenities, including an event hall, swimming pool and restaurant, to meet all your needs. Our event hall, equipped with modern technology, is perfect for hosting conferences, weddings, and other special events. Take a dip in our swimming pool to unwind after a long day, or dine in our hotel restaurant for a delicious and convenient meal option. Whether you're looking to host a meeting, relax, or simply enjoy a good meal, our amenities will surely enhance your stay with us.</p>
                </div>
            </div>
            <div>
                <div className='sm:grid sm:grid-cols-4 gap-4 m-[10%]'>
                        
                    <motion.div initial={{ opacity: 0, y: 400}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 0.5}} className="div-bg bg-[url('/neighborhood.jpg')]">
                        <div className="div-offset">
                            <FaBuilding  className='' size={30} />
                            <div>Environment</div>

                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 400}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 0.5}} className="div-bg bg-[url('/hall.jpg')]">
                        <div className="div-offset ">
                            <FaHouzz  className='' size={30} />
                            <div>Event hall</div>

                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 400}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 0.5}} className="div-bg bg-[url('/pool.jpg')]">
                        <div className="div-offset">
                            <FaSwimmingPool  className='' size={30} />
                            <div>Swimming Pool</div>

                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 400}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 0.5}} className="div-bg bg-[url('/restaurant.jpg')]">
                        <div className="div-offset ">
                            <div className='text-center'><MdRestaurant   size={30} /></div>
                            <div>Restaurant</div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    </>
  )
}

export default features