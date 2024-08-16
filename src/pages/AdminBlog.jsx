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
import mockImage from "../assets/aboutpage/values.png"


const AdminBlog = () => {
    const { user, logout } = useAuth();
    const [posts, setPosts] = useState([]);
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
            const res = await axios.get(`${URL}/api/posts`);
            console.log("user", res.data)
            setPosts(res.data);
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
        <p className='text-3xl ml-[48px]'>Blogs</p>

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
            Title
            </th>
            <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
            Author
            </th>
            <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
            Date Published
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

      
     {posts?.map((item) => (
       <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"
                key={item.id}>
                 <td class="px-6 py-4">#{item.id?.slice(0, 7)}</td>

               <td class="px-6 py-2"><div className='flex gap-x-2 items-center'>{item?.imageUrl ? <img src={item?.imageUrl}  className='w-12 h-9 rounded-md'/> : <img src={mockImage} alt='mock'/>} <div><p>{item.title?.slice(0,15)}:</p><p>{item.heading?.slice(0,17)}</p></div></div></td>
               <td class="px-6 py-2">Precious Otoib...</td>
               <td class="px-6 py-2">{new Date(item.createdAt).toDateString()}</td>
   
             
               <td class="px-6 py-2"> <IoEllipsisVerticalSharp /></td>
               
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

export default AdminBlog