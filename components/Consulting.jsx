import Image from 'next/image'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
//
import Slider from '@madzadev/image-slider'
// import 'image-slider/dist/index.css'

function Consulting() {
  const images = [
    { url: '/images/SecondSlider_1-1-scaled-1.jpg' },
    { url: '/images/SecondSlider_2-1-scaled-1.jpg' },
    { url: '/images/SecondSlider_3-1-scaled-1.jpg' },
  ]
  return (
    <div className=' shadow-lg flex flex-col xl:flex-row '>
      {/* Left */}
      <div className='max-w-[800px]'>
        <Slider
          imageList={images}
          width={1000}
          height={400}
          showArrowControls={false}
          showDotControls={false}
          autoPlayInterval={1500}
        />
      </div>
      {/* Right */}
      <div className=' p-10 max-w-[1000px]'>
        <h1 className='text-4xl font-extrabold text-[#333333]'>
          WE FOCUS ON YOUR IMAGINATION
          <hr className=' bg-red-600 text-red-600 mt-8 mb-12 pt-1 w-12  mr-auto' />
        </h1>
        <p className='pb-2 pt-10 text-[#999999]'>
          We delve into your imaginations and infuse your ideas in our product
          development.
        </p>
        <ol className=' list-decimal pl-12 '>
          <li>
            Backend application engineering using cost effective and scalable
            SAAS architecture.
          </li>
          <li>
            Our team of young minds is focused and intended to develop faster
            and logical.
          </li>
          <li>
            We believe that there is no dearth to what your product ideas can
            achieve.
          </li>
          <li>
            It mainly revolves around innovation through commercializing
            technology research .
          </li>
          <li>We call this process Imagination Engineering.</li>
        </ol>
      </div>
    </div>
  )
}

export default Consulting
