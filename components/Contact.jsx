import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { AiFillMail } from 'react-icons/ai'
// https://formspree.io/f/mayvyryv
function Contact() {
  const [state, handleSubmit] = useForm('mayvyryv')
  if (state.succeeded) {
    console.log('email working')
  }
  return (
    <div className=' flex flex-col '>
      <h1 className='text-4xl font-extrabold text-[#333333]'>
        CONTACT US
        <hr className=' bg-red-600 text-red-600 mt-4 mb-8 pt-1 w-12 ml-auto mr-auto' />
      </h1>

      <form
        onSubmit={handleSubmit}
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
          id='email'
          placeholder='Email'
          type='email'
          name='email'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <input
          className=' w-full outline-none rounded-md pl-2 py-2'
          type='number'
          placeholder='Phone'
          name=''
          id=''
        />
        <textarea
          className=' w-full outline-none rounded-md pl-2 py-2'
          id='message'
          name='message'
          rows='10'
        ></textarea>
        <button
          className='flex items-center gap-x-2 hover:opacity-80 text-white hover:bg-red-900 px-40 py-1 rounded-2xl'
          type='submit'
          disabled={state.submitting}
        >
          <p>send</p> <AiFillMail color='white' />
        </button>
      </form>
    </div>
  )
}

export default Contact
