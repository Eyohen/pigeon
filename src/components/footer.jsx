import React from "react";
import Logo from "../assets/landingpage/whiteLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#201327] text-white mt-10 font-nunito md:h-[377px]">
      <div className="flex flex-col justify-between items-center h-full py-7">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 py-5 px-4 md:px-[50px]">
          <div>
            
            <div>
              <img src={Logo} alt="logo" className="" />
            </div>
            <div>
              Connect with your target audience, right where they engage.
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-5">
            <div>
              <p className="mb-7">Companies</p>
              <div className="font-normal text-sm tracking-tighter">
                <Link to={'/aboutus'}><p className="mb-4">About Us</p></Link>
                <Link to={'/blog'}><p>Stories that Connect</p></Link>
              </div>
            </div>
            <div>
              <p className="mb-7">Terms & Policies</p>
              <div className="font-normal text-sm tracking-tighter">
                <p className="mb-4">Terms of Service</p>
                <Link to={'/privacypolicy'}><p>Privacy Policy</p></Link>
              </div>
            </div>
            <div>
            <p className="mb-7">Contacts</p>
              <div className="font-normal text-sm tracking-tighter">
              <Link to={'/faq'}><p className="mb-4">FAQ</p></Link>
                <Link to={'/contactus'}><p>Contact Us</p></Link>
              </div>
            </div>
            <div>
              <p className="mb-7">For Users</p>
              <div className="font-normal text-sm tracking-tighter">
                <p className="mb-4">Explore Communities</p>
                <p className="mb-4">Engage Community Owners</p>
                <Link to={'/pricing'}><p className="mb-4">Pricing</p></Link>
                <p className="mb-4">How it Works</p>
              </div>
            </div>
            <div>
              <p className="mb-6"> For Communities</p>
              <div className="font-normal text-sm tracking-tighter">
               
                <p className="mb-4">How it Works</p>
                <p className="mb-4">Register as Community Owners</p>
                <p className="mb-4">List Community</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm">
          Pigeonhire © 2024. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
