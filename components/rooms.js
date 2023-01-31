import React from 'react'
import Bedroom from './bedroom'

const rooms = () => {
  return (
    <>
        <div id='#rooms' className='bg-neutral-800 '>
            <div className='flex justify-between items-center sm:mx-32 mx-5 py-24 text-orange-300'>
                <h3 className='text-3xl'>Our Rooms</h3>
                <a href='#book' className='border border-orange-300 border-2 py-3 px-6 hover:bg-orange-300 hover:text-white cursor-pointer'>Book A Room</a>
            </div>
            <div className='sm:mx-32 mx-5 sm:grid sm:gap-4 sm:grid-cols-3 pb-12'>
                <Bedroom title="Single Deluxe" occupants="1 Person" bedsize="Single Bed" bath="1 Bath" image="/single.jpg"/>
                <Bedroom title="Double Deluxe" occupants="1-2 Persons" bedsize="1 Kinsize" bath="1 Bath" image="/Double.jpg"/>
                <Bedroom title="Penthouse" occupants="2-4 Persons" bedsize="Two Kingsize" bath="2 Baths" image="/Penthouse.jpg"/>
            </div>

        </div>
    </>
  )
}

export default rooms