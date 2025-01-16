import React, { useState, useEffect } from 'react'
import Navbar2 from './Navbar2'
import { IoChevronForward } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from "../url";
import axios from "axios";
import { useAuth } from '../context/AuthContext';
import { IoMdArrowDropright } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import toast, {Toaster} from 'react-hot-toast';
import { AiFillAndroid } from 'react-icons/ai';


const InnerComunityPage = () => {
  const { user, logout } = useAuth();
  const ownerId = useParams().id
  const [owner, setOwner] = useState([])
  const [firstName, setFirstName] = useState("")
  const [review, setReview] = useState("")
  const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const fetchOwner = async () => {
      try{
        const res = await axios.get(URL+"/api/owners/"+ownerId)
        console.log("this is owner henry",res.data)
        setOwner(res.data)
      }
      catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      fetchOwner()
  
    },[ownerId])


    const createReview = async (e) => {
      e.preventDefault();
      setLoading(true)

      try {
        // Get existing reviews from owner state
        const existingReviews = owner.review || [];
    
        // Add new review to the array
        const updatedReviews = [...existingReviews, review];

      const res = await axios.put(`${URL}/api/owners/${ownerId}`, {
        review: updatedReviews // send as array
      });
      if(res.status === 200){
      setReview("")
      // update the local state with new data
      setOwner(res.data);
      setLoading(false)
      toast.success('Review Created Successfully!!', toastStyles.success)
      }
    } catch (error) {
      console.error("Error creating review:", error);
      toast.error('Failed to create review');
      
    } finally {
      setLoading(false);
    }
  }


    const toastStyles = {
      success: {
    
        duration: 10000,
        // style: {
        //   background: '#4CAF50',
        //   color: 'white',
        //   fontWeight: 'bold',
        // },
        iconTheme: {
          primary: 'white',
          secondary: '#4CAF50',
        },
          style: {
    
                   background: "green",
                   color: "whitesmoke",
                   icon: <AiFillAndroid background-color="whitesmoke" color='green' />,
                 },
      },
      error: {
        duration: 10000,
        style: {
          background: '#F44336',
          color: 'white',
          fontWeight: 'bold',
        },
        iconTheme: {
          primary: 'white',
          secondary: '#F44336',
        },
      },
    };
    

   
  return (
    <div className='flex-1 ml-[300px]'>
        <Navbar2 />
        <Toaster 
    position="top-right"
    reverseOrder={false}
    gutter={8}
    toastOptions={{
        duration:9000,
        style:{
            borderRadius:'8px',
            boxShadow:'0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)'
        }
    }} 
     />

        <div className='flex gap-x-4 ml-12 mt-9 items-center'>
        <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-1)}>owner Owners</p>
        <IoChevronForward />
        <p className='font-semibold'>{owner.name}</p>
        </div>

        <div className='bg-green-400 text-white text-4xl w-32 h-32 rounded-full items-center justify-center flex border border-gray-700 mt-9 ml-12'>{owner?.name?.charAt(0)}</div>


        <div className='max-w-[700px]'>
            <p className=' text-lg ml-12 mt-4'>Name: {owner.name}</p>
            <p className=' text-lg ml-12  mt-4'>Description : {owner.description}</p>
            <p className=' text-lg ml-12  mt-4'>Date Created : {new Date(owner.createdAt).toDateString()}</p>
            <p className=' text-lg ml-12  mt-4'>Special Achievements or Recognitions : {owner?.recognition}</p>
            <p className=' text-lg ml-12  mt-4'>Communication Platform Used : <span className='text-[#F08E1F]'>Whatsapp, Telegram</span> and <span className='text-[#F08E1F]'>Twitter</span></p>
            <p className=' text-lg ml-12  mt-4'>Contact Information : <span className='text-[#F08E1F]'>Whatsapp, Telegram, Email, Website, Twitter</span> and <span className='text-[#F08E1F]'>Phone Number</span></p>
            <p className=' text-lg ml-12  mt-4 flex items-center'>Reviews and Testimonials : <IoMdArrowDropright size={25} /></p>
            <p className=' text-lg ml-12  mt-4'>Submit a review</p>
            <div className='flex mt-2 gap-x-4 items-center'>
            <textarea onChange={(e) => setReview(e.target.value)} className='ml-12 border rounded-lg px-3 py-2 w-[400px] h-[100px]'/> <div><button onClick={createReview} className='bg-[#F08E1F] rounded-xl text-white px-8 py-2 mb-4'>{loading ? "Submitting . . ." : "Submit Review"}</button></div>
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

            <p className='ml-12 mt-4'>{owner.review[0]}</p>
          

        </div>





    </div>
  )
}

export default InnerComunityPage