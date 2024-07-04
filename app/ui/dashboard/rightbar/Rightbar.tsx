import React from 'react'
import Image from 'next/image'
import { MdPlayCircleOutline } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className='bg-gray-700 rounded-lg p-5 gap-9 '>
      <div className='relative  '>
      
        <div className='flex flex-col bg-gray-800 px-3 py-8 rounded-lg '>
          <h1 className='font-bold size-lg  '>🔥 Availabel now</h1>
          <h3 className='mt-4 font-semibold text-[14px]   '>Now to use the new version of the adimn  dashboard</h3>
          <span className='mt-2 text-[14px]  '>Take a minute to learn</span>
          <p className='mt-3 text-[14px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quasi sunt natus .</p>
          <button className='flex  items-center bg-[#5d57c9] p-1  rounded-lg w-[6rem]  justify-center mt-4 '>
          <MdPlayCircleOutline />

            Watch</button>
        </div>
      </div>
<br />
<div className='flex flex-col bg-gray-800 px-3 py-8 rounded-lg '>
          <h1 className='font-bold size-lg  '>🔥 Availabel now</h1>
          <h3 className='mt-4 font-semibold text-[14px]   '>Now to use the new version of the adimn  dashboard</h3>
          <span className='mt-2 text-[14px]  '>Take a minute to learn</span>
          <p className='mt-3 text-[14px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quasi sunt natus .</p>
          <button className='flex  items-center bg-[#5d57c9] p-1  rounded-lg w-[6rem]  justify-center mt-4 '>
          <MdPlayCircleOutline />

            Watch</button>
        </div>
      </div>

   
  )
}

export default Rightbar