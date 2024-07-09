import React, {useState} from 'react'
import Navbar2 from './Navbar2'
import { IoIosSquareOutline } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { IoMdSquareOutline,IoMdSquare  } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const SubscriptionPlans = () => {
    const navigate = useNavigate()
  return (

         <div className='flex-1'>
        <Navbar2 />

        <div className='flex gap-x-4 ml-12 mt-9 items-center'>
        <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-2)}>Browse Communities</p>
        <IoChevronForward />
        <p className=' text-gray-400 cursor-pointer' onClick={() => navigate(-1)}>Green Earth Advocates</p>
        <IoChevronForward />
        <p className='font-semibold cursor-pointer' >Subscription Plans</p>
        </div>

        <p className='ml-12 mt-6 text-3xl'>Subscription Plans</p>

        <div className='flex ml-12 mt-12 space-x-24 text-center'>
            <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'>
                <p className='font-[600]'>Monthly</p>
                <p className='font-bold text-3xl mt-2'>$14.99</p>
                <p className='mt-2'>- Perfect for users needing flexibility or those testing the platform's capabilities </p>
                <p className='mt-3'>- Unlimited access to the full database </p>
                <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
                <p className='mt-3'>- Vetted connections</p>
                <p className='mt-3'>- Quality ratings</p>
                <p className='mt-3'>- Advanced search</p>
                <button className='mt-[80px] bg-[#F08E1F] px-12 py-2 rounded-full'>Subscribe</button>
            </div>
            <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
               <p className='font-[600]' >Bi-annual</p>
               <p className='font-bold text-3xl mt-2'>$62.96</p>
               <p className='mt-2'>- Designed for committed users, offering significant savings over 6 months. </p>
                <p className='mt-3'>- Unlimited access to the full database </p>
                <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
                <p className='mt-3'>- Vetted connections</p>
                <p className='mt-3'>- Quality ratings</p>
                <p className='mt-3'>- Advanced search</p>
                <p className='mt-3'>Save 30% per month</p>
                <button className='mt-12 bg-[#F08E1F] px-12 py-2 rounded-full'>Subscribe</button>
               </div>
            <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
               <p className='font-[600]'>Annual</p>
               <p className='font-bold text-3xl mt-2'>$89.94</p>
               <p className='mt-2'>- Designed for committed users, this plan offers substantial savings for a medium-term strategy. </p>
                <p className='mt-3'>- Unlimited access to the full database </p>
                <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
                <p className='mt-3'>- Vetted connections</p>
                <p className='mt-3'>- Quality ratings</p>
                <p className='mt-3'>- Advanced search</p>
                <p className='mt-3'>Save 50% per month</p>
                <button className='mt-[29px] bg-[#F08E1F] px-12 py-2 rounded-full mb-2'>Subscribe</button>
               </div>
        </div>

    </div>
  )
}

export default SubscriptionPlans