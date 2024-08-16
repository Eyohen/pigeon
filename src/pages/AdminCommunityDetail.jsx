import React, { useState, useEffect } from 'react'
import Navbar2 from '../components/Navbar2';
import { IoChevronForward } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from "../url";
import axios from "axios";
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';


const AdminCommunityDetail = () => {
  const { user, logout } = useAuth();
  const communityId = useParams().id
  const [community, setCommunity] = useState([])
  const [firstName, setFirstName] = useState("")
    const navigate = useNavigate()

    const fetchCommunity = async () => {
      try{
        const res = await axios.get(URL+"/api/visible/"+communityId)
        // console.log("this is community henry",res.data)
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
    <div className='flex justify-between bg-[#FAFAFA]  font-nunito'>
<AdminSidebar/>
    <div className='flex-1 ml-[330px]'>
        <Navbar2 />

        <div className='flex gap-x-4 ml-12 mt-9 items-center'>
        <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-1)}>Community Owners</p>
        <IoChevronForward />
        <p className='font-semibold'>{community.name}</p>
        </div>

        <div className=' text-white text-4xl w-32 h-32 rounded-full items-center justify-center flex border border-[#F08E1F] mt-9 ml-12'>{firstName?.charAt(0)}</div>


        <div className='max-w-[700px]'>
            <p className=' text-lg ml-12 mt-4'>Name: {community.name}</p>
            <p className=' text-lg ml-12  mt-4'>Community Type : {community.communityType}</p>
            <p className=' text-lg ml-12  mt-4'>Previous Collaboration Experience : {community.prevCollabType}</p>
            <p className=' text-lg ml-12  mt-4'>Unique Selling Points : {community.prevCollabType}</p>
            {/* <p className=' text-lg-12  mt-4'>Description: Description: At Green Earth Advocates we are at the forefront of financial technology, revolutionizing the way you manage and grow your wealth. Our cutting-edge platform seamlessly integrates innovative solutions to simplify your financial journey.</p> */}
            {/* <p className=' text-lg ml-12  mt-4'>Active Since: Jan 20, 2021</p> */}
            <p className=' text-lg ml-12  mt-4'>Location : {community.location}</p>
            <p className=' text-lg ml-12  mt-4'>Access Type : {community.accessType}</p>
            <p className=' text-lg ml-12  mt-4'>Date Launched : January 2021</p>
            <p className=' text-lg ml-12  mt-4'>Size of Community : {community.size} members/visitors</p>
            <p className=' text-lg ml-12  mt-4'>Engagement Level : {community.engagementLevel}</p>
            <p className=' text-lg ml-12  mt-4'>Community Interests: {community.communityInterest}</p>
            <p className=' text-lg ml-12  mt-4'>Communication Platforms Used : {community.communicationPlatform}</p>
            <p className=' text-lg ml-12  mt-4'>Community Goal/Content : {community.communityGoal}</p>
            <p className=' text-lg ml-12  mt-4'>Special Achievements or Recognitions : {community?.recognition}</p>
            <p className=' text-lg ml-12  mt-4'>Ratings or Endorsements : Endorsed by leading conservation organizations, our company is recognized for our dedication to preserving biodiversity and implementing effective environmental conservation strategies.</p>
            <p className=' text-lg ml-12  mt-4'>Contact Information :</p>
            <p className=' text-lg ml-12  mt-4 text-[#F08E1F]'>Whatsapp : <span className='text-gray-500'>{community.whatsapp}</span></p>
            <p className=' text-lg ml-12  mt-4 text-[#F08E1F]'>Telegram : <span className='text-gray-500'>{community.telegram}</span></p>
            <p className=' text-lg ml-12  mt-4 text-[#F08E1F]'>Twitter: <span className='text-gray-500'>{community.twitter}</span></p>

        </div>
    

        <div className='mb-24'></div>
    </div>

  
    </div>
  )
}

export default AdminCommunityDetail