import React from 'react'
import Image from 'next/image'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
function blog() {
  return (
    <div>
      <Navbar />
      <div className='relative h-[300px]'>
        <Image src='/images/blog.png' layout='fill' objectFit='cover' />
      </div>

      {/* Body */}

      <div className='flex  flex-col gap-y-3 items-start max-w-[1146px] ml-auto mr-auto mt-14 h-screen'>
        <Post />
      </div>
      <footer className='bg-black'>
        <Footer />
      </footer>
    </div>
  )
}

export default blog
