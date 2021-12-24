import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Typist from 'react-typist'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import Navbar from './Navbar'

function Header() {
  //   navbarStates

  const [count, setCount] = useState(200)
  useEffect(() => {
    setCount(1)
  }, [count])
  const items = [
    <div key={0} className='relative h-[700px] lg:h-[600px]'>
      <Image
        src='/images/1-scaled-1.jpg'
        objectFit='cover'
        layout='fill'
        className=' hover:scale-100 transition ease-in-out duration-1000   '
      />
    </div>,
    <div key={1} className='relative h-[700px] lg:h-[590px]'>
      <Image
        src='/images/2-scaled-1.jpg'
        objectFit='cover'
        layout='fill'
        className=' hover:scale-100 transition ease-in-out duration-1000  '
      />
    </div>,
  ]

  return (
    <headr className=''>
      <hr className=' fixed w-screen pt-2 z-50  border-t-2 border-red-600' />

      <Navbar />
      {/* showCase */}

      <AliceCarousel
        autoPlay
        autoPlayStrategy='none'
        autoPlayInterval={3000}
        animationDuration={4000}
        animationType='fadeout'
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />

      {/* text */}
      <div className=' absolute px-2 top-32 xl:top-36 lg:left-[50px]  xl:left-[140px] 2xl:left-[400px] flex flex-col items-center content-center text-white max-w-[1140px] z-10'>
        <h1 className='text-[#FF0000] font-extrabold lg:text-3xl pb-5 '>
          {count ? (
            <Typist
              avgTypingDelay={50}
              cursor={false}
              onTypingDone={() => setCount(0)}
            >
              <span> THE CUTTING EDGE TECHNOLOGY</span>
              <Typist.Backspace count={30} delay={800} />
              <span> THE CUTTING EDGE TECHNOLOGY</span>
            </Typist>
          ) : (
            ''
          )}
        </h1>
        <p>
          We are a leading technology consulting firm which provides industry’s
          most polished, proven and practical strategies. We transform the
          enterprises by providing a high end solution and creative thinking
          approach. You can count on our undisputed technology expertise and
          in-depth industry insight to get highly practicable and rapid-action
          solutions. We comprehend our client toughest challenges by
          implementing our critical thinking approach. Business today relies
          upon innovation as at no other time – to drive change, efficiency and
          global operations. Our unique and comprehensive processes in tech
          consulting services are bound to provide our clients the broadest
          package of offerings that stand apart from the contest in terms of
          their reliability, flexibility and competitive pricing. NIVI Tech
          Solution has always preserved a bunch of effective, efficient
          strategies for technology consulting services to abet enterprises in
          tech risk management, with a special focus on enhancing process
          performance and minimizing downtimes.
        </p>
        <div className='pt-5 flex gap-3'>
          <button className='bg-[#FF0000] px-3 py-2 rounded-md'>
            LEARN MORE
          </button>
          <button className='bg-[#FF0000] px-3 py-2 rounded-md'>CONTACT</button>
        </div>
      </div>
    </headr>
  )
}

export default Header
