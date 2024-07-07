import React from 'react'
import { MdSearch } from 'react-icons/md';

const search = ({placeholder}) => {
  return (
    <div className='flex items-center p-1 border-r-2 border-gray-700 rounded-lg  bg-gray-700 w-[19rem]  '>
    <MdSearch />
    <input 
      type="text" 
      placeholder={placeholder} 
      className="bg-transparent border-none focus:outline-none text-gray-100 placeholder-gray-400 p-1 w-[19rem] rounded-lg "
    />
  </div>
  )
}

export default search