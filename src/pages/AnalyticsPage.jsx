// //pages/Analytics.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { URL } from '../url';
// import { useAuth } from '../context/AuthContext';

// const AnalyticsPage = () => {
//   const { user, token } = useAuth();
//   const [analytics, setAnalytics] = useState(null);
//   const [topCommunities, setTopCommunities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchAnalyticsData();
//     fetchTopCommunities();
//   }, [token]);

//   const fetchAnalyticsData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${URL}/api/admin-analytics/dashboard`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
      
//       setAnalytics(response.data);
//     } catch (error) {
//       console.error('Error fetching analytics:', error);
//       setError('Failed to load analytics data');
//     }
//   };

//   const fetchTopCommunities = async () => {
//     try {
//       const response = await axios.get(`${URL}/api/admin-analytics/top-communities?limit=5`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
      
//       setTopCommunities(response.data.communities || []);
//     } catch (error) {
//       console.error('Error fetching top communities:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const MetricCard = ({ title, value, timeframe, bgColor = 'bg-orange-500' }) => (
//     <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
//         <div className="flex items-center space-x-2">
//           <span className={`${bgColor} text-white text-xs px-2 py-1 rounded-full`}>
//             All Time
//           </span>
//         </div>
//       </div>
//       <div className="flex items-end justify-between">
//         <div className="text-2xl font-bold text-gray-900">
//           {loading ? (
//             <div className="animate-pulse bg-gray-200 h-8 w-16 rounded"></div>
//           ) : (
//             value
//           )}
//         </div>
//         <div className="text-xs text-gray-500">{timeframe}</div>
//       </div>
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//         <div className="text-red-800">{error}</div>
//         <button 
//           onClick={fetchAnalyticsData}
//           className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Metrics Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <MetricCard 
//           title="Registered Users" 
//           value={analytics?.userMetrics?.totalUsers?.toLocaleString() || '0'} 
//           timeframe="Total" 
//         />
//         <MetricCard 
//           title="Active Users" 
//           value={analytics?.userMetrics?.activeUsers?.toLocaleString() || '0'} 
//           timeframe="Last 6 months" 
//         />
//         <MetricCard 
//           title="Total Subscribers" 
//           value={analytics?.userMetrics?.totalSubscribers?.toLocaleString() || '0'} 
//           timeframe="Total" 
//         />
//         <MetricCard 
//           title="Active Subscribers" 
//           value={analytics?.userMetrics?.activeSubscribers?.toLocaleString() || '0'} 
//           timeframe="Current" 
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <MetricCard 
//           title="Total Communities" 
//           value={analytics?.contentMetrics?.totalCommunities?.toLocaleString() || '0'} 
//           timeframe="Active" 
//         />
//         <MetricCard 
//           title="Total Connectors" 
//           value={analytics?.contentMetrics?.totalConnectors?.toLocaleString() || '0'} 
//           timeframe="Active" 
//         />
//         <MetricCard 
//           title="Subscription Revenue" 
//           value={`$${analytics?.revenueMetrics?.subscriptionRevenue?.toLocaleString() || '0'}`} 
//           timeframe="Total" 
//         />
//         {/* <MetricCard 
//           title="PAYG Revenue" 
//           value={`$${analytics?.revenueMetrics?.payGRevenue?.toLocaleString() || '0'}`} 
//           timeframe="Total" 
//         /> */}
//       </div>

    
//       {/* Top Communities Chart */}
//       <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-900 mb-1">Top Communities</h2>
//           <p className="text-sm text-gray-500">Based On Engagement</p>
//         </div>
        
//         {loading ? (
//           <div className="space-y-4">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div key={i} className="flex items-center space-x-4">
//                 <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
//                 <div className="animate-pulse bg-gray-200 h-6 flex-1 rounded"></div>
//                 <div className="animate-pulse bg-gray-200 h-4 w-8 rounded"></div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {topCommunities.length > 0 ? (
//               topCommunities.map((community, index) => (
//                 <div key={index} className="flex items-center">
//                   <div className="w-32 text-sm text-gray-600 truncate">
//                     {community.name}
//                   </div>
//                   <div className="flex-1 mx-4">
//                     <div className="bg-gray-200 rounded-full h-6">
//                       <div 
//                         className="bg-orange-500 h-6 rounded-full transition-all duration-300"
//                         style={{ width: `${community.value}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="w-8 text-right text-sm text-gray-500">
//                     {community.value}
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center text-gray-500 py-8">
//                 No community data available
//               </div>
//             )}
//           </div>
//         )}

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
import { ChevronDown, Calendar, Filter, BarChart3, Users, TrendingUp, DollarSign } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const AnalyticsPage = () => {
  const { user, token } = useAuth();
  const [analytics, setAnalytics] = useState(null);
  const [topCommunities, setTopCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dateFilter, setDateFilter] = useState('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [customDateRange, setCustomDateRange] = useState({
    startDate: '',
    endDate: ''
  });

  const filterOptions = [
    { value: 'all', label: 'All Time' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 3 Months' },
    { value: '6m', label: 'Last 6 Months' },
    { value: '1y', label: 'Last Year' },
    { value: 'custom', label: 'Custom Range' }
  ];

  useEffect(() => {
    fetchAnalyticsData();
    fetchTopCommunities();
  }, [token, dateFilter, customDateRange]);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      
      if (dateFilter !== 'all') {
        params.append('period', dateFilter);
        
        if (dateFilter === 'custom' && customDateRange.startDate && customDateRange.endDate) {
          params.append('startDate', customDateRange.startDate);
          params.append('endDate', customDateRange.endDate);
        }
      }

      const response = await axios.get(`${URL}/api/admin-analytics/dashboard?${params}`, {
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
      const params = new URLSearchParams();
      params.append('limit', '5');
      
      if (dateFilter !== 'all') {
        params.append('period', dateFilter);
        
        if (dateFilter === 'custom' && customDateRange.startDate && customDateRange.endDate) {
          params.append('startDate', customDateRange.startDate);
          params.append('endDate', customDateRange.endDate);
        }
      }

      const response = await axios.get(`${URL}/api/admin-analytics/top-communities?${params}`, {
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

  const handleFilterChange = (value) => {
    setDateFilter(value);
    setActiveDropdown(null);
    
    // Reset custom date range if not custom filter
    if (value !== 'custom') {
      setCustomDateRange({ startDate: '', endDate: '' });
    }
  };

  const toggleDropdown = (cardId) => {
    setActiveDropdown(activeDropdown === cardId ? null : cardId);
  };

  const handleCustomDateChange = (field, value) => {
    setCustomDateRange(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getFilterLabel = () => {
    const option = filterOptions.find(opt => opt.value === dateFilter);
    if (dateFilter === 'custom' && customDateRange.startDate && customDateRange.endDate) {
      return `${customDateRange.startDate} to ${customDateRange.endDate}`;
    }
    return option?.label || 'All Time';
  };

  const MetricCard = ({ title, value, timeframe, bgColor = 'bg-orange-500', cardId }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <button
              onClick={() => toggleDropdown(cardId)}
              className={`${bgColor} text-white text-xs px-3 py-1 rounded-full flex items-center space-x-1 hover:opacity-90 transition-opacity`}
            >
              <span>{getFilterLabel()}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            
            {activeDropdown === cardId && (
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                <div className="py-1">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleFilterChange(option.value)}
                      className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                        dateFilter === option.value ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                
                {dateFilter === 'custom' && (
                  <div className="border-t border-gray-100 p-3">
                    <div className="space-y-2">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Start Date</label>
                        <input
                          type="date"
                          value={customDateRange.startDate}
                          onChange={(e) => handleCustomDateChange('startDate', e.target.value)}
                          className="w-full text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">End Date</label>
                        <input
                          type="date"
                          value={customDateRange.endDate}
                          onChange={(e) => handleCustomDateChange('endDate', e.target.value)}
                          className="w-full text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
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

  const EmptyAnalyticsState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
          <BarChart3 className="w-12 h-12 text-orange-500" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
          <Users className="w-4 h-4 text-blue-500" />
        </div>
        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-green-500" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No Data Available</h3>
      <p className="text-gray-500 text-center max-w-md mb-6">
        There's no analytics data available for the selected time period. 
        Try adjusting your date filter or check back later as your platform grows.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => setDateFilter('all')}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          View All Time Data
        </button>
        <button
          onClick={fetchAnalyticsData}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Refresh Data
        </button>
      </div>
    </div>
  );

  // Check if we have any meaningful data
  const hasData = analytics && (
    analytics.userMetrics?.totalUsers > 0 ||
    analytics.contentMetrics?.totalCommunities > 0 ||
    analytics.contentMetrics?.totalConnectors > 0 ||
    analytics.revenueMetrics?.subscriptionRevenue > 0
  );
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (loading && !analytics) {
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
      {/* Header with Global Filter Info */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">
            Showing data for: <span className="font-medium">{getFilterLabel()}</span>
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Filter className="w-4 h-4" />
          <span>Filter applied globally</span>
        </div>
      </div>

      {/* Show empty state if no data */}
      {!loading && !hasData ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <EmptyAnalyticsState />
        </div>
      ) : (
        <>
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              cardId="users"
              title="Registered Users" 
              value={analytics?.userMetrics?.totalUsers?.toLocaleString() || '0'} 
              timeframe="Total" 
            />
            <MetricCard 
              cardId="active-users"
              title="Active Users" 
              value={analytics?.userMetrics?.activeUsers?.toLocaleString() || '0'} 
              timeframe="Active in period" 
            />
            <MetricCard 
              cardId="subscribers"
              title="Total Subscribers" 
              value={analytics?.userMetrics?.totalSubscribers?.toLocaleString() || '0'} 
              timeframe="Total" 
            />
            <MetricCard 
              cardId="active-subscribers"
              title="Active Subscribers" 
              value={analytics?.userMetrics?.activeSubscribers?.toLocaleString() || '0'} 
              timeframe="Current" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              cardId="communities"
              title="Total Communities" 
              value={analytics?.contentMetrics?.totalCommunities?.toLocaleString() || '0'} 
              timeframe="Active" 
              bgColor="bg-blue-500"
            />
            <MetricCard 
              cardId="connectors"
              title="Total Connectors" 
              value={analytics?.contentMetrics?.totalConnectors?.toLocaleString() || '0'} 
              timeframe="Active" 
              bgColor="bg-green-500"
            />
            <MetricCard 
              cardId="revenue"
              title="Subscription Revenue" 
              value={`${analytics?.revenueMetrics?.subscriptionRevenue?.toLocaleString() || '0'}`} 
              timeframe="Total" 
              bgColor="bg-purple-500"
            />
            <MetricCard 
              cardId="transactions"
              title="Transaction Volume" 
              value={analytics?.revenueMetrics?.totalTransactionVolume?.toLocaleString() || '0'} 
              timeframe="Total" 
              bgColor="bg-indigo-500"
            />
          </div>

          {/* Top Communities Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Top Communities</h2>
              <p className="text-sm text-gray-500">Based on engagement for selected period</p>
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
                            className="bg-gradient-to-r from-orange-500 to-orange-600 h-6 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(community.value, 100)}%` }}
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
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p>No community data available for selected period</p>
                  </div>
                )}
              </div>
            )}

            {/* Chart Scale */}
            {topCommunities.length > 0 && (
              <div className="flex justify-between text-xs text-gray-400 mt-4 px-32">
                <span>0</span>
                <span>20</span>
                <span>40</span>
                <span>60</span>
                <span>80</span>
                <span>100</span>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AnalyticsPage;