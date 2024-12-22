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


const AdminAnalytics = () => {
  const navigate = useNavigate()
    const { user, logout } = useAuth();
    const [commOwner, setCommOwner] = useState([])
    const [users, setUsers] = useState(0)
    const [comm, setComm] = useState(0)
    const [activeSub, setActiveSub] = useState(0)
    const [totalSub, setTotalSub] = useState(0)
    const [totalPurchases, setTotalPurchase] = useState(0)
    const [totalNaira, setTotalNaira] = useState(0)
    const [totalCanadian, setTotalCanadian] = useState(0)
    const [Loading, setIsLoading] = useState(true)

    const fetchUserCount = async () => {
      const res = await axios.get(`${URL}/api/users/count`)
      console.log("see",res.data)
      setUsers(res.data.count)
    }
    useEffect(() => {
      fetchUserCount()
    },[])

    const fetchCommunityCount = async () => {
      const res = await axios.get(`${URL}/api/communities/count`)
      console.log("see",res.data)
      setCommOwner(res.data.count)
    }
    useEffect(() => {
      fetchCommunityCount()
    },[])

    const fetchVisible = async () => {
            const res = await axios.get(`${URL}/api/visible/count`);
            console.log("visible", res.data.count);
            setComm(res.data.count);
    }
      useEffect(() => {
        fetchVisible()
      },[])

      const fetchTotalPurchases = async () => {
        const res = await axios.get(`${URL}/api/purchases/count`);
        console.log("purchases", res.data);
        setTotalPurchase(res.data.totalPurchases);
}
  useEffect(() => {
    fetchTotalPurchases()
  },[])

  const fetchTotalNaira = async () => {
    const res = await axios.get(`${URL}/api/purchases/total/NGN`);
    console.log("total naira", res.data);
    setTotalNaira(res.data.totalAmount);
}
useEffect(() => {
fetchTotalNaira()
},[])

  // Format the totalNaira value
  const formattedTotalNaira = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(totalNaira);


  const fetchTotalCanadian = async () => {
    const res = await axios.get(`${URL}/api/purchases/total/CAD`);
    console.log("total Canadian", res.data);
    setTotalCanadian(res.data.totalAmount);
}
useEffect(() => {
fetchTotalCanadian()
},[])

  // Format the totalNaira value
  const formattedTotalCanadian = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(totalCanadian);

      const fetchActiveSubscribers = async () => {
        const res = await axios.get(`${URL}/api/subpurchases/active`);
        console.log("active sub", res.data.activeSubscriptions);
        setActiveSub(res.data.activeSubscriptions);
}
  useEffect(() => {
    fetchActiveSubscribers()
  },[])

  const fetchTotalSubscribers = async () => {
    const res = await axios.get(`${URL}/api/subpurchases/total`);
    console.log("total sub", res.data.totalSubscriptions);
    setTotalSub(res.data.totalSubscriptions);
}
useEffect(() => {
fetchTotalSubscribers()
},[])


  return (
    <div className='flex justify-between bg-[#FAFAFA] font-nunito h-screen'>

<AdminSidebar/>

<div className='flex-1 ml-[300px]'>
            <Navbar2 />
      
                <p className='font-semibold text-4xl mt-2 ml-[48px]'>Analytics </p>

                <div className='grid grid-cols-4 gap-y-6 mt-6 ml-[48px]'>
                <AnalyticCard count={users} name="Registered Users"/>
                <AnalyticCard count={users}  name="Active Users" />
                <AnalyticCard count={totalSub} name="Total Subscriptions"/>
                <AnalyticCard count={activeSub} name="Active Subscriptions" />
                <AnalyticCard count={comm} name="Total Communities"/>
                <AnalyticCard count={commOwner} name="Total Community Owners"/>
                <AnalyticCard name="Subscription Revenue"/>
                <AnalyticCard name="PAYG Revenue" />
                <AnalyticCard count={totalPurchases} name="Total Transaction Volume"/>
                <AnalyticCard currency={'NGN'} count={formattedTotalNaira} name="Total Transaction value"/>
                <AnalyticCard currency={'CAD'} count={formattedTotalCanadian} name="Total Transaction value"/>
                {/* <AnalyticCard name="Transactions Value by community owners"/>
                <AnalyticCard name="Transactions Value by Communities"/> */}

                </div>

                <div><button onClick={() => navigate('/changeprice')} className='bg-[#F08E1F] text-white mt-6 ml-[48px] px-4 py-2 rounded-md'>Change Subscription Prices</button></div>

        <div>

        </div>


        </div>
   
    </div>
  )
}

export default AdminAnalytics