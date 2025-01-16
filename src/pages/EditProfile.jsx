// import React,{useState, useEffect} from 'react'
// import { URL } from '../url';
// import axios from "axios";
// import { useAuth } from '../context/AuthContext';
// import Sidebar from '../components/Sidebar'
// import { 
//   User, 
//   Mail, 
//   Phone, 
//   MapPin, 
//   MessageCircle, 
//   Twitter, 
//   Send,
//   Globe
// } from 'lucide-react';

// const EditProfile = () => {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [profile, setProfile] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     location: '',
//     whatsapp: '',
//     twitter: '',
//     telegram: '',
//     description: '',
//     recognition:''
//     });

//     const {user} = useAuth()

//     console.log(user)

//   const fetchUser = async (userId) => {
//     try{
//         setLoading(true);
//         setError(null);
        
//         if (!userId) {
//           setError('User ID is not available');
//           setLoading(false);
//           return;
//         }


//     const res = await axios.get(`${URL}/api/users/user/${userId}`)
//     console.log("user", res.data.data)
//     setProfile(res.data.data);
//   } catch (err) {
//     setError(err.response?.data?.message || 'Failed to fetch user data');
//     console.error('Error fetching user:', err);
//   } finally {
//     setLoading(false);
//   }

// }


//   useEffect(() => {
//     if (user?.id) {
//     fetchUser(user?.id);
//     }
//   },[user])

//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setProfile(prev => ({
//         ...prev,
//         [name]:value 
//     }));
//   };



//   const handleEdit = async () => {
//     const res = await axios.put(`${URL}/api/users/${user.id}`, profile)
//     if(res.status === 200){
//         navigate('/myprofile')
//     }

//   }


//   return (
//     <>
//     <Sidebar />
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         {/* Profile Header */}
//         <div className="relative mb-8">
  
//           {/* Cover Image */}
//           <div className="h-48 w-full bg-gradient-to-r from-[#F08E1F] to-[#F3D8A7] rounded-xl" />
          
          
//           {/* Profile Picture and Basic Info */}
//           <div className="absolute -bottom-16 left-8 flex items-end space-x-6">
//             <div className="h-32 w-32 rounded-full bg-white p-1">
//               <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
//               <p className='text-3xl'>H</p>
//               </div>
//             </div>
//             <div className="pb-2">
//               <h1 className="text-2xl font-bold">
//                 {profile?.firstName} {profile?.lastName}
//               </h1>
//               <p className="text-green-600 flex items-center">
//                 <Globe className="h-4 w-4 mr-1" />
//                 {profile?.location}
//               </p>
//             </div>

         
//           </div>
//         </div>

//         {/* Main Content */}

//         <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
       
//           {/* Left Column - About */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-xl font-semibold mb-4">About</h2>
//               <textarea className="text-gray-700 whitespace-pre-wrap h-36 px-2 py-2 outline-none"
//                 value={profile.description}
//               />
//             </div>
//           </div>

//           {/* Right Column - Contact Information */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     
//                 <input 
//                 className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg"
//                   label="Email" 
//                   value={profile.email}
//                   onChange={handleChange}
//                 />
//                 <input 
//                 className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg" 
//                   icon={Phone} 
//                   label="Phone" 
//                   value={profile.phone}
//                   onChange={handleChange}
//                 />
//                 <input 
//                 className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg" 
//                   icon={MessageCircle} 
//                   label="WhatsApp" 
//                   value={profile.whatsapp}
//                   onChange={handleChange}
//                 />
//                 <input 
//                 className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg" 
//                   icon={Twitter} 
//                   label="Twitter" 
//                   value={profile.twitter}
//                   onChange={handleChange}
//                 />
//                 <input 
//                 className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg" 
//                   icon={Send} 
//                   label="Telegram" 
//                   value={profile.telegram}
//                   onChange={handleChange}
//                 />
//                 <input 
//                 className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg" 
//                   icon={MapPin} 
//                   label="Location" 
//                   value={profile.location}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             {/* Professional Information */}
//             <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
//               <h2 className="text-xl font-semibold mb-6">Professional Information</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input 
//                 className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg" 
//                   icon={User} 
//                   label="First Name" 
//                   value={profile.firstName}
//                   onChange={handleChange}
//                 />
//                 <input 
//                 className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg" 
//                   icon={User} 
//                   label="Last Name" 
//                   value={profile.lastName}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <button onClick={handleEdit} className='mt-12 bg-[#F08E1F] text-white px-12 py-3 rounded-lg shadow-lg flex justify-end'>Update</button>

//           </div>

//         </div>
 
//       </div>
//     </div>

//     </>
//   );
// };

// export default EditProfile;

import React, { useState, useEffect } from 'react';
import { URL } from '../url';
import axios from "axios";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Twitter, 
  Send,
  Globe,
  Loader
} from 'lucide-react';

const EditProfile = () => {
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
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
      recognition: ''
    });

    const { user } = useAuth();
    const navigate = useNavigate();

    const fetchUser = async (userId) => {
      try {
        setLoading(true);
        setError(null);
        
        if (!userId) {
          setError('User ID is not available');
          return;
        }

        const res = await axios.get(`${URL}/api/users/user/${userId}`);
        setProfile(res.data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch user data');
        console.error('Error fetching user:', err);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      if (user?.id) {
        fetchUser(user.id);
      }
    }, [user]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setProfile(prev => ({
        ...prev,
        [name]: value 
      }));
    };

    const handleEdit = async (e) => {
      e.preventDefault();
      try {
        setUpdating(true);
        setError(null);
        
        const res = await axios.put(`${URL}/api/users/${user.id}`, profile);
        if (res.status === 200) {
          navigate('/myprofile');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to update profile');
        console.error('Error updating profile:', err);
      } finally {
        setUpdating(false);
      }
    };

    const InputField = ({ icon: Icon, label, name, value, type = "text" }) => (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            className="block w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg
                     focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>
    );

    if (loading) {
      return (
        <>
          <Sidebar />
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <Loader className="h-8 w-8 animate-spin text-[#F08E1F] mx-auto" />
              <p className="mt-2 text-gray-600">Loading profile...</p>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <Sidebar />
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleEdit}>
              {/* Profile Header */}
              <div className="relative mb-8">
                <div className="h-48 w-full bg-gradient-to-r from-[#F08E1F] to-[#F3D8A7] rounded-xl" />
                
                <div className="absolute -bottom-16 left-8 flex items-end space-x-6">
                  <div className="h-32 w-32 rounded-full bg-white p-1">
                    <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
                      <p className="text-3xl">{profile.firstName?.[0]?.toUpperCase() || 'U'}</p>
                    </div>
                  </div>
                  <div className="pb-2">
                    <h1 className="text-2xl font-bold">
                      {profile?.firstName} {profile?.lastName}
                    </h1>
                    <p className="text-green-600 flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {profile?.location || 'Add your location'}
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
                    <textarea
                      name="description"
                      value={profile.description}
                      onChange={handleChange}
                      placeholder="Tell us about yourself..."
                      className="w-full h-36 p-3 bg-gray-50 border border-gray-200 rounded-lg
                               focus:ring-2 focus:ring-orange-500 focus:border-transparent
                               resize-none"
                    />
                  </div>

              
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-4">Recognition</h2>
                    <textarea
                      name="recognition"
                      value={profile.recognition}
                      onChange={handleChange}
                      placeholder="Tell us what you've achieved..."
                      className="w-full h-36 p-3 bg-gray-50 border border-gray-200 rounded-lg
                               focus:ring-2 focus:ring-orange-500 focus:border-transparent
                               resize-none"
                    />
                  </div>
                </div>

                {/* Right Column - Contact Information */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField 
                        icon={Mail} 
                        label="Email" 
                        name="email" 
                        value={profile.email}
                        type="email"
                      />
                      <InputField 
                        icon={Phone} 
                        label="Phone" 
                        name="phone" 
                        value={profile.phone}
                        type="tel"
                      />
                      <InputField 
                        icon={MessageCircle} 
                        label="WhatsApp" 
                        name="whatsapp" 
                        value={profile.whatsapp}
                      />
                      <InputField 
                        icon={Twitter} 
                        label="Twitter" 
                        name="twitter" 
                        value={profile.twitter}
                      />
                      <InputField 
                        icon={Send} 
                        label="Telegram" 
                        name="telegram" 
                        value={profile.telegram}
                      />
                      <InputField 
                        icon={MapPin} 
                        label="Location" 
                        name="location" 
                        value={profile.location}
                      />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
                    <h2 className="text-xl font-semibold mb-6">Professional Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField 
                        icon={User} 
                        label="First Name" 
                        name="firstName" 
                        value={profile.firstName}
                      />
                      <InputField 
                        icon={User} 
                        label="Last Name" 
                        name="lastName" 
                        value={profile.lastName}
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={() => navigate('/myprofile')}
                      className="mr-4 px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={updating}
                      className="px-6 py-2.5 bg-[#F08E1F] text-white rounded-lg shadow-lg 
                               hover:bg-[#E07D1E] transition-colors disabled:opacity-50
                               disabled:cursor-not-allowed flex items-center"
                    >
                      {updating ? (
                        <>
                          <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
                          Updating...
                        </>
                      ) : 'Update Profile'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
};

export default EditProfile;