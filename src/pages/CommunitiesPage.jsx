import React, { useState } from 'react';
import { Search, Download, MoreHorizontal, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const CommunitiesPage = () => {
  const [selectedCommunities, setSelectedCommunities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(2);
  const [resultsPerPage, setResultsPerPage] = useState(6);

  // Sample data
  const communitiesData = [
    {
      id: '#ID238976',
      name: 'Green Earth Advocates',
      dateCreated: 'May 25, 2023\n05:43 PM',
      email: 'community@gmail.com',
      accessType: 'Free',
      status: 'Disable'
    },
    {
      id: '#ID238976',
      name: 'Green Earth Advocates',
      dateCreated: 'May 25, 2023\n05:43 PM',
      email: 'community@gmail.com',
      accessType: 'Free',
      status: 'Block'
    },
    {
      id: '#ID238976',
      name: 'Green Earth Advocates',
      dateCreated: 'May 25, 2023\n05:43 PM',
      email: 'community@gmail.com',
      accessType: 'Free',
      status: 'Unverified'
    },
    {
      id: '#ID238976',
      name: 'Green Earth Advocates',
      dateCreated: 'May 25, 2023\n05:43 PM',
      email: 'community@gmail.com',
      accessType: 'Free',
      status: 'Unverified'
    },
    {
      id: '#ID238976',
      name: 'Green Earth Advocates',
      dateCreated: 'May 25, 2023\n05:43 PM',
      email: 'community@gmail.com',
      accessType: 'Free',
      status: 'Verified'
    },
    {
      id: '#ID238976',
      name: 'Green Earth Advocates',
      dateCreated: 'May 25, 2023\n05:43 PM',
      email: 'community@gmail.com',
      accessType: 'Free',
      status: 'Unverified'
    },
    {
      id: '#ID238976',
      name: 'Green Earth Advocates',
      dateCreated: 'May 25, 2023\n05:43 PM',
      email: 'community@gmail.com',
      accessType: 'Paid',
      status: 'Verified'
    },
    {
      id: '#ID238976',
      name: 'Green Earth Advocates',
      dateCreated: 'May 25, 2023\n05:43 PM',
      email: 'community@gmail.com',
      accessType: 'Free',
      status: 'Unverified'
    }
  ];

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedCommunities(communitiesData.map((_, index) => index));
    } else {
      setSelectedCommunities([]);
    }
  };

  const handleSelectCommunity = (index) => {
    if (selectedCommunities.includes(index)) {
      setSelectedCommunities(selectedCommunities.filter(i => i !== index));
    } else {
      setSelectedCommunities([...selectedCommunities, index]);
    }
  };

  const StatusBadge = ({ status }) => {
    const getStatusStyle = () => {
      switch (status) {
        case 'Verified':
          return 'bg-green-100 text-green-800';
        case 'Unverified':
          return 'bg-orange-100 text-orange-800';
        case 'Block':
          return 'bg-red-100 text-red-800';
        case 'Disable':
          return 'bg-gray-100 text-gray-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    };

    const showDropdown = status === 'Unverified' || status === 'Block';

    return (
      <div className="flex items-center">
        {showDropdown ? (
          <div className="flex items-center space-x-1">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle()}`}>
              {status}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        ) : (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle()}`}>
            {status}
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Header Actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* CSV Export */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>CSV</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="w-12 px-6 py-4">
                <input
                  type="checkbox"
                  checked={selectedCommunities.length === communitiesData.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Community Name
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Date Created
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Email Address
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Access Type
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="w-12 px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {communitiesData.map((community, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedCommunities.includes(index)}
                    onChange={() => handleSelectCommunity(index)}
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {community.id}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {community.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-pre-line">
                  {community.dateCreated}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {community.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {community.accessType}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={community.status} />
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Show result:</span>
          <select
            value={resultsPerPage}
            onChange={(e) => setResultsPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value={6}>6</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded ${
                currentPage === page
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
          
          <span className="px-2 text-gray-500">...</span>
          
          <button
            onClick={() => setCurrentPage(20)}
            className={`w-8 h-8 rounded ${
              currentPage === 20
                ? 'bg-orange-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            20
          </button>
          
          <button 
            onClick={() => setCurrentPage(Math.min(20, currentPage + 1))}
            className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={currentPage === 20}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CommunitiesPage;