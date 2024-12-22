// import React, { useState, useEffect } from 'react'
// import Navbar2 from './Navbar2'
// import { useNavigate } from 'react-router-dom';
// import { URL } from '../url';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import toast, { Toaster } from "react-hot-toast";
// import { PaystackButton } from 'react-paystack';

// const InnerSwitchPremium = () => {
//   const { user } = useAuth()
//   const navigate = useNavigate()
//   const [currencies, setCurrencies] = useState([])
//   const [userCurrencyData, setUserCurrencyData] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [isLoading, setIsLoading] = useState(false)
//   const [price, setPrice] = useState('')
//   const [firstName, setFirstName] = useState('')
//   const [monthly, setMonthly] = useState('')
//   const [quarterly, setQuarterly] = useState('')
//   const [annually, setAnnually] = useState('')
//   const [currency, setCurrency] = useState('')
//   const [type, setType] = useState('')
//   const [amount, setAmount] = useState('')

//   const fetchCurrencies = async () => {
//     try {
//       setLoading(true)
//       const res = await axios.get(`${URL}/api/currencies`)
//       console.log('currency', res.data)
//       setCurrencies(res.data)

//       // find the currency data matching the user's currency
//       const userCurrency = res.data.find(c => c.currency === user?.currency)
//       setUserCurrencyData(userCurrency || null)
//     } catch (error) {
//       console.error("Error fetching currencies:", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchCurrencies()
//   }, [user?.currency])

//   const formatPrice = (price) => {
//     if (price === undefined || price === null) return 'N/A'
//     return parseFloat(price).toFixed(2)
//   }

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (!userCurrencyData) {
//     return <div>No pricing data available for your currency.</div>
//   }

// const numberFormatter = new Intl.NumberFormat('en-US')


// const handleSubscriptionPayment = async () => {
//   setIsLoading(true)
 
//   try {

//       const res = await axios.post(`${URL}/api/subpurchases/create`, {type,currency,firstName,amount,userId,email});
//       if(res.status === "200"){
//         setIsLoading(false)
//         console.log("Purchase successful", res.data);
//         toast.success('Purchase is Successful', { duration: 5000 });

//       }
//   } catch (error) {
//       console.error("Error making purchase:", error);
//       toast.error(`Failed to complete purchase: ${error.response?.data?.message || error.message}`);
//   }
// };

// const publicKey = "pk_test_ee89f7697399182fa170280789b3f1b945c71bed"

// const paymentProps = {
//     amount: price * 100,
  
//     email:user?.email,
//     firstName:fname,
//     userId:user?.id,

//     publicKey,
//     text:"Buy Now",
//     onSuccess: ({ reference }) => {
//       alert(
//         `Your purchase was successful! Transaction reference: ${reference}`
//       );
//       handleSubscriptionPayment();
//     },
//   }

//   return (
//     <div className='flex-1 ml-[300px]'>
//       {/* <Navbar2 /> */}

//       <p className='ml-12 mt-6 text-3xl'>Subscription Plans</p>
      
//       <Toaster position="top-right" reverseOrder={false} />

//       <div className='flex ml-12 mt-12 space-x-24 text-center'>
//         <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'>
//           <p className='font-[600]'>Monthly</p>
//           <p className='font-bold text-3xl mt-8'>{userCurrencyData.currency} {numberFormatter.format(formatPrice(userCurrencyData.monthly))}</p>
//           <p className='mt-4'>- Perfect for users needing flexibility or those testing the platform's capabilities </p>
//                  <p className='mt-3'>- Unlimited access to the full database </p>
//                  <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
//                  <p className='mt-3'>- Vetted connections</p>
//                  <p className='mt-3'>- Quality ratings</p>
//                  <p className='mt-3'>- Advanced search</p>
//                  <PaystackButton {...paymentProps} disabled={isLoading} className='mt-[80px] bg-[#F08E1F] text-white px-12 py-2 rounded-full'>Subscribe</PaystackButton>
//         </div>
//         <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
//           <p className='font-[600]' >Bi-annual</p>
//           <p className='font-bold text-3xl mt-8'>{userCurrencyData.currency} {formatPrice(userCurrencyData.quarterly)}</p>
//           <p className='mt-4'>- Designed for committed users, offering significant savings over 6 months. </p>
//                  <p className='mt-3'>- Unlimited access to the full database </p>
//                  <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
//                  <p className='mt-3'>- Vetted connections</p>
//                  <p className='mt-3'>- Quality ratings</p>
//                  <p className='mt-3'>- Advanced search</p>
//                  <p className='mt-3'>Save 30% per month</p>
//                  <PaystackButton className='mt-12 bg-[#F08E1F] text-white px-12 py-2 rounded-full'>Subscribe</PaystackButton>
//         </div>
//         <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
//           <p className='font-[600]'>Annual</p>
//           <button className='bg-black rounded-full px-2 text-white items-center'>Popular</button>
//           <p className='font-bold text-3xl mt-2'>{userCurrencyData.currency} {formatPrice(userCurrencyData.annually)}</p>
//           <p className='mt-4'>- Designed for committed users, this plan offers substantial savings for a medium-term strategy. </p>
//                  <p className='mt-3'>- Unlimited access to the full database </p>
//                  <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
//                  <p className='mt-3'>- Vetted connections</p>
//                  <p className='mt-3'>- Quality ratings</p>
//                  <p className='mt-3'>- Advanced search</p>
//                  <p className='mt-3'>Save 50% per month</p>
//                  <PaystackButton {...paymentProps} className='mt-[24px] bg-[#F08E1F] text-white px-12 py-2 rounded-full mb-2'>Subscribe</PaystackButton>
//         </div>
//       </div>
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
import toast, { Toaster } from "react-hot-toast";
import { PaystackButton } from 'react-paystack';

const InnerSwitchPremium = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [currencies, setCurrencies] = useState([])
  const [userCurrencyData, setUserCurrencyData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  console.log("user id", user?.id)

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

  // const formatPrice = (price) => {
  //   if (price === undefined || price === null) return 'N/A'
  //   return parseFloat(price).toFixed(2)
  // }
  const formatPrice = (price) => {
    if (price === undefined || price === null) return 'N/A'
    return numberFormatter.format(parseFloat(price).toFixed(2))
  }

  const numberFormatter = new Intl.NumberFormat('en-US')

  const handleSubscriptionPayment = async (type, amount) => {
    setIsLoading(true)
   
    try {
      const res = await axios.post(`${URL}/api/subpurchases/create`, {
        type,
        currency: userCurrencyData.currency,
        firstName: user?.fname,
        amount,
        userId: user?.id,
        email: user?.email
      });
      if(res.status === 200){
        setIsLoading(false)
        console.log("Purchase successful", res.data);
        toast.success('Subscription purchase is successful', { duration: 5000 });
        // You might want to redirect the user or update the UI here
      }
    } catch (error) {
      console.error("Error making purchase:", error);
      toast.error(`Failed to complete purchase: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsLoading(false)
    }
  };

  const publicKey = "pk_test_ee89f7697399182fa170280789b3f1b945c71bed"

  const getPaymentProps = (type, amount) => ({
    amount: amount * 100, // Paystack expects amount in kobo
    email: user?.email,
    firstname: user?.fname,
    metadata: {
      userId: user?.id,
      subscriptionType: type
    },
    publicKey,
    text: "Subscribe",
    onSuccess: ({ reference }) => {
      toast.success(`Your ${type} subscription was successful! Transaction reference: ${reference}`);
      handleSubscriptionPayment(type, amount);
    },
    onClose: () => toast.error("Subscription process cancelled.")
  });

  if (loading) {
    return <div>Loading...</div>
  }

  if (!userCurrencyData) {
    return <div>No pricing data available for your currency.</div>
  }

  return (
    <div className='flex-1 ml-[300px]'>
      <p className='ml-12 mt-6 text-3xl'>Subscription Plans</p>
      
      <Toaster position="top-right" reverseOrder={false} />

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
          <PaystackButton {...getPaymentProps('monthly', userCurrencyData.monthly)} disabled={isLoading} className='mt-[80px] bg-[#F08E1F] text-white px-12 py-2 rounded-full'/>
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
          <PaystackButton {...getPaymentProps('quarterly', userCurrencyData.quarterly)} disabled={isLoading} className='mt-12 bg-[#F08E1F] text-white px-12 py-2 rounded-full'/>
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
          <PaystackButton {...getPaymentProps('annually', userCurrencyData.annually)} disabled={isLoading} className='mt-[24px] bg-[#F08E1F] text-white px-12 py-2 rounded-full mb-2'/>
        </div>
      </div>
    </div>
  )
}

export default InnerSwitchPremium