import React from 'react'
import oops from '../assets/oops.png'

const Unauthorized = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

<div>
        <img src={oops} className=' w-[500px]' />
        <p className='text-3xl'>Oops!! Sorry Looks like you're not logged In</p>

        </div>


    </div>
  )
}

export default Unauthorized