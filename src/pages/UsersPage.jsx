import React, { useState } from 'react';
import { Search, Download, MoreHorizontal, ChevronDown, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const UsersPage = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(2);
  const [resultsPerPage, setResultsPerPage] = useState(6);

  // Sample data
  const usersData = [
    {
      id: '#ID758530',
      name: 'Mike Dean',
      email: 'deanmike@gmail.com',
      phoneNumber: '+2348168671927',
      verificationStatus: 'Unverified',
      registrationDate: 'May 25, 2023\n05:43 PM'
    },
    {
      id: '#ID758530',
      name: 'Mike Dean',
      email: 'deanmike@gmail.com',
      phoneNumber: '+2348168671927',
      verificationStatus: 'Verified',
      registrationDate: 'May 25, 2023\n05:43 PM'
    },
    {
      id: '#ID758530',
      name: 'Mike Dean',
      email: 'deanmike@gmail.com',
      phoneNumber: '+2348168671927',
      verificationStatus: 'Verified',
      registrationDate: 'May 25, 2023\n05:43 PM'
    },
    {
      id: '#ID758530',
      name: 'Mike Dean',
      email: 'deanmike@gmail.com',
      phoneNumber: '+2348168671927',
      verificationStatus: 'Verified',
      registrationDate: 'May 25, 2023\n05:43 PM'
    },
    {
      id: '#ID758530',
      name: 'Mike Dean',
      email: 'deanmike@gmail.com',
      phoneNumber: '+2348168671927',
      verificationStatus: 'Unverified',
      registrationDate: 'May 25, 2023\n05:43 PM'
    },
    {
      id: '#ID758530',
      name: 'Mike Dean',
      email: 'deanmike@gmail.com',
      phoneNumber: '+2348168671927',
      verificationStatus: 'Unverified',
      registrationDate: 'May 25, 2023\n05:43 PM'
    },
    {
      id: '#ID758530',
      name: 'Mike Dean',
      email: 'deanmike@gmail.com',
      phoneNumber: '+2348168671927',
      verificationStatus: 'Verified',
      registrationDate: 'May 25, 2023\n05:43 PM'
    },
    {
      id: '#ID758530',
      name: 'Mike Dean',
      email: 'deanmike@gmail.com',
      phoneNumber: '+2348168671927',
      verificationStatus: 'Verified',
      registrationDate: 'May 25, 2023\n05:43 PM'
    }
  ];

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedUsers(usersData.map((_, index) => index));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (index) => {
    if (selectedUsers.includes(index)) {
      setSelectedUsers(selectedUsers.filter(i => i !== index));
    } else {
      setSelectedUsers([...selectedUsers, index]);
    }
  };

  const StatusBadge = ({ status }) => {
    const isVerified = status === 'Verified';
    return (
      <div className="flex items-center">
        {isVerified ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Verified
          </span>
        ) : (
          <div className="flex items-center space-x-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              Unverified
            </span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
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

          {/* Filters */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
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
                  checked={selectedUsers.length === usersData.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Verification Status
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Registration Date
              </th>
              <th className="w-12 px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {usersData.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(index)}
                    onChange={() => handleSelectUser(index)}
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {user.id}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {user.phoneNumber}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={user.verificationStatus} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-pre-line">
                  {user.registrationDate}
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

export default UsersPage;