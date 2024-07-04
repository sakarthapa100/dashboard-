"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="flex justify-between items-center p-3 bg-gray-800 text-gray-100 rounded-md">
      <div className='uppercase font-bold text-lg px-4 py-2 '> {pathname.split("/").pop()} </div>
      <div className='flex items-center gap-11'>
        <div className='flex items-center p-1 border-r-2 border-gray-700 bg-gray-700  '>
          <MdSearch />
          <input 
            type="text" 
            placeholder="search..." 
            className="bg-transparent border-none focus:outline-none text-gray-100 placeholder-gray-400 p-1 w-[19rem] rounded-lg "
          />
        </div>
        <div className='nav-icons flex justify-between gap-9'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
