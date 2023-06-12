/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'
import tImage from "../../../public/images/developer-at-laptop-and-computer.png"


import { IoCheckmarkCircle } from "react-icons/io5"
import { GiRollingEnergy } from "react-icons/gi"
import { AiFillStar } from "react-icons/ai"
import { MdDeleteSweep } from "react-icons/md"



const Home_dashboard = () => {

  return (
    <div className='py-4 overflow-scroll'>
      <div className='grid grid-cols-12 gap-x-4 mx-3'>
        <div className='col-span-4 bg-slate-950 text-white  py-4 rounded-lg'>
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
        {/* clients feedbacks */}
        <div className='col-span-8 bg-slate-950 text-white  py-4 rounded-lg'>
          <div className='flex justify-evenly'>
            <div>
              <ul className=' my-2'>
                <h2 className='  my-2'>Our Happy Users!</h2>
                <span className='bg-indigo-900 px-4 py-2 rounded-md font-bold mt-2'>2343</span>
              </ul>
              <ul className='my-4 bg-slate-800 px-4 py-2 rounded-lg'>
                <h2 className='my-2 '>Property</h2>
                <span className='flex items-center gap-3'> <GiRollingEnergy size={30} /> <span>232</span> </span>
              </ul>
              <ul className='my-2 px-4'>
                <h2 className='my-2 text-base font-medium'>General rate by users </h2>
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
      {/* website review, engrossment etc */}
      <div>
        <div>

          {/* search bar */}
          <form className='my-4'>
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-[50%] ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>

          {/* we can find users */}
          <div>



            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Users</th>
                  <th>Available</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className=' '>
                <tr className='bg-slate-950 border-b-2 border-slate-950'>
                  <td className='flex justify-center border-0 ' >
                     <span className='px-3 py-1 bg-green-400 text-white font-bold bg-opacity-75 rounded-md text-base'>&#10003;  Paid  </span> </td>
                  <td className='font-bold text-center border-0 '>Minhaz</td>
                  <td className='text-center border-0 '>2 <span className='text-orange-800 bg-white px-3 py-1 font-bold rounded-md'>Years</span> </td>
                  <td className=' flex justify-center border-0 '><button className="btn btn-blue flex items-center gap-x-2">
                    <MdDeleteSweep /> <span>Delete</span>
                  </button></td>
                </tr>
                <tr className='bg-slate-950 border-b-2 border-slate-950'>
                  <td className='flex justify-center border-0 '> <span className='px-3 py-1 bg-red-200 text-red-800 font-bold bg-opacity-75 rounded-md text-base'>&#10003;  Chancel  </span> </td>
                  <td className='font-bold text-center border-0 '>Minhaz</td>
                  <td className='text-center border-0 '> 6 <span className='text-orange-800 bg-white px-3 py-1 font-bold rounded-md'>Years</span> </td>
                  <td className=' flex justify-center border-0 '><button className="btn btn-blue flex items-center gap-x-2">
                    <MdDeleteSweep /> <span>Delete</span>
                  </button></td>
                </tr>
                <tr className='bg-slate-950 border-b-2 border-slate-950'>
                  <td className='flex justify-center border-0 ' >
                     <span className='px-3 py-1 bg-green-400 text-white font-bold bg-opacity-75 rounded-md text-base'>&#10003;  Paid  </span> </td>
                  <td className='font-bold text-center border-0 '>Minhaz</td>
                  <td className='text-center border-0 '>4 <span className='text-orange-800 bg-white px-3 py-1 font-bold rounded-md'>Years</span> </td>
                  <td className=' flex justify-center border-0 '><button className="btn btn-blue flex items-center gap-x-2">
                    <MdDeleteSweep /> <span>Delete</span>
                  </button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_dashboard