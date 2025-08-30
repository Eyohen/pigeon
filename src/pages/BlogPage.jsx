import React from 'react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const BlogPage = () => {
  const handleCreatePost = () => {
    // Handle create new post functionality
    console.log('Create New Post clicked');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
      {/* Illustration */}
      <div className="mb-8">
        <div className="relative">
          {/* Background elements */}
          <div className="absolute -top-4 left-12 w-3 h-3 bg-gray-300 rounded-full opacity-60"></div>
          <div className="absolute -top-8 right-16 w-2 h-2 bg-gray-300 rounded-full opacity-40"></div>
          <div className="absolute top-2 -left-2 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-50"></div>
          <div className="absolute bottom-12 -right-4 w-2.5 h-2.5 bg-gray-300 rounded-full opacity-30"></div>
          <div className="absolute -bottom-2 left-8 w-2 h-2 bg-gray-300 rounded-full opacity-40"></div>

          {/* Main illustration container */}
          <div className="w-48 h-48 relative flex items-center justify-center">
            {/* Background subtle circle */}
            <div className="absolute w-32 h-32 bg-gray-100 rounded-full opacity-50"></div>
            
            {/* Megaphone/Speaker illustration */}
            <div className="relative z-10">
              {/* Megaphone body */}
              <div className="relative">
                {/* Main cone */}
                <div className="w-16 h-12 bg-orange-500 relative transform rotate-12">
                  {/* Cone shape using clip-path effect with borders */}
                  <div className="w-full h-full bg-orange-500 transform skew-x-12 origin-left"></div>
                </div>
                
                {/* Handle */}
                <div className="absolute -bottom-2 left-2 w-6 h-3 bg-orange-600 rounded transform rotate-12"></div>
                
                {/* Sound waves */}
                <div className="absolute -right-8 top-0">
                  <div className="w-4 h-1 bg-orange-300 rounded-full mb-1 animate-pulse"></div>
                  <div className="w-6 h-1 bg-orange-300 rounded-full mb-1 animate-pulse delay-100"></div>
                  <div className="w-8 h-1 bg-orange-300 rounded-full mb-1 animate-pulse delay-200"></div>
                  <div className="w-6 h-1 bg-orange-300 rounded-full mb-1 animate-pulse delay-300"></div>
                  <div className="w-4 h-1 bg-orange-300 rounded-full animate-pulse delay-400"></div>
                </div>

                {/* Alternative simpler megaphone */}
                <div className="absolute top-0 left-0">
                  {/* Cone */}
                  <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-12 border-b-orange-500 transform rotate-45 translate-x-4 translate-y-2"></div>
                  
                  {/* Body */}
                  <div className="w-12 h-8 bg-orange-500 rounded-lg transform rotate-12 translate-x-2 translate-y-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  
                  {/* Handle */}
                  <div className="w-3 h-6 bg-orange-600 rounded transform rotate-12 translate-x-1 -translate-y-1"></div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-8 right-12 w-3 h-3 bg-orange-200 rounded transform rotate-45 animate-bounce"></div>
            <div className="absolute bottom-8 left-16 w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Empty State Text */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          No Blog Post Yet
        </h2>
        <p className="text-gray-600">
          No blog content found. Start by adding a new post
        </p>
      </div>

      {/* Create New Post Button */}
      <button
        onClick={handleCreatePost}
        className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Create New Post
      </button>
    </div>
  );
};

export default BlogPage;