import React from "react";
import herolady from "../assets/herolady.png";
import HeroBottom from "../assets/heroBottom.svg";
import { Link, useNavigate, useParams } from 'react-router-dom';

const Hero = () => {
const navigate = useNavigate()

  return (
    <>
      <div className="bg-[#201327] py-9 px-4 md:px-[120px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mt-16">
            <p className="text-white text-6xl font-bold font-nunito">
              Reach your Target
            </p>
            <p className="text-white text-6xl font-bold mt-2 font-nunito">
              Audience, Right Where
            </p>
            <p className="text-white text-6xl font-bold mt-2 font-nunito">
              they Engage.
            </p>

            <p className="text-white text-3xl font-medium mt-6 font-nunito">
              Thousands of businesses trust our directory to
            </p>
            <p className="text-white text-3xl mt-2 font-medium font-nunito">
              connect with users and secure partnerships in
            </p>
            <p className="text-white text-3xl mt-2  font-medium font-nunito">
              communities across 20+ countries
            </p>

            <div className="md:flex gap-x-0 md:gap-x-9 md:space-y-0 space-y-4 mt-9 text-center ">

              <div>
                <button onClick={()=> navigate('/freebrowsecommunity')} className="bg-[#F08E1F] text-white rounded-full px-6 py-4">
                  Browse Communities
                </button>
              </div>

              <div>
                <button onClick={()=> navigate('/freeregistervisibility')} className="border border-[#F08E1F] text-white rounded-full px-6 py-4">
                  For Community owners
                </button>
              </div>
            </div>
          </div>
          <div className="relative mt-9 md:mt-0"> 
            <div className=" rounded-full p-10 border-2 border-dashed border-[#F08E1F] flex items-center">
              <div className=" rounded-full p-10 border-2 border-dashed border-[#F08E1F] flex items-center">
                <div className="rounded-full p-40 bg-[#F08E1F]"></div>
              </div>
              <div className="mt-16 absolute right-1">
            <img src={herolady} className="object-cover w-[450px] h-[500px]" />
          </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="bg-[#ffffff] p-8">
        <div>
          <div className="font-nunito font-semibold text-3xl text-center">
            Discover over 10,000 groups, stores, influencers, services,
            conveners on these platforms
          </div>
          <div className="flex justify-center">
            <img src={HeroBottom} alt="hero-bottom" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
