import React from "react";
import Navbar from "../components/Navbar";
import { PiCheckCircleDuotone } from "react-icons/pi";
import check from "../assets/orangecheck.png";
import close from "../assets/landingpage/close.svg";
import Footer from "../components/Footer";

const Pricing = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(true);
  const handleShow = () => setShow(false);

  return (
    <>
      <div className="bg-gray-100 font-nunito">
        <Navbar />

        <div className="bg-[#FAD5A5] py-12 mt-16 ">
          <p className="text-6xl font-semibold text-center">
            Pricing and Plans
          </p>
        </div>

        <div className="grid grid-cols-2 mt-12 gap-x-24 gap-y-12 px-[120px]">
          {" "}
          <div onClick={handleShow}>
            <div className="bg-[#201327] py-2 px-24"></div>
            <div className="shadow-xl px-[120px] py-2">
              <p className="text-2xl font-semibold text-center">
                To Explore Communities
              </p>
              <p className="text-lg text-center">Subscribe</p>
            </div>
          </div>
          <div onClick={handleClose}>
            <div className="bg-[#201327] py-2 px-24"></div>
            <div className="shadow-xl bg-[#F3D8A7] px-[120px] py-2">
              <p className="text-2xl font-semibold text-center">
                Find Community Owners
              </p>
              <p className="text-lg text-center">Pay-as-you-Go</p>
            </div>
          </div>
        </div>

        {show ? (
          <div className="px-[120px] mt-10">
            <div>
              <div className="border rounded-2xl">

              <div className="px-20 py-10">

                <div className="flex justify-between border-b border-b-[#E1E1E1] pt-7 pb-4 text-2xl gap-10"> <p>Resource Sharing or Product/Service Testing Post - starts at<span className="font-semibold"> #7,000</span></p> <span className="text-[#F08E1F] bg-[#F08E1F]/10 text-sm px-2 py-1 text-center">Single Promotion</span></div>
                <div className="flex justify-between border-b border-b-[#E1E1E1] pt-7 pb-4 text-2xl gap-10"> <p>Resource Sharing or Product/Service Testing Post - starts at<span className="font-semibold"> #47,000</span></p> <span className="text-[#F08E1F] bg-[#F08E1F]/10 text-sm px-2 py-1 text-center">30 days Promotion</span></div>
                <div className="flex justify-between border-b border-b-[#E1E1E1] pt-7 pb-4 text-2xl"><p>Community Polls and Surveys - starts at <span className="font-semibold"> #7,000</span></p><span className="text-[#F08E1F] bg-[#F08E1F]/10 text-sm px-2 py-1 text-center">Single Promotion</span></div>
                <div className="flex justify-between border-b border-b-[#E1E1E1] pt-7 pb-4 text-2xl gap-10"> <p>Community Polls and Surveys - starts at   <span className="font-semibold">#48,000</span></p><span className="text-[#F08E1F] bg-[#F08E1F]/10 text-sm px-2 py-1 text-center">30 days Promotion</span></div>
                <div className="flex justify-between items-center border-b border-b-[#E1E1E1] pt-7 pb-4 text-2xl"><p>Sponsorship Post (Caption, Videos, Podcast Link, Blog Link, Social<br/> Content Posts  - starts at  <span className="font-semibold">#8,000</span></p> <span className="text-[#F08E1F] bg-[#F08E1F]/10 text-sm px-2 py-1 text-center">Single Promotion</span></div>
                <div className="flex justify-between items-center border-b border-b-[#E1E1E1] pt-7 pb-4 text-2xl "><p>Sponsorship Post (Caption, Videos, Podcast Link, Blog Link, Social Content<br/> Posts  - starts at <span className="font-semibold"> #28,00</span>0</p><span className="text-[#F08E1F] bg-[#F08E1F]/10 text-sm px-2 py-1 text-center">30 days Promotion</span></div>
                <div className="border-b border-b-[#E1E1E1] pt-7 pb-4 text-2xl w-4/5"><p>Partnership: Basic introduction to<span className="text-[#F08E1F] "> Five (5)</span> potential partners based on our interest(s). Access and initiate contact with a curated list of potential partners in interest areas - starts at <span className="font-semibold"> #8,000</span></p> </div>
                <div className=" border-b border-b-[#E1E1E1] pt-7 pb-4 text-2xl w-4/5"><p>Partnership: Basic introduction to <span className="text-[#F08E1F] ">Ten(10) </span>potential partners based on our interest(s). Access and initiate contact with a curated list of potential partners in interest areas -starts at  <span className="font-semibold">#20,000</span></p></div>
                <div className="border-b border-b-[#E1E1E1] pt-7 pb-4 text-2xl w-4/5"><p>Partnership: Basic introduction to <span className="text-[#F08E1F] ">Twenty(20)</span> potential partners based on our interest(s). Access and initiate contact with a curated list of potential partners in interest areas - starts at <span className="font-semibold">#28,000</span></p></div>
              </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 mt-12 gap-x-24 gap-y-12 px-[120px]">
            <div>
              <div className="bg-[#FFE5B4] py-6">
                <p className="text-2xl font-medium text-center">Essentials</p>
                <p className="text-lg text-center tracking-tighter">Monthly</p>
              </div>
              <div className="shadow-xl px-[20px] py-6">
                <p className="text-2xl font-semibold text-center">$4.99</p>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    Perfect for users needing flexibility or those testing the
                    platform's capabilities
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    Unlimited access to the full database.
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    Full database access with intelligent matchmaking and
                    insights
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Vetted connections</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Quality ratings</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Advanced search</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={close} className="w-6 h-6" />
                  <p className="text-lg mt-4">Save 0% per month</p>
                </div>
                <div className="flex justify-center mt-8">
                  <button className="bg-[#F08E1F] w-[400px] text-white rounded-full px-6 py-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#A9A9A9] py-6 ">
                <p className="text-2xl font-medium text-center">Pro</p>
                <p className="text-lg text-center tracking-tighter">
                  6 Months Subscription
                </p>
              </div>
              <div className="shadow-xl px-[20px] py-6">
                <p className="text-2xl font-semibold text-center">$23.95</p>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    Perfect for users needing flexibility or those testing the
                    platform's capabilities
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    Unlimited access to the full database.
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    Full database access with intelligent matchmaking and
                    insights
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Vetted connections</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Quality ratings</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Advanced search</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Save 15% per month</p>
                </div>
                <div className="flex justify-center mt-8">
                  <button className="bg-[#F08E1F] w-[400px] text-white rounded-full px-6 py-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#FFE5B4] py-6 ">
                <p className="text-2xl font-medium text-center">Premier</p>
                <p className="text-lg text-center tracking-tighter">
                  1 year Subscription
                </p>
              </div>
              <div className="shadow-xl px-[20px] py-6">
                <p className="text-2xl font-semibold text-center">$41.92</p>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    Perfect for users needing flexibility or those testing the
                    platform's capabilities
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    Unlimited access to the full database.
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    Full database access with intelligent matchmaking and
                    insights
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Vetted connections</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Quality ratings</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Advanced search</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">Save 30% per month</p>
                </div>

                <div className="flex justify-center mt-8">
                  <button className="bg-[#F08E1F] w-[400px] text-white rounded-full px-6 py-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4"></div>
          </div>
        )}

        <div className="mb-24"></div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
