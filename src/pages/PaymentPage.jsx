import React from 'react'
import registerimage from '../assets/pana.png'
import { useNavigate } from 'react-router-dom'
import { SlArrowLeft } from "react-icons/sl";

const PaymentPage = () => {
    const navigate = useNavigate()

  return (
    <div className='px-48 py-12 h-[100vh]'>

<div onClick={() => navigate(-1)} className='flex gap-x-3 items-center mt-6 cursor-pointer'>
                    <SlArrowLeft /><p>Back</p>
                </div>
        <p className='text-2xl font-semibold mt-4'>Payment details</p>


        <div className='flex justify-center items-center gap-x-48 mt-9'>


        <div>
        <p className=''>Email Address</p>
        <input className='border border-gray-500 rounded-md w-[450px] py-2 px-2 mt-2' />


        <p className='mt-9'>Credit Card Number</p>
        <input className='border border-gray-500 rounded-md w-[450px] py-2 px-2 mt-2' placeholder='  xxxx   xxxx   xxxx   xxxx' />

        <div className='w-[450px]'>
        <div className='flex gap-x-6'>
       <div>
        <p className='mt-9'>Expiry Date</p>
        <input className='border border-gray-500 w-full rounded-md py-2 px-2 mt-2' placeholder='mm / yy' />
        </div>

        <div>
        <p className='mt-9'>CVV</p>
        <input className='border border-gray-500 w-full rounded-md py-2 px-2 mt-2' placeholder='xxxx' />
        </div>
        </div>

        </div>

       <div className='w-[450px]'>
       <div className='flex justify-between mt-6'>
        <p>Subtotal</p>
        <p className='font-semibold'>$96</p>
        </div>

        <div className='flex justify-between mt-6'>
        <p>Platform fee</p>
        <p className='font-semibold'>$4</p>
        </div>

        <div className='border-b border-gray-500 mt-6'></div>

        <div className='flex justify-between mt-6'>
        <p>Total Amount</p>
        <p className='font-semibold'>$100</p>
        </div>

        <button className='text-white bg-[#F08E1F] py-2 rounded-lg w-full mt-6'>Make payment</button>

        </div>
        </div>

        <div className='w-[450px] '>
          <img src={registerimage} alt='payment' />

        </div>


        </div>

        </div>
  )
}

export default PaymentPage