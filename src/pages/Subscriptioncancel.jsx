// src/pages/SubscriptionCancel.js 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar2 from "../components/Navbar2";
import Sidebar from "../components/Sidebar";

const SubscriptionCancel = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div>
      <Sidebar />
      <div className='flex-1 ml-[300px]'>
        <Navbar2 />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center p-8 max-w-md">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Subscription Cancelled</h2>
            <p className="text-gray-600 mb-8">Your subscription process was cancelled. No charges have been made.</p>
            <button
              onClick={() => navigate('/switchpremium')}
              className="bg-[#F08E1F] text-white px-6 py-3 rounded-full hover:bg-[#d97d1c] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCancel;