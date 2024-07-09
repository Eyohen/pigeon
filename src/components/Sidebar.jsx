import React, {useState} from 'react'
import logo from "../assets/LOGO-BLACK1.png"
import { CiLogout } from "react-icons/ci";
import { FiUsers,FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoReceiptOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Sidebar = () => {

  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCommunity, setIsOpenCommunity] = useState(false);

  const handleToggleCommunity = () => {
    setIsOpenCommunity(!isOpenCommunity);
  }

  console.log("sidebar", user)
  return (
    <div className='flex justify-center h-screen px-[30px] bg-[#FAFAFA]'>
        {/* <div>
        <img src={logo} className='w-9 h-9' />
        </div> */}

            <div>
        <p className='text-[#F08E1F] font-semibold mt-9'>Menu</p>

        <Link to={'/communityowner'}> <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
    
        <FiUsers className='' />
        <p className='hover:bg-[#F3D8A7]  py-1 text-center '>Community Owners</p>

        </div></Link>

        <Link to={'/browseowner'}> <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <CiSearch  size={20} className=' '/>
        <p className='hover:bg-[#F3D8A7] py-1 text-center'>Browse Communities</p>
        </div></Link>

        <Link to={'/purchasehistory'}><div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <IoReceiptOutline className=''/>
        <p className='hover:bg-[#F3D8A7] py-1 text-center'>Purchase History</p>
        </div></Link>
        
        <div className='flex gap-x-3 items-center justify-between hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
          <div className='flex items-center gap-x-3'  onClick={() => setIsOpen((prev) => !prev)}>
        <FiUser className='' />
        <p className='hover:bg-[#F3D8A7] py-1 text-center'>Account</p>
        </div>
        <IoChevronDown onClick={() => setIsOpen((prev) => !prev)}  size={20} className='' />
        </div>
        {isOpen && (<div  className='rounded  bg-[#FAFAFA] pl-9 absolute'>
    
    <div className='flex justify-between items-center gap-x-6 mt-3'>
    <p className=''>Listed Communities</p>
    <IoChevronForward size={20} />
    </div>
   
    <div className='flex justify-between items-center py-2'>
    <p className=''>New Requests</p>
        <button className='text-white bg-black rounded px-2'>8</button>
    </div>
  
</div>)}

        {/* <Link to={'/listcommunity'}> */}
          <div onClick={handleToggleCommunity} className='flex gap-x-3 items-center px-2 mt-6 rounded cursor-pointer'>
        <FiUsers className='' />
        <p className='py-1 text-center'>Create Community</p>
        <IoChevronDown onClick={() => setIsOpen((prev) => !prev)}  size={20} className='' />
        </div>
        {
          isOpenCommunity && <div className='ml-9 text-left'>
          <Link to={'/listcommunity'}><p className='hover:bg-[#F3D8A7] py-1 px-2 rounded cursor-pointer'>As community owner</p></Link>
          <Link to={'/listvisibility'}><p className='hover:bg-[#F3D8A7] py-1 px-2 rounded cursor-pointer'>For visibility</p></Link>
        </div>
        }
        
        {/* </Link> */}

        <Link to={'/switchpremium'}><div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <FiUsers className='' />
        <p className='hover:bg-[#F3D8A7]  py-1 text-center'>Switch to premium</p>
        </div></Link>

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
  )
}

export default Sidebar
