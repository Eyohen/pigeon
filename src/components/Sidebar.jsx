import React, {useState, useEffect} from 'react'
import logo from "../assets/LOGO-BLACK1.png"
import { CiLogout } from "react-icons/ci";
import { FiUsers,FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoReceiptOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { PiScrollLight } from "react-icons/pi";
import { LuArrowUpFromLine } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { URL } from '../url';
import axios from 'axios';


const Sidebar = () => {

  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCommunity, setIsOpenCommunity] = useState(false);

  const handleToggleCommunity = () => {
    setIsOpenCommunity(!isOpenCommunity);
  }
  const [subscription, setSubscription] = useState(null);


  console.log(user?.id)

  const fetchCurrentSubscription = async () => {
    try {
    const res = await axios.get(`${URL}/api/users/${user?.id}`)
    console.log("see current subscription",res.data);
    setSubscription(res.data);
    } catch (error){
      console.error("Error fetching subscription:", error);
      setSubscription(null);
    }
  }
  useEffect(() => {
    if (user?.id){
      fetchCurrentSubscription()
    }
  },[user?.id])


  return (
    <div className='fixed top-0 left-0 bottom-0 h-screen bg-[#FAFAFA]'>
      {/* className='fixed top-0 left-0 w-[250px] h-screen bg-[#FAFAFA] px-[30px] shadow-lg z-10' */}
    <div className='flex justify-center px-[30px]'>
        <div>
        <p className='text-[#F08E1F] font-semibold mt-9'>Menu</p>

        <Link to={'/app/communityowners'}> <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
    
        <FiUsers className='' />
        <p className='hover:bg-[#F3D8A7]  py-1 text-center '>Community Owners</p>

        </div></Link>

        <Link to={'/app/browse'}> <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <CiSearch  size={20} className=' '/>
        <p className='hover:bg-[#F3D8A7] py-1 text-center'>Browse Communities</p>
        </div></Link>


{/* 
        <div className='flex gap-x-3 items-center justify-between hover:bg-[#F3D8A7] px-2 mt-6 rounded cursor-pointer' onClick={() => setIsOpen((prev) => !prev)}>
          <div className='flex items-center gap-x-3 cursor-pointer'  >
        <FiUser className='' />
        <p className='hover:bg-[#F3D8A7] py-1 text-center cursor-pointer'>Account</p>
        </div>
        <IoChevronDown onClick={() => setIsOpen((prev) => !prev)}  size={20} className='' />
        </div>
        {isOpen && (<div  className='rounded  bg-[#FAFAFA] pl-9 absolute'>
    
    <Link to={'/mycommunities'}><div className='flex justify-between items-center gap-x-6 mt-3 cursor-pointer'>
    <p className=''>Listed Communities</p>
    <IoChevronForward size={20} />
    </div></Link>
   
    <Link to={'/requests'}><div className='flex justify-between items-center py-2'>
    <p className=''>Requests</p>
        <button className='text-white bg-black rounded px-2'>8</button>
    </div></Link>
  
</div>)} */}

        {/* create community */}
        <Link to={'/app/profile'}>  <div className='flex gap-x-3 items-center px-2 mt-6 rounded cursor-pointer'>
        <FiUsers />
      <p className='py-1 text-center'>My Profile</p>

        </div></Link>

        
        {/* listed communities */}
        <Link to={'/app/listedcommunities'}>  <div className='flex gap-x-3 items-center px-2 mt-6 rounded cursor-pointer'>
        <PiScrollLight />
      <p className='py-1 text-center'>Listed Community</p>
        </div></Link>

        {/* create community */}
        <Link to={'/app/create'}>  <div className='flex gap-x-3 items-center px-2 mt-6 rounded cursor-pointer'>
        <FiUsers />
      <p className='py-1 text-center'>List Community</p>
        </div></Link>

        {subscription?.subscribed ? (
  <Link to={'/app/subscriptionplan'}>
    <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
      <LuArrowUpFromLine className=''/>
      <p className='hover:bg-[#F3D8A7] py-1 text-center'>Subscription Details</p>
    </div>
  </Link>
) : (
  <Link to={'/app/pricing'}>
    <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
      <FiUsers className='' />
      <p className='hover:bg-[#F3D8A7] py-1 text-center'>Switch to premium</p>
    </div>
  </Link>
)}


        <Link to={'/settings'}><div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <IoSettingsOutline className=''/>
        <p className='hover:bg-[#F3D8A7]  py-1 text-center'>Settings</p>
        </div></Link>

        <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <IoChatboxOutline className=''/>
        <p className='hover:bg-[#F3D8A7] py-1 text-center'>Contact Support</p>
        </div>

        <p className='text-[#F08E1F] font-semibold mt-9 '>Profile</p>


        <div className='flex gap-x-5 items-center mt-9 '>
        <div className='bg-purple-900 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>{user?.fname.charAt()}</div>
        <div>
            <p className='font-semibold text-lg'>{user?.fname},{user?.lname}</p>
            <p className='font-light text-gray-400'>{user?.email}</p>
        </div>
        </div>

        <Link to={'/login'}><div className='flex items-center gap-x-3 mt-9 justify-center'>
        <CiLogout />
        <p onClick={logout}>Log out</p>
        </div></Link>

        </div>

        </div>


    </div>
  )
}

export default Sidebar
