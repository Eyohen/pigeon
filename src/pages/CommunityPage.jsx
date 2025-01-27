import React, { useState, useEffect } from 'react'
import Navbar2 from '../components/Navbar2'
import { IoChevronForward } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from "../url";
import axios from "axios";
import { useAuth } from '../context/AuthContext';
import { IoMdArrowDropright } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import toast, {Toaster} from 'react-hot-toast';
import { AiFillAndroid } from 'react-icons/ai';
import Sidebar from '../components/Sidebar';
import { MdStar, MdStarBorder, MdRemove, MdAdd, MdFavoriteBorder, MdShoppingCart } from "react-icons/md"

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          onClick={() => onRatingChange(value)}
          className={`text-2xl ${value <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          {value <= rating ? <MdStar /> : <MdStarBorder />}
        </button>
      ))}
    </div>
  )
}



const CommunityPage = () => {
  const { user, logout } = useAuth();
  const ownerId = useParams().id
  const [owner, setOwner] = useState([])
  const [reviews, setReview] = useState([])
  const [firstName, setFirstName] = useState("")
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const fetchOwner = async () => {
      try{
        const res = await axios.get(URL+"/api/users/"+ownerId)
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


      if (!rating) {
        toast.error('Please select a rating');
        return;
      }
      
      if (!comment.trim()) {
        toast.error('Please write a review');
        return;
      }

      setLoading(true)
      try {
      const res = await axios.post(`${URL}/api/reviews/${ownerId}`, {
        reviewerId: user?.id,
        rating,
        comment,
      });
      if(res.status === 200){
        console.log("review created", res.data)
      setRating(0);
      setComment("");
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
    <div>
      <Sidebar/>
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
        <p className='font-semibold'>{owner.firstName}</p>
        </div>

        <div className='bg-green-400 text-white text-4xl w-32 h-32 rounded-full items-center justify-center flex border border-gray-700 mt-9 ml-12'>{owner?.firstName?.charAt(0).toUpperCase()}</div>


        <div className='max-w-[700px]'>
            <p className=' text-lg ml-12 mt-4'>Name: {owner.firstName} {owner.lastName}</p>
            <p className=' text-lg ml-12  mt-4'>Description : {owner.description}</p>
            <p className=' text-lg ml-12  mt-4'>Date Created : {new Date(owner.createdAt).toDateString()}</p>
            <p className=' text-lg ml-12  mt-4'>Special Achievements or Recognitions : {owner?.recognition}</p>
            <p className=' text-lg ml-12  mt-4'>Communication Platform Used : <span className='text-[#F08E1F]'>Whatsapp, Telegram</span> and <span className='text-[#F08E1F]'>Twitter</span></p>
            <p className=' text-lg ml-12  mt-4'>Contact Information : <span className='text-[#F08E1F]'>Whatsapp, Telegram, Email, Website, Twitter</span> and <span className='text-[#F08E1F]'>Phone Number</span></p>
            <p className=' text-lg ml-12  mt-4 flex items-center'>Reviews and Testimonials : <IoMdArrowDropright size={25} /></p>
            <p className=' text-lg ml-12  mt-4'>Submit a review</p>
            <div className='mt-2 gap-x-4 ml-12'>
            <StarRating rating={rating} onRatingChange={setRating} />
            <textarea onChange={(e) => setComment(e.target.value)} className='border rounded-lg px-3 py-2 w-[400px] h-[100px] mt-2'/> 
            <div><button onClick={createReview} className='bg-[#F08E1F] rounded-xl text-white px-8 py-2 mt-2'>{loading ? "Submitting . . ." : "Submit Review"}</button></div>
            </div>


            { owner?.Reviews?.map((r) => (
  <div key={r.id}>
    <div className='flex gap-x-4 items-center ml-12 mt-8'>
      <div className='bg-black text-white h-[40px] w-[40px] rounded-full font-bold text-2xl flex justify-center items-center'>
        {r.Reviewer.firstName.charAt(0).toUpperCase()}
      </div>
      <p className='text-lg text-gray-600'>
        {r.Reviewer.firstName} {r.Reviewer.lastName}
      </p>
    </div>
    
    <div className='flex gap-x-2 items-center ml-12 mt-4'>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < r.rating ? (
            <AiFillStar className="text-yellow-400" />
          ) : (
            <AiOutlineStar className="text-gray-300" />
          )}
        </span>
      ))}
      <p className='text-sm text-gray-600 ml-2'>
        {new Date(r.createdAt).toDateString()}
      </p>
    </div>

    {/* Display the review comment */}
    <p className='ml-12 mt-2 text-gray-600'>{r.comment}</p>
  </div>
))}


        </div> 
        </div>
        <div className='mb-24'></div>

    </div>
  )
}

export default CommunityPage

