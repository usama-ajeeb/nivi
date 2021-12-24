import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const [toggler, setToggler] = useState(false)

  const fireToggler = (e) => {
    e.preventDefault()
    if (!toggler) {
      setToggler(true)
    } else {
      setToggler(false)
    }
  }

  const ChangeBg = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    ChangeBg()
    window.addEventListener('scroll', ChangeBg)
  })
  return (
    <nav
      className={`fixed flex bg-white items-center px-9 w-screen justify-evenly pt-4  z-20 ${
        navbar ? `bg-white shadow-lg` : `bg-transparent `
      }`}
    >
      {/* Logo */}
      <Link href={'/'}>
        <div className='relative h-[90px] w-[185px] cursor-pointer'>
          <Image
            src={
              navbar ? `/images/logo-v3-black.png` : `/images/logo-v3-white.png`
            }
            layout='fill'
            objectFit='contain'
          />
        </div>
      </Link>
      {/* Items */}
      {/* Mobile menu */}
      <div
        className={` lg:hidden ${
          toggler
            ? ' transform delay-500 shadow-xl  duration-600  absolute top-20 bg-white w-screen text-[#494c4f] cursor-pointer font-semibold px-5 py-3'
            : 'hidden'
        }`}
      >
        <Link href={'/#HOME'}>
          <p className='bg-red-600 text-white px-1  pb-2'>HOME</p>
        </Link>
        <Link href={'/#SERVICES'}>
          <p className=' pb-2 hover:text-white hover:bg-red-600'>RPA</p>
        </Link>
        <Link href={'/#ABOUT'}>
          <p className=' pb-2 hover:text-white hover:bg-red-600'>ABOUT US </p>
        </Link>
        <Link href={'/#CONSULT'}>
          <p className=' pb-2 hover:text-white hover:bg-red-600'>CONSULTING</p>
        </Link>
        <Link href={'/blog'}>
          <p className=' pb-2 hover:text-white hover:bg-red-600'>BLOG</p>
        </Link>
        <Link href={'/#CONTACT'}>
          <p className='  pb-2 hover:text-white hover:bg-red-600'>CONTACT US</p>
        </Link>
      </div>
      {/* end mobile menu */}
      <div
        onClick={fireToggler}
        className='bg-red-600 p-1 rounded-lg flex lg:hidden'
      >
        {!toggler ? (
          <GiHamburgerMenu color='white' size={30} />
        ) : (
          <AiOutlineClose color='white' size={30} />
        )}
      </div>
      <div
        className={`${
          navbar ? 'text-black' : 'text-white'
        } hidden  lg:flex space-x-4 font-extrabold cursor-pointer `}
      >
        <Link href={'/#HOME'}>
          <p
            className={` hover:-translate-y-2 transform-gpu transition-transform delay-100 hover:text-[#FF0000] active:text-[#FF0000]
       
                `}
          >
            HOME
          </p>
        </Link>
        <Link href={'/#SERVICES'}>
          <p className=' hover:-translate-y-2 transform-gpu transition-transform delay-100  hover:text-[#FF0000]'>
            RPA
          </p>
        </Link>
        <Link href={'/#ABOUT'}>
          <p className='hover:-translate-y-2 transform-gpu transition-transform delay-100 hover:text-[#FF0000]'>
            ABOUT US{' '}
          </p>
        </Link>
        <Link href={'/#CONSULT'}>
          <p className='hover:-translate-y-2 transform-gpu transition-transform delay-100 hover:text-[#FF0000]'>
            CONSULTING
          </p>
        </Link>
        <Link href={'/blog'}>
          <p className='hover:-translate-y-2 transform-gpu transition-transform delay-100 hover:text-[#FF0000]'>
            BLOG
          </p>
        </Link>
        <Link href={'/#CONTACT'}>
          <p className='hover:-translate-y-2 transform-gpu transition-transform delay-100  hover:text-[#FF0000]'>
            CONTACT US
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
