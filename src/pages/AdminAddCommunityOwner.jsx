import React,{useState, useEffect} from 'react'
import { URL } from "../url";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import toast, {Toaster} from 'react-hot-toast';
import { AiFillAndroid } from 'react-icons/ai';

import Navbar2 from '../components/Navbar2';
import AdminSidebar from '../components/AdminSidebar';



const AdminAddCommunityOwner = () => {
const {user , logout} = useAuth();

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [description, setDescription] = useState('')

const [whatsapp, setWhatsapp] = useState('')
const [twitter, setTwitter] = useState('')
const [telegram, setTelegram] = useState('')
const [rating, setRating] = useState('')
const [review, setReview] = useState('')
const [recognition, setRecognition] = useState('')


const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(false)



  const navigate = useNavigate()


  const userId = user?.id;

  console.log("Daniel check for user object", userId)



  const handleCreate = async ()=>{

    setIsLoading(true)
    try{
      const accessToken = localStorage.getItem("access_token");

      if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }

      const res = await axios.post(URL+"/api/owners/create",
      {
      name,description,email, recognition,
      twitter, telegram, whatsapp, user:userId
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      })
      console.log("This is to see the communtity progress", res.data)
      setName(res.data.name)
      setEmail(res.data.email)
      setDescription(res.data.description)
      setWhatsapp(res.data.whatsapp)
      setTelegram(res.data.telegram)
      setTwitter(res.data.twitter)
      setRating(res.data.rating)
      setReview(res.data.review)
      setRecognition(res.data.recognition)
      setError(false)
      toast.success('Community Owner Created Successfully!!', toastStyles.success)
      setTimeout(() => navigate('/admincommunityowner'), 1000);
      // navigate("/communityowner")    
    }
    catch(err){
      setError(true)
      toast.error('Failed to create Community');
      console.log(err)
    }finally {
      setIsLoading(false)
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
    <div className='flex-1'>
        <AdminSidebar/>
        <Navbar2/>

<div className='flex justify-evenly'>
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



{/* border for community info */}
<div>
      <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3'>
        <p className='font-semibold'>Community Owner</p>

        <p>Name</p>
        <input onChange={(e)=>setName(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <p>Email </p>
        <input onChange={(e)=>setEmail(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>


        <p>Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />
       
          <p>Special Achievements or Recognitions</p>
          <textarea onChange={(e)=>setRecognition(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

          <p className='font-semibold'>Contact Information</p>
        <p>Whatsapp </p>
        <input onChange={(e)=>setWhatsapp(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <p>Telegram</p>
        <input onChange={(e)=>setTelegram(e.target.value)}  className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

        <p>Twitter</p>
        <input onChange={(e)=>setTwitter(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />
       
</div>


<div className='items-center justify-center flex mt-9'>
<button onClick={handleCreate} className='bg-[#F08E1F] text-white rounded-full px-32 py-2'>{isLoading ? "Loading..." : "Create Community Owner"}</button>
      </div>


      </div>
      </div>
      <div className='mb-24'></div>
      </div>
  )
}

export default AdminAddCommunityOwner

