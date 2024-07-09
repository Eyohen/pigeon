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


const AdminSidebar = () => {

  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCommunity, setIsOpenCommunity] = useState(false);

  const handleToggleCommunity = () => {
    setIsOpenCommunity(!isOpenCommunity);
  }

  console.log("sidebar", user)
  return (
    <div className='flex justify-center h-screen px-[30px] bg-[#201327]'>
        {/* <div>
        <img src={logo} className='w-9 h-9' />
        </div> */}

            <div>
        <p className='text-[#F08E1F] font-semibold mt-9'>Menu</p>

        <Link to={'/communityowner'}> <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <FiUsers color='white' className='' />
        <p className='hover:bg-[#F3D8A7] text-white py-1 text-center '>Analytics</p>
        </div></Link>

        <Link to={'/communityowner'}> <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <FiUsers color='white' className='' />
        <p className='hover:bg-[#F3D8A7] text-white py-1 text-center '>Community Owners</p>
        </div></Link>

        <Link to={'/admintransaction'}> <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <CiSearch color='white'  size={20} className=' '/>
        <p className='hover:bg-[#F3D8A7] text-white py-1 text-center'>Transactions</p>
        </div></Link>

        <Link to={'/purchasehistory'}><div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <IoReceiptOutline color='white' className=''/>
        <p className='hover:bg-[#F3D8A7] text-white py-1 text-center'>Communities</p>
        </div></Link>

        <Link to={'/switchpremium'}><div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <FiUsers color='white' className='' />
        <p className='hover:bg-[#F3D8A7] text-white  py-1 text-center'>Users</p>
        </div></Link>

        <Link to={'/purchasehistory'}><div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <IoReceiptOutline color='white' className=''/>
        <p className='hover:bg-[#F3D8A7] text-white py-1 text-center'>Blog</p>
        </div></Link>

        <Link to={'/switchpremium'}><div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <FiUsers color='white' className='' />
        <p className='hover:bg-[#F3D8A7] text-white  py-1 text-center'>Messages</p>
        </div></Link>

        <Link to={'/settings'}><div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <IoSettingsOutline color='white' className=''/>
        <p className='hover:bg-[#F3D8A7] text-white  py-1 text-center'>Settings</p>
        </div></Link>

        {/* <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <IoChatboxOutline className=''/>
        <p className='hover:bg-[#F3D8A7] py-1 text-center'>Contact Support</p>
        </div> */}

        <p className='text-[#F08E1F] font-semibold mt-32 '>Profile</p>


        <div className='flex gap-x-5 items-center mt-9 '>
        <div className='bg-purple-900 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>{user?.fname.charAt()}</div>
        <div>
            <p className='font-semibold text-white text-lg'>{user?.fname},{user?.lname}</p>
            <p className='font-light text-gray-400'>{user?.email}</p>
        </div>
        </div>

        <Link to={'/login'}><div className='flex items-center bg-white rounded py-1 gap-x-3 mt-9 justify-center'>
        <CiLogout />
        <p onClick={logout}>Log out</p>
        </div></Link>

        </div>


    </div>
  )
}

export default AdminSidebar
