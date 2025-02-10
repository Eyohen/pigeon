// src/pages/SubscriptionSuccess.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../url';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import Navbar2 from "../components/Navbar2";
import Sidebar from "../components/Sidebar";

const SubscriptionSuccess = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const verifySubscription = async () => {
      try {
        const sessionId = new URLSearchParams(window.location.search).get('session_id');
        if (!sessionId) {
          throw new Error('No session ID found');
        }

        await axios.post(`${URL}/api/subpurchases/verify-session`, {
          sessionId,
          userId: user?.id
        });
        
        toast.success('Subscription activated successfully!');
        setTimeout(() => {
          navigate('/browsecommunities');
        }, 2000);
      } catch (error) {
        console.error('Error verifying subscription:', error);
        toast.error('There was a problem activating your subscription');
        setTimeout(() => {
          navigate('/switchpremium');
        }, 2000);
      }
    };

    verifySubscription();
  }, [navigate, user]);

  return (
    <div>
      <Sidebar />
      <div className='flex-1 ml-[300px]'>
        <Navbar2 />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center p-8 max-w-md">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Processing Your Subscription</h2>
            <p className="text-gray-600">Please wait while we confirm your payment...</p>
            <div className="mt-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F08E1F] mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;