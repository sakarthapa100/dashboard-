import React from 'react'

const AddUserPage = () => {
  return (
    <div className='p-5 rounded-lg  mt-5 ' >
      <form action="" className='flex flex-wrap justify-between  '>
        <input type="text" placeholder='username' required className='p-6 bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8 ' />
         <input type="email" placeholder='email' name='email' className='p-6 bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8 ' />
        <input type="password" placeholder='password' name='password'className='p-6 bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8' />
        <input type="phone" placeholder='phone' name='phone' className='p-6 bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8' />
        <select name="isAdmin" id="isAdmin" className='bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8 p-6 text-gray-400 ' >
          <option value={false} selected >Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
    
        </select>
        <select name="isActive" id="isActive" className='bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8 p-6 text-gray-400 ' >
          <option value={false} selected >Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
    
        </select>

       
     
        <textarea name="address" id="address" placeholder='Address' rows={"16"} className='p-6 bg-transparent w-full border-2 border-[#2e374a] rounded-md mb-8' ></textarea>
        <button  className='p-6 bg-transparent w-full border-2 border-[#2e374a] rounded-md bg-blue-500 font-bold text-lg '>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage