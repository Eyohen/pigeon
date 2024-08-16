import React,{useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar';
import { IoSearchOutline } from "react-icons/io5";
import { URL } from '../url';
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import CommunityOwnerCard from '../components/CommunityOwnerCard';
import Navbar2 from '../components/Navbar2';
import { IoFilter } from "react-icons/io5";
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { MdKeyboardArrowDown } from "react-icons/md";
import AnalyticCard from '../components/AnalyticCard';
import VerifyModal from '../components/VerifyModal';
import { IoEllipsisVerticalSharp } from "react-icons/io5";


const AdminUsers = () => {
    const { user, logout } = useAuth();
    const [users, setUsers] = useState([]);
    const [communities, setCommunities] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCommunityId, setSelectedCommunityId] = useState(null)

    const openModal = (communityId) => {
      setIsModalOpen(true);
      setSelectedCommunityId(communityId)
    }
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedCommunityId(null)
    }



console.log("userId",user)

    // const fetchCommunities = async () => {
    //     try {
    //         const res = await axios.get(`${URL}/api/users`);
    //         console.log("community", res.data.communities)
    //         setCommunities(res.data.communities);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // useEffect(() =>{
    //     fetchCommunities()
    // },[])


    const fetchUsers = async () => {
        try {
            const res = await axios.get(`${URL}/api/users`);
            console.log("user", res.data)
            setUsers(res.data.users);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() =>{
        fetchUsers()
    },[])
    
      const navigate = useNavigate()

  return (
    <div className='flex justify-between bg-[#FAFAFA] h-screen font-nunito'>

<AdminSidebar/>

<div className='flex-1 ml-[330px] '> 
    <Navbar2/>
        <p className='text-3xl ml-[48px]'>Users</p>

           <div className='max-w-[1100px] bg-white ml-[48px] border mt-9 rounded-lg'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-1">

<div>
<div className='flex gap-x-10 border-b-2 py-3 px-2'>

    <div className="flex gap-x-[750px]">
    <input className='border border-gray-400 rounded py-2 px-2' placeholder='search' />
    <div className='text-gray-400 border border-gray-400 rounded px-4'>CSV</div>
    </div>

</div>
</div>-

      <div class="max-h-60 overflow-y-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
          <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
              ID
            </th>
            <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
            Name
            </th>
            <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
            Email
            </th>
            <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
            Phone Number
            </th>
            <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
            Verification Status
            </th>
            <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
            Registration Date
            </th>
            <th scope="col" class="px-6 py-3 font-semibold text-gray-500">  
            </th>
       
       
       
            {/* <th scope="col" class="px-6 py-3 font-light text-[#F08E1F]">
              edit
            </th>
            <th scope="col" class="px-6 py-3 font-light text-[#F08E1F]">
              delete
            </th> */}
          
          </tr>
        </thead>
 <tbody>

      
     {users?.map((item) => (
       <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"
                key={item.id}>
                 <td class="px-6 py-4">{item.id?.slice(0, 7)}</td>

               <td class="px-6 py-2">{item.firstName} {item.lastName}</td>
               <td class="px-6 py-2">{item.email}</td>
               <td class="px-6 py-2">{item.phone}</td>
               {item.verified === false ? <button onClick={() => openModal(item.id)} class="px-6 py-1 bg-red-100 rounded-lg text-red-500 mt-3">Unverified</button> : <button onClick={() => openModal(item.id)} class="px-6 py-1 bg-green-100 rounded-lg text-green-500 mt-3">Verified</button> } 
                <td class="px-6 py-2">{new Date(item.createdAt).toDateString()}</td>
                <IoEllipsisVerticalSharp />
                {/* <td class="px-6 py-2">{item.user?.slice(0, 7)}</td>
                <td class="px-6 py-2">{item.accessType}</td> */}

  
              </tr>
            ))} 
           

        </tbody>
      </table>
      </div>
    </div>
        </div>
   
       
    </div>
    <VerifyModal 
    isOpen={isModalOpen}
     onClose={closeModal} 
     communityId={selectedCommunityId}
     onVerificationUpdate={fetchUsers}
     />
   
    </div>
  )
}

export default AdminUsers