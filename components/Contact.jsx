import React from 'react'

function Contact() {
  return (
    <div className='py-10 flex flex-col '>
      <h1 className='text-4xl font-extrabold text-[#333333]'>
        CONTACT US
        <hr className=' bg-red-600 text-red-600 mt-4 mb-8 pt-1 w-12 ml-auto mr-auto' />
      </h1>

      <form
        className=' flex flex-col w-full lg:w-[800px] bg-[#FF1616] rounded-lg p-6  content-center justify-center items-center gap-y-3 ml-auto mr-auto'
        action=''
      >
        <input
          className=' w-full outline-none rounded-md pl-2 py-2'
          type='text'
          placeholder='Name'
          name=''
          id=''
        />
        <input
          className=' w-full outline-none rounded-md pl-2 py-2'
          type='email'
          placeholder='Email'
          name=''
          id=''
        />
        <input
          className=' w-full outline-none rounded-md pl-2 py-2'
          type='number'
          placeholder='Phone'
          name=''
          id=''
        />
        <textarea
          className=' w-full outline-none rounded-md pl-2 py-2'
          name=''
          id=''
          rows='10'
        ></textarea>
        <input type='button' value='send' />
      </form>
    </div>
  )
}

export default Contact
