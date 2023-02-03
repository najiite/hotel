import {useContext} from 'react'
import SiteDetails from "@/scripts/siteDetails"
import {FaFacebookF, FaInstagram, FaTwitter, FaEnvelope} from 'react-icons/fa'

const footer = () => {
    const {siteName} = useContext(SiteDetails)
  return (
    <div>
        <div className='bg-[#000106] sm:flex sm:justify-between mt-10 px-10 py-10'>
            <p className='font-bold text-3xl pb-5'>{siteName}</p>
            <div className='text-center flex justify-start sm:justify-evenly pb-5'>
                <div className='border rounded-full border-orange-300 p-2 mr-2'>
                    <FaEnvelope size={20}/>
                </div>
                <div className='border rounded-full border-orange-300 p-2 mr-2'>
                    <FaFacebookF size={20}/>
                </div>
                <div className='border rounded-full border-orange-300 p-2 mr-2'>
                    <FaInstagram size={20}/>
                </div>
                <div className='border rounded-full border-orange-300 p-2 mr-2'>
                    <FaTwitter size={20}/>
                </div>

            </div>
            <p>+1(222) 333-4444</p>
        </div>
        <div className='bg-[#000106] border-t-[1px] border-orange-300/20 py-5'>

        </div>
    </div>
  )
}

export default footer