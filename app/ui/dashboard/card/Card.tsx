import React from 'react'

const Card = () => {
  return (
    <div className="bg-gray-800 text-gray-200 rounded-lg p-4 hover:bg-gray-700 cursor-pointer">
      <div>
        <h2 className="text-xl font-bold mb-2">Total Users</h2>
        <h2 className="text-3xl font-semibold">10,928</h2>
        <p className="text-gray-400">more than previous users</p>
      </div>
    </div>
  )
}

export default Card
