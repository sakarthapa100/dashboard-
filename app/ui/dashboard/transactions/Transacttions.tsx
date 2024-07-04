import React from 'react'
import Image from 'next/image'
const Transactions = () => {
  return (
    <div className='bg-gray-800 rounded-lg p-5'>
      <h2 className='text-2xl font-bold   text-gray-100  mb-5 '>Latest Transactions</h2>
      <table className='w-full text-gray-100'>
        <thead>
          <tr className='bg-gray-700'>
            <td className='p-2' >Name</td>
            <td className='p-2'>Status</td>
            <td className='p-2'> Date</td>
            <td className='p-2'> Amount</td>         </tr>
        </thead>
        <tbody>
          <tr className='border-b border-gray-700'>
            <td className='flex gap-4 items-center p-2'>
              <Image src='/noavatar.png' alt='avatar' height={40} width={40} className='rounded-full' />
              Johone Doe2
            </td>
            <td className='p-2'>
              <span className='text-yellow-500'>Pending</span>
            </td>
            <td className='p-2'>14.02.2020</td>
            <td className='p-2'>300</td>
          </tr>
          <tr className='border-b border-gray-700'>
            <td className='flex gap-4 items-center p-2'>
              <Image src='/noavatar.png' alt='avatar' height={40} width={40} className='rounded-full' />
              Johone Doe3
            </td>
            <td className='p-2'>
              <span className='text-green-500'>Done</span>
            </td>
            <td className='p-2'>14.02.2020</td>
            <td className='p-2'>300</td>
          </tr>
          <tr className='border-b border-gray-700'>
            <td className='flex gap-4 items-center p-2'>
              <Image src='/noavatar.png' alt='avatar' height={40} width={40} className='rounded-full' />
              Johone Doe1
            </td>
            <td className='p-2'>
              <span className='text-red-500'>Canceled</span>
            </td>
            <td className='p-2'>14.02.2020</td>
            <td className='p-2'>300</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
