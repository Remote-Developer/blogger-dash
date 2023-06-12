import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5"

const Home_dashboard = () => {
  return (
    <div className='py-4'>
      <div className='grid grid-cols-12 gap-x-4'>
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
        <div className='col-span-8 '>
          <h2>Activity licks sales</h2>
        </div>
      </div>
    </div>
  )
}

export default Home_dashboard