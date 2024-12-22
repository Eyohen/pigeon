import React from "react";
import Check from "../assets/landingpage/check.svg";
import World from "../assets/landingpage/worldSearch.svg";
import Community from "../assets/landingpage/communityOwners.svg"
import { useNavigate } from "react-router-dom";
import multiple from "../assets/multipleimages.png"

const HowPigWorks = () => {
  const navigate = useNavigate()


  return (
    <div className="py-9 px-[4px] md:px-[240px] font-nunito">
      <p className="text-6xl font-bold text-center">One signup, multiple connections</p>
      <p className="text-3xl font-normal text-center mt-4">
      Gain access to vibrant communities and their leaders with one simple subscription
      </p>

    <div className="flex justify-center"><img src={multiple} alt="multiple" /></div>

    </div>
  );
};

export default HowPigWorks;
