import React from 'react'

const AddProductPage = () => {
  return (
    <div className='p-5 rounded-lg  mt-5 ' >
      <form action="" className='flex flex-wrap justify-between  '>
        <input type="text" placeholder='title' required className='p-6 bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8 ' />
        <select name="cat" id="cat" className='bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8 p-6 text-gray-400 ' >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder='price' name='price' className='p-6 bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8 ' />
        <input type="number" placeholder='stock' name='stock'className='p-6 bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8' />
        <input type="text" placeholder='color' name='color' className='p-6 bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8' />
        <input type="number" placeholder='size' name='size' className='p-6 bg-transparent w-[45%] border-2 border-[#2e374a] rounded-md mb-8' />
        <textarea name="desc" id="desc" placeholder='Description' rows={"16"} className='p-6 bg-transparent w-full border-2 border-[#2e374a] rounded-md mb-8' ></textarea>
        <button  className='p-6 bg-transparent w-full border-2 border-[#2e374a] rounded-md bg-blue-500 font-bold text-lg '>Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage