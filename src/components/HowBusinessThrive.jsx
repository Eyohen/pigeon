import React from "react";
import gwala from "../assets/gwalaimage.png";
import people from "../assets/threepeople.png";
import abstract from "../assets/abstract1.png";
import abstract2 from "../assets/abstract2.png";
import abstract3 from "../assets/abstract3.png";
import abstract4 from "../assets/abstract4.png";
import { BsArrowRight } from "react-icons/bs";

const HowBusinessThrive = () => {
  return (
    <div className="py-9 bg-white px-4 md:px-[120px] font-nunito">
      <p className="text-center text-6xl font-bold">
        How businesses are thriving using
      </p>
      <p className="text-center text-6xl font-bold mb-6">Pigeonhire</p>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <div className="max-w-[350px]">
            <img src={gwala} className="object-cover h-[50px] w-[130px]" />
            <p className="text-gray-700 text-md mt-2 tracking-wide">
              Our partnership with Pigeonhire during our campus ambassador
              program was a game-changer. The access to a wide array of
              communities resulted in unprecedented engagement and sales.
            </p>
            <p className="text-[#F08E1F] flex gap-x-2 items-center">
              Boost your market and brand visibility{" "}
              <BsArrowRight color="#F08E1F" />
            </p>
          </div>
          <div className="max-w-[350px] mt-9">
            <img src={people} className="object-contain h-12 w-[50px]" />
            <p className="text-gray-700 text-md mt-2">
              As a community leader, the PAYG model has been transformative.
              We've partnered with businesses that truly resonate with our
              audience, enhancing both our community's value and our
              collaboration
            </p>
            <p className="text-[#F08E1F] flex gap-x-2 items-center">
              Get connected to your tribe <BsArrowRight color="#F08E1F" />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-9">
          <div className="bg-white shadow-lg px-3 py-9 max-w-[320px] flex flex-col items-center justify-center max-h-[400px]">
            <img src={abstract2} className="object-contain h-12 w-[50px]" />
            <p className="font-semibold text-2xl">600+</p>
            <p className="font-medium text-xl">Community Connections</p>
          </div>

          <div className="bg-white shadow-lg px-3 py-9 max-w-[320px] flex flex-col items-center justify-center max-h-[400px]">
            <img src={abstract} className="object-contain h-12 w-[50px]" />
            <p className="font-semibold text-2xl">600+</p>
            <p className="font-medium text-xl">Community Connections</p>
          </div>

          <div className="bg-white shadow-lg px-3 py-9 max-w-[320px] flex flex-col items-center justify-center max-h-[400px]">
            <img src={abstract3} className="object-contain h-12 w-[50px]" />
            <p className="font-semibold text-2xl">600+</p>
            <p className="font-medium text-xl">Community Connections</p>
          </div>

          <div className="bg-white shadow-lg px-3 py-9 max-w-[320px] flex flex-col items-center justify-center max-h-[400px]">
            <img src={abstract4} className="object-contain h-12 w-[50px]" />
            <p className="font-semibold text-2xl">600+</p>
            <p className="font-medium text-xl">Community Connections</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowBusinessThrive;
