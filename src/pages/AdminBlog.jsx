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
import ViewBlogModal from '../components/ViewBlogModal';
import EditBlogModal from '../components/EditBlogModal';
import CreateBlogModal from '../components/CreateBlogModal';


const AdminBlog = () => {
    const { user, logout } = useAuth();
    const [selectedItem, setSelectedItem] = useState(null);
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);;
    const [selectedPostId, setSelectedPostId] = useState(null)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handlePress = (item) => {
      setSelectedItem(item);
      setShowModal(true);
    } 

    const openModal = (postId) => {
      setIsModalOpen(true);
      setSelectedPostId(postId)
    }
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedPostId(null)
    }

    const openCreateBlogModal = (postId) => {
      setSelectedPostId(postId);
      setIsCreateModalOpen(true);
    }

    const openViewBlogModal = (postId) => {
      setSelectedPostId(postId);
      setIsViewModalOpen(true);
    }

    const openEditBlogModal = (postId) => {
      setSelectedPostId(postId);
      setIsEditModalOpen(true);
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


    const fetchPosts = async () => {
        try {
            const res = await axios.get(`${URL}/api/posts`);
            console.log("user", res.data)
            setPosts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() =>{
        fetchPosts()
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

    <div className="flex gap-x-[785px]">
    <input className='border border-gray-400 rounded py-2 px-2' placeholder='search' />
    <div className='text-gray-400 border border-gray-400 rounded px-4 flex justify-center items-center'>CSV</div>

    </div>
    {/* <button className='bg-[#F08E1F] text-white px-5 rounded-lg'>Create Post</button> */}


</div>
</div>-

      <div class="max-h-60 overflow-y-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 relative">
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
       <tr onClick={() => setShowModal(!showModal)} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"
                key={item.id}>
                 <td class="px-6 py-4">#{item.id?.slice(0, 7)}</td>

               <td class="px-6 py-2"><div className='flex gap-x-2 items-center'>{item?.imageUrl ? <img src={item?.imageUrl}  className='w-12 h-9 rounded-md'/> : <img src={mockImage} alt='mock'/>} <div><p>{item.title?.slice(0,15)}:</p><p>{item.heading?.slice(0,17)}</p></div></div></td>
               <td class="px-6 py-2">Precious Otoib...</td>
               <td class="px-6 py-2">{new Date(item.createdAt).toDateString()}</td>
               <div onClick={() => handlePress(item)} className='cursor-pointer mt-4'>
               <td class="px-6 py-2"> <IoEllipsisVerticalSharp /></td>
               {selectedItem && selectedItem.id === item.id && showModal && (<div className="bg-white absolute z-50 border rounded-lg right-0 top-[50px] shadow-lg">
                      {/* <p onClick={() => {navigate(`/admincommunityownerdetail/${selectedItem.id}`) }} className="hover:text-[#F08E1F] px-9 py-2">View</p> */}
                      {/* <p onClick={() => openViewModal()}  className="hover:bg-blue-100 hover:text-blue-600 px-9 py-2">View</p>
                      <p onClick={() => openModal()}  className="hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Edit</p> */}
                      {/* <p onClick={() => openViewBlogModal(item.id)}  className="hover:bg-gray-100 px-9 py-2">Publish</p> */}
                      <p onClick={() => openCreateBlogModal(item.id)}  className="hover:bg-gray-100 px-9 py-2">Publish</p>
                       <p onClick={() => openViewBlogModal(item.id)}  className="hover:bg-gray-100 px-9 py-2">View</p>
                      <p onClick={() => openEditBlogModal(item.id)}  className="hover:bg-gray-100 px-9 py-2">Edit</p>
                      {/* <p onClick={() => openPublishModal()}  className=" hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Publish</p> */}

                    </div>)}
                  </div>
              </tr>
            ))} 
           

        </tbody>
      </table>
      </div>
    </div>
        </div>
   
       
    </div>
    {/* <VerifyModal 
    isOpen={isModalOpen}
     onClose={closeModal} 
     communityId={selectedCommunityId}
     onVerificationUpdate={fetchUsers}
     /> */}

<CreateBlogModal isOpen3={isCreateModalOpen} onClose3={() => setIsCreateModalOpen(false)} onRestrictionUpdate={fetchPosts} postId={selectedPostId} onConfirm={() => {
          setPosts(posts.filter(c => c !== selectedPostId));
          setIsCreateModalOpen(false);
        }}/>

<ViewBlogModal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} onRestrictionUpdate={fetchPosts} postId={selectedPostId} onConfirm={() => {
          setPosts(posts.filter(c => c !== selectedPostId));
          setIsViewModalOpen(false);
        }}/>

<EditBlogModal isOpen2={isEditModalOpen} onClose2={() => setIsEditModalOpen(false)} onRestrictionUpdate={fetchPosts} postId={selectedPostId} onConfirm={() => {
          setPosts(posts.filter(c => c !== selectedPostId));
          setIsEditModalOpen(false);
        }}/>
   
    </div>
  )
}

export default AdminBlog