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

  const fetchCommunity = async()=>{
    try{
      const res= await axios.get(URL+"/api/visibility/"+communityId)
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



  // const userId = community.user  

  // const fetchUser = async () => {
  //   try {
  //     const res = await axios.get(URL+"/api/users/"+userId);
 
  //     console.log("this browser user henry",res.data)
  //     setFirstName(res.data.firstName);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, [userId]);


    const navigate = useNavigate()
  return (
    <div className='flex-1'>
        <Navbar2 />

        <div className='flex gap-x-4 ml-12 mt-9 items-center'>
        <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-1)}>Browse Communities</p>
        <IoChevronForward />
        <p className='font-semibold'>Green Earth Advocates</p>
        </div>

<div className='flex gap-x-12'>

<div>
        <div className='w-32 h-32 rounded-full items-center justify-center flex border border-gray-700 mt-9 ml-12'>{community.fname?.charAt(0)}</div>


        <div className='max-w-[700px]'>
           
            <p className=' text-lg ml-12  mt-4'>Description : {community.description}</p>
            <p className=' text-lg ml-12  mt-4'>Community Type : {community.communityType}</p>
            <p className=' text-lg ml-12  mt-4'>Member Count : {community.szie} members</p>
            <p className=' text-lg ml-12  mt-4'>Key Topics : Climate Change Mitigation, Sustainable Living Practices and Renewable Energy Advancements</p>
            <p className=' text-lg ml-12  mt-4'>Date launched : January 2021</p>
            <p className=' text-lg ml-12  mt-4'>Price Tag : {community.accessType}</p>
            <p className=' text-lg ml-12  mt-4'>Unique Selling Points : {community.usp}</p>
        

            <IoLockClosedOutline className='mt-6 mx-auto text-[#F08E1F]' />

            <div className='shadow-xl ml-12'>
                <p className='font-semibold text-lg ml-12  mt-9'> Join Pigeohire to Unlock Full Community Details</p>
                <p className=' text-lg ml-12  mt-4'> - No ads, scams, junk</p>
                <p className=' text-lg ml-12  mt-4'> - Find communities, retailers & influencers</p>
                <p className=' text-lg ml-12  mt-4'>- Advanced search features</p>
                <p className=' text-lg ml-12  mt-4'>- Exclusive insights and analytics</p>
                <p className=' text-lg ml-12  mt-4'>- Network Expansion Opportunities</p>
                <p className=' text-lg ml-12  mt-4'>- Continous Updates and Support</p>


                <Link to={'/subscriptionplans'}><button className='bg-[#F08E1F] text-white px-12 py-2 rounded-full mt-4 ml-12 mb-9'>Subscribe to premium</button></Link>
              

            </div>
            {/* <div className='items-center justify-center flex'>
            <Link to={'/collaborationtype'}> <button className='bg-[#F08E1F] py-2 px-6 text-white rounded-full mt-4'>Launch Collaboration</button></Link>
            </div>
            <p className='text-[#F08E1F]  text-lg ml-12  mt-4'>Launch collaboration to connect with the community owner</p> */}
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


                <Link to={'/subscriptionplans'}><button className='bg-[#F08E1F] text-white px-12 py-2 rounded-full mt-4 ml-4 '>Subscribe to premium</button></Link>


            </div>
            </div>

            </div>

            <div className='mb-12'></div>
    </div>
  )
}

export default InnerBrowsePage