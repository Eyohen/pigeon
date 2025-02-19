// import React, { useState } from "react";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import logo from "../assets/logo.svg";
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
      
// <div className="relative hidden md:block">
//       <div onClick={handleOpenCommunity} className="flex items-center gap-x-1"> <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] cursor-pointer ">Communities</p> <MdOutlineArrowDropDown size={22}/></div>

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

       

//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { MdOutlineArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import logo from "../assets/logo.svg";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [openCommunity, setOpenCommunity] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileCommunity, setMobileCommunity] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleOpenCommunity = () => {
    setOpenCommunity((prev) => !prev);
  };

  const handleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const handleMobileCommunity = () => {
    setMobileCommunity((prev) => !prev);
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/aboutus" },
    { text: "Pricing", path: "/pricing" },
    { text: "Blog", path: "/blog" },
    { text: "FAQ", path: "/faq" },
    { text: "Contact Us", path: "/contactus" },
  ];

  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-40 py-3">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-9 items-center px-6 font-nunito">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path}>
              <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F]">
                {link.text}
              </p>
            </Link>
          ))}

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
              <div className="border border-[#554634] bg-white px-6 py-6 absolute rounded-lg mt-5 left-1/2 transform -translate-x-1/2">
                <p
                  onClick={() => navigate("/communities")}
                  className="text-[#F08E1F] cursor-pointer whitespace-nowrap"
                >
                  Browse Communities
                </p>
                <p
                  onClick={() => navigate("/register")}
                  className="text-[#F08E1F] cursor-pointer pt-2 whitespace-nowrap"
                >
                  Register Community
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Sign In Button */}
        <div className="hidden md:block relative">
          <button
            onClick={handleOpen}
            className="text-white px-6 py-2 rounded-full text-lg font-nunito font-normal bg-[#F08E1F]"
          >
            Sign in
          </button>

          {open && (
            <div className="border border-[#554634] bg-white px-12 py-6 absolute rounded-lg mt-2 right-0">
              <p
                onClick={() => navigate("/register")}
                className="text-[#F08E1F] cursor-pointer whitespace-nowrap"
              >
                Create New
              </p>
              <p
                  onClick={() => navigate("/login")}
                  className="text-[#F08E1F] cursor-pointer pt-2"
                >
                  Login
                </p>
           
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileMenu}
          className="md:hidden text-[#201327] p-2"
        >
          {mobileMenu ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMobileMenu(false)}
              >
                <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F]">
                  {link.text}
                </p>
              </Link>
            ))}

            <div className="relative">
              <div
                onClick={handleMobileCommunity}
                className="flex items-center justify-between cursor-pointer"
              >
                <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F]">
                  Communities
                </p>
                <MdOutlineArrowDropDown size={22} />
              </div>

              {mobileCommunity && (
                <div className="bg-gray-50 mt-2 px-4 py-2 rounded">
                  <p
                    onClick={() => {
                      navigate("/communities");
                      setMobileMenu(false);
                    }}
                    className="text-[#F08E1F] py-2 cursor-pointer"
                  >
                    Browse Communities
                  </p>
                  <p
                    onClick={() => {
                      navigate("/register");
                      setMobileMenu(false);
                    }}
                    className="text-[#F08E1F] py-2 cursor-pointer"
                  >
                    Register Community
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                user ? logout() : navigate("/login");
                setMobileMenu(false);
              }}
              className="text-white px-6 py-2 rounded-full text-lg font-nunito font-normal bg-[#F08E1F] w-full"
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;