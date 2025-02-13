import React, { useState, useEffect } from 'react'
import Navbar2 from './Navbar2'
import { IoChevronForward } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoLockClosedOutline } from "react-icons/io5";
import { URL } from "../url";
import axios from "axios";

const InnerBrowsePage = () => {
  const communityId = useParams().id
  const [community, setCommunity] = useState([])
  const [firstName, setFirstName] = useState("")
  const navigate = useNavigate()



  const fetchCommunity = async () => {
    try{
      const res = await axios.get(URL+"/api/comunities/"+communityId)
      console.log("this is browser community henry",res.data)
      setCommunity(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchCommunity()

  },[communityId])



  return (
    <div className='flex-1 ml-[300px]'>
        <Navbar2 />

        <div className='flex gap-x-4 ml-12 mt-9 items-center'>
        <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-1)}>Browse Communities</p>
        <IoChevronForward />
        <p className='font-semibold'>{community.title}</p>
        </div>

<div className='flex gap-x-12'>

<div>
        <div className='w-32 h-32 text-2xl rounded-full items-center justify-center flex border border-gray-700 mt-9 ml-12'>{community.email?.charAt(0).toUpperCase()}</div>


        <div className='max-w-[700px]'>
           
            <p className=' text-lg ml-12  mt-4'>Description : {community.description}</p>
            <p className=' text-lg ml-12  mt-4'>Community Type : {community.communityType}</p>
            <p className=' text-lg ml-12  mt-4'>Member Count : {community.size} members</p>
            <p className=' text-lg ml-12  mt-4'>Key Topics : {community.communityInterest}</p>
            <p className=' text-lg ml-12  mt-4'>Date launched :{new Date(community.established).toDateString()}</p>
            <p className=' text-lg ml-12  mt-4'>Price Tag : {community.accessType}</p>
            <p className=' text-lg ml-12  mt-4'>Unique Selling Points : {community.usp}</p>
        

            <IoLockClosedOutline className='mt-6 mx-auto text-[#F08E1F]' />

<div className='shadow-xl rounded-lg p-8 max-w-md mx-auto my-6'>
    <h2 className='font-semibold text-xl mb-6'>
        Join Pigeohire to Unlock Full Community Details
    </h2>
    
    <ul className='space-y-4 mb-8'>
        <li className='flex items-start'>
            <span className='mr-2'>•</span>
            <span>No ads, scams, junk</span>
        </li>
        <li className='flex items-start'>
            <span className='mr-2'>•</span>
            <span>Find communities, retailers & influencers</span>
        </li>
        <li className='flex items-start'>
            <span className='mr-2'>•</span>
            <span>Advanced search features</span>
        </li>
        <li className='flex items-start'>
            <span className='mr-2'>•</span>
            <span>Exclusive insights and analytics</span>
        </li>
        <li className='flex items-start'>
            <span className='mr-2'>•</span>
            <span>Network Expansion Opportunities</span>
        </li>
        <li className='flex items-start'>
            <span className='mr-2'>•</span>
            <span>Continuous Updates and Support</span>
        </li>
    </ul>

    <Link to={'/switchpremium'}>
        <button className='bg-[#F08E1F] text-white px-8 py-3 rounded-full w-full hover:bg-[#e07d0e] transition-colors'>
            Subscribe to Premium
        </button>
    </Link>
</div>
          
        </div>


     
 </div>

<div>
 <div className='shadow-xl ml-12 border border-[#F08E1F] rounded-2xl px-4 py-6'>
                <p className='font-semibold text-lg ml-12 mt-4 text-center'> Subscribe to Premium</p>
                <p className=' text-lg   mt-4'> - No ads, scams, junk</p>
                <p className=' text-lg   mt-4'> - Find communities, retailers & influencers</p>
                <p className=' text-lg   mt-4'>- Advanced search features</p>
                <p className=' text-lg   mt-4'>- Exclusive insights and analytics</p>
                <p className=' text-lg   mt-4'>- Network expansion opportunities</p>
                <p className=' text-lg   mt-4'>- Continous Updates and Support</p>


                <Link to={'/switchpremium'}><button className='bg-[#F08E1F] text-white px-12 py-2 rounded-full mt-4 ml-4 '>Subscribe to premium</button></Link>


            </div>
            </div>

            </div>

            <div className='mb-12'></div>
    </div>
  )
}

export default InnerBrowsePage