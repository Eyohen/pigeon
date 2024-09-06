// import React, {useState, useEffect} from 'react'
// import Navbar2 from './Navbar2'
// import { useNavigate } from 'react-router-dom';
// import { URL } from '../url';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';


// const currencySigns = [
//    {
//     id:1,
//     sign:"$"
// },
// {
//   id:2,
//   sign:"₦"
// },
// {
//   id:1,
//   sign:"$"
// },
// {
//   id:1,
//   sign:"$"
// },

// ]

// const InnerSwitchPremium = () => {

//   const {user} = useAuth()
//     const navigate = useNavigate()
//     const [currencies, setCurrencies] = useState([])
//     const [userCurrencyData, setUserCurrencyData] = useState(null)

//     const fetchCurrencies = async () => {
//       try{
//       const res = await axios.get(`${URL}/api/currencies`)
//       console.log('currency', res.data)
//       setCurrencies(res.data)

//       // find the currency data matching the user's currency
//       const userCurrency = res.data.find(c => c.currency === user?.currency)
//       setUserCurrencyData(userCurrency)
//       } catch (error){
//         console.error("Error fetching currencies:", error)
//       }
//     }

//     useEffect(() => {
//       fetchCurrencies()
//     },[])

//     console.log("user currency", user)
//     const userCurrency = user?.currency;

//     const formatPrice = (price) => {
//       return parseFloat(price).toFixed(2)
//     }




//   return (

//          <div className='flex-1 ml-[300px]'>
//         <Navbar2 />

// {/* {currencies?.map((c)=>(
//   <div>{c.}</div>
// ))}
//          */}

       

//         <p className='ml-12 mt-6 text-3xl'>Subscription Plans</p>

//         <div className='flex ml-12 mt-12 space-x-24 text-center'>
//             <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'>
//                 <p className='font-[600]'>Monthly</p>
//                 <p className='font-bold text-3xl mt-8'>{userCurrencyData?.currency} {formatPrice(userCurrencyData?.monthly)}</p>
//                 <p className='mt-4'>- Perfect for users needing flexibility or those testing the platform's capabilities </p>
//                 <p className='mt-3'>- Unlimited access to the full database </p>
//                 <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
//                 <p className='mt-3'>- Vetted connections</p>
//                 <p className='mt-3'>- Quality ratings</p>
//                 <p className='mt-3'>- Advanced search</p>
//                 <button className='mt-[80px] bg-[#F08E1F] px-12 py-2 rounded-full'>Subscribe</button>
//             </div>
//             <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
//                <p className='font-[600]' >Bi-annual</p>
//                <p className='font-bold text-3xl mt-8'>{userCurrencyData?.currency} {formatPrice(userCurrencyData?.quarterly)}</p>
//                <p className='mt-4'>- Designed for committed users, offering significant savings over 6 months. </p>
//                 <p className='mt-3'>- Unlimited access to the full database </p>
//                 <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
//                 <p className='mt-3'>- Vetted connections</p>
//                 <p className='mt-3'>- Quality ratings</p>
//                 <p className='mt-3'>- Advanced search</p>
//                 <p className='mt-3'>Save 30% per month</p>
//                 <button className='mt-12 bg-[#F08E1F] px-12 py-2 rounded-full'>Subscribe</button>
//                </div>
//             <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
//                <p className='font-[600]'>Annual</p>
//                <button className='bg-black rounded-full px-2 text-white items-center'>Popular</button>
//                <p className='font-bold text-3xl mt-2'>{userCurrencyData?.currency} {formatPrice(userCurrencyData?.annually)}</p>
//                <p className='mt-4'>- Designed for committed users, this plan offers substantial savings for a medium-term strategy. </p>
//                 <p className='mt-3'>- Unlimited access to the full database </p>
//                 <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
//                 <p className='mt-3'>- Vetted connections</p>
//                 <p className='mt-3'>- Quality ratings</p>
//                 <p className='mt-3'>- Advanced search</p>
//                 <p className='mt-3'>Save 50% per month</p>
//                 <button className='mt-[24px] bg-[#F08E1F] px-12 py-2 rounded-full mb-2'>Subscribe</button>
//                </div>
//         </div>

//     </div>
//   )
// }

// export default InnerSwitchPremium

import React, { useState, useEffect } from 'react'
import Navbar2 from './Navbar2'
import { useNavigate } from 'react-router-dom';
import { URL } from '../url';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const InnerSwitchPremium = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [currencies, setCurrencies] = useState([])
  const [userCurrencyData, setUserCurrencyData] = useState(null)
  const [loading, setLoading] = useState(true)

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

  return (
    <div className='flex-1 ml-[300px]'>
      <Navbar2 />

      <p className='ml-12 mt-6 text-3xl'>Subscription Plans</p>

      <div className='flex ml-12 mt-12 space-x-24 text-center'>
        <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'>
          <p className='font-[600]'>Monthly</p>
          <p className='font-bold text-3xl mt-8'>{userCurrencyData.currency} {formatPrice(userCurrencyData.monthly)}</p>
          <p className='mt-4'>- Perfect for users needing flexibility or those testing the platform's capabilities </p>
                 <p className='mt-3'>- Unlimited access to the full database </p>
                 <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
                 <p className='mt-3'>- Vetted connections</p>
                 <p className='mt-3'>- Quality ratings</p>
                 <p className='mt-3'>- Advanced search</p>
                 <button onClick={() => navigate('/paymentpage')}  className='mt-[80px] bg-[#F08E1F] px-12 py-2 rounded-full'>Subscribe</button>
        </div>
        <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
          <p className='font-[600]' >Bi-annual</p>
          <p className='font-bold text-3xl mt-8'>{userCurrencyData.currency} {formatPrice(userCurrencyData.quarterly)}</p>
          <p className='mt-4'>- Designed for committed users, offering significant savings over 6 months. </p>
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
          <button className='bg-black rounded-full px-2 text-white items-center'>Popular</button>
          <p className='font-bold text-3xl mt-2'>{userCurrencyData.currency} {formatPrice(userCurrencyData.annually)}</p>
          <p className='mt-4'>- Designed for committed users, this plan offers substantial savings for a medium-term strategy. </p>
                 <p className='mt-3'>- Unlimited access to the full database </p>
                 <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
                 <p className='mt-3'>- Vetted connections</p>
                 <p className='mt-3'>- Quality ratings</p>
                 <p className='mt-3'>- Advanced search</p>
                 <p className='mt-3'>Save 50% per month</p>
                 <button onClick={() => navigate('/paymentpage')} className='mt-[24px] bg-[#F08E1F] px-12 py-2 rounded-full mb-2'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default InnerSwitchPremium