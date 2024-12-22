import React,{useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar';
import { IoSearchOutline } from "react-icons/io5";
import { URL } from '../url';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CommunityOwnerCard from '../components/CommunityOwnerCard';
import Navbar2 from '../components/Navbar2';
import { IoFilter } from "react-icons/io5";
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { MdKeyboardArrowDown } from "react-icons/md";
import AnalyticCard from '../components/AnalyticCard';

const user = "Registered Users"


const SubscriptionDetails = () => {
  const navigate = useNavigate()
    const { user, logout } = useAuth();
    const [commOwner, setCommOwner] = useState([])
    const [subscription, setSubscription] = useState([])
    const [comm, setComm] = useState(0)
    const [Loading, setIsLoading] = useState(true)

    console.log(user?.id)

    const fetchCurrentSubscription = async () => {
      const res = await axios.get(`${URL}/api/subpurchases/current-subscription/${user?.id}`)
      console.log("see current subscription",res.data)
      setSubscription(res.data.subscription)
    }
    useEffect(() => {
      fetchCurrentSubscription()
    },[])

  return (
    <div className='flex justify-between font-nunito h-screen'>

<Sidebar/>

<div className='flex-1 ml-[300px]'>
            <Navbar2 />
      
                <p className='font-semibold text-4xl mt-2 ml-[48px]'>Subscription Details </p>

                <div className='ml-[48px] max-w-[500px]'>

                <div className='flex justify-between mt-4'>
                <p>Subscription plan:</p>
                <p>{subscription?.type}</p>
                </div>

                <div className='flex justify-between mt-4'>
                <p>Subscription Status:</p>
                <p className='text-[#F08E1F] bg-[#FEF4EC] rounded-2xl px-4 py-1'>Active</p>
                </div>

                <div className='flex justify-between mt-4'>
                <p>Renewal date:</p>
                <p>{new Date(subscription?.endDate).toDateString()}</p>
                </div>

                <div className='flex justify-between mt-4'>
                <p>Subscription Price:</p>
                <p>{subscription?.amount}</p>
                </div>

                <div className='flex justify-between mt-6'>
                <button className='border border-[#F08E1F] text-[#F08E1F] px-6 py-2 rounded-3xl'>Cancel Subscription</button>
                <Link to={'/upgradeplan'}><button className='bg-[#F08E1F] text-white px-6 py-2 rounded-3xl'>Upgrade Subscription</button></Link>
                </div>

                </div>


        </div>
   
    </div>
  )
}

export default SubscriptionDetails