import Image from 'next/image'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
function Consulting() {
  const items = [
    <div key={0} className='relative h-[400px] lg:h-[400px]'>
      <Image
        src='/images/SecondSlider_1-1-scaled-1.jpg'
        objectFit='cover'
        layout='fill'
        className=' hover:scale-100 transition ease-in-out duration-1000  '
      />
    </div>,
    <div key={1} className='relative h-[400px] lg:h-[400px]'>
      <Image
        src='/images/SecondSlider_2-1-scaled-1.jpg'
        objectFit='cover'
        layout='fill'
        className=' hover:scale-100 transition ease-in-out duration-1000  '
      />
    </div>,
    <div key={3} className='relative h-[400px] lg:h-[400px]'>
      <Image
        src='/images/SecondSlider_3-1-scaled-1.jpg'
        objectFit='cover'
        layout='fill'
        className=' hover:scale-100 transition ease-in-out duration-1000  '
      />
    </div>,
  ]
  return (
    <div className=' shadow-lg flex flex-col xl:flex-row '>
      {/* Left */}
      <div className='max-w-[1000px]'>
        <AliceCarousel
          autoPlay
          autoPlayStrategy='none'
          autoPlayInterval={1000}
          animationDuration={2000}
          //   animationType='fadeout'
          autoPlayDirection='rtl'
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
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
