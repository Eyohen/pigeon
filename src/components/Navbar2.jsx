
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IF, URL } from "../url"
// import {UserContext} from '../context/UserContext'
import { useAuth } from '../context/AuthContext';

const Navbar2 = () => {

  const { user, logout } = useAuth();
  const [data, setData] = useState([])



  

  // const fetchProfile = async () => {
  //   try{
  //     const accessToken = localStorage.getItem("access_token")
  //     const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  //     console.log(typeof currentUser)


  //     if(!currentUser){
  //       return ;
  //     }


  //     if(!accessToken){
  //       // Handle the case where the access token is not available
  //   console.error('Access token not found')
  // }

  //      const res = await axios.get(URL+"/api/users/"+currentUser?._id, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       }
  //     })
      
  //      console.log(res.data)
  //      setData(res.data)
  //   }
  //   catch(err){
  //      console.log(err)
  //   }
  // }
  

  // useEffect(()=>{
  //   fetchProfile()
  
  // },[])


  return (
    <div className='flex justify-between gap-x-9 items-center px-12 '>
          <Link to={'/'}> <p className="text-xl">Home</p></Link>
        <div className='flex justify-end gap-x-9 items-center px-12 mt-3'>
        <p className='font-semibold text-xl'></p>
   
       
         {/* <div className='flex px-3 items-center bg-gray-200 border border-gray-400 rounded-md'>
         <CiSearch color='gray' size={40} className=' text-white px-2 rounded-md font-semibold '/>
                <input placeholder='search...' className='w-full bg-gray-200 focus:border-[#F08E1F]' />
                </div> */}


        <CiBellOn size={25} className='bg-gray-200 rounded-full w-9 h-9'/>
        <div className='bg-purple-900 p-3 rounded-full text-white text-2xl w-11 h-11 items-center justify-center flex'>{user?.email.charAt(0).toUpperCase()}</div>
        </div>
    </div>
  )
}

export default Navbar2