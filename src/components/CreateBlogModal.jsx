import React, { useEffect, useState } from "react";
import { URL } from '../url'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { IoCloudUploadOutline } from "react-icons/io5";

const CreateBlogModal = ({ isOpen3, onClose3, postId, onVerificationUpdate, children }) => {
  if (!isOpen3) return null;

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [heading, setHeading] = useState("")
  const [text, setText] = useState("")
  const [file, setFile] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [selectedVerified, setSelectedVerified] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleToggle = () => {
    setIsToggled(!isToggled);
  }

//   const fetchBlogData = async (postId) => {
//     try {
//       const res = await axios.get(`${URL}/api/posts/${postId}`);
//       const userData = res.data;
//       setTitle(userData.title);
//       setHeading(userData.heading);
//       setText(userData.text);
//       setImageUrl(userData.imageUrl);
//     } catch (error) {
//       console.error("Failed to fetch user data:", error);
//     }
//   };

//   useEffect(() => {
//     if (postId) {
//       fetchBlogData(postId);
//     }
//   }, [postId]);

  
  const createBlog = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    const formData = new FormData();
    formData.append('title', title)
    formData.append('heading', heading);
    formData.append('text', text);
    if (file) {
      formData.append('imageUrl', file);
    }

    try {
      const res = await axios.post(`${URL}/api/posts/create`, formData, {
        headers:{
            'Content-Type':'multipart/form-data'
          }
      });
      if (res) {
        onClose3();
        navigate('/adminblog')
        setIsLoading(false)
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
      <div className="bg-white p-6 rounded-lg w-[680px] h-[600px] px-6 py-4">
        {children}
        <p className='font-semibold text-2xl'>Create Blog Post</p>
        <p className="mt-2 text-gray-400">Fill the details below to create a new blog post</p>

        <p className='mt-2 font-medium'>Title</p>
        <input onChange={(e) => setTitle(e.target.value)} className='border border-gray-700 w-full focus:outline-none text-gray-500 py-2 px-2 rounded-md' placeholder='title'/>

        <p className='mt-2 font-medium'>Heading</p>
        <input onChange={(e) => setHeading(e.target.value)} className='border border-gray-700 w-full focus:outline-none text-gray-500 py-2 px-2 rounded-md' placeholder='heading'/>
        <p className='mt-2 font-medium'>Text</p>
    <textarea onChange={(e) => setText(e.target.value)} className='border border-gray-700 w-full h-[120px] focus:outline-none text-gray-500 py-2 px-2 rounded-md' placeholder='please fill in the contents of the post here ...'/>

    <label className='cursor-pointer border rounded-lg py-6 flex justify-center'>
        <div className="">
   <p className=""><IoCloudUploadOutline size={30} color="#F08E1F" /></p>
    <p className="">Upload a file</p>
    <p>PNG, JPG up to 5MB</p>

                  <input className='text-[#F08E1F]' type="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: 'none' }}/>

                  </div>
          
                </label>
{/* 
    <p className='mt-4 font-medium'>Password</p>
    <input onChange={(e) => setPassword(e.target.value)}  className='border border-gray-700 w-full focus-outline:none text-gray-500 py-2 px-2 rounded-md' placeholder='xxxxxxxx'/> */}




    <div className="flex mt-[20px]">
        <button 
        type="button"
          onClick={onClose3} 
          className="mt-4 border border-red-500 text-red-500 px-[72px] py-2 rounded-3xl"
        >
          Cancel
        </button>
        <button 
        onClick={createBlog}
        disabled={isLoading}
          className="mt-4 ml-4 bg-[#F08E1F] text-white px-32 py-2 rounded-3xl"
        >
          {isLoading ? "Creating ..." : "Create Blog Post"}
        </button>
        </div>

      </div>
    </div>
  );
};

export default CreateBlogModal;