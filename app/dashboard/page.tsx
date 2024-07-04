import React from 'react'
import Card from '../ui/dashboard/card/Card'
import Rightbar from '../ui/dashboard/rightbar/Rightbar'
import Transactions from '../ui/dashboard/transactions/Transacttions'
import Charts from '../ui/dashboard/charts/Charts'

const page = () => {
  return (
    <div className="flex mt-4 gap-3">
          <div className="flex-1 flex flex-col  gap-5 mr-4">
      <div className="grid justify-between  xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <Card />
        <Card />
        <Card />
      </div>
      <Transactions />
      <Charts />
    </div>
    <div className="w-[20%] flex  ">
      <Rightbar />
    </div>
  </div>  )
}

export default page