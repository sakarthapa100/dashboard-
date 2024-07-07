import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full bg-gray-800'>
      <form action=""className='flex flex-col gap-3 w-[500px] h-[500px]  p-9  ' >
        <label htmlFor="" className='text-white font-bold text-lg '>Login </label>
        <input type="text" placeholder='username' className='p-6  w-full  bg-transparent border-2 border-[#2e374a] rounded-md mb-8 ' />
        <input type="password" placeholder='password' className='p-6  w-full  bg-transparent border-2 border-[#2e374a] rounded-md mb-8' />
        <button className='w-full bg-blue-500 p-4 rounded-lg text-lg font-bold'>Login</button>
      </form>

    </div>
  )
}

export default page