import React, { useEffect, useState } from "react";
import { URL } from '../url'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const EditBlogModal = ({ isOpen2, onClose2, postId, onVerificationUpdate, children }) => {
  if (!isOpen2) return null;

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [heading, setHeading] = useState("")
  const [text, setText] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [selectedVerified, setSelectedVerified] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleToggle = () => {
    setIsToggled(!isToggled);
  }

  const fetchBlogData = async (postId) => {
    try {
      const res = await axios.get(`${URL}/api/posts/${postId}`);
      const userData = res.data;
      setTitle(userData.title);
      setHeading(userData.heading);
      setText(userData.text);
      setImageUrl(userData.imageUrl);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchBlogData(postId);
    }
  }, [postId]);
  const editBlog = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")



    const updatedInfo = { 
      title,
      heading,
      text,
    }

    try {
      const res = await axios.put(`${URL}/api/posts/${postId}`, updatedInfo
);
      if (res.data) {
        onClose2();
        // onVerificationUpdate();
      }
    } catch (error) {
      console.error("failed to create:", error)

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center pt-12 z-50">
      <div className="bg-white p-6 rounded-lg w-[680px] h-[720px] px-6 py-4">
        {children}
        <p className='font-semibold text-2xl'>Edit Blog Post</p>


        <img src={imageUrl ? imageUrl : "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"} alt={text} className="w-full h-[250px] rounded-lg mt-2" />

        <p className='mt-2 font-medium'>Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className='border border-gray-700 w-full focus:outline-none text-gray-500 py-2 px-2 rounded-md' placeholder='John'/>

        <p className='mt-2 font-medium'>Heading</p>
        <input value={heading} onChange={(e) => setHeading(e.target.value)} className='border border-gray-700 w-full focus:outline-none text-gray-500 py-2 px-2 rounded-md' placeholder='Doe'/>
        <p className='mt-2 font-medium'>Text</p>
    <textarea value={text} onChange={(e) => setText(e.target.value)} className='border border-gray-700 w-full h-[120px] focus:outline-none text-gray-500 py-2 px-2 rounded-md' placeholder='community@gmail.com'/>
{/* 
    <p className='mt-4 font-medium'>Password</p>
    <input onChange={(e) => setPassword(e.target.value)}  className='border border-gray-700 w-full focus-outline:none text-gray-500 py-2 px-2 rounded-md' placeholder='xxxxxxxx'/> */}




    <div className="flex mt-[10px]">
        <button 
        type="button"
          onClick={onClose2} 
          className="mt-4 border border-red-500 text-red-500 px-[72px] py-2 rounded-3xl"
        >
          Cancel
        </button>
        <button 
        onClick={editBlog}
        disabled={isLoading}
          className="mt-4 ml-4 bg-[#F08E1F] text-white px-32 py-2 rounded-3xl"
        >
          {isLoading ? "Editing ..." : "Edit Blog Post"}
        </button>
        </div>

      </div>
    </div>
  );
};

export default EditBlogModal;