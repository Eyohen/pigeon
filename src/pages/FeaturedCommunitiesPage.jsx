import React from 'react';

const FeaturedCommunitiesPage = () => {
  const handleAddFeaturedCommunity = () => {
    // Handle add featured community functionality
    console.log('Add Featured Community clicked');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
      {/* Illustration */}
      <div className="mb-8">
        <div className="relative">
          {/* Background circle */}
          <div className="w-48 h-48 bg-orange-100 rounded-full flex items-center justify-center relative">
            {/* Character 1 - Orange circle with arms and face */}
            <div className="absolute left-8 top-12">
              <div className="w-16 h-16 bg-orange-500 rounded-full relative flex items-center justify-center">
                {/* Face */}
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-8 w-3 h-1.5 bg-white rounded-full"></div>
                
                {/* Arms */}
                <div className="absolute -left-4 top-2 w-3 h-8 bg-orange-500 rounded-full transform rotate-45"></div>
                <div className="absolute -right-4 top-2 w-3 h-8 bg-orange-500 rounded-full transform -rotate-45"></div>
                
                {/* Legs */}
                <div className="absolute -bottom-6 -left-2 w-3 h-6 bg-orange-500 rounded-full transform rotate-12"></div>
                <div className="absolute -bottom-6 -right-2 w-3 h-6 bg-orange-500 rounded-full transform -rotate-12"></div>
              </div>
            </div>

            {/* Character 2 - Lighter orange circle with arms raised */}
            <div className="absolute right-6 top-8">
              <div className="w-20 h-20 bg-orange-300 rounded-full relative flex items-center justify-center">
                {/* Face */}
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-10 w-4 h-2 bg-white rounded-full"></div>
                
                {/* Arms raised up */}
                <div className="absolute -left-5 -top-2 w-3 h-10 bg-orange-300 rounded-full transform -rotate-12"></div>
                <div className="absolute -right-5 -top-2 w-3 h-10 bg-orange-300 rounded-full transform rotate-12"></div>
                
                {/* Legs */}
                <div className="absolute -bottom-8 -left-2 w-3 h-8 bg-orange-300 rounded-full"></div>
                <div className="absolute -bottom-8 -right-2 w-3 h-8 bg-orange-300 rounded-full"></div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-4 left-20 w-2 h-2 bg-orange-200 rounded-full"></div>
            <div className="absolute bottom-8 right-16 w-1.5 h-1.5 bg-orange-200 rounded-full"></div>
            <div className="absolute top-16 right-4 w-1 h-1 bg-orange-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Empty State Text */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        No Featured Communities Yet
      </h2>

      {/* Add Featured Community Button */}
      <button
        onClick={handleAddFeaturedCommunity}
        className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Add Featured Community
      </button>
    </div>
  );
};

export default FeaturedCommunitiesPage;