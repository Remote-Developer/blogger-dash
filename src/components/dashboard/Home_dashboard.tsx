import Image from 'next/image'
import React, { useState } from 'react'
 import tImage from "../../../public/images/developer-at-laptop-and-computer.png"

import { IoCheckmarkCircle } from "react-icons/io5"
import { GiRollingEnergy } from "react-icons/gi"
import { AiFillStar } from "react-icons/ai"
 
 
const Home_dashboard = () => {
  
  return (
    <div className='py-4'>
      <div className='grid grid-cols-12 gap-x-4 mx-3'>
        <div className='col-span-4 bg-slate-800 text-white  py-4 rounded-lg'>
          <div className='flex justify-between items-center px-8'>
            <h2 className='text-xl'>Performances </h2>
            <span className=' px-2   border-4  border-indigo-500 rounded-md'>:</span>
          </div>
          {/* performence */}
          <div className='flex justify-evenly my-2'>
            <ul>

              <h2 className='m-0'>76% </h2>
              <span className='text-sm'>Income</span>
            </ul>

            <ul>

              <h2 className='m-0'>44%</h2>
              <span className='text-sm'>Spending</span>
            </ul>
          </div>
          <div>
            <ul className='flex items-center gap-x-3'><IoCheckmarkCircle color='orange' size={40} />
              <p className='m-0 font-medium'>Spending course was taken </p>
            </ul>
            <ul className='flex items-center gap-x-3'><IoCheckmarkCircle color='coral' size={40} />
              <p className='m-0 font-medium'>Deposit Program was shop </p>
            </ul>
            <ul className='flex items-center gap-x-3'><IoCheckmarkCircle color='Gainsboro' size={40} />
              <p className='m-0 font-medium'>Cashback programs activated </p>
            </ul>

          </div>
        </div>
        <div className='col-span-8 bg-slate-800 text-white  py-4 rounded-lg'>
          <div className='flex justify-evenly'>
            <div>
            <ul className=' my-2'>
                <h2 className='  my-2'>Our Happy Users!</h2>
              <span className='bg-indigo-900 px-4 py-2 rounded-md font-bold mt-2'>2343</span>
              </ul>
             <ul className='my-4'>
               <h2 className='my-2 '>Property</h2>
             <span className='flex items-center gap-3'> <GiRollingEnergy size={30} /> <span>232</span> </span>
             </ul>
             <ul className='my-2'>
               <h2 className='my-2 '>General rate</h2>
               <span className='flex items-center gap-3'> <AiFillStar color='yellow' size={30} /> 
             <span>4.9</span>
             </span>
             </ul>
            </div>
           <div>
           <div className='relative w-96 h-56'>
              <Image src={tImage} alt="" fill />
            </div>
              <p>You know our criteria and health <span className='text-orange-500 font-bold'>Good</span></p>
          </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Home_dashboard