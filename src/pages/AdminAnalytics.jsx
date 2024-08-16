import React,{useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar';
import { IoSearchOutline } from "react-icons/io5";
import { URL } from '../url';
import axios from "axios";
import { Link } from "react-router-dom";
import CommunityOwnerCard from '../components/CommunityOwnerCard';
import Navbar2 from '../components/Navbar2';
import { IoFilter } from "react-icons/io5";
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { MdKeyboardArrowDown } from "react-icons/md";
import AnalyticCard from '../components/AnalyticCard';

const user = "Registered Users"


const AdminAnalytics = () => {
    const { user, logout } = useAuth();
    const [commOwner, setCommOwner] = useState([])
    const [users, setUsers] = useState(0)
    const [comm, setComm] = useState(0)
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


  

 



  return (
    <div className='flex justify-between bg-[#FAFAFA] font-nunito h-screen'>

<AdminSidebar/>

<div className='flex-1 ml-[300px]'>
            <Navbar2 />
      
                <p className='font-semibold text-4xl mt-2 ml-[48px]'>Analytics </p>

                <div className='grid grid-cols-4 gap-y-6 mt-6 ml-[48px]'>
                <AnalyticCard count={users} name="Registered Users"/>
                <AnalyticCard name="Active Users" />
                <AnalyticCard name="Total Subscribers"/>
                <AnalyticCard name="Active Subscribers" />
                <AnalyticCard count={comm} name="Total Communities"/>
                <AnalyticCard count={commOwner} name="Total Community Owners"/>
                <AnalyticCard name="Subscription Revenue"/>
                <AnalyticCard name="PAYG Revenue" />
                <AnalyticCard name="Total Transaction Volume"/>
                <AnalyticCard name="Total Transaction value"/>
                <AnalyticCard name="Transactions Value by community owners"/>
                <AnalyticCard name="Transactions Value by Communities"/>

                </div>

        <div>

        </div>


        </div>
   
    </div>
  )
}

export default AdminAnalytics