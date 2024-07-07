import React from 'react'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className='flex gap-[50px] p-4'> 
      <div className='flex-1'>
        <Image src="/noavatar.png" alt="avatar" width={500} height={500} className='object-contain' /> 
        <h1 className='text-2xl font-bold mb-4'>Ram Singh</h1>
      </div>
      <div className='flex-1'>
       
        <div className='flex flex-col gap-2'>
          <label htmlFor="username">Title</label>
          <input type="text" id="username" name='title' placeholder='John doe' className='border p-2 bg-transparent ' />
          
          <label htmlFor="email">Price</label>
          <input type="number" id="price" name='price' placeholder='$100' className='border p-2 bg-transparent ' />
          
          <label htmlFor="password">Stock</label>
          <input type="number" id="stock" name='stock' placeholder='32' className='border p-2 bg-transparent ' />
          
          <label htmlFor="phone">Color</label>
          <input type="tel" id="color" name='phone' placeholder='red' className='border p-2 bg-transparent' />
          
          <label htmlFor="address">Size</label>
          <input type="text" id="size" name='size' placeholder='NEW YORK' className='border p-2 bg-transparent' />
          
          <label htmlFor="isAdmin">Cat</label>
          <select name="isAdmin" id="isAdmin" className='border p-2 bg-transparent'>
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          
          <label htmlFor="isActive">Description</label>
         <textarea name="desc" id="" rows={"10"} placeholder='Description' className='bg-transparent' ></textarea>
          <button className='w-full bg-blue-500 p-4 rounded-lg text-lg font-bold mt-4 '>Update</button>
        </div>   
      
      </div>
    </div>
  )
}

export default SingleProductPage
