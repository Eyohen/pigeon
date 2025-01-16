import React, { useState, useEffect } from "react";
import { URL } from '../url';
import axios from 'axios';
import check from "../assets/orangecheck.png";
import close from "../assets/landingpage/close.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Navbar2 from "./Navbar2";

const InnerSwitchPremium = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [loading, setLoading] = useState(false);
  const [prices, setPrices] = useState({
    monthly: '4.99',
    quarterly: '23.95',
    annually: '41.92'
  });

  // Currency symbol mapping
  const currencySymbols = {
    'USD': '$',
    'CAD': '$',
    'GBP': '£',
    'NGN': '₦'
  };

  const fetchCurrencies = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${URL}/api/currencies`);
      setCurrencies(res.data);
      
      // Set initial prices based on USD
      const usdPrices = res.data.find(curr => curr.currency === 'USD');
      if (usdPrices) {
        setPrices({
          monthly: usdPrices.monthly,
          quarterly: usdPrices.quarterly,
          annually: usdPrices.annually
        });
      }
    } catch (error) {
      console.error("Error fetching currencies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setSelectedCurrency(newCurrency);
    
    // Update prices based on selected currency
    const selectedPrices = currencies.find(curr => curr.currency === newCurrency);
    if (selectedPrices) {
      setPrices({
        monthly: selectedPrices.monthly,
        quarterly: selectedPrices.quarterly,
        annually: selectedPrices.annually
      });
    }
  };

  const CurrencySelector = () => (
    <select 
      value={selectedCurrency} 
      onChange={handleCurrencyChange} 
      className="border border-[#F08E1F] text-black bg-white px-2 py-1 rounded-2xl flex w-[190px] text-sm"
    >
      {currencies.map(curr => (
        <option key={curr.id} value={curr.currency}>
          {curr.currency === 'USD' ? 'United States Dollars($)' :
           curr.currency === 'CAD' ? 'Canadian Dollars($)' :
           curr.currency === 'GBP' ? 'British Pounds(£)' :
           curr.currency === 'NGN' ? 'Naira(₦)' : curr.currency}
        </option>
      ))}
    </select>
  );

  return (
    <div className="flex-1 font-nunito">
      <Navbar2 />
      {/* <div className="bg-[#F08E1F33] py-12 mt-16">
        <p className="text-6xl font-semibold text-center">
          Pigeonhire Pricing and Plans
        </p>
      </div> */}

      <div className="flex flex-col md:flex-row justify-center gap-x-9 mt-12 px-[120px]">
        {/* Essentials Card */}
        <div className="w-[400px]">
          <div className="bg-[#F3D8A766] py-6 rounded">
            <div className="flex justify-between px-4">
              <p className="text-2xl font-bold">Essentials</p>
              <CurrencySelector />
            </div>
            <p className="text-lg tracking-tighter px-4">Monthly Subscription</p>
          </div>
          <div className="shadow-xl px-[20px] py-6">
            <p className="text-2xl font-semibold text-center">
              {currencySymbols[selectedCurrency]}{prices.monthly}
            </p>
            {/* Rest of the Essentials card content */}
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

        {/* Premier Card */}
        <div className="bg-[#201327] text-white w-[400px] rounded">
          <div className="py-6">
            <div className="flex justify-between px-4">
              <p className="text-2xl font-bold">Premier</p>
              <CurrencySelector />
            </div>
            <p className="text-lg px-4 tracking-tighter">1 Year Subscription</p>
          </div>
          <div className="shadow-xl px-[20px] py-6">
            <p className="text-2xl font-semibold text-center">
              {currencySymbols[selectedCurrency]}{prices.annually}
            </p>
            {/* Rest of the Premier card content */}
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

        {/* Pro Card */}
        <div className="w-[400px]">
          <div className="bg-[#F3D8A766] py-6 rounded">
            <div className="flex justify-between px-4">
              <p className="text-2xl font-medium">Pro</p>
              <CurrencySelector />
            </div>
            <p className="text-lg px-4 tracking-tighter">6-months Subscription</p>
          </div>
          <div className="shadow-xl px-[20px] py-6">
            <p className="text-2xl font-semibold text-center">
              {currencySymbols[selectedCurrency]}{prices.quarterly}
            </p>
            {/* Rest of the Pro card content */}
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

    </div>
  );
};

export default InnerSwitchPremium;
