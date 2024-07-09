import React from "react";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="font-nunito bg-gray-100">
      <Navbar />

      <div className="bg-white pb-10">
      <p className="text-center text-6xl font-bold my-9 py-9">
        Stories that connect
      </p>

      <div className="">
        <div className="grid grid-cols-3 gap-5 px-4 md:px-[80px] mt-12">
          <div className="">
            <img
              src={frame1}
              className="object-cover h-[250px] w-[350px] rounded-t-2xl"
            />
            <p className="text-3xl font-bold mt-2 tracking-tighter">Maximizing Engagement:</p>
            <p className="text-3xl font-bold tracking-tighter">Tips for Community Owners</p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt{" "}
              <span className="text-[#F08E1F] text-xl cursor-pointer">Read More...</span>
            </p>
          </div>

          <div className="">
            <img
              src={frame2}
              className="object-cover h-[250px] w-[350px] rounded-t-2xl"
            />
            <p className="text-3xl font-bold mt-2 tracking-tighter">Creating Community: Owner</p>
            <p className="text-3xl font-bold tracking-tighter">and User Collaboration</p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt{" "}
              <span className="text-[#F08E1F] text-xl cursor-pointer">Read More...</span>
            </p>
          </div>

          <div className="">
            <img
              src={frame3}
              className="object-cover h-[250px] w-[350px] rounded-t-2xl"
            />
            <p className="text-3xl font-bold mt-2 tracking-tighter">Building Bridges: Owners</p>
            <p className="text-3xl font-bold tracking-tighter">and Users Unite</p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt{" "}
              <span className="text-[#F08E1F] text-xl cursor-pointer">Read More...</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 px-4 md:px-[80px] mt-12">
          <div className="">
            <img
              src={frame1}
              className="object-cover h-[250px] w-[350px] rounded-t-2xl"
            />
            <p className="text-3xl font-bold mt-2 tracking-tighter">Maximizing Engagement:</p>
            <p className="text-3xl font-bold tracking-tighter">Tips for Community Owners</p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt{" "}
              <span className="text-[#F08E1F] text-xl cursor-pointer">Read More...</span>
            </p>
          </div>

          <div className="">
            <img
              src={frame2}
              className="object-cover h-[250px] w-[350px] rounded-t-2xl"
            />
            <p className="text-3xl font-bold mt-2 tracking-tighter">Creating Community: Owner</p>
            <p className="text-3xl font-bold tracking-tighter">and User Collaboration</p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt{" "}
              <span className="text-[#F08E1F] text-xl cursor-pointer">Read More...</span>
            </p>
          </div>

          <div className="">
            <img
              src={frame3}
              className="object-cover h-[250px] w-[350px] rounded-t-2xl"
            />
            <p className="text-3xl font-bold mt-2 tracking-tighter">Building Bridges: Owners</p>
            <p className="text-3xl font-bold tracking-tighter">and Users Unite</p>
            <p className="mt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt{" "}
              <span className="text-[#F08E1F] text-xl cursor-pointer">Read More...</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 px-4 md:px-[80px] mt-12">
          <div className="">
            <img
              src={frame1}
              className="object-cover h-[250px] w-[350px] rounded-t-2xl"
            />
            <p className="text-3xl font-bold mt-2 tracking-tighter">Maximizing Engagement:</p>
            <p className="text-3xl font-bold tracking-tighter">Tips for Community Owners</p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt{" "}
              <span className="text-[#F08E1F] text-xl cursor-pointer">Read More...</span>
            </p>
          </div>

          <div className="">
            <img
              src={frame2}
              className="object-cover h-[250px] w-[350px] rounded-t-2xl"
            />
            <p className="text-3xl font-bold mt-2 tracking-tighter">Creating Community: Owner</p>
            <p className="text-3xl font-bold tracking-tighter">and User Collaboration</p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt{" "}
              <span className="text-[#F08E1F] text-xl cursor-pointer">Read More...</span>
            </p>
          </div>

          <div className="">
            <img
              src={frame3}
              className="object-cover h-[250px] w-[350px] rounded-t-2xl"
            />
            <p className="text-3xl font-bold mt-2">Building Bridges: Owners</p>
            <p className="text-3xl font-bold">and Users Unite</p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt{" "}
              <span className="text-[#F08E1F] text-xl cursor-pointer">Read More...</span>
            </p>
          </div>
        </div>
      </div>
    
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
