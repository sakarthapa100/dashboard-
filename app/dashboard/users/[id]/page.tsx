import React from 'react'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className='flex gap-[50px] p-4'> 
      <div className='flex-1'>
        <Image src="/noavatar.png" alt="avatar" width={500} height={500} className='object-contain' /> 
        <h1 className='text-2xl font-bold mb-4'>Ram Singh</h1>
      </div>
      <div className='flex-1'>
       
        <div className='flex flex-col gap-2'>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name='username' placeholder='John Doe' className='border p-2 bg-transparent ' />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name='email' placeholder='email' className='border p-2 bg-transparent ' />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name='password' placeholder='password' className='border p-2 bg-transparent ' />
          
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name='phone' placeholder='phone' className='border p-2 bg-transparent' />
          
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name='address' placeholder='address' className='border p-2 bg-transparent' />
          
          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin" className='border p-2 bg-transparent'>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive" className='border p-2 bg-transparent'>
            <option value="true">Yes</option>
            <option value="false">No</option>
          
          </select> 
          <button className='w-full bg-blue-500 p-4 rounded-lg text-lg font-bold mt-4 '>Update</button>
        </div>   
      
      </div>
    </div>
  )
}

export default SingleUserPage
