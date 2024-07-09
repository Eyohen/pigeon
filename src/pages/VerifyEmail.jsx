import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../url';

// Custom hook to get query parameters from the URL
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const VerifyEmail = () => {
  const [errorMsg, setErrorMsg] = useState('')  
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const query = useQuery();
  const token = query.get('token');
  const navigate = useNavigate(); // Get navigate function


    const verifyEmail = async () => {
      try {
        const res = await axios.get(`${URL}/api/auth/verify-email?token=${token}`);
        if (res.status === 200) {
          setMessage(res.data.msg);

            navigate('/login');
  
        }
      } catch (error) {
        setMessage('Email verification Successful. proceed to login');
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      console.log('Verifying email...');
      verifyEmail();
    } else {
      setMessage('Invalid or missing token.');
      setLoading(false);
    }

    useEffect(() => {
     verifyEmail()
  }, [token]); // Add navigate to the dependency array

  return (
    <div className='text-center mt-12'>
      {loading ? <p>Loading...</p> : <p>{message}</p>}
    </div>
  );
};

export default VerifyEmail;
