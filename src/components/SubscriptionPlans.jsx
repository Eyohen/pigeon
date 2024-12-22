import React, {useState, useEffect} from 'react'
import Navbar2 from './Navbar2'
import { IoIosSquareOutline } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { IoMdSquareOutline,IoMdSquare  } from "react-icons/io";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from "../url";
import axios from "axios";
import { useAuth } from '../context/AuthContext';

const SubscriptionPlans = () => {
    const navigate = useNavigate()
    const communityId = useParams().id
    const [community, setCommunity] = useState([])
    const { user } = useAuth()
    const [currencies, setCurrencies] = useState([])
    const [userCurrencyData, setUserCurrencyData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchCommunity = async () => {
      try{
        const res = await axios.get(URL+"/api/visible/"+communityId)
        console.log("this is browser community henry",res.data)
        setCommunity(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
  
    useEffect(()=>{
      fetchCommunity()
  
    },[communityId])

    const fetchCurrencies = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${URL}/api/currencies`)
        console.log('currency', res.data)
        setCurrencies(res.data)
  
        // find the currency data matching the user's currency
        const userCurrency = res.data.find(c => c.currency === user?.currency)
        setUserCurrencyData(userCurrency || null)
      } catch (error) {
        console.error("Error fetching currencies:", error)
      } finally {
        setLoading(false)
      }
    }
  
    useEffect(() => {
      fetchCurrencies()
    }, [user?.currency])
  
    const formatPrice = (price) => {
      if (price === undefined || price === null) return 'N/A'
      return parseFloat(price).toFixed(2)
    }
  
    if (loading) {
      return <div>Loading...</div>
    }
  
    if (!userCurrencyData) {
      return <div>No pricing data available for your currency.</div>
    }

    const numberFormatter = new Intl.NumberFormat('en-US');


  return (

         <div className='flex-1 ml-[300px]'>
        <Navbar2 />

        <div className='flex gap-x-4 ml-12 mt-9 items-center'>
        <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-2)}>Browse Communities</p>
        <IoChevronForward />
        <p className=' text-gray-400 cursor-pointer' onClick={() => navigate(-1)}>{community.name}</p>
        <IoChevronForward />
        <p className='font-semibold cursor-pointer' >Subscription Plans</p>
        </div>

        <p className='ml-12 mt-6 text-3xl'>Subscription Plans</p>

        <div className='flex ml-12 mt-12 space-x-24 text-center'>
            <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'>
                <p className='font-[600]'>Monthly</p>
                <p className='font-bold text-3xl mt-2'>{userCurrencyData.currency} {numberFormatter.format(formatPrice(userCurrencyData.monthly))}</p>
                <p className='mt-2'>- Perfect for users needing flexibility or those testing the platform's capabilities </p>
                <p className='mt-3'>- Unlimited access to the full database </p>
                <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
                <p className='mt-3'>- Vetted connections</p>
                <p className='mt-3'>- Quality ratings</p>
                <p className='mt-3'>- Advanced search</p>
                <button onClick={() => navigate('/paymentpage')} className='mt-[80px] bg-[#F08E1F] px-12 py-2 rounded-full'>Subscribe</button>
            </div>
            <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
               <p className='font-[600]' >Bi-annual</p>
               <p className='font-bold text-3xl mt-2'>{userCurrencyData.currency} {formatPrice(userCurrencyData.quarterly)}</p>
               <p className='mt-2'>- Designed for committed users, offering significant savings over 6 months. </p>
                <p className='mt-3'>- Unlimited access to the full database </p>
                <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
                <p className='mt-3'>- Vetted connections</p>
                <p className='mt-3'>- Quality ratings</p>
                <p className='mt-3'>- Advanced search</p>
                <p className='mt-3'>Save 30% per month</p>
                <button onClick={() => navigate('/paymentpage')} className='mt-12 bg-[#F08E1F] px-12 py-2 rounded-full'>Subscribe</button>
               </div>
            <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
               <p className='font-[600]'>Annual</p>
               <p className='font-bold text-3xl mt-2'>{userCurrencyData.currency} {formatPrice(userCurrencyData.annually)}</p>
               <p className='mt-2'>- Designed for committed users, this plan offers substantial savings for a medium-term strategy. </p>
                <p className='mt-3'>- Unlimited access to the full database </p>
                <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
                <p className='mt-3'>- Vetted connections</p>
                <p className='mt-3'>- Quality ratings</p>
                <p className='mt-3'>- Advanced search</p>
                <p className='mt-3'>Save 50% per month</p>
                <button onClick={() => navigate('/paymentpage')} className='mt-[29px] bg-[#F08E1F] px-12 py-2 rounded-full mb-2'>Subscribe</button>
               </div>
        </div>

<div className='mb-12'></div>
    </div>
  )
}

export default SubscriptionPlans