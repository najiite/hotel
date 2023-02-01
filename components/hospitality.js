import React from 'react'

const hospitality = () => {
  return (
    <>
        <div id='#about' className='text-neutral-700 pb-10 flex justify-end  sm:mx-12 sm:mt-5 mb-5'>
            
            <div className="relative sm:h-[500px] sm:w-1/3 sm:mr-[20%] h-96 w-[100%]  bg-cover bg-no-repeat bg-[url('/lobby.jpg')]">

                <div className='absolute bg-white sm:w-full w-[90%] h-auto sm:h-[450px] inset-x-20 sm:-left-80 sm:bottom-6 -bottom-96 left-5 p-12'>
                    <div className='pt-2 text-[8px] font-semibold flex justify-between tracking-widest text-neutral-500'>
                        <span>01.&nbsp;&nbsp;</span>
                        <span className='border-b-[1.5px] border-neutral-500 w-full mb-[5px]'></span>
                        <span>&nbsp;&nbsp;ABOUT</span>
                    </div>
                    <h3 className='text-4xl pt-8'>Get Acquainted</h3>
                    <div className='text-xs py-5 leading-loose'>
                        <p>Welcome to Hotel De Nacka, a place where comfort and style meet. Our hotel is located in the heart of Lagos, providing easy access to some of the city's most popular attractions and destinations. We offer a wide range of services and facilities to ensure that your stay with us is both memorable and enjoyable.</p>
                        <p className='pt-2'>
                        Founded in 2001,We have a rich history of providing top-notch hospitality to guests from all over the world. Our hotel features elegantly appointed rooms and suites, each designed with your comfort in mind. 
                        </p>
                    </div>

                </div>
            </div>

        </div>
        <div className='sm:h-2 h-80'></div>
        <div className='text-neutral-700 pb-10 flex justify-start  sm:mx-12'>
            
            <div className="relative sm:h-[500px] sm:w-1/3 sm:ml-[21%]  h-96 w-[100%]  bg-cover bg-no-repeat bg-[url('/lobby2.jpg')]">

                <div className='absolute bg-white sm:w-full w-[90%] h-auto sm:h-[450px] sm:-right-96 sm:bottom-6 sm:left-80 -bottom-96 left-5 p-12'>
                    <div className='pt-2 text-[8px] font-semibold flex justify-between tracking-widest text-neutral-500'>
                        <span>02.&nbsp;&nbsp;</span>
                        <span className='border-b-[1.5px] border-neutral-500 w-full mb-[5px]'></span>
                        <span>&nbsp;&nbsp;ABOUT</span>
                    </div>
                    <h3 className='text-3xl pt-8'>Experience comfort and luxury</h3>
                    <div className='text-xs py-5 leading-loose'>
                        <p>From luxurious bedding to modern amenities, you'll feel right at home during your stay with us.</p>
                        <p className='pt-2'>At Hotel De Nacka, we believe in providing a personalized experience for each and every one of our guests. Our friendly and professional staff are always on hand to assist with any request, from restaurant recommendations to recommendations for local activities and attractions.</p>
                        <p className='pt-2'>
                        We look forward to welcoming you to [Hotel Name] and making your stay with us a truly memorable one.
                        </p>
                    </div>

                </div>
            </div>

        </div>
        <div className='m-5 sm:h-2 h-96'></div>

    </>
  )
}

export default hospitality