import Head from 'next/head'
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
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header and hero section */}
      <div id='HOME'>
        <Header />
      </div>
      {/* services*/}
      <section id='SERVICES' className='text-center mt-8 bg-[#FFFCFC] '>
        <Services />
      </section>
      {/* About use */}
      <section id='ABOUT' className='text-center mt-8 bg-[#F2F4F7]'>
        <About />
      </section>
      {/* Consulting */}
      <section id='CONSULT'>
        <Consulting />
      </section>
      {/* ContactUs */}
      <section id='CONTACT' className='text-center mt-8 bg-[#F2F4F7]'>
        <Contact />
      </section>
      <footer className='bg-black'>
        <Footer />
      </footer>
    </div>
  )
}
