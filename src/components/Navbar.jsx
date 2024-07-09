import React, { useState } from "react";

import logo from "../assets/logo.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiMenuFill } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState();
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center px-[4px] md:px-[120px] py-5">
        <div className="">
          <img src={logo} alt="" className="" />
        </div>

        <div className="flex gap-9 items-center px-6 font-nunito">
          <Link to={"/"}>
            
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
              Home
            </p>
          </Link>
          <Link to={"/aboutus"}><p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
            About Us
          </p> </Link>
          <p onClick={user ? (() => navigate('/browseowner')) : (() => navigate('/login'))} className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
            Communities
          </p>
          <Link to={"/pricing"}>
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
              Pricing
            </p>
          </Link>
          <Link to={"/blog"}><p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
            Blog
          </p> </Link>
          <Link to={"/faq"}><p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
            FAQ
          </p></Link>
          <Link to={"/contactus"}>
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
              Contact Us
            </p>
          </Link>
        </div>


         <div className="relative">
         <p onClick={handleOpen} className="text-white px-6 py-2 rounded-full text-lg font-nunito font-normal hidden md:block bg-[#F08E1F]">Sign in</p>

         {/* <div className="border border-[#F08E1F] bg-white px-12 py-6 z-50 absolute rounded-lg mt-4 left-1/2 transform -translate-x-1/2">
         <p className="text-[#F08E1F] min-w-[95px]">Create New</p>
        {user ? (<p onClick={logout} className="text-[#F08E1F] cursor-pointer">Logout</p>) : (<p onClick={()=> navigate('/login')} className="text-[#F08E1F] cursor-pointer">Login</p>)} 
         </div> */}

         {open && <div className="border border-[#F08E1F] bg-white px-12 py-6 z-50 absolute rounded-lg mt-4 left-1/2 transform -translate-x-1/2">
         <p className="text-[#F08E1F] min-w-[95px]">Create New</p>
        {user ? (<p onClick={logout} className="text-[#F08E1F] cursor-pointer">Logout</p>) : (<p onClick={()=> navigate('/login')} className="text-[#F08E1F] cursor-pointer">Login</p>)} 
         </div> }

         </div>

       

        <div className="md:hidden">
          <RiMenuFill size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;