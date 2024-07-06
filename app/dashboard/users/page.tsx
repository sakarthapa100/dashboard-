import React from 'react'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <div className='flex  items-center'>
        <Search placeholder={"search for the users ..."} />
<Link href="/dashboard/users/add" >
<button>Add New</button></Link>

      </div>
      <table>
      </table>
    </div>
  )
}

export default Page
