// import React from "react";
// import gwala from "../assets/gwalaimage.png";
// import people from "../assets/threepeople.png";
// import abstract from "../assets/abstract1.png";
// import abstract2 from "../assets/abstract2.png";
// import abstract3 from "../assets/abstract3.png";
// import abstract4 from "../assets/abstract4.png";
// import { BsArrowRight } from "react-icons/bs";
// import { Link } from "react-router-dom";

// const HowBusinessThrive = () => {

//   return (
//     <div className="py-9 bg-white px-4 md:px-[240px] font-nunito">
//       <p className="text-center text-6xl font-bold">
//         How businesses are thriving using
//       </p>
//       <p className="text-center text-6xl font-bold mb-6">Pigeonhire</p>

//       <div className="flex flex-col md:flex-row items-center justify-between">
//         <div>
//           <div className="max-w-[350px]">
//             <img src={gwala} className="object-cover h-[50px] w-[130px]" />
//             <p className="text-gray-700 text-md mt-2 tracking-wide">
//               Our partnership with Pigeonhire during our campus ambassador
//               program was a game-changer. The access to a wide array of
//               communities resulted in unprecedented engagement and sales.
//             </p>
//           <Link to="/register"><p className="text-[#F08E1F] flex gap-x-2 items-center cursor-pointer">
//               Boost your market and brand visibility
//               <BsArrowRight color="#F08E1F" />
//             </p></Link>
//           </div>
//           <div className="max-w-[350px] mt-9">
//             <img src={people} className="object-contain h-12 w-[50px]" />
//             <p className="text-gray-700 text-md mt-2">
//             As a community leader, the visibility model has been transformative.
//              We've partnered with businesses that truly resonate with our audience,
//               enhancing both our community's value and our collaboration.
//             </p>
//            <Link to={"/freeregistervisibility"}> <p className="text-[#F08E1F] flex gap-x-2 items-center cursor-pointer">
//               Get connected to your tribe <BsArrowRight color="#F08E1F" />
//             </p></Link>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-9">
//           <div className="bg-white shadow-lg px-3 py-9 w-[320px] flex flex-col items-center justify-center max-h-[400px]">
//             <img src={abstract2} className="object-contain h-12 w-[50px]" />
//             <p className="font-semibold text-2xl">600+</p>
//             <p className="font-medium text-xl">Community Connections</p>
//           </div>

//           <div className="bg-white shadow-lg px-3 py-9 w-[320px] flex flex-col items-center justify-center max-h-[400px]">
//             <img src={abstract} className="object-contain h-12 w-[50px]" />
//             <p className="font-semibold text-2xl">100+</p>
//             <p className="font-medium text-xl">Successful Campaigns</p>
//           </div>

//           <div className="bg-white shadow-lg px-3 py-9 w-[320px] flex flex-col items-center justify-center max-h-[400px]">
//             <img src={abstract3} className="object-contain h-12 w-[50px]" />
//             <p className="font-semibold text-2xl">10%</p>
//             <p className="font-medium text-xl">Growth</p>
//           </div>

//           <div className="bg-white shadow-lg px-3 py-9 w-[320px] flex flex-col items-center justify-center max-h-[400px]">
//             <img src={abstract4} className="object-contain h-12 w-[50px]" />
//             <p className="font-semibold text-2xl">10k+</p>
//             <p className="font-medium text-xl">Micro Communities</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowBusinessThrive;


import React from "react";
import gwala from "../assets/gwalaimage.png";
import people from "../assets/threepeople.png";
import abstract from "../assets/abstract1.png";
import abstract2 from "../assets/abstract2.png";
import abstract3 from "../assets/abstract3.png";
import abstract4 from "../assets/abstract4.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HowBusinessThrive = () => {
  return (
    <div className="py-6 sm:py-9 bg-white px-4 sm:px-6 md:px-8 lg:px-[120px] xl:px-[240px] font-nunito">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          How businesses are thriving using
        </h2>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Pigeonhire
        </p>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Testimonials Section */}
        <div className="flex flex-col gap-8 lg:w-[40%]">
          {/* First Testimonial */}
          <div className="max-w-[350px] mx-auto lg:mx-0">
            <img 
              src={gwala} 
              className="object-cover h-[50px] w-[130px] mb-4" 
              alt="Gwala logo"
            />
            <p className="text-gray-700 text-sm sm:text-md mb-4 tracking-wide">
              Our partnership with Pigeonhire during our campus ambassador
              program was a game-changer. The access to a wide array of
              communities resulted in unprecedented engagement and sales.
            </p>
            <Link to="/register">
              <p className="text-[#F08E1F] flex gap-x-2 items-center cursor-pointer hover:gap-x-3 transition-all">
                <span>Boost your market and brand visibility</span>
                <BsArrowRight className="mt-0.5" />
              </p>
            </Link>
          </div>

          {/* Second Testimonial */}
          <div className="max-w-[350px] mx-auto lg:mx-0">
            <img 
              src={people} 
              className="object-contain h-12 w-[50px] mb-4" 
              alt="People icon"
            />
            <p className="text-gray-700 text-sm sm:text-md mb-4">
              As a community leader, the visibility model has been transformative.
              We've partnered with businesses that truly resonate with our audience,
              enhancing both our community's value and our collaboration.
            </p>
            <Link to="/communities">
              <p className="text-[#F08E1F] flex gap-x-2 items-center cursor-pointer hover:gap-x-3 transition-all">
                <span>Get connected to your tribe</span>
                <BsArrowRight className="mt-0.5" />
              </p>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 lg:w-[60%]">
          {/* Stat Cards */}
          <div className="bg-white shadow-lg rounded-lg px-4 py-6 sm:py-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow">
            <img 
              src={abstract2} 
              className="object-contain h-12 w-[50px] mb-4" 
              alt="Communities icon"
            />
            <p className="font-semibold text-xl sm:text-2xl mb-2">600+</p>
            <p className="font-medium text-lg sm:text-xl">Community Connections</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg px-4 py-6 sm:py-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow">
            <img 
              src={abstract} 
              className="object-contain h-12 w-[50px] mb-4" 
              alt="Campaigns icon"
            />
            <p className="font-semibold text-xl sm:text-2xl mb-2">100+</p>
            <p className="font-medium text-lg sm:text-xl">Successful Campaigns</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg px-4 py-6 sm:py-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow">
            <img 
              src={abstract3} 
              className="object-contain h-12 w-[50px] mb-4" 
              alt="Growth icon"
            />
            <p className="font-semibold text-xl sm:text-2xl mb-2">10%</p>
            <p className="font-medium text-lg sm:text-xl">Growth</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg px-4 py-6 sm:py-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow">
            <img 
              src={abstract4} 
              className="object-contain h-12 w-[50px] mb-4" 
              alt="Communities icon"
            />
            <p className="font-semibold text-xl sm:text-2xl mb-2">10k+</p>
            <p className="font-medium text-lg sm:text-xl">Micro Communities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowBusinessThrive;