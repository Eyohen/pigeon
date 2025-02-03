// import React from 'react'
// import oops from '../assets/oops.png'

// const Unauthorized = () => {
//   return (
//     <div className='flex justify-center items-center h-screen'>

// <div>
//         <img src={oops} className='w-full ' />
//         <p className='text-3xl'>Oops!! Sorry Looks like you're not logged In</p>

//         </div>


//     </div>
//   )
// }

// export default Unauthorized

import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Shield className="h-24 w-24 text-red-500 opacity-20" />
            <AlertCircle className="h-12 w-12 text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Access Denied
        </h1>
        
        <div className="space-y-3 mb-8">
          <p className="text-gray-600">
            We're sorry, but you don't have permission to access this page.
          </p>
          <p className="text-gray-500 text-sm">
            Please sign in with an authorized account to continue.
          </p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => navigate('/login')} 
            className="w-full bg-[#F08E1F] text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Sign In
          </button>
          
          <button 
            onClick={() => navigate('/')} 
            className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Return to Home
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          {/* <p className="text-sm text-gray-500">
            Need help? Contact <a href="mailto:support@example.com" className="text-blue-600 hover:text-blue-700">support@example.com</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;