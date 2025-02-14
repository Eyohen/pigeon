import React, { useState, useEffect } from "react";
import { URL } from '../url';
import axios from 'axios';
import check from "../assets/orangecheck.png";
import close from "../assets/landingpage/close.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useAuth } from '../context/AuthContext';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import { AiFillAndroid } from 'react-icons/ai';

const Pricing = () => {
    const { user } = useAuth()
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  const [prices, setPrices] = useState({
    monthly: '4.99',
    quarterly: '23.95',
    annually: '41.92'
  });
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
  
    const userId = user?.id;
    const fname = user?.fname;

  // Currency symbol mapping
  const currencySymbols = {
    'USD': '$',
    'CAD': '$',
    'EUR': '€',
    'GBP': '£',
    'NGN': '₦',
    'AUD': '$',
    'ZMW': 'ZK',
    'INR': '₹',
  };

  const fetchCurrencies = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${URL}/api/currencies`);
      console.log('see currencies', res.data)
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
           curr.currency === 'EUR' ? 'European Euros(€)' :
           curr.currency === 'AUD' ? 'Australian Dollars($)' :
           curr.currency === 'ZMW' ? 'Zambian Kwacha(ZK)' :
           curr.currency === 'INR' ? 'Indian Rupees(₹)' :
           curr.currency === 'NGN' ? 'Naira(₦)' : curr.currency}
        </option>
      ))}
    </select>
  );

  const formatPrice = (price) => {
    // Convert to string for consistency
    const numStr = typeof price === 'string' ? price : price.toString();
    
    // Split into whole and decimal parts
    const [whole, decimal] = numStr.split('.');
    
    // Add commas to whole number part
    const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Return with decimal if it exists
    return decimal ? `${withCommas}.${decimal}` : withCommas;
  };


  const makeSubscription = async (cardType) => {

    // Check if usr email exists
    if(!user?.email){
      //Navigate to register page if no email
      window.location.href = '/register';
      return;
    }
    setIsLoading(true);
    try {
      let subscriptionAmount;
      let planType;

      switch (cardType) {
        case 'essentials':
          subscriptionAmount = prices.monthly;
          planType = 'monthly';
          break;
        case 'pro':
          subscriptionAmount = prices.quarterly;
          planType = 'quarterly';
          break;
        case 'premier':
          subscriptionAmount = prices.annually;
          planType = 'annual';
          break;
        default:
          throw new Error('Invalid card type');
      }

      // Get checkout URL from backend
      const response = await axios.post(`${URL}/api/subpurchases/create-checkout-session`, {
        firstName: fname,
        amount: subscriptionAmount,
        userId: userId,
        currency: selectedCurrency,
        type: planType,
        email: user?.email
      });

      // Redirect to Stripe Checkout
      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        throw new Error('No checkout URL received');
      }

    } catch (error) {
      setIsLoading(false);
      console.error("Error subscribing:", error);
      toast.error(error.response?.data?.error || 'Failed to initialize payment');
    }
  };

  const toastStyles = {
    success: {

      duration: 10000,

      iconTheme: {
        primary: 'white',
        secondary: '#4CAF50',
      },
      style: {

        background: "green",
        color: "whitesmoke",
        icon: <AiFillAndroid background-color="whitesmoke" color='green' />,
      },
    },
    error: {
      duration: 10000,
      style: {
        background: '#F44336',
        color: 'white',
        fontWeight: 'bold',
      },
      iconTheme: {
        primary: 'white',
        secondary: '#F44336',
      },
    },
  };

  return (
    <div className="bg-gray-100 font-nunito">
      <Navbar />
      <div className="bg-[#F08E1F33] py-8 sm:py-12 mt-16">
        <p className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-center px-4">
          Pigeonhire Pricing and Plans
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-x-9 mt-8 lg:mt-12 px-4 lg:px-[120px]">
        {/* Essentials Card */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-[#F3D8A766] py-6 rounded">
            <div className="flex flex-col sm:flex-row justify-between gap-4 px-4">
              <p className="text-2xl font-bold">Essentials</p>
              <CurrencySelector />
            </div>
            <p className="text-lg tracking-tighter px-4">Monthly Subscription</p>
          </div>
          <div className="shadow-xl px-4 sm:px-[20px] py-6">
            <p className="text-2xl font-semibold text-center">
              {currencySymbols[selectedCurrency]}{formatPrice(prices.monthly)}
            </p>
            <div className="flex gap-x-3 mt-6">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">
                <p>Perfect for users needing</p> 
                <p>flexibility or those testing the</p>
                <p>platform's capabilities</p>
              </p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">
                <p>Unlimited access to the full</p>
                <p>database.</p>
              </p>
            </div>
            <div className="flex mt-4 gap-x-3">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">
                <p>Full database access with</p>
                <p>intelligent matchmaking and</p>
                <p>insights</p>
              </p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Vetted connections</p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Quality ratings</p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Advanced search</p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={close} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Save 0% per month</p>
            </div>
            <div className="flex justify-center mt-8">
              <button onClick={() => makeSubscription('essentials')} className="bg-[#F08E1F] w-full lg:w-[400px] text-white rounded-full px-6 py-4">
              {isLoading ? 'transacting . . .' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>

        {/* Premier Card */}
        <div className="bg-[#201327] text-white w-full lg:w-[400px] rounded">
          <div className="py-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4 px-4">
              <p className="text-2xl font-bold">Premier</p>
              <CurrencySelector />
            </div>
            <p className="text-lg px-4 tracking-tighter">1 Year Subscription</p>
          </div>
          <div className="shadow-xl px-4 sm:px-[20px] py-6">
            <p className="text-2xl font-semibold text-center">
              {currencySymbols[selectedCurrency]}{formatPrice(prices.annually)}
            </p>
            <div className="flex gap-x-3 mt-6">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">
                <p>Designed for committed users,</p>
                <p>this plan offers substantial</p>
                <p>savings for a medium-term</p>
                <p>strategy.</p>
              </p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">
                <p>Unlimited access to the full</p> 
                <p>database.</p>
              </p>
            </div>
            <div className="flex mt-4 gap-x-3">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">
                <p>Full database access with</p>
                <p>intelligent matchmaking and</p>
                <p>insights</p>
              </p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Vetted connections</p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Quality ratings</p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Advanced search</p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Save 15% per month</p>
            </div>
            <div className="flex justify-center mt-8">
              <button onClick={() => makeSubscription('premier')} className="bg-[#F08E1F] w-full lg:w-[400px] text-white rounded-full px-6 py-4">
              {isLoading ? 'transacting . . .' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>

        {/* Pro Card */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-[#F3D8A766] py-6 rounded">
            <div className="flex flex-col sm:flex-row justify-between gap-4 px-4">
              <p className="text-2xl font-medium">Pro</p>
              <CurrencySelector />
            </div>
            <p className="text-lg px-4 tracking-tighter">6-months Subscription</p>
          </div>
          <div className="shadow-xl px-4 sm:px-[20px] py-6">
            <p className="text-2xl font-semibold text-center">
              {currencySymbols[selectedCurrency]}{formatPrice(prices.quarterly)}
            </p>
            <div className="flex gap-x-3 mt-6">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">
                <p>Designed for committed users,</p>
                <p>offering significant</p>
                <p>savings over 6 months</p>
              </p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">
                <p>Unlimited access to the full</p> 
                <p>database.</p>
              </p>
            </div>
            <div className="flex mt-4 gap-x-3">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">
                <p>Full database access with</p>
                <p>intelligent matchmaking and</p>
                <p>insights</p>
              </p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Vetted connections</p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Quality ratings</p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Advanced search</p>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <img src={check} className="w-6 h-6 flex-shrink-0" />
              <p className="text-base lg:text-lg">Save 30% per month</p>
            </div>
            <div className="flex justify-center mt-8">
              <button onClick={() => makeSubscription('pro')} className="bg-[#F08E1F] w-full lg:w-[400px] text-white rounded-full px-6 py-4">
              {isLoading ? 'transacting . . .' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
