import React, { useState, useEffect } from 'react'
import { URL } from '../url';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar'
import {
  User, Mail, Phone, MapPin, MessageCircle,
  Twitter, Send, Globe, Linkedin
} from 'lucide-react';
import SimpleLoader from '../components/SimpleLoader';

const MyProfile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
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
    recognition: '',
    linkedin: '',
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

      const res = await axios.get(`${URL}/api/users/${userId}`);
      setProfile(res.data);
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

  const handleUpdateProfile = async () => {
    try {
      await axios.put(`${URL}/api/users/${user?.id}`, profile);
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  const ProfileField = ({ icon: Icon, label, name, value, isEditing }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      {isEditing ? (
        <div className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg">
          <Icon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={value}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              [name]: e.target.value
            }))}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      ) : (
        <div className="flex items-center space-x-3 p-2.5 bg-gray-50 rounded-lg">
          <Icon className="h-5 w-5 text-gray-400" />
          <span className="text-gray-700">{value}</span>
        </div>
      )}
    </div>
  );

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">



      {loading ? (
                <div className="flex justify-center items-center min-h-[400px]">
                    <SimpleLoader size={120} color="#F08E1F" />
                </div>
            ) : (



        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <div className="relative mb-8">
            <div className="h-48 w-full bg-gradient-to-r from-[#F08E1F] to-[#F3D8A7] rounded-xl" />
            <div className="absolute -bottom-16 left-8 flex items-end space-x-6">
              <div className="h-32 w-32 rounded-full bg-white p-1">
                <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
                  <p className='text-3xl'>{profile.firstName?.[0]}</p>
                </div>
              </div>
              <div className="pb-2">
                <h1 className="text-2xl font-bold">
                  {profile.firstName} {profile.lastName}
                </h1>
                <p className="text-green-600 flex items-center">
                  <Globe className="h-4 w-4 mr-1" />
                  {profile.location}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                {isEditing ? (
                  <textarea
                    value={profile.description}
                    onChange={(e) => setProfile(prev => ({
                      ...prev,
                      description: e.target.value
                    }))}
                    className="w-full p-2 border rounded"
                    rows={4}
                  />
                ) : (
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {profile.description}
                  </p>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 mt-3">
                <h2 className="text-xl font-semibold mb-4">Recognition</h2>
                {isEditing ? (
                  <textarea
                    value={profile.recognition}
                    onChange={(e) => setProfile(prev => ({
                      ...prev,
                      recognition: e.target.value
                    }))}
                    className="w-full p-2 border rounded"
                    rows={4}
                  />
                ) : (
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {profile.recognition}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Email Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
        {isEditing ? (
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              email: e.target.value
            }))}
            className="w-full p-2.5 bg-gray-50 rounded-lg focus:outline-none border"
          />
        ) : (
          <div className="p-2.5 bg-gray-50 rounded-lg">
            {profile.email}
          </div>
        )}
      </div>

      {/* Phone Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
        {isEditing ? (
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              phone: e.target.value
            }))}
            className="w-full p-2.5 bg-gray-50 rounded-lg focus:outline-none border"
          />
        ) : (
          <div className="p-2.5 bg-gray-50 rounded-lg">
            {profile.phone}
          </div>
        )}
      </div>

      {/* WhatsApp Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-600 mb-1">WhatsApp</label>
        {isEditing ? (
          <input
            type="text"
            value={profile.whatsapp}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              whatsapp: e.target.value
            }))}
            className="w-full p-2.5 bg-gray-50 rounded-lg focus:outline-none border"
          />
        ) : (
          <div className="p-2.5 bg-gray-50 rounded-lg">
            {profile.whatsapp}
          </div>
        )}
      </div>

      {/* Twitter Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-600 mb-1">Twitter</label>
        {isEditing ? (
          <input
            type="text"
            value={profile.twitter}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              twitter: e.target.value
            }))}
            className="w-full p-2.5 bg-gray-50 rounded-lg focus:outline-none border"
          />
        ) : (
          <div className="p-2.5 bg-gray-50 rounded-lg">
            {profile.twitter}
          </div>
        )}
      </div>

      {/* Telegram Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-600 mb-1">Telegram</label>
        {isEditing ? (
          <input
            type="text"
            value={profile.telegram}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              telegram: e.target.value
            }))}
            className="w-full p-2.5 bg-gray-50 rounded-lg focus:outline-none border"
          />
        ) : (
          <div className="p-2.5 bg-gray-50 rounded-lg">
            {profile.telegram}
          </div>
        )}
      </div>

      {/* LinkedIn Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-600 mb-1">LinkedIn</label>
        {isEditing ? (
          <input
            type="text"
            value={profile.linkedin}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              linkedin: e.target.value
            }))}
            className="w-full p-2.5 bg-gray-50 rounded-lg focus:outline-none border"
          />
        ) : (
          <div className="p-2.5 bg-gray-50 rounded-lg">
            {profile.linkedin}
          </div>
        )}
      </div>

      {/* Location Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
        {isEditing ? (
          <input
            type="text"
            value={profile.location}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              location: e.target.value
            }))}
            className="w-full p-2.5 bg-gray-50 rounded-lg focus:outline-none border"
          />
        ) : (
          <div className="p-2.5 bg-gray-50 rounded-lg">
            {profile.location}
          </div>
        )}
      </div>
    </div>
             
              </div>

              {/* Professional Information */}
              <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
    <h2 className="text-xl font-semibold mb-6">Professional Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First Name Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
        {isEditing ? (
          <input
            type="text"
            value={profile.firstName}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              firstName: e.target.value
            }))}
            className="w-full p-2.5 bg-gray-50 rounded-lg focus:outline-none border"
          />
        ) : (
          <div className="p-2.5 bg-gray-50 rounded-lg">
            {profile.firstName}
          </div>
        )}
      </div>

      {/* Last Name Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
        {isEditing ? (
          <input
            type="text"
            value={profile.lastName}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              lastName: e.target.value
            }))}
            className="w-full p-2.5 bg-gray-50 rounded-lg focus:outline-none border"
          />
        ) : (
          <div className="p-2.5 bg-gray-50 rounded-lg">
            {profile.lastName}
          </div>
        )}
      </div>
    </div>
  </div>




              <div className="mt-6 flex justify-end gap-4">
                {isEditing ? (
                  <>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        fetchUser(user?.id); // Reset to original data
                      }}
                      className="px-4 py-2 border rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdateProfile}
                      className="px-4 py-2 bg-[#F08E1F] text-white rounded-lg"
                    >
                      Save Changes
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-[#F08E1F] text-white rounded-lg"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>



)}  


      </div>
    </>
  );
};

export default MyProfile;