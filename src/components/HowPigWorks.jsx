import React from "react";
import Check from "../assets/landingpage/check.svg";
import World from "../assets/landingpage/worldSearch.svg";
import Community from "../assets/landingpage/communityOwners.svg"
import { useNavigate } from "react-router-dom";

const HowPigWorks = () => {
  const navigate = useNavigate()


  return (
    <div className="bg-white py-9 px-[4px] md:px-[240px] font-nunito">
      <p className="text-6xl font-bold text-center">How Pigeonhire Works</p>
      <p className="text-3xl font-normal text-center mt-4">
        Two Simple Ways to Expand Your Reach
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between mt-9 px-4">
        <div>
          <p className="text-4xl font-medium my-5"> <img src={World} alt="check" className="inline mr-2" />Explore Communities</p>
          <div className="flex items-start mt-10">
            {" "}
            <img src={Check} alt="check" className="inline mr-2" />
            <div className="font-normal ">
              <p>Step 1: sign Up & Choose Your Plan - Quick</p>
              <p>sign-up to access a diverse range of online</p>
              <p>communities</p>
            </div>
          </div>

          <div className="flex items-start mt-10">
            <img src={Check} alt="check" className="inline mr-2" />
            <div className="font-normal ">
              <p>Step 2: Browse & join Communities - Use our</p>
              <p>intuitive platform to find and join communities</p>
              <p>that align with your interests or business needs.</p>
            </div>
          </div>

          <div className="flex items-start mt-10">
          <img src={Check} alt="check" className="inline mr-2" />
            <div>
              <p>Step 3: Engage & Network - Start conversations,</p>
              <p>share insights, and build relationships within</p>
              <p>these communities.</p>
            </div>
          </div>

          <div className="flex justify-center">
          <button onClick={()=> navigate('/freebrowsecommunity')}  className="bg-[#F08E1F] text-white px-6 py-2 rounded-full mt-9">Explore Connections</button>
          </div>


        </div>

        <div>
          <p className="text-4xl font-medium my-5"><img src={Community} alt="check" className="inline mr-2" />Engage Community Owners</p>
          <div className="flex items-start mt-10">
          <img src={Check} alt="check" className="inline mr-2" />
            <div>
              <p>Step 1: Discover Community Leaders - Engage</p>
              <p>profiles of community leaders who are open to</p>
              <p>partnerships and marketing opportunities.</p>
            </div>
          </div>
          <div className="flex items-start mt-10">
          <img src={Check} alt="check" className="inline mr-2" />
            <div>
              <p>Step 2: Select, PAYG & Connect - Choose</p>
              <p>intuitive platform to find and join communities</p>
              <p>that align with your interests or business needs.</p>
            </div>
          </div>

          <div className="flex items-start mt-10">
          <img src={Check} alt="check" className="inline mr-2" />
            <div>
              <p>Step 3: Engage & Network - Start conversations,</p>
          <p>share insights, and build relationships within</p>
          <p>these communities.</p>
            </div>
          </div>

          <div className="flex justify-center">
          <button onClick={()=> navigate('/freecommunityowners')} className="bg-[#F08E1F] text-white px-6 py-2 rounded-full mt-9">Start Connecting</button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default HowPigWorks;
