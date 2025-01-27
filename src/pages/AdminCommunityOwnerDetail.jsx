import React, { useState, useEffect } from 'react'
import Navbar2 from '../components/Navbar2';
import { IoChevronForward } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from "../url";
import axios from "axios";
import { useAuth } from '../context/AuthContext';
import { IoMdArrowDropright } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import AdminSidebar from '../components/AdminSidebar';

const AdminCommunityOwnerDetail = () => {
  const { user, logout } = useAuth();
  const ownerId = useParams().id
  const [owner, setOwner] = useState([])
  const [firstName, setFirstName] = useState("")
    const navigate = useNavigate()

    const fetchOwner = async () => {
      try{
        const res = await axios.get(URL+"/api/users/"+ownerId)
        // console.log("this is owner henry",res.data)
        setOwner(res.data)
      }
      catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      fetchOwner()
  
    },[ownerId])



   
  return (
    <div className='flex-1 ml-[320px]'>
      <AdminSidebar/>
        <Navbar2 />

        <div className='flex gap-x-4 ml-12 mt-9 items-center'>
        <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-1)}>Back</p>
        </div>

        <div className='bg-green-400 text-white text-4xl w-32 h-32 rounded-full items-center justify-center flex border border-gray-700 mt-9 ml-12'>{owner?.firstName?.charAt(0)}</div>


        <div className='max-w-[700px]'>
            <p className=' text-lg ml-12 mt-4'>Name: {owner.firstName} {owner.lastName}</p>
            <p className=' text-lg ml-12  mt-4'>Description : {owner.description}</p>
            <p className=' text-lg ml-12  mt-4'>Date Created : {new Date(owner.createdAt).toDateString()}</p>
            <p className=' text-lg ml-12  mt-4'>Special Achievements or Recognitions : {owner?.recognition}</p>
            <p className=' text-lg ml-12  mt-4'>Communication Platform Used : <span className='text-[#F08E1F]'>Whatsapp, Telegram</span> and <span className='text-[#F08E1F]'>Twitter</span></p>
            <p className=' text-lg ml-12  mt-4'>Contact Information : <span className='text-[#F08E1F]'>Whatsapp, Telegram, Email, Website, Twitter</span> and <span className='text-[#F08E1F]'>Phone Number</span></p>
            <p className=' text-lg ml-12  mt-4 flex items-center'>Reviews and Testimonials : <IoMdArrowDropright size={25} /></p>
            <p className=' text-lg ml-12  mt-4'>Submit a review</p>
            <div className='flex mt-2 gap-x-4 items-center'>
            <textarea className='ml-12 border rounded-lg px-3 w-[400px] h-[100px]'/> <div><button className='bg-[#F08E1F] rounded-xl text-white px-8 py-2 mb-4'>Submit Review</button></div>
            </div>


            <div className='flex gap-x-4 items-center ml-12 mt-8'>

            <div className='bg-black text-white h-[40px] w-[40px] rounded-full font-bold text-2xl flex justify-center items-center'>V</div>
            <p className='text-lg text-gray-600'>Victor Ilesanmi</p>
            </div>


            <div className='flex gap-x-2 items-center ml-12 mt-4'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className='text-sm text-gray-600'>February 3, 2024</p>
            </div>

            <p className='ml-12 mt-4'>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          

        </div>





    </div>
  )
}

export default AdminCommunityOwnerDetail