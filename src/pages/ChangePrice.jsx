// import React, { useState, useEffect } from 'react'
// import AdminSidebar from '../components/AdminSidebar'
// import CustomDropdown from '../components/CustomDropDown'
// import usflag from '../assets/usflag.png'
// import cadflag from '../assets/cadflag.png'
// import gbpflag from '../assets/gbpflag.jpeg'
// import ngnflag from '../assets/ngnflag.png'
// import { useNavigate, Link } from 'react-router-dom'
// import { SlArrowLeft } from "react-icons/sl";
// import { URL } from '../url'
// import axios from 'axios'
// import toast, {Toaster} from 'react-hot-toast';
// import { AiFillAndroid } from 'react-icons/ai';

// const currencies = [
//     {
//       id: 1,
//       currency: "USD",
//       image:usflag
//   },
//   {
//       id: 2,
//       currency: "GBP",
//       image:gbpflag
      
//   },
//   {
//     id: 3,
//     currency: "CAD",
//     image:cadflag
//   },
//   {
//     id: 4,
//     currency: "NGN",
//     image:ngnflag
//   },
  
//   ]

// const ChangePrice = () => {
//     const navigate = useNavigate()
//     const [selectedCurrency, setSelectedCurrency] = useState('')
//     const [prices, setPrices] = useState([])
//     const [currentPrice, setCurrentPrice] = useState({
//         monthly: '',
//         quarterly: '',
//         annually: ''
//     })
//     const [isLoading, setIsLoading] = useState(false)

//     const fetchPrices = async () => {
//         try {
//             const res = await axios.get(`${URL}/api/currencies`)
//             console.log("prices", res.data)
//             setPrices(res?.data || [])
//         } catch (error) {
//             console.error("Error fetching prices:", error)
//         }
//     }

//     useEffect(() => {
//         fetchPrices()
//     }, [])

//     useEffect(() => {
//         if (selectedCurrency && prices?.length > 0) {
//             const selected = prices?.find(price => price?.currency === selectedCurrency)
//             if (selected) {
//                 setCurrentPrice({
//                     monthly: selected?.monthly,
//                     quarterly: selected?.quarterly,
//                     annually: selected?.annually
//                 })
//             }
//         }
//     }, [selectedCurrency, prices])

//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setCurrentPrice(prev => ({ ...prev, [name]: value }))
//     }

//     const EditPrices = async () => {
    
//         try {
//             const selected = prices?.find(price => price?.currency === selectedCurrency)
//             setIsLoading(true)
//             if (selected) {
//                 const res = await axios.put(`${URL}/api/currencies/${selected.id}`, currentPrice)
//                 if(res){
//                     setIsLoading(false)
//                     toast.success('Price changed successfully!!', toastStyles.success)
//                 }
//                 console.log("Updated prices", res.data)
//                 // Refresh prices after update
//                 fetchPrices()
//             }
//         } catch (error) {
//             console.error("Error updating prices:", error)
//             toast.error('Failed to change price');
//         }
//     }

    
// const toastStyles = {
//     success: {
  
//       duration: 10000,
//       // style: {
//       //   background: '#4CAF50',
//       //   color: 'white',
//       //   fontWeight: 'bold',
//       // },
//       iconTheme: {
//         primary: 'white',
//         secondary: '#4CAF50',
//       },
//         style: {
  
//                  background: "green",
//                  color: "whitesmoke",
//                  icon: <AiFillAndroid background-color="whitesmoke" color='green' />,
//                },
//     },
//     error: {
//       duration: 10000,
//       style: {
//         background: '#F44336',
//         color: 'white',
//         fontWeight: 'bold',
//       },
//       iconTheme: {
//         primary: 'white',
//         secondary: '#F44336',
//       },
//     },
//   };
  

//   return (
//     <div>
//         <AdminSidebar />
//         <div className='flex-1 ml-[400px]'>
//         <Toaster 
//     position="top-right"
//     reverseOrder={false}
//     gutter={8}
//     toastOptions={{
//         duration:9000,
//         style:{
//             borderRadius:'8px',
//             boxShadow:'0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)'
//         }
//     }} 
//      />


//         <div onClick={() => navigate(-1)} className='flex gap-x-3 items-center mt-9 cursor-pointer'><SlArrowLeft /><p>Back</p></div>

//         <p className='text-xl mt-6'>Alter Premium Pricing</p>

//         <p className='text-sm pt-5'>Select Currency</p>
//         <CustomDropdown
//   options={currencies}
//   value={selectedCurrency}
//   onChange={(value) => setSelectedCurrency(value)}
// />

// <p className='mt-6'>Monthly</p>
// <input className='border rounded-md px-2 py-2 w-[400px] border-gray-300' 
// placeholder='0.00'
// name='monthly'
// value={currentPrice.monthly}
// onChange={handleInputChange}
// />

// <p className='mt-6'>Quarterly</p>
// <input className='border rounded-md px-2 py-2 w-[400px] border-gray-300'
//  placeholder='0.00'
//  name='quarterly'
// value={currentPrice.quarterly}
// onChange={handleInputChange}
//  />

// <p className='mt-6'>Annually</p>
// <input className='border rounded-md px-2 py-2 w-[400px] border-gray-300' 
// placeholder='0.00'
// name='annually'
// value={currentPrice.annually}
// onChange={handleInputChange}
// />

// <div className='mt-9'><button onClick={EditPrices} disabled={!selectedCurrency} className='text-white bg-[#F08E1F] rounded-md w-[400px] py-2'>{isLoading ?  "Loading . . .": "Change Price"}</button></div>





//         </div>
//         </div>
//   )
// }

// export default ChangePrice

import React, { useState, useEffect } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import CustomDropdown from '../components/CustomDropDown'
import usflag from '../assets/usflag.png'
import cadflag from '../assets/cadflag.png'
import gbpflag from '../assets/gbpflag.jpeg'
import ngnflag from '../assets/ngnflag.png'
import australianflag from '../assets/australianflag.png'
import chinaflag from '../assets/chinaflag.png'
import { useNavigate } from 'react-router-dom'
import { SlArrowLeft } from "react-icons/sl";
import { URL } from '../url'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast';
import { AiFillAndroid } from 'react-icons/ai';

const currencies = [
    { id: 1, currency: "USD", image: usflag },
    { id: 2, currency: "GBP", image: gbpflag },
    { id: 3, currency: "CAD", image: cadflag },
    { id: 4, currency: "NGN", image: ngnflag },
    {id: 5, currency: "AUD",image:australianflag},
    {id: 6, currency: "CNY", image:chinaflag},
]

const ChangePrice = () => {
    const navigate = useNavigate()
    const [selectedCurrency, setSelectedCurrency] = useState('USD')
    const [prices, setPrices] = useState([])
    const [currentPrice, setCurrentPrice] = useState({
        monthly: '',
        quarterly: '',
        annually: ''
    })
    const [isLoading, setIsLoading] = useState(false)

    const fetchPrices = async () => {
        try {
            const res = await axios.get(`${URL}/api/currencies`)
            console.log("prices", res.data)
            setPrices(res.data)
            // Set default USD prices
            const usdPrices = res.data.find(price => price.currency === 'USD')
            if (usdPrices) {
                setCurrentPrice({
                    monthly: usdPrices.monthly,
                    quarterly: usdPrices.quarterly,
                    annually: usdPrices.annually
                })
            }
        } catch (error) {
            console.error("Error fetching prices:", error)
        }
    }

    useEffect(() => {
        fetchPrices()
    }, [])

    useEffect(() => {
        if (selectedCurrency && prices.length > 0) {
            const selected = prices.find(price => price.currency === selectedCurrency)
            if (selected) {
                setCurrentPrice({
                    monthly: selected.monthly,
                    quarterly: selected.quarterly,
                    annually: selected.annually
                })
            }
        }
    }, [selectedCurrency, prices])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCurrentPrice(prev => ({ ...prev, [name]: value }))
    }

    const EditPrices = async () => {
        try {
            const selected = prices.find(price => price.currency === selectedCurrency)
            setIsLoading(true)
            if (selected) {
                const res = await axios.put(`${URL}/api/currencies/${selected.id}`, currentPrice)
                if(res){
                                        setIsLoading(false)
                                        toast.success('Price changed successfully!!', toastStyles.success)
                                    }
                console.log("Updated prices", res.data)
                // Refresh prices after update
                fetchPrices()
            }
        } catch (error) {
            console.error("Error updating prices:", error)
            toast.error('Failed to change price');
        }
    }

    const toastStyles = {
            success: {
          
              duration: 10000,
              // style: {
              //   background: '#4CAF50',
              //   color: 'white',
              //   fontWeight: 'bold',
              // },
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
        <div>
            <AdminSidebar />
            <div className='flex-1 ml-[400px]'>
            <Toaster 
    position="top-right"
    reverseOrder={false}
    gutter={8}
    toastOptions={{
        duration:9000,
        style:{
            borderRadius:'8px',
            boxShadow:'0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)'
        }
    }} 
     />
                <div onClick={() => navigate(-1)} className='flex gap-x-3 items-center mt-9 cursor-pointer'>
                    <SlArrowLeft /><p>Back</p>
                </div>

                <p className='text-xl mt-6'>Alter Premium Pricing</p>

                <p className='text-sm pt-5'>Select Currency</p>
                <CustomDropdown
                    options={currencies}
                    value={selectedCurrency}
                    onChange={(value) => setSelectedCurrency(value)}
                />

                <p className='mt-6'>Monthly</p>
                <input 
                    className='border rounded-md px-2 py-2 w-[400px] border-gray-300' 
                    placeholder='0.00'
                    name="monthly"
                    value={currentPrice.monthly}
                    onChange={handleInputChange}
                />

                <p className='mt-6'>Quarterly</p>
                <input 
                    className='border rounded-md px-2 py-2 w-[400px] border-gray-300' 
                    placeholder='0.00'
                    name="quarterly"
                    value={currentPrice.quarterly}
                    onChange={handleInputChange}
                />

                <p className='mt-6'>Annually</p>
                <input 
                    className='border rounded-md px-2 py-2 w-[400px] border-gray-300' 
                    placeholder='0.00'
                    name="annually"
                    value={currentPrice.annually}
                    onChange={handleInputChange}
                />

                <div className='mt-9'>
                    <button 
                        onClick={EditPrices} 
                        className='text-white bg-[#F08E1F] rounded-md w-[400px] py-2'
                    >
                  {isLoading ?  "Loading . . .": "Change Price"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChangePrice