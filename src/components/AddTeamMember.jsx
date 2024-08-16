import React, { useEffect, useState } from "react";
import { URL } from '../url'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const AddTeamMember = ({ isOpen, onClose, communityId, onVerificationUpdate, children }) => {
  if (!isOpen) return null;

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [isToggled, setIsToggled] = useState(false)
  const [selectedVerified, setSelectedVerified] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleToggle = () => {
    setIsToggled(!isToggled);
  }

  const createTeamMember = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")

    const role = isToggled ? "admin" : "user";

    const createdInfo = { 
      phone: "xxxxxxxxx",
      firstName,
      lastName,
      email,
      password,
      role
    }

    try {
      const res = await axios.post(`${URL}/api/admin/register`, createdInfo
);
      if (res.data) {
        onClose();
        // onVerificationUpdate();
      }
    } catch (error) {
      console.error("failed to create:", error)

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center pt-16 z-50">
      <div className="bg-white p-6 rounded-lg w-[680px] h-[680px] px-6 py-4">
        {children}
        <p className='font-semibold text-2xl'>Add Team Members</p>


        <p className='mt-2 font-medium'>First Name</p>
        <input onChange={(e) => setFirstName(e.target.value)} className='border border-gray-700 w-full focus:outline-none text-gray-500 py-2 px-2 rounded-md' placeholder='John'/>

        <p className='mt-2 font-medium'>Last Name</p>
        <input onChange={(e) => setLastName(e.target.value)} className='border border-gray-700 w-full focus:outline-none text-gray-500 py-2 px-2 rounded-md' placeholder='Doe'/>
        <p className='mt-2 font-medium'>Email</p>
    <input onChange={(e) => setEmail(e.target.value)} className='border border-gray-700 w-full focus:outline-none text-gray-500 py-2 px-2 rounded-md' placeholder='community@gmail.com'/>

    <p className='mt-4 font-medium'>Password</p>
    <input onChange={(e) => setPassword(e.target.value)}  className='border border-gray-700 w-full focus-outline:none text-gray-500 py-2 px-2 rounded-md' placeholder='xxxxxxxx'/>

    <p className='font-semibold text-xl mt-6'>Access:</p>

    <div className="flex justify-between items-center"><p className="font-semibold text-xl mt-6">Manage Communities</p>
    <div className="mt-4" onClick={handleToggle}>
        {isToggled ? (
          <BsToggleOn size={30} className="text-[#F08E1F]" />
        ) : (
          <BsToggleOff size={30} />
        )}
      </div>

   </div>


    <div className="flex mt-[100px]">
        <button 
        type="button"
          onClick={onClose} 
          className="mt-4 border border-red-500 text-red-500 px-[72px] py-2 rounded-3xl"
        >
          Cancel
        </button>
        <button 
        onClick={createTeamMember}
        disabled={isLoading}
          className="mt-4 ml-4 bg-[#F08E1F] text-white px-32 py-2 rounded-3xl"
        >
          {isLoading ? "Creating ..." : "Add Team Member"}
        </button>
        </div>

      </div>
    </div>
  );
};

export default AddTeamMember;