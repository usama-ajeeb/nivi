import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import { AiFillPhone, AiOutlineGooglePlus } from 'react-icons/ai'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import Image from 'next/image'

function Footer() {
  return (
    <div className=' text-white  pl-3 gap-y-6 flex flex-col lg:flex-row  justify-center  gap-x-20 py-9'>
      <div>
        <div className='relative h-20'>
          <Image
            src='/images/logo-v3-white.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <p className='max-w-[400px] opacity-60'>
          We are a global technology consulting firm and a leading advisor on
          business strategy. We partner with clients from the private, public,
          and not-for-profit sectors in all regions to identify their
          highest-value opportunities, address their most critical challenges,
          and transform their enterprises
        </p>
      </div>
      {/*  */}
      <div>
        <h1 className='pb-2 text-lg font-bold'>ADDRESS LIST</h1>
        <div className='flex flex-col gap-y-5 opacity-60'>
          <div className='flex items-start gap-x-3'>
            <MdLocationPin size={25} color='red' />
            <p>315 Madison Avenue , New York NY 10017</p>
          </div>
          <div className='flex items-start gap-x-3'>
            <MdLocationPin size={32} color='red' />
            <p>
              Concorde Towers, UB City, 1 Vittal Mallya Road, Bangalore,
              Karnataka 560 001
            </p>
          </div>
          <div className='flex items-start gap-x-3'>
            <AiFillPhone size={25} color='red' />
            <p>+1 646 810 3938</p>
          </div>
          <div className='flex items-start gap-x-3'>
            <HiOutlineMailOpen size={25} color='red' />
            <p>info@nivitechsolution.com</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <h1 className='pb-2 text-lg font-bold'>SOCIAL NETWORKS</h1>
        <div className='flex flex-col gap-y-3 opacity-60'>
          <div className='flex items-start gap-x-3'>
            <FaFacebookF size={20} color='red' />
            <p>facebook.com</p>
          </div>
          <div className='flex items-start gap-x-3'>
            <BsTwitter size={20} color='red' />
            <p>twitter.com</p>
          </div>
          <div className='flex items-start gap-x-3'>
            <FaLinkedinIn size={20} color='red' />
            <p>username</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
