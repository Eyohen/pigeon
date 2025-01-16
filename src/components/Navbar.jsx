// import React, { useState } from "react";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import logo from "../assets/logo.svg";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { RiMenuFill } from "react-icons/ri";
// import { SlMagnifier } from "react-icons/sl";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const [open, setOpen] = useState(false);
//   const [openCommunity, setOpenCommunity] = useState(false);
//   const [data, setData] = useState([]);
//   const navigate = useNavigate()

//   const handleOpen = () => {
//     setOpen((prev) => !prev);
//   };

//   const handleOpenCommunity = () => {
//     setOpenCommunity((prev) => !prev);
//   };


//   return (
//     <div className="bg-white fixed top-0 left-0 right-0 z-50">
//       <div className="flex justify-between items-center px-[4px] md:px-[160px] py-3">
//         <div className="">
//           <img src={logo} alt="" className="" />
//         </div>

//         <div className="flex gap-9 items-center px-6 font-nunito">
//           <Link to={"/"}>
            
//             <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
//               Home
//             </p>
//           </Link>
//           <Link to={"/aboutus"}><p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
//             About Us
//           </p> </Link>
//           {/* <p onClick={user ? (() => navigate('/browserowner')) : (() => navigate('/login'))} className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block cursor-pointer">
//             Communities
//           </p> */}


// {/* <p onClick={user ? (() => navigate('/browserowner')) : (() => navigate('/login'))} className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block cursor-pointer ">Communities</p> */}

// <div className="relative">
//       <div onClick={handleOpenCommunity} className="flex items-center gap-x-1"> <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block cursor-pointer ">Communities</p> <MdOutlineArrowDropDown size={22}/></div>

//       {openCommunity && <div className="border border-[#554634] bg-white px-6 py-6 z-50 absolute rounded-lg mt-5 left-1/2 transform -translate-x-1/2">
//          <p onClick={() => navigate('/browserowner')} className="text-[#F08E1F] min-w-[160px] cursor-pointer">Browse Communities</p>
//          <p onClick={() => navigate('/register')} className="text-[#F08E1F] min-w-[160px] cursor-pointer pt-2">Register Community</p>
 
//          </div> }
//          </div>


//           <Link to={"/pricing"}>
//             <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
//               Pricing
//             </p>
//           </Link>
//           <Link to={"/blog"}><p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
//             Blog
//           </p> </Link>
//           <Link to={"/faq"}><p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
//             FAQ
//           </p></Link>
//           <Link to={"/contactus"}>
//             <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
//               Contact Us
//             </p>
//           </Link>
//         </div>


//          <div className="relative">
//          <button onClick={handleOpen} className="text-white px-6 py-2 rounded-full text-lg font-nunito font-normal hidden md:block bg-[#F08E1F] cursor-pointer">{user ? user?.fname : "Sign in"}</button>

//          {open && <div className="border border-[#554634] bg-white px-12 py-6 z-50 absolute rounded-lg mt-2 left-1/2 transform -translate-x-1/2">
//          <p onClick={() => navigate('/register')} className="text-[#F08E1F] min-w-[95px] cursor-pointer">Create New</p>
//         {user ? (<p onClick={logout} className="text-[#F08E1F] cursor-pointer">Logout</p>) : (<p onClick={()=> navigate('/login')} className="text-[#F08E1F] cursor-pointer">Login</p>)} 
//          </div> }

//          </div>

       

//         <div className="md:hidden">
//           <RiMenuFill size={25} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import logo from "../assets/logo.svg";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [openCommunity, setOpenCommunity] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileCommunity, setMobileCommunity] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenCommunity = () => {
    setOpenCommunity(!openCommunity);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setMobileCommunity(false);
  };

  const handleMobileCommunity = () => {
    setMobileCommunity(!mobileCommunity);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setMobileCommunity(false);
  };

  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Main Navbar Content */}
      <div className="flex justify-between items-center px-4 md:px-[160px] py-3">
        {/* Logo */}
        <div className="z-50">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-8 md:h-auto cursor-pointer" 
            onClick={() => {
              navigate('/');
              closeMobileMenu();
            }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-9 items-center px-6 font-nunito">
          <div onClick={() => navigate('/')} className="cursor-pointer">
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F]">
              Home
            </p>
          </div>
          
          <div onClick={() => navigate('/aboutus')} className="cursor-pointer">
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F]">
              About Us
            </p>
          </div>

          {/* Communities Dropdown */}
          <div className="relative">
            <div 
              onClick={handleOpenCommunity} 
              className="flex items-center gap-x-1 cursor-pointer"
            >
              <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F]">
                Communities
              </p>
              <MdOutlineArrowDropDown size={22} />
            </div>

            {openCommunity && (
              <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                <p 
                  onClick={() => navigate('/browserowner')} 
                  className="px-6 py-2 hover:bg-gray-50 text-[#F08E1F] cursor-pointer"
                >
                  Browse Communities
                </p>
                <p 
                  onClick={() => navigate('/register')} 
                  className="px-6 py-2 hover:bg-gray-50 text-[#F08E1F] cursor-pointer"
                >
                  Register Community
                </p>
              </div>
            )}
          </div>

          <div onClick={() => navigate('/pricing')} className="cursor-pointer">
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F]">
              Pricing
            </p>
          </div>
          
          <div onClick={() => navigate('/blog')} className="cursor-pointer">
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F]">
              Blog
            </p>
          </div>
          
          <div onClick={() => navigate('/faq')} className="cursor-pointer">
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F]">
              FAQ
            </p>
          </div>
          
          <div onClick={() => navigate('/contactus')} className="cursor-pointer">
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F]">
              Contact Us
            </p>
          </div>
        </div>

        {/* Desktop Sign In Button */}
        <div className="relative hidden md:block">
          <button 
            onClick={handleOpen}
            className="text-white px-6 py-2 rounded-full text-lg font-nunito font-normal bg-[#F08E1F] hover:bg-[#e07d1e] transition-colors"
          >
            {user ? user?.fname : "Sign in"}
          </button>

          {open && (
            <div className="absolute mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
              <p 
                onClick={() => navigate('/register')} 
                className="px-6 py-2 hover:bg-gray-50 text-[#F08E1F] cursor-pointer whitespace-nowrap"
              >
                Create New
              </p>
              {user ? (
                <p 
                  onClick={logout} 
                  className="px-6 py-2 hover:bg-gray-50 text-[#F08E1F] cursor-pointer"
                >
                  Logout
                </p>
              ) : (
                <p 
                  onClick={() => navigate('/login')} 
                  className="px-6 py-2 hover:bg-gray-50 text-[#F08E1F] cursor-pointer"
                >
                  Login
                </p>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {mobileMenu ? (
            <RiCloseLine size={28} className="text-[#201327]" />
          ) : (
            <RiMenuFill size={28} className="text-[#201327]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[80%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenu ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20 px-6`}
      >
        <div className="flex flex-col space-y-4">
          <div 
            onClick={() => {
              navigate("/");
              closeMobileMenu();
            }}
            className="cursor-pointer"
          >
            <p className="text-[#201327] text-lg font-medium hover:text-[#F08E1F] py-2">
              Home
            </p>
          </div>

          <div 
            onClick={() => {
              navigate("/aboutus");
              closeMobileMenu();
            }}
            className="cursor-pointer"
          >
            <p className="text-[#201327] text-lg font-medium hover:text-[#F08E1F] py-2">
              About Us
            </p>
          </div>

          {/* Communities Dropdown */}
          <div>
            <div 
              onClick={handleMobileCommunity}
              className="flex items-center justify-between py-2 cursor-pointer"
            >
              <p className="text-[#201327] text-lg font-medium">Communities</p>
              <MdOutlineArrowDropDown 
                size={24}
                className={`transform transition-transform duration-200 ${
                  mobileCommunity ? 'rotate-180' : ''
                }`}
              />
            </div>
            {mobileCommunity && (
              <div className="pl-4 py-2 space-y-2">
                <div 
                  onClick={() => {
                    navigate('/browserowner');
                    closeMobileMenu();
                  }}
                  className="text-[#F08E1F] py-2 cursor-pointer"
                >
                  Browse Communities
                </div>
                <div 
                  onClick={() => {
                    navigate('/register');
                    closeMobileMenu();
                  }}
                  className="text-[#F08E1F] py-2 cursor-pointer"
                >
                  Register Community
                </div>
              </div>
            )}
          </div>

          <div 
            onClick={() => {
              navigate("/pricing");
              closeMobileMenu();
            }}
            className="cursor-pointer"
          >
            <p className="text-[#201327] text-lg font-medium hover:text-[#F08E1F] py-2">
              Pricing
            </p>
          </div>

          <div 
            onClick={() => {
              navigate("/blog");
              closeMobileMenu();
            }}
            className="cursor-pointer"
          >
            <p className="text-[#201327] text-lg font-medium hover:text-[#F08E1F] py-2">
              Blog
            </p>
          </div>

          <div 
            onClick={() => {
              navigate("/faq");
              closeMobileMenu();
            }}
            className="cursor-pointer"
          >
            <p className="text-[#201327] text-lg font-medium hover:text-[#F08E1F] py-2">
              FAQ
            </p>
          </div>

          <div 
            onClick={() => {
              navigate("/contactus");
              closeMobileMenu();
            }}
            className="cursor-pointer"
          >
            <p className="text-[#201327] text-lg font-medium hover:text-[#F08E1F] py-2">
              Contact Us
            </p>
          </div>

          {/* Mobile Sign In/Out */}
          <div className="pt-4 border-t">
            {user ? (
              <>
                <p className="text-[#201327] font-medium mb-2">
                  Signed in as {user.fname}
                </p>
                <button
                  onClick={() => {
                    logout();
                    closeMobileMenu();
                  }}
                  className="w-full bg-[#F08E1F] text-white py-2 rounded-full hover:bg-[#e07d1e] transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  navigate('/login');
                  closeMobileMenu();
                }}
                className="w-full bg-[#F08E1F] text-white py-2 rounded-full hover:bg-[#e07d1e] transition-colors"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </div>
  );
};

export default Navbar;