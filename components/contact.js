import React from 'react'

const contact = () => {
    const sendEmail = () => {
        alert('Message sent, We will get back to you shortly')
    }
  return (
    <div>
        <div id='contact' className=' p-10 text-neutral-900 sm:mx-32 mx-5 py-24 mt-5 bg-white'>
            <h2 className='text-4xl py-4 '>Send A Message</h2>
            <div className='text-sm text-neutral-500 pb-5'>Need to book a room or make an enquiry, use the form below</div>
            <div>
                <form className='flex flex-wrap' onSubmit={sendEmail}>
                    <div className='w-full sm:w-1/2 sm:pr-5'>
                        <label className='form-label inline-block py-2 text-lg font-semibold'>Name</label>
                        <input className='block w-full border-2 border-neutral-900 p-5' type='text' placeholder='Enter your name'/>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <label className='form-label inline-block py-2 text-lg font-semibold'>Phone</label>
                        <input className='block w-full border-2 border-neutral-900 p-5' type='text' placeholder='Phone we can reach you on' required/>
                    </div>
                    <div className='w-full'>
                        <label className='form-label inline-block py-2 text-lg font-semibold'>Email</label>
                        <input className='block w-full border-2 border-neutral-900 p-5' type='text' placeholder='Email address' required/>
                    </div>
                    <div className='w-full'>
                        <label className='form-label inline-block py-2 text-lg font-semibold'>Subject</label>
                        <input className='block w-full border-2 border-neutral-900 p-5' type='text' placeholder='Reason for this message' required/>
                    </div>
                    <div className='w-full'>
                        <label className='form-label inline-block py-2 text-lg font-semibold'>Message</label>
                        <textarea rows={8} className='block w-full border-2 border-neutral-900 p-5' type='text' placeholder='Message goes here,  for booking enter the type of room' required/>
                    </div>
                    <div>
                        <button type='submit' className='w-full inline-block my-5 bg-[#000106] py-4 px-12 text-center text-orange-100 hover:opacity-80'>Send</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default contact