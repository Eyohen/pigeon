import React from 'react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const AnalyticsPage = () => {
  const MetricCard = ({ title, value, timeframe, bgColor = 'bg-orange-500' }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className={`${bgColor} text-white text-xs px-2 py-1 rounded-full`}>
            All Time
          </span>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-xs text-gray-500">{timeframe}</div>
      </div>
    </div>
  );

  const topCommunitiesData = [
    { name: 'Green Earth Advocate', value: 100 },
    { name: 'Study Sync Pro', value: 75 },
    { name: 'Connect Sphere', value: 70 },
    { name: 'Zen Yoga Club', value: 45 },
    { name: 'Talent Flex Solution', value: 35 },
  ];

  return (
    <>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard 
          title="Registered Users" 
          value="4,639" 
          timeframe="2hrs ago" 
        />
        <MetricCard 
          title="Active Users" 
          value="4,639" 
          timeframe="6months ago" 
        />
        <MetricCard 
          title="Total Subscribers" 
          value="4,639" 
          timeframe="6months ago" 
        />
        <MetricCard 
          title="Active Subscribers" 
          value="4,000" 
          timeframe="2 years ago" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard 
          title="Total Communities" 
          value="4,639" 
          timeframe="6months ago" 
        />
        <MetricCard 
          title="Total Connectors" 
          value="4,639" 
          timeframe="6months ago" 
        />
        <MetricCard 
          title="Subscription Revenue" 
          value="$4,639" 
          timeframe="6months ago" 
        />
        <MetricCard 
          title="PAYG Revenue" 
          value="$20,000" 
          timeframe="4 years ago" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard 
          title="Total Transaction Volume" 
          value="4,639" 
          timeframe="2hrs ago" 
        />
        <MetricCard 
          title="Total Transaction Value" 
          value="$639,000" 
          timeframe="6months ago" 
        />
        <MetricCard 
          title="Transactions Value by community owners" 
          value="4,639" 
          timeframe="6months ago" 
        />
        <MetricCard 
          title="Transaction Value by Communities" 
          value="200" 
          timeframe="2 years ago" 
        />
      </div>

      {/* Top Communities Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Top Communities</h2>
          <p className="text-sm text-gray-500">Based On Revenue</p>
        </div>
        
        <div className="space-y-4">
          {topCommunitiesData.map((community, index) => (
            <div key={community.name} className="flex items-center">
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
          ))}
        </div>

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