import React from 'react'
import {FaBath, FaBed, FaUserFriends } from "react-icons/fa"


const bedroom = ({title, occupants, bedsize, bath, image}) => {
  return (
    <>
                <div class="block bg-white max-w-sm mb-5">
                    <img src={image} className='h-96'/>
                    <div className='p-6 block text-center font-medium text-neutral-700'>
                        <h5 class="text-xl leading-tight font-medium mb-2 pt-4 border-t-[2px] border-neutral-500">{title}</h5>
                        <div className='grid grid-cols-3 gap-8'>
                            <div className='mx-auto flex flex-col items-center'>
                                <FaUserFriends className='text-center' size={20}/>
                                <p className='text-sm'>{occupants}</p>
                            </div>
                            <div className='mx-auto flex flex-col items-center'>
                                <FaBed className='text-center' size={20}/>
                                <p className='text-sm'>{bedsize}</p>
                            </div>
                            <div className='mx-auto flex flex-col items-center'>
                                <FaBath className='text-center' size={20}/>
                                <p className='text-sm'>{bath}</p>
                            </div>

                        </div>
                        <a class="my-5 border-2 border-neutral-600 w-full inline-block py-3 cursor-pointer">Book Now</a>
                    </div>
                </div>
    </>
  )
}

export default bedroom