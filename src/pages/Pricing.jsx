import React, {useState} from "react";
import Navbar from "../components/Navbar";
import { PiCheckCircleDuotone } from "react-icons/pi";
import check from "../assets/orangecheck.png";
import close from "../assets/landingpage/close.svg";
import Footer from "../components/footer";
import { MdKeyboardArrowDown } from "react-icons/md";

const symbols = [

  {id:1,
   item:'United States Dollars($)',
  },
  {id:2,
  item:'Canadian Dollars($)',
  },
  {id:3,
  item:'British Pounds(£)',
  },
  {id:4,
  item:'Chinese yen(¥)',
  },
  {id:5,
  item:'Naira(₦)',
  },


]

const Pricing = () => {
  const [show, setShow] = React.useState(false);
  const [symbol, setSymbol] = useState('')
  const [selectedSymbol, setSelectedSymbol] = useState('')

  const handleSymbols = (e) => {
    setSelectedSymbol(e.target.value);
  }

  const handleClose = () => setShow(true);
  const handleShow = () => setShow(false);

  return (
    <>
      <div className="bg-gray-100 font-nunito">
        <Navbar />

        <div className="bg-[#F08E1F33] py-12 mt-16 ">
          <p className="text-6xl font-semibold text-center">
           Pigeonhire Pricing and Plans
          </p>
        </div>

       

          <div className="flex flex-col md:flex-row justify-center gap-x-9 mt-12 px-[120px]">
            <div className="w-[400px]">
              <div className="bg-[#F3D8A766] py-6 rounded">

                <div className="flex justify-between px-4">
                <p className="text-2xl font-bold">Essentials</p>
 
                <select value={selectedSymbol} onChange={handleSymbols} className='border border-[#F08E1F] bg-white px-2 py-1 rounded-2xl flex w-[190px] text-sm'>

            {symbols.map(item => (
              <option key={item.id} value={item.item}>{item.item}</option>
            ) )}
          </select>
                </div>

                <p className="text-lg tracking-tighter px-4">Monthly Subscription</p>
              </div>
              <div className="shadow-xl px-[20px] py-6">
                <p className="text-2xl font-semibold text-center">$4.99</p>
                <div className="flex gap-x-3 mt-6">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg">
                    <p>Perfect for users needing</p> 
                    <p>flexibility or those testing the</p>
                    platform's capabilities
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    <p>Unlimited access to the full</p>
                    <p>database.</p>
                  </p>
                </div>
                <div className="flex mt-4 gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg">
                    <p>Full database access with</p>
                    <p>intelligent matchmaking and</p>
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
          
            <div className="bg-[#201327] text-white w-[400px] rounded">
              <div className="py-6">

              <div className="flex justify-between px-4">
                <p className="text-2xl font-bold text-center text-white">Premier</p>
                <select value={selectedSymbol} onChange={handleSymbols} className='border border-[#F08E1F] bg-white px-2 py-1 rounded-2xl flex w-[190px] text-sm text-black'>

{symbols.map(item => (
  <option key={item.id} value={item.item}>{item.item}</option>
) )}
</select>
                </div>

                <p className="text-lg px-4 tracking-tighter">
                  1 Year Subscription
                </p>
              </div>
              <div className="shadow-xl px-[20px] py-6">
                <p className="text-2xl font-semibold text-center">$41.92</p>
                <div className="flex gap-x-3 mt-6">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg">
                    <p>Designed for committed users,</p>
                    <p>this plan offers substantial</p>
                    <p>savings for a medium-term</p>
                    strategy.
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                    <p>Unlimited access to the full</p> 
                    database.
                  </p>
                </div>
                <div className="flex mt-4 gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg">
                    <p>Full database access with</p>
                    <p>intelligent matchmaking and</p>
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

            <div className="w-[400px]">
              <div className="bg-[#F3D8A766] py-6 rounded">

              <div className="flex justify-between px-4">
                <p className="text-2xl font-medium ">Pro</p>

                <select value={selectedSymbol} onChange={handleSymbols} className='border border-[#F08E1F] bg-white px-2 py-1 rounded-2xl flex w-[190px] text-sm text-black'>
              {symbols.map(item => (
               <option key={item.id} value={item.item}>{item.item}</option>
) )}
</select>
                </div>

                <p className="text-lg px-4 tracking-tighter">
                  6-months Subscription
                </p>
              </div>
              <div className="shadow-xl px-[20px] py-6">
                <p className="text-2xl font-semibold text-center">$23.95</p>
                <div className="flex gap-x-3 mt-6">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg">
                  <p>Designed for committed users,</p>
                    <p>offering significant</p>
                    <p>savings over 6 months</p>
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg mt-4">
                  <p>Unlimited access to the full</p> 
                  database.
                  </p>
                </div>
                <div className="flex mt-4 gap-x-3">
                  <img src={check} className="w-6 h-6" />
                  <p className="text-lg ">
                  <p>Full database access with</p>
                    <p>intelligent matchmaking and</p>
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
         
          </div>
      
          <Footer />
      </div>

    </>
  );
};

export default Pricing;
