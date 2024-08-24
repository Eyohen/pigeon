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
import { RiForbidLine } from "react-icons/ri";


const AdminSidebar = () => {

  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCommunity, setIsOpenCommunity] = useState(false);

  const handleToggleCommunity = () => {
    setIsOpenCommunity(!isOpenCommunity);
  }

  // Function to check if user has access to a specific menu item
  // const hasAccess = (menuItem) => {
  //   if (user.role === 'superadmin') return true; // Superadmin can access everything

  //     // Define access rules for regular admin
  //     const adminAccess = {
  //       analytics: false,
  //       communityOwners: true,
  //       transactions: true,
  //       communities: true,
  //       users: true,
  //       blog: true,
  //       settings: false,
  //       restrictedOwners: true,
  //       restrictedCommunities: true
  //     };

  //     return adminAccess[menuItem];
  //   }

  console.log("sidebar", user)
  return (
    <div className='fixed top-0 left-0 bottom-0 h-screen bg-[#201327]'>
    {/* <div className='flex justify-center h-screen px-[30px] bg-[#201327]'> */}
    <div className='flex justify-center px-[30px]'>
        {/* <div>
        <img src={logo} className='w-9 h-9' />
        </div> */}

            <div>
        <p className='text-[#F08E1F] font-semibold mt-6'>Menu</p>

 
          <Link to={'/adminanalytics'}> <div className='flex gap-x-3 items-center hover:bg-[#F08E1F]  px-2 mt-6 rounded'>
        <FiUsers color='white' className='' />
        <p className='hover:bg-[#F08E1F] text-white py-1 text-center '>Analytics</p>
        </div></Link>
   



        <Link to={'/admincommunityowner'}> <div className='flex gap-x-3 items-center hover:bg-[#F08E1F] px-2 mt-5 rounded'>
        <FiUsers color='white' className='' />
        <p className='hover:bg-[#F08E1F] text-white py-1 text-center '>Community Owners</p>
        </div></Link>


        <Link > <div className='flex gap-x-3 items-center hover:bg-[#F08E1F] px-2 mt-5 rounded'>
        <CiSearch color='white'  size={20} className=' '/>
        <p className='hover:bg-[#F08E1F] text-white py-1 text-center'>Transactions</p>
        </div></Link>




        <Link to={'/admincommunities'}><div className='flex gap-x-3 items-center hover:bg-[#F08E1F] px-2 mt-5 rounded'>
        <IoReceiptOutline color='white' className=''/>
        <p className='hover:bg-[#F08E1F] text-white py-1 text-center'>Communities</p>
        </div></Link>



        <Link to={'/adminusers'}><div className='flex gap-x-3 items-center hover:bg-[#F08E1F] px-2 mt-5 rounded'>
        <FiUsers color='white' className='' />
        <p className='hover:bg-[#F08E1F] text-white  py-1 text-center'>Users</p>
        </div></Link>




        <Link to={'/adminblog'}><div className='flex gap-x-3 items-center hover:bg-[#F08E1F] px-2 mt-5 rounded'>
        <IoReceiptOutline color='white' className=''/>
        <p className='hover:bg-[#F08E1F] text-white py-1 text-center'>Blog</p>
        </div></Link>


{/* 
        <Link ><div className='flex gap-x-3 items-center hover:bg-[#F08E1F] px-2 mt-5 rounded'>
        <FiUsers color='white' className='' />
        <p className='hover:bg-[#F08E1F] text-white  py-1 text-center'>Messages</p>
        </div></Link> */}



        <Link to={'/adminsettings'}><div className='flex gap-x-3 items-center hover:bg-[#F08E1F] px-2 mt-5 rounded'>
        <IoSettingsOutline color='white' className=''/>
        <p className='hover:bg-[#F08E1F] text-white  py-1 text-center'>Settings</p>
        </div></Link>


        <Link to={'/adminrestrictedowners'}><div className='flex gap-x-3 items-center hover:bg-[#F08E1F] px-2 mt-5 rounded'>
        <RiForbidLine color='white' className=''/>
        <p className='hover:bg-[#F08E1F] text-white  py-1 text-center'>Restricted Community Owners</p>
        </div></Link>

        <Link to={'/adminrestrictedcommunities'}><div className='flex gap-x-3 items-center hover:bg-[#F08E1F] px-2 mt-5 rounded'>
        <RiForbidLine color='white' className=''/>
        <p className='hover:bg-[#F08E1F] text-white  py-1 text-center'>Restricted Communities</p>
        </div></Link>


        {/* <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <IoChatboxOutline className=''/>
        <p className='hover:bg-[#F3D8A7] py-1 text-center'>Contact Support</p>
        </div> */}

        <p className='text-[#F08E1F] font-semibold mt-[45px] '>Profile</p>


        <div className='flex gap-x-5 mt-5'>
        <div className='bg-purple-900 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>{user?.fname.charAt()}</div>
        <div>
            <p className='font-semibold text-white text-lg'>{user?.fname}</p>
            <p className='font-semibold text-white text-lg'>{user?.lname}</p>
            <p className='font-light text-gray-400'>{user?.email?.slice(0,15)+"..."}</p>
        </div>
        </div>

        <Link to={'/admin'}><div className='flex items-center bg-white rounded py-1 gap-x-3 mt-6 justify-center'>
        <CiLogout />
        <p onClick={logout}>Log out</p>
        </div></Link>

        </div>

        </div>
    </div>
  )
}

export default AdminSidebar
