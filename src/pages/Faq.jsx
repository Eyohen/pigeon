import React, { useState } from "react";
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Faq = () => {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(true);
  const [toggle5, setToggle5] = useState(true);
  const [toggle6, setToggle6] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };

  const handleToggle4 = () => {
    setToggle4(!toggle4);
  };

  const handleToggle5 = () => {
    setToggle5(!toggle5);
  };

  const handleToggle6 = () => {
    setToggle6(!toggle6);
  };

  // const handleToggle2 = () => {
  //     setToggle2(!toggle2)
  // }

  // const handleToggle3 = () => {
  //     setToggle3(!toggle3)
  // }

  return (
    <>
 
      <Navbar />
    <div className="bg-white px-4 mx-auto lg:px-[300px] py-9 font-nunito">
      <p className="text-6xl font-bold text-center md:tracking-wide">
        Frequently asked questions
      </p>

      <div className="">
        <button onClick={handleToggle} className="w-full">
          {toggle ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium ">
                How can Pigeonhire help my business grow?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                  How can Pigeonhire help my business grow?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-300 text-left">
                Pigeonhire connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. Whether you're looking to increase brand
                awareness, drive sales, or build relationships, our platform
                provides the tools and access necessary to achieve your goals.
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle2} className="w-full">
          {toggle2 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
              What makes Pigeonhire different from other community engagement platforms?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                What makes Pigeonhire different from other community engagement platforms?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-300 text-left">
                Pigeonhire connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. Whether you're looking to increase brand
                awareness, drive sales, or build relationships, our platform
                provides the tools and access necessary to achieve your goals.
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle3} className="w-full">
          {toggle3 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
              Can I target specific geographic locations or industries in Pigeonhire?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                Can I target specific geographic locations or industries in Pigeonhire?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-300 text-left">
                Pigeonhire connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. Whether you're looking to increase brand
                awareness, drive sales, or build relationships, our platform
                provides the tools and access necessary to achieve your goals.
              </p>
            </div>
          )}
        </button>
      </div>


      <div className="">
        <button onClick={handleToggle} className="w-full">
          {toggle ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium ">
                How can Pigeonhire help my business grow?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                  How can Pigeonhire help my business grow?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-300 text-left">
                Pigeonhire connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. Whether you're looking to increase brand
                awareness, drive sales, or build relationships, our platform
                provides the tools and access necessary to achieve your goals.
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle2} className="w-full">
          {toggle2 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
              What makes Pigeonhire different from other community engagement platforms?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                What makes Pigeonhire different from other community engagement platforms?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-300 text-left">
                Pigeonhire connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. Whether you're looking to increase brand
                awareness, drive sales, or build relationships, our platform
                provides the tools and access necessary to achieve your goals.
              </p>
            </div>
          )}
        </button>
      </div>

      <div className="">
        <button onClick={handleToggle3} className="w-full">
          {toggle3 ? (
            <div className="flex justify-between  space-x-[94px] px-2 border-b-2 py-6">
              <p className="text-xl font-medium text-left">
              Can I target specific geographic locations or industries in Pigeonhire?
              </p>
              <TbCirclePlus color="#F08E1F" size={24} />
            </div>
          ) : (
            <div className="border-b-2 py-6">
              <div className="flex justify-between space-x-[94px] px-2">
                <p className="text-xl font-medium text-left">
                Can I target specific geographic locations or industries in Pigeonhire?
                </p>
                <TbCircleMinus color="#F08E1F" size={24} />
              </div>

              <p className="text-gray-300 text-left">
                Pigeonhire connects your business with targeted communities and
                professionals across the globe, enabling you to expand yur
                reach, engage with key audiences, and foster strategic
                partnerships. Whether you're looking to increase brand
                awareness, drive sales, or build relationships, our platform
                provides the tools and access necessary to achieve your goals.
              </p>
            </div>
          )}
        </button>
      </div>

      


    </div>
    <Footer/></>
  );
};

export default Faq;
