// //pages/Analytics.jsx
// import React from 'react';
// import axios from 'axios';
// import { URL } from '../url';
// import { useAuth } from '../context/AuthContext';

// const AnalyticsPage = () => {
//   const MetricCard = ({ title, value, timeframe, bgColor = 'bg-orange-500' }) => (
//     <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
//         <div className="flex items-center space-x-2">
//           <span className={`${bgColor} text-white text-xs px-2 py-1 rounded-full`}>
//             All Time
//           </span>
//           <button className="text-gray-400 hover:text-gray-600">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="flex items-end justify-between">
//         <div className="text-2xl font-bold text-gray-900">{value}</div>
//         <div className="text-xs text-gray-500">{timeframe}</div>
//       </div>
//     </div>
//   );

//   const topCommunitiesData = [
//     { name: 'Green Earth Advocate', value: 100 },
//     { name: 'Study Sync Pro', value: 75 },
//     { name: 'Connect Sphere', value: 70 },
//     { name: 'Zen Yoga Club', value: 45 },
//     { name: 'Talent Flex Solution', value: 35 },
//   ];

//   return (
//     <>
//       {/* Metrics Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <MetricCard 
//           title="Registered Users" 
//           value="4,639" 
//           timeframe="2hrs ago" 
//         />
//         <MetricCard 
//           title="Active Users" 
//           value="4,639" 
//           timeframe="6months ago" 
//         />
//         <MetricCard 
//           title="Total Subscribers" 
//           value="4,639" 
//           timeframe="6months ago" 
//         />
//         <MetricCard 
//           title="Active Subscribers" 
//           value="4,000" 
//           timeframe="2 years ago" 
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <MetricCard 
//           title="Total Communities" 
//           value="4,639" 
//           timeframe="6months ago" 
//         />
//         <MetricCard 
//           title="Total Connectors" 
//           value="4,639" 
//           timeframe="6months ago" 
//         />
//         <MetricCard 
//           title="Subscription Revenue" 
//           value="$4,639" 
//           timeframe="6months ago" 
//         />
//         <MetricCard 
//           title="PAYG Revenue" 
//           value="$20,000" 
//           timeframe="4 years ago" 
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <MetricCard 
//           title="Total Transaction Volume" 
//           value="4,639" 
//           timeframe="2hrs ago" 
//         />
//         <MetricCard 
//           title="Total Transaction Value" 
//           value="$639,000" 
//           timeframe="6months ago" 
//         />
//         <MetricCard 
//           title="Transactions Value by community owners" 
//           value="4,639" 
//           timeframe="6months ago" 
//         />
//         <MetricCard 
//           title="Transaction Value by Communities" 
//           value="200" 
//           timeframe="2 years ago" 
//         />
//       </div>

//       {/* Top Communities Chart */}
//       <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-900 mb-1">Top Communities</h2>
//           <p className="text-sm text-gray-500">Based On Revenue</p>
//         </div>
        
//         <div className="space-y-4">
//           {topCommunitiesData.map((community, index) => (
//             <div key={community.name} className="flex items-center">
//               <div className="w-32 text-sm text-gray-600 truncate">
//                 {community.name}
//               </div>
//               <div className="flex-1 mx-4">
//                 <div className="bg-gray-200 rounded-full h-6">
//                   <div 
//                     className="bg-orange-500 h-6 rounded-full transition-all duration-300"
//                     style={{ width: `${community.value}%` }}
//                   ></div>
//                 </div>
//               </div>
//               <div className="w-8 text-right text-sm text-gray-500">
//                 {community.value}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Chart Scale */}
//         <div className="flex justify-between text-xs text-gray-400 mt-4 px-32">
//           <span>0</span>
//           <span>20</span>
//           <span>40</span>
//           <span>60</span>
//           <span>80</span>
//           <span>100</span>
//           <span>120</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AnalyticsPage;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const AnalyticsPage = () => {
  const { user, token } = useAuth();
  const [analytics, setAnalytics] = useState(null);
  const [topCommunities, setTopCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalyticsData();
    fetchTopCommunities();
  }, [token]);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${URL}/api/admin-analytics/dashboard`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setAnalytics(response.data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
      setError('Failed to load analytics data');
    }
  };

  const fetchTopCommunities = async () => {
    try {
      const response = await axios.get(`${URL}/api/admin-analytics/top-communities?limit=5`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setTopCommunities(response.data.communities || []);
    } catch (error) {
      console.error('Error fetching top communities:', error);
    } finally {
      setLoading(false);
    }
  };

  const MetricCard = ({ title, value, timeframe, bgColor = 'bg-orange-500' }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className={`${bgColor} text-white text-xs px-2 py-1 rounded-full`}>
            All Time
          </span>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-gray-900">
          {loading ? (
            <div className="animate-pulse bg-gray-200 h-8 w-16 rounded"></div>
          ) : (
            value
          )}
        </div>
        <div className="text-xs text-gray-500">{timeframe}</div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="text-red-800">{error}</div>
        <button 
          onClick={fetchAnalyticsData}
          className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard 
          title="Registered Users" 
          value={analytics?.userMetrics?.totalUsers?.toLocaleString() || '0'} 
          timeframe="Total" 
        />
        <MetricCard 
          title="Active Users" 
          value={analytics?.userMetrics?.activeUsers?.toLocaleString() || '0'} 
          timeframe="Last 6 months" 
        />
        <MetricCard 
          title="Total Subscribers" 
          value={analytics?.userMetrics?.totalSubscribers?.toLocaleString() || '0'} 
          timeframe="Total" 
        />
        <MetricCard 
          title="Active Subscribers" 
          value={analytics?.userMetrics?.activeSubscribers?.toLocaleString() || '0'} 
          timeframe="Current" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard 
          title="Total Communities" 
          value={analytics?.contentMetrics?.totalCommunities?.toLocaleString() || '0'} 
          timeframe="Active" 
        />
        <MetricCard 
          title="Total Connectors" 
          value={analytics?.contentMetrics?.totalConnectors?.toLocaleString() || '0'} 
          timeframe="Active" 
        />
        <MetricCard 
          title="Subscription Revenue" 
          value={`$${analytics?.revenueMetrics?.subscriptionRevenue?.toLocaleString() || '0'}`} 
          timeframe="Total" 
        />
        <MetricCard 
          title="PAYG Revenue" 
          value={`$${analytics?.revenueMetrics?.payGRevenue?.toLocaleString() || '0'}`} 
          timeframe="Total" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard 
          title="Total Transaction Volume" 
          value={analytics?.revenueMetrics?.totalTransactionVolume?.toLocaleString() || '0'} 
          timeframe="All Time" 
        />
        <MetricCard 
          title="Total Transaction Value" 
          value={`$${analytics?.revenueMetrics?.totalTransactionValue?.toLocaleString() || '0'}`} 
          timeframe="All Time" 
        />
        <MetricCard 
          title="Community Owner Transactions" 
          value="0" 
          timeframe="Placeholder" 
        />
        <MetricCard 
          title="Community Transactions" 
          value="0" 
          timeframe="Placeholder" 
        />
      </div>

      {/* Top Communities Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Top Communities</h2>
          <p className="text-sm text-gray-500">Based On Engagement</p>
        </div>
        
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-6 flex-1 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-8 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {topCommunities.length > 0 ? (
              topCommunities.map((community, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-32 text-sm text-gray-600 truncate">
                    {community.name}
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-6">
                      <div 
                        className="bg-orange-500 h-6 rounded-full transition-all duration-300"
                        style={{ width: `${community.value}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-8 text-right text-sm text-gray-500">
                    {community.value}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                No community data available
              </div>
            )}
          </div>
        )}

        {/* Chart Scale */}
        <div className="flex justify-between text-xs text-gray-400 mt-4 px-32">
          <span>0</span>
          <span>20</span>
          <span>40</span>
          <span>60</span>
          <span>80</span>
          <span>100</span>
          <span>120</span>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;