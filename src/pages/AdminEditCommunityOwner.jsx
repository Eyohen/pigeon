import React, { useState, useEffect } from 'react'
import { URL } from "../url";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillAndroid } from 'react-icons/ai';
import Navbar2 from '../components/Navbar2';
import AdminSidebar from '../components/AdminSidebar';

const AdminEditCommunityOwner = () => {
  const { user } = useAuth();
  const ownerId = useParams().id;
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    whatsapp: '',
    twitter: '',
    telegram: '',
    rating: '',
    review: '',
    recognition: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch owner data and update form
  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const res = await axios.get(`${URL}/api/owners/${ownerId}`);
        // Update all form fields with existing data
        setFormData({
          name: res.data.name || '',
          email: res.data.email || '',
          description: res.data.description || '',
          whatsapp: res.data.whatsapp || '',
          twitter: res.data.twitter || '',
          telegram: res.data.telegram || '',
          rating: res.data.rating || '',
          review: res.data.review || '',
          recognition: res.data.recognition || ''
        });
      } catch (err) {
        console.error("Error fetching owner data:", err);
        toast.error('Failed to load owner data');
      }
    };

    fetchOwners();
  }, [ownerId]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = async () => {
    setIsLoading(true);
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error('Access token not found');
  
      }

      await axios.put(
        `${URL}/api/owners/${ownerId}`,
        {
          ...formData,
          user: user?.id
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        }
      );

      setError(false);
      toast.success('Community Owner Updated Successfully!!', toastStyles.success);
      setTimeout(() => navigate('/admincommunityowner'), 1000);
    } catch (err) {
      setError(true);
      toast.error('Failed to update Community');
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const toastStyles = {
    success: {
      duration: 10000,
      iconTheme: {
        primary: 'white',
        secondary: '#4CAF50',
      },
      style: {
        background: "green",
        color: "whitesmoke",
        icon: <AiFillAndroid background-color="whitesmoke" color='green' />,
      },
    },
    error: {
      duration: 10000,
      style: {
        background: '#F44336',
        color: 'white',
        fontWeight: 'bold',
      },
      iconTheme: {
        primary: 'white',
        secondary: '#F44336',
      },
    },
  };

  return (
    <div className='flex-1'>
      <AdminSidebar />
      <Navbar2 />

      <div className='flex justify-evenly'>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 9000,
            style: {
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)'
            }
          }}
        />

        <div>
          <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3'>
            <p className='font-semibold'>Edit Community Owner</p>

            <p>Name</p>
            <input
              name="name"
              onChange={handleInputChange}
              value={formData.name}
              className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
            />

            <p>Email</p>
            <input
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
            />

            <p>Description</p>
            <textarea
              name="description"
              onChange={handleInputChange}
              value={formData.description}
              className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
            />

            <p>Special Achievements or Recognitions</p>
            <textarea
              name="recognition"
              onChange={handleInputChange}
              value={formData.recognition}
              className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
            />

            <p className='font-semibold'>Contact Information</p>
            <p>Whatsapp</p>
            <input
              name="whatsapp"
              onChange={handleInputChange}
              value={formData.whatsapp}
              className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
            />

            <p>Telegram</p>
            <input
              name="telegram"
              onChange={handleInputChange}
              value={formData.telegram}
              className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
            />

            <p>Twitter</p>
            <input
              name="twitter"
              onChange={handleInputChange}
              value={formData.twitter}
              className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
            />
          </div>

          <div className='items-center justify-center flex mt-9'>
            <button
              onClick={handleEdit}
              className='bg-[#F08E1F] text-white rounded-full px-32 py-2'
            >
              {isLoading ? "Loading..." : "Edit Community Owner"}
            </button>
          </div>
        </div>
      </div>
      <div className='mb-24'></div>
    </div>
  );
};

export default AdminEditCommunityOwner;