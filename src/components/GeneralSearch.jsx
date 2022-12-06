import React from 'react'

const GeneralSearch = () => {
  return (
    <div className='flex justify-end'> 
        <input className='rounded-lg bg-white mt-2 p-2 border border-gray-400 hover:border-gray-500 focus:outline-none focus:shadow-outline text-dark-alta' type="text" placeholder="Search"/>
        <button className='btn bg-orange-alta border-none mt-2 p-2 mx-2 text-white'> Search</button>
        <button className='btn bg-dark-alta border-none mt-2 p-2 mr-5 text-white'> Add New</button>
    </div>    
  )
}

export default GeneralSearch