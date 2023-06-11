import React from 'react'
import { BsMicrosoftTeams } from 'react-icons/bs';


const Sidebar = () => {
    return (
        <div className=' '>
            <div>
                <h2 className='text-2xl font-medium text-center py-3'> <span className='bg-orange-500 rounded-lg pl-2   '>Boo</span>sto Docx</h2>
                <div className=' flex justify-center '>
                    <div className=' text-center rounded-full py-7 px-10 inline-block bg-slate-800 ' >
                       <div className='flex justify-center mb-2'> <BsMicrosoftTeams size={40} /></div>
                        <h3 className='text-sm   font-medium z-10'>Total visited   </h3>
                        <span className='bg-yellow-700 text-white px-2   font-bold py-1 rounded-md'>24.4k</span>
                       <div className='relative'> <span className='w-[15px] -top-24 -right-8  absolute h-[15px] bg-green-600 rounded-full border-2 z-0 inline-block border-black'> </span></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar