// import React,{useState, useEffect} from 'react'
// import { URL } from '../url';
// import axios from "axios";
// import Sidebar from '../components/Sidebar'
// import { 
//   User, 
//   Mail, 
//   Phone, 
//   MapPin, 
//   MessageCircle, 
//   Twitter, 
//   Send,
//   Camera,
//   Pencil,
//   Check,
//   Globe,

// } from 'lucide-react';

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '+1 234 567 8900',
//     location: 'San Francisco, CA',
//     whatsapp: '+1 234 567 8900',
//     twitter: '@alexmorgan',
//     telegram: '@alexm',
//     description: 'Product Designer and Full Stack Developer with 5+ years of experience. Passionate about creating intuitive user experiences and scalable solutions.'
//   });


//   const fetchUser = async () => {
//     const res = await axios.get(`${URL}/api/users`)
//     console.log("user", res.data.users)
//     setProfile(res.data.users)
//   }


//   useEffect(() => {
//     fetchUser()
//   },[])


//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const ProfileInput = ({ icon: Icon, label, name, value, type = "text" }) => (
//     <div className="relative">
//       <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
//       <div className="relative">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <Icon className="h-5 w-5 text-gray-400" />
//         </div>
//         <input
//           type={type}
//           name={name}
//           value={value}
//           onChange={handleChange}
//           disabled={!isEditing}
//           className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg
//                     focus:ring-2 focus:ring-indigo-500 focus:border-transparent
//                     disabled:bg-gray-50 disabled:text-gray-500 bg-white
//                     shadow-sm"
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div>

// <Sidebar/>

//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         {/* Profile Header */}
//         <div className="relative mb-8">
//           {/* Cover Image */}
//           <div className="h-48 w-full bg-gradient-to-r from-[#F08E1F] to-[#F3D8A7] rounded-xl" />
          
//           {/* Profile Picture and Basic Info */}
//           <div className="absolute -bottom-16 left-8 flex items-end space-x-6">
//             <div className="relative">
//               <div className="h-32 w-32 rounded-full bg-white p-1">
//                 <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
//                   {/* <User className="h-16 w-16 text-gray-400" /> */}
//                   <p className='text-3xl'>H</p>
//                 </div>
//               </div>
          
//             </div>
//             <div className="pb-2">
//               <h1 className="text-2xl font-bold">
//                 {profile.firstName} {profile.lastName}
//               </h1>
//               <p className="flex items-center">
//                 <Globe className="h-4 w-4 mr-1" />
//                 {profile.location}
//               </p>
//             </div>
//           </div>

//           {/* Edit Button */}
//           <button
//             onClick={isEditing ? handleSave : handleEdit}
//             className="absolute top-4 right-4 inline-flex items-center px-4 py-2 rounded-lg
//                      bg-white shadow-sm hover:shadow-md transition-all duration-200
//                      text-gray-700 text-sm font-medium"
//           >
//             {isEditing ? (
//               <>
//                 <Check className="h-4 w-4 mr-2" />
//                 Save Changes
//               </>
//             ) : (
//               <>
//                 <Pencil className="h-4 w-4 mr-2" />
//                 Edit Profile
//               </>
//             )}
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - About */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-xl font-semibold mb-4">About</h2>
//               <textarea
//                 name="description"
//                 rows={6}
//                 value={profile.description}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className="w-full border border-gray-200 rounded-lg p-3 
//                           focus:ring-2 focus:ring-indigo-500 focus:border-transparent
//                           disabled:bg-gray-50 disabled:text-gray-500 resize-none"
//               />
//             </div>
//           </div>

//           {/* Right Column - Contact Information */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <ProfileInput 
//                   icon={Mail} 
//                   label="Email" 
//                   name="email" 
//                   value={profile.email}
//                   type="email"
//                 />
//                 <ProfileInput 
//                   icon={Phone} 
//                   label="Phone" 
//                   name="phone" 
//                   value={profile.phone}
//                   type="tel"
//                 />
//                 <ProfileInput 
//                   icon={MessageCircle} 
//                   label="WhatsApp" 
//                   name="whatsapp" 
//                   value={profile.whatsapp}
//                 />
//                 <ProfileInput 
//                   icon={Twitter} 
//                   label="Twitter" 
//                   name="twitter" 
//                   value={profile.twitter}
//                 />
//                 <ProfileInput 
//                   icon={Send} 
//                   label="Telegram" 
//                   name="telegram" 
//                   value={profile.telegram}
//                 />
//                 <ProfileInput 
//                   icon={MapPin} 
//                   label="Location" 
//                   name="location" 
//                   value={profile.location}
//                 />
//               </div>
//             </div>

//             {/* Professional Information */}
//             <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
//               <h2 className="text-xl font-semibold mb-6">Professional Information</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <ProfileInput 
//                   icon={User} 
//                   label="First Name" 
//                   name="firstName" 
//                   value={profile.firstName}
//                 />
//                 <ProfileInput 
//                   icon={User} 
//                   label="Last Name" 
//                   name="lastName" 
//                   value={profile.lastName}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>


//     </div>
//   );
// };

// export default ProfilePage;


import React,{useState, useEffect} from 'react'
import { URL } from '../url';
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Twitter, 
  Send,
  Globe
} from 'lucide-react';

const MyProfile = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    whatsapp: '',
    twitter: '',
    telegram: '',
    description: '',
    recognition:''
    });

    const {user} = useAuth()
    const navigate = useNavigate()

    console.log(user)

  const fetchUser = async (userId) => {
    try{
        setLoading(true);
        setError(null);
        
        if (!userId) {
          setError('User ID is not available');
          setLoading(false);
          return;
        }


    const res = await axios.get(`${URL}/api/users/user/${userId}`)
    console.log("user", res.data.data)
    setProfile(res.data.data);
  } catch (err) {
    setError(err.response?.data?.message || 'Failed to fetch user data');
    console.error('Error fetching user:', err);
  } finally {
    setLoading(false);
  }

}


  useEffect(() => {
    if (user?.id) {
    fetchUser(user?.id);
    }
  },[user])


  const ProfileField = ({ icon: Icon, label, value }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <div className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg">
        <Icon className="h-5 w-5 text-gray-400" />
        <span className="text-gray-700">{value}</span>
      </div>
    </div>
  );

  return (
    <>
    <Sidebar />
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="relative mb-8">
  
          {/* Cover Image */}
          <div className="h-48 w-full bg-gradient-to-r from-[#F08E1F] to-[#F3D8A7] rounded-xl" />
          
          
          {/* Profile Picture and Basic Info */}
          <div className="absolute -bottom-16 left-8 flex items-end space-x-6">
            <div className="h-32 w-32 rounded-full bg-white p-1">
              <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
              <p className='text-3xl'>H</p>
              </div>
            </div>
            <div className="pb-2">
              <h1 className="text-2xl font-bold">
                {profile?.firstName} {profile?.lastName}
              </h1>
              <p className="text-green-600 flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                {profile?.location}
              </p>
            </div>

         
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - About */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-gray-700 whitespace-pre-wrap">
                {profile.description}
              </p>
            </div>


            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Recognition</h2>
              <p className="text-gray-700 whitespace-pre-wrap">
                {profile.recognition}
              </p>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
   
                  label="Email" 
                  value={profile.email}
                />
                <ProfileField 
                  icon={Phone} 
                  label="Phone" 
                  value={profile.phone}
                />
                <ProfileField 
                  icon={MessageCircle} 
                  label="WhatsApp" 
                  value={profile.whatsapp}
                />
                <ProfileField 
                  icon={Twitter} 
                  label="Twitter" 
                  value={profile.twitter}
                />
                <ProfileField 
                  icon={Send} 
                  label="Telegram" 
                  value={profile.telegram}
                />
                <ProfileField 
                  icon={MapPin} 
                  label="Location" 
                  value={profile.location}
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
              <h2 className="text-xl font-semibold mb-6">Professional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileField 
                  icon={User} 
                  label="First Name" 
                  value={profile.firstName}
                />
                <ProfileField 
                  icon={User} 
                  label="Last Name" 
                  value={profile.lastName}
                />
              </div>
            </div>

            <button onClick={() => navigate(`/editprofile/${user?.id}`)} className='mt-12 bg-white px-6 py-3 rounded-lg shadow-lg flex justify-end'>Edit Profile</button>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default MyProfile;