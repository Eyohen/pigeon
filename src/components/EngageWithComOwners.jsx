import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const EngageWithComOwners = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate()
  return (
    <div className='py-9 bg-white px-4 md:px-[120px] font-nunito'>
    <p className='text-center text-6xl font-bold'>Engage with Community Owners</p>

    <p className='font-normal text-center mt-8 text-3xl'>Forge connections with community owners to access tailored services such as detailed market research, targeted advertising, and unique content offerings. This collaboration opens doors to specialized insights and targeted audience engagement, enriching your market presence.</p>

    <div className='flex flex-col md:flex-row items-center justify-center gap-x-0 md:gap-x-9 md:space-y-0 space-y-4 mt-9'>
        <div>
        <button onClick={()=> navigate('/freebrowsecommunity')} className='bg-[#F08E1F] text-white rounded-full px-6 py-4'>Discover Community Owners</button>
        </div>

        <div>
        <button onClick={() => navigate('/freeregistervisibility')} className='border border-[#F08E1F] text-gray-600 rounded-full px-6 py-4'>Register your Community</button>
        </div>

        </div>


    </div>
  )
}

export default EngageWithComOwners