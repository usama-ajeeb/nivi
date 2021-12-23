import React from 'react'

import {
  FaScrewdriver,
  FaWifi,
  FaRobot,
  FaFilePdf,
  FaUsers,
} from 'react-icons/fa'

function Services() {
  return (
    <div className=' lg:max-w-[1080px] flex flex-col ml-auto mr-auto bg-[#FFFFFF]  scroll-pt-4 '>
      <div className='max-w-[500px] md:max-w-[1000px]'>
        <h1 className='text-4xl font-extrabold text-[#333333] '>
          RPA SERVICES
          <hr className=' bg-red-600 text-red-600 mt-4 mb-8 pt-1 w-12 ml-auto mr-auto' />
        </h1>
        <div className='flex gap-x-2 flex-col md:flex-row '>
          <div className='flex flex-col items-center gap-y-5 max-w-[480px]'>
            <div className='bg-[#FF0000] p-3 rounded-full'>
              <FaUsers size={50} color='white' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <h2 className='text-lg font-extrabold'>CONSULTING</h2>
              <p className='text-[#999999] max-w-[500px]'>
                Join your hand in the RPA venture with our Business Process
                Consulting group. Our guaranteed Analysts and Solution
                Architects are industry veterans with practical ability and
                specialized aptitudes. We offer end-to-end automation of your
                company processes by choosing right RPA tools.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-y-5 max-w-[480px]'>
            <div className='bg-[#FF0000] p-3 rounded-full'>
              {' '}
              <FaScrewdriver size={50} color='white' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <h2 className='text-lg font-extrabold'>Custom Implementation</h2>
              <p className='text-[#999999] max-w-[500px]'>
                We assess the processes within your company that would benefit
                most from automation. We are expertise in providing custom
                solution using high performance BOTs to automatize your process
                with improved accuracy, throughput and better ROI.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-y-5 max-w-[480px]'>
            <div className='bg-[#FF0000] p-3 rounded-full'>
              {' '}
              <FaWifi size={50} color='white' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <h2 className='text-lg font-extrabold'>
                Proof Of Concept / Pilot
              </h2>
              <p className='text-[#999999] max-w-[500px]'>
                Our AI and RPA SMEs will swiftly build functional BOTs (RPA or
                Chat BOT) to demonstrate feasibility and our team
                capability.This will help evaluate the ROI accurately to make
                strategic decision about introducing AI and RPA solution in your
                organisation.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className='pt-5 max-w-[500px] md:max-w-[1000px]'>
        <h1 className='text-4xl font-extrabold text-[#333333]'>
          PRODUCTS
          <hr className=' bg-red-600 text-red-600 mt-4 mb-8 pt-1 w-12 ml-auto mr-auto' />
        </h1>
        <div className='flex flex-col md:flex-row '>
          <div className='flex flex-col items-center gap-y-5 '>
            <div className='bg-[#FF0000] p-3 rounded-full'>
              {' '}
              <FaRobot size={50} color='white' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <h2 className='text-lg font-extrabold'>Ready-to-Use-BOT</h2>
              <p className='text-[#999999] max-w-[500px]'>
                Fast track your automation journey with our productized
                solutions at a lower cost. We have developed Ready-To-Use BOTs
                for high priority, high ROI automation use cases that occur
                frequently in an enterprise. These ready to go solutions provide
                tried and tested frameworks are built with industry
                best-practices and combine products, platforms, services and
                infrastructure into the solution. Customers can choose to use
                them on cloud on a subscription model
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-y-5'>
            <div className='bg-[#FF0000] p-3 rounded-full max-w-[480px]'>
              {' '}
              <FaFilePdf size={50} color='white' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <h2 className='text-lg font-extrabold'>License Resale</h2>
              <p className='text-[#999999] max-w-[500px]'>
                <span>
                  {' '}
                  We are authorised resellers of the following RPA Platform
                  licenses :
                </span>
                <ul>
                  <li>UiPath </li>
                  <li>Automation Anywhere</li>
                  <li>Softomotive</li>
                </ul>
                <span>
                  {' '}
                  Our team will help you evaluate the right platform for your
                  requirements and provide the best possible prices for your
                  purchase and renewals.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
