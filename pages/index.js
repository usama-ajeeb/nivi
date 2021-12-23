import Head from 'next/head'
import { AiOutlineGooglePlus } from 'react-icons/ai'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import About from '../components/About'
import Consulting from '../components/Consulting'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Services from '../components/Services'

export default function Home() {
  return (
    <div className='h-screen scroll-smooth'>
      <Head>
        <title>NIVI TECHSOLUTIONS &#8211; Leading in Automation</title>
        <meta name='description' content='Leading in Automation' />
        <link rel='icon' href='/images/favi.png' />
      </Head>

      {/* Header and hero section */}
      <div id='HOME'>
        <Header />
      </div>
      {/* services*/}
      <section
        id='SERVICES'
        className=' snap-y scroll-m-7 text-center py-20 bg-[#FFFCFC] '
      >
        <Services />
      </section>
      {/* About use */}
      <section id='ABOUT' className='text-center py-15 bg-[#F2F4F7]'>
        <About />
      </section>
      {/* Consulting */}
      <section id='CONSULT'>
        <Consulting />
      </section>
      {/* ContactUs */}
      <section id='CONTACT' className='text-center py-20  bg-[#F2F4F7]'>
        <Contact />
      </section>
      <footer className='bg-black'>
        <Footer />
        <div className='flex flex-col items-center py-4 gap-y-3 lg:flex-row justify-evenly text-[14px] bg-[#181B1D] text-white opacity-70'>
          <p>
            Copyright {new Date().getFullYear()} © Nivi Tech Solution | All
            Rights Reserved
          </p>
          <div className='flex items-center gap-4'>
            <FaFacebookF />
            <BsTwitter />
            <AiOutlineGooglePlus />
            <FaLinkedinIn />
          </div>
          <div className='flex items-center gap-x-2'>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
