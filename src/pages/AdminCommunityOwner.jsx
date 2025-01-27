import React, { useState, useEffect } from 'react'
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
import VerifyModal from '../components/VerifyModal';
import SubscriptionModal from '../components/SubscriptionModal';
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import RestrictModal from '../components/RestrictModal';



const AdminCommunityOwner = () => {
  const { user, logout } = useAuth();
  const [selectedItem, setSelectedItem] = useState(null);
  const [users, setUsers] = useState([]);
  const [owners, setOwner] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [selectedCommunityId, setSelectedCommunityId] = useState(null)
  const [isRestrictModalOpen, setIsRestrictModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate()

  const handlePress = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  }

  const openModal = (communityId) => {
    setIsModalOpen(true);
    setSelectedCommunityId(communityId)
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCommunityId(null)
  }

  const openSubModal = (communityId) => {
    setIsSubModalOpen(true);
    setSelectedCommunityId(communityId)
  }
  const closeSubModal = () => {
    setIsSubModalOpen(false);
    setSelectedCommunityId(null)
  }

  const openRestrictModal = (communityId) => {
    setSelectedCommunityId(communityId);
    setIsRestrictModalOpen(true);
  }


  console.log("userId", user)

  const fetchOwners = async () => {
    try {
      const res = await axios.get(`${URL}/api/users`);
      console.log("users", res.data)
      setOwner(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOwners()
  }, [])

  return (
    <div className='flex justify-between bg-[#FAFAFA] h-screen font-nunito'>
      <AdminSidebar />

      <div className='flex-1 px-[330px] '>
        <Navbar2 />

        <div className='flex justify-between pt-9'>
          <p className='text-3xl ml-[48px]'>Community Owners</p>

          <div><button onClick={() => navigate('/adminaddcommunityowner')} className='bg-[#F08E1F] text-white px-3 py-2 rounded-full mr-[100px]'>Add Community Owner</button></div>
        </div>

        <div className='w-full md:w-[1300px] bg-white ml-[48px] border mt-9 rounded-lg'>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-1">

            <div>
              <div className='flex gap-x-10 border-b-2 py-3 px-2'>

                <div className="flex gap-x-[750px]">
                  <input className='border border-gray-400 rounded py-2 px-2' placeholder='search' />
                  <div className='text-gray-400 border border-gray-400 rounded px-4'>CSV</div>
                </div>

              </div>
            </div>

            <div class="max-h-60 overflow-y-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 relative">
                <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr >
                    <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
                      ID
                    </th>
                    <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
                      Community Owner
                    </th>
                    <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
                      Date Created
                    </th>
                    <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
                      Email Address
                    </th>

                    <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
                      Status
                    </th>

                    <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
                      Subscription
                    </th>
                    <th scope="col" class="px-9 py-3 font-semibold text-gray-500">
                    </th>

                  </tr>
                </thead>
                <tbody>


                  {owners?.map((item) => (
                    <tr onClick={() => setShowModal(!showModal)} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"
                      key={item.id}>
                      <td class="px-6 py-4">{item.id?.slice(0, 7)}</td>

                      <td class="px-6 py-2">{item.firstName}</td>
                      <td class="px-6 py-2">{new Date(item.createdAt).toDateString()}</td>
                      <td class="px-6 py-2">{item.email}</td>


                      <td className='px-6 py-2'>{item.verified === false ? <button onClick={() => openModal(item.id)} class="px-6 py-1 bg-red-100 rounded-lg text-red-500 mt-3">Unverified</button> : <button onClick={() => openModal(item.id)} class="px-6 py-1 bg-green-100 rounded-lg text-green-500 mt-3">Verified</button>}</td>
                      <td className='px-6 py-2'>{item.subscribed === false ? <button onClick={() => openSubModal(item.id)} class="px-6 py-1 bg-red-100 rounded-lg text-red-500 mt-3">Unsubscribed</button> : <button onClick={() => openSubModal(item.id)} class="px-6 py-1 bg-green-100 rounded-lg text-green-500 mt-3">Subscribed</button>}</td>
                      <div onClick={() => handlePress(item)} className='cursor-pointer mt-4'>
                        <td class="px-9 py-2"><IoEllipsisVerticalSharp /> </td>
                        {selectedItem && selectedItem.id === item.id && showModal && (<div className="bg-white absolute z-50 border rounded-lg right-0 top-[50px] shadow-lg">
                          <p onClick={() => { navigate(`/admincommunityownerdetail/${selectedItem.id}`) }} className="hover:text-[#F08E1F] px-9 py-2">View</p>
                          <p onClick={() => { navigate(`/admineditcommunityowner/${selectedItem.id}`) }} className="hover:text-[#F08E1F] px-9 py-2">Edit</p>
                          <p onClick={() => { navigate(`/adminaddcommunity/${selectedItem.id}`) }} className="hover:text-[#F08E1F] px-9 py-2">Add community</p>
                          {/* <p onClick={() => openViewModal()}  className="hover:bg-blue-100 hover:text-blue-600 px-9 py-2">View</p>
                      <p onClick={() => openModal()}  className="hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Edit</p> */}
                          <p onClick={() => openRestrictModal(item.id)} className="bg-gray-100 px-9 py-2">Restrict</p>
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
      <VerifyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        communityId={selectedCommunityId}
        onVerificationUpdate={fetchOwners}
      />
      <SubscriptionModal
        isOpen={isSubModalOpen}
        onClose={closeSubModal}
        communityId={selectedCommunityId}
        onVerificationUpdate={fetchOwners}
      />

      <RestrictModal isOpen={isRestrictModalOpen} onClose={() => setIsRestrictModalOpen(false)} onRestrictionUpdate={fetchOwners} communityId={selectedCommunityId} onConfirm={() => {
        setCommunities(communities.filter(c => c !== selectedCommunityId));
        setIsRestrictModalOpen(false);
      }} />

    </div>
  )
}

export default AdminCommunityOwner