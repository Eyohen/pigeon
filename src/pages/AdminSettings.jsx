import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { URL } from '../url';
import { Link,useNavigate, useParams } from "react-router-dom";
import AdminSidebar from '../components/AdminSidebar'
import Navbar2 from '../components/Navbar2';
import noteam from '../assets/noteam.png'
import AddTeamMember from '../components/AddTeamMember';
import EditTeamMember from '../components/EditTeamMember';
import { useAuth } from '../context/AuthContext';
import toast, {Toaster} from 'react-hot-toast';
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const AdminSettings = () => {
    // const {id: userId} = useParams()
    const { user, logout } = useAuth();
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [users, setUsers] = useState([])
    const [editToggle, setEditToggle] = useState(true)
    const [teamToggle, setTeamToggle] = useState(false)
    const [passwordToggle, setPasswordToggle] = useState(false)
    const [manageToggle, setManageToggle] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedCommunityId, setSelectedCommunityId] = useState(null)
    const [isRestrictModalOpen, setIsRestrictModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [communities, setCommunities] = useState([]);

    const userId = user?.id

    const handlePress = (item) => {
      setSelectedItem(item);
      setShowModal(true);
    }  

    const openModal = (communityId) => {
        setIsModalOpen(true);
        // setSelectedCommunityId(communityId)
      }
      const closeModal = () => {
        setIsModalOpen(false);
        // setSelectedCommunityId(null)
      }

      const openRestrictModal = (communityId) => {
        setSelectedCommunityId(communityId);
        setIsRestrictModalOpen(true);
      }

      const openModal2 = (userId) => {
        setIsModalOpen2(true);
        setSelectedCommunityId(userId);
      }

      const closeModal2 = () => {
        setIsModalOpen2(false);
        // setSelectedCommunityId(null)
      }

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

    const filteredUser = users?.filter(user => user.role === 'admin');

    const getUser = async () => {

        try {
        const res = await axios.get(`${URL}/api/users/${userId}`,)
          console.log('check edit',res.data.email)
          setEmail(res.data.email);
          setPhone(res.data.phone);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getUser()
    },[])

    const editUser = async () => {
            setIsLoading(true)
        try {
            const accessToken = localStorage.getItem("access_token");

            if(!accessToken){
                  // Handle the case where the access token is not available
              console.error('Access token not found')
            }

        const res = await axios.put(`${URL}/api/users/${userId}`, {email,phone},  {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
          console.log('check edit',res.data)
          setEmail(res.data.email);
          setPhone(res.data.phone);
          setIsLoading(false)

        }
        catch(err){
            console.log(err)
        }
    }




const EditToggle = () => {
    setEditToggle(true)
    setTeamToggle(false)
    setPasswordToggle(false)
    setManageToggle(false)
}

const TeamToggle = () => {
    setTeamToggle(true)
    setEditToggle(false)
    setPasswordToggle(false)
    setManageToggle(false)
}

const PasswordToggle = () => {
    setPasswordToggle(true)
    setEditToggle(false)
    setTeamToggle(false)
    setManageToggle(false)
}

const ManageToggle = () => {
    setManageToggle(true)
    setEditToggle(false)
    setTeamToggle(false)
    setPasswordToggle(false)
}

  return (
    <div className='flex justify-between bg-[#FAFAFA] h-screen font-nunito'>

    <AdminSidebar/>
    
    <div className='flex-1 ml-[330px] '> 
        <Navbar2/>
            <p className='text-3xl ml-[48px]'>Settings</p>

<div className='flex justify-start gap-x-[100px] px-[50px]'>

<div className='bg-white w-[280px] h-[225px] rounded-md mt-12'>
    <p onClick={EditToggle} className={`${editToggle ? 'bg-[#F3D8A7]' : 'bg-white'} py-4 px-5 font-medium rounded-md cursor-pointer`}>Edit Profile</p>
    <p onClick={TeamToggle} className={`${teamToggle ? 'bg-[#F3D8A7]' : 'bg-white'} py-4 px-5 font-medium rounded-md cursor-pointer`}>Teams & Staffs</p>
    <p onClick={PasswordToggle} className={`${passwordToggle ? 'bg-[#F3D8A7]' : 'bg-white'} py-4 px-5 font-medium rounded-md cursor-pointer`}>Password & Security</p>
    <p onClick={ManageToggle} className={`${manageToggle ? 'bg-[#F3D8A7]' : 'bg-white'} py-4 px-5 font-medium rounded-md cursor-pointer`}>Manage Notifications</p>
</div>

{editToggle && <div className='bg-white border w-[580px] rounded-lg mt-12 px-6 py-4'>
    <p className='font-semibold text-2xl'>Edit Profile</p>
    <p className='mt-2 font-medium'>Email</p>
    <input value={email} onChange={(e) => setEmail(e.target.value)} className='border border-gray-700 w-full focus:outline-none text-gray-500 py-2 px-2 rounded-md' placeholder='community@gmail.com'/>

    <p className='mt-4 font-medium'>Phone Number</p>
    <input value={phone} onChange={(e) => setPhone(e.target.value)}  className='border border-gray-700 w-full focus-outline:none text-gray-500 py-2 px-2 rounded-md' placeholder=''/>

    <div>
        <button onClick={editUser} className='w-full text-white bg-[#F08E1F] py-2 rounded-full mt-4'>{isLoading ? 'Loading ...' : 'Save'}</button>
    </div>
</div> }

{/* {teamToggle && <div className='ml-24 w-[280px] text-center'>
    <img src={noteam} />
    <p className='font-semibold text-2xl'>No team member yet</p>
    <p className='text-center min-w-[280px]'>Your team members will have access to the dashboard and will be able to perform certain tasks on the admin dashboard</p>
    <div>
        <button onClick={() => openModal()}  className='w-full text-white bg-[#F08E1F] py-2 rounded-full mt-4'>Add Team Member</button>
    </div>
</div> } */}
{teamToggle && <div className='bg-white border w-[750px] h-[300px] rounded-lg mt-12 px-6 py-4'>

  <div class="max-h-[200px] overflow-y-auto">
      <table class="w-full h-[200px] text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
          <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
              ID
            </th>
            <th scope="col" class="px-4 py-3 font-semibold text-gray-500">
            Name
            </th>
            <th scope="col" class="px-4 py-3 font-semibold text-gray-500">
            Email
            </th>

            <th scope="col" class="px-6 py-3 font-semibold text-gray-500">
            Registration Date
            </th>
            <th scope="col" class="px-6 py-3 font-semibold text-gray-500">  
            </th>
          
          </tr>
        </thead>
 <tbody>

      
     {filteredUser?.map((item) => (
       <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"
                key={item.id}>
                 <td class="px-6 py-4">{item.id?.slice(0, 7)}</td>

               <td class="px-4 py-2">{item.firstName} {item.lastName?.slice(0, 3)+'...'}</td>
               <td class="px-4 py-2">{item.email?.slice(0, 12)+'...'}</td>
          
             
                <td class="px-6 py-2">{new Date(item.createdAt).toDateString()}</td>
                <td onClick={() => openModal2(item.id)}><IoEllipsisVerticalSharp /></td>


  
              </tr>
            ))} 
           

        </tbody>
      </table>
      </div>

      <div>
        <button onClick={() => openModal()}  className='w-[200px] text-white bg-[#F08E1F] py-2 rounded-full mt-8'>Add Team Member</button>
    </div>

      </div>
 }

{passwordToggle && <div className='bg-white border w-[580px] rounded-lg mt-12 px-6 py-4'>

    <p className='mt-2 font-medium'>Current Password</p>
    <input className='border border-gray-400 bg-gray-100 w-full focus:outline-none text-gray-400 py-2 px-2 rounded-md' placeholder=''/>

    <p className='mt-4 font-medium'>New Password</p>
    <input className='border border-gray-400 bg-gray-100 w-full focus:outline-none text-gray-400 py-2 px-2 rounded-md' placeholder=''/>

    
    <p className='mt-4 font-medium'>Confirm New Password</p>
    <input className='border border-gray-400 bg-gray-100 w-full focus:outline-none text-gray-400 py-2 px-2 rounded-md' placeholder=''/>

    <div className='text-right'>
        <button className='w-[200px] text-gray-400 bg-gray-100 py-2 rounded-full mt-4 '>Change Password</button>
    </div>
</div> }

{manageToggle && <div className='bg-white border w-[580px] rounded-lg mt-12 px-6 py-4'>
    <p className='font-semibold text-2xl'>Manage Notifications</p>
<p className='mt-4 font-medium'>Email Notification</p>
<p className='text-gray-500'>This will be sent to mic*******an@gmail.com when you’re online or offline</p>


<p className='mt-4 font-medium'>Push Notification</p>
<p className='text-gray-500'>This will be sent to your phone when you’re online or offline</p>

</div> }

</div>


<AddTeamMember
 isOpen={isModalOpen}
 onClose={closeModal}
 />

 <EditTeamMember
 isOpen2={isModalOpen2}
 onClose2={closeModal2}
 userId={selectedCommunityId}
 />


            </div>
            </div>
  )
}

export default AdminSettings