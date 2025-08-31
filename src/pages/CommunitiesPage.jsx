// import React, { useState, useEffect } from 'react';
// import { Search, Download, MoreHorizontal, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';
// import { URL } from '../url';
// import { useAuth } from '../context/AuthContext';

// const CommunitiesPage = () => {
//   const { token } = useAuth();
//   const [selectedCommunities, setSelectedCommunities] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [resultsPerPage, setResultsPerPage] = useState(6);
//   const [communities, setCommunities] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCommunities();
//   }, [currentPage, resultsPerPage, searchTerm, token]);

//   const fetchCommunities = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${URL}/api/communities`, {
//         params: {
//           page: currentPage,
//           limit: resultsPerPage,
//           search: searchTerm
//         },
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       setCommunities(response.data.communities || []);
//       setTotalPages(response.data.totalPages || 1);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching communities:', error);
//       setError('Failed to load communities');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelectAll = (checked) => {
//     if (checked) {
//       setSelectedCommunities(communities.map((_, index) => index));
//     } else {
//       setSelectedCommunities([]);
//     }
//   };

//   const handleSelectCommunity = (index) => {
//     if (selectedCommunities.includes(index)) {
//       setSelectedCommunities(selectedCommunities.filter(i => i !== index));
//     } else {
//       setSelectedCommunities([...selectedCommunities, index]);
//     }
//   };

//   const handleStatusChange = async (communityId, newStatus) => {
//     try {
//       let updateData = {};
      
//       switch (newStatus) {
//         case 'verify':
//           updateData = { verified: true };
//           break;
//         case 'block':
//           updateData = { restrict: true };
//           break;
//         case 'unblock':
//           updateData = { restrict: false };
//           break;
//         default:
//           return;
//       }

//       await axios.put(`${URL}/api/communities/${communityId}`, updateData, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       // Refresh the list
//       fetchCommunities();
//     } catch (error) {
//       console.error('Error updating community status:', error);
//       alert('Failed to update community status');
//     }
//   };

//   const exportToCSV = () => {
//     const headers = ['ID', 'Community Name', 'Email', 'Verified', 'Restricted', 'Created At'];
//     const csvData = communities.map(community => [
//       community.id,
//       community.name,
//       community.email,
//       community.verified ? 'Yes' : 'No',
//       community.restrict ? 'Yes' : 'No',
//       new Date(community.createdAt).toLocaleDateString()
//     ]);

//     const csvContent = [headers, ...csvData]
//       .map(row => row.map(cell => `"${cell}"`).join(','))
//       .join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `communities-${new Date().toISOString().split('T')[0]}.csv`;
//     a.click();
//   };

//   const StatusBadge = ({ community }) => {
//     const getStatusInfo = () => {
//       if (community.restrict) return { text: 'Block', color: 'bg-red-100 text-red-800' };
//       if (community.verified) return { text: 'Verified', color: 'bg-green-100 text-green-800' };
//       return { text: 'Unverified', color: 'bg-orange-100 text-orange-800' };
//     };

//     const status = getStatusInfo();
//     const showDropdown = !community.verified || community.restrict;

//     return (
//       <div className="flex items-center">
//         {showDropdown ? (
//           <div className="relative group">
//             <div className="flex items-center space-x-1 cursor-pointer">
//               <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
//                 {status.text}
//               </span>
//               <ChevronDown className="w-4 h-4 text-gray-400" />
//             </div>
//             <div className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
//               {!community.verified && (
//                 <button
//                   onClick={() => handleStatusChange(community.id, 'verify')}
//                   className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
//                 >
//                   Verify
//                 </button>
//               )}
//               {!community.restrict && (
//                 <button
//                   onClick={() => handleStatusChange(community.id, 'block')}
//                   className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
//                 >
//                   Block
//                 </button>
//               )}
//               {community.restrict && (
//                 <button
//                   onClick={() => handleStatusChange(community.id, 'unblock')}
//                   className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
//                 >
//                   Unblock
//                 </button>
//               )}
//             </div>
//           </div>
//         ) : (
//           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
//             {status.text}
//           </span>
//         )}
//       </div>
//     );
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   if (loading && communities.length === 0) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Header Actions */}
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center space-x-4">
//           {/* Search */}
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search communities..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
//             />
//           </div>
//         </div>

//         <div className="flex items-center space-x-3">
//           {/* CSV Export */}
//           <button 
//             onClick={exportToCSV}
//             className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
//           >
//             <Download className="w-4 h-4" />
//             <span>CSV</span>
//           </button>
//         </div>
//       </div>

//       {error && (
//         <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
//           <div className="text-red-800">{error}</div>
//           <button 
//             onClick={fetchCommunities}
//             className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-gray-50 border-b border-gray-200">
//               <th className="w-12 px-6 py-4">
//                 <input
//                   type="checkbox"
//                   checked={selectedCommunities.length === communities.length && communities.length > 0}
//                   onChange={(e) => handleSelectAll(e.target.checked)}
//                   className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
//                 />
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 ID
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Community Name
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Date Created
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Email Address
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Access Type
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="w-12 px-6 py-4"></th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {loading ? (
//               // Loading skeleton
//               Array.from({ length: resultsPerPage }).map((_, index) => (
//                 <tr key={index}>
//                   <td className="px-6 py-4">
//                     <div className="animate-pulse bg-gray-200 h-4 w-4 rounded"></div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="animate-pulse bg-gray-200 h-4 w-20 rounded"></div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="animate-pulse bg-gray-200 h-4 w-24 rounded"></div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="animate-pulse bg-gray-200 h-4 w-36 rounded"></div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="animate-pulse bg-gray-200 h-4 w-16 rounded"></div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="animate-pulse bg-gray-200 h-6 w-20 rounded-full"></div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="animate-pulse bg-gray-200 h-4 w-4 rounded"></div>
//                   </td>
//                 </tr>
//               ))
//             ) : communities.length > 0 ? (
//               communities.map((community, index) => (
//                 <tr key={community.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4">
//                     <input
//                       type="checkbox"
//                       checked={selectedCommunities.includes(index)}
//                       onChange={() => handleSelectCommunity(index)}
//                       className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
//                     />
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500">
//                     #{community.id.slice(0, 8)}
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                     {community.name}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500">
//                     {new Date(community.createdAt).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'short',
//                       day: 'numeric',
//                       hour: '2-digit',
//                       minute: '2-digit'
//                     })}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500">
//                     {community.email}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500">
//                     {community.accessType || 'Free'}
//                   </td>
//                   <td className="px-6 py-4">
//                     <StatusBadge community={community} />
//                   </td>
//                   <td className="px-6 py-4">
//                     <button className="text-gray-400 hover:text-gray-600">
//                       <MoreHorizontal className="w-5 h-5" />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="8" className="px-6 py-8 text-center text-gray-500">
//                   No communities found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-between mt-6">
//         <div className="flex items-center space-x-2">
//           <span className="text-sm text-gray-700">Show result:</span>
//           <select
//             value={resultsPerPage}
//             onChange={(e) => setResultsPerPage(Number(e.target.value))}
//             className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//           >
//             <option value={6}>6</option>
//             <option value={10}>10</option>
//             <option value={20}>20</option>
//             <option value={50}>50</option>
//           </select>
//         </div>

//         <div className="flex items-center space-x-2">
//           <button 
//             onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
//             className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
//             disabled={currentPage === 1 || loading}
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
          
//           {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`w-8 h-8 rounded ${
//                 currentPage === page
//                   ? 'bg-orange-500 text-white'
//                   : 'text-gray-700 hover:bg-gray-100'
//               }`}
//               disabled={loading}
//             >
//               {page}
//             </button>
//           ))}
          
//           {totalPages > 5 && (
//             <>
//               <span className="px-2 text-gray-500">...</span>
//               <button
//                 onClick={() => handlePageChange(totalPages)}
//                 className={`w-8 h-8 rounded ${
//                   currentPage === totalPages
//                     ? 'bg-orange-500 text-white'
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`}
//                 disabled={loading}
//               >
//                 {totalPages}
//               </button>
//             </>
//           )}
          
//           <button 
//             onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
//             className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
//             disabled={currentPage === totalPages || loading}
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CommunitiesPage;



import React, { useState, useEffect } from 'react';
import { Search, Download, MoreHorizontal, ChevronDown, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';
import CreateCommunityModal from '../components/CreateCommunityModal';

const CommunitiesPage = () => {
  const { token } = useAuth();
  const [selectedCommunities, setSelectedCommunities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(6);
  const [communities, setCommunities] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    fetchCommunities();
  }, [currentPage, resultsPerPage, searchTerm, token]);

  const fetchCommunities = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${URL}/api/communities`, {
        params: {
          page: currentPage,
          limit: resultsPerPage,
          search: searchTerm
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setCommunities(response.data.communities || []);
      setTotalPages(response.data.totalPages || 1);
      setError(null);
    } catch (error) {
      console.error('Error fetching communities:', error);
      setError('Failed to load communities');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedCommunities(communities.map((_, index) => index));
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

  const handleStatusChange = async (communityId, newStatus) => {
    try {
      let updateData = {};
      
      switch (newStatus) {
        case 'verify':
          updateData = { verified: true };
          break;
        case 'block':
          updateData = { restrict: true };
          break;
        case 'unblock':
          updateData = { restrict: false };
          break;
        default:
          return;
      }

      await axios.put(`${URL}/api/communities/${communityId}`, updateData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Refresh the list
      fetchCommunities();
    } catch (error) {
      console.error('Error updating community status:', error);
      alert('Failed to update community status');
    }
  };

  const handleCreateSuccess = (newCommunity) => {
    // Refresh the list to show the new community
    fetchCommunities();
    // Optionally show success message
    console.log('Community created successfully:', newCommunity);
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Community Name', 'Email', 'Verified', 'Restricted', 'Created At'];
    const csvData = communities.map(community => [
      community.id,
      community.name,
      community.email,
      community.verified ? 'Yes' : 'No',
      community.restrict ? 'Yes' : 'No',
      new Date(community.createdAt).toLocaleDateString()
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `communities-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const StatusBadge = ({ community }) => {
    const getStatusInfo = () => {
      if (community.restrict) return { text: 'Block', color: 'bg-red-100 text-red-800' };
      if (community.verified) return { text: 'Verified', color: 'bg-green-100 text-green-800' };
      return { text: 'Unverified', color: 'bg-orange-100 text-orange-800' };
    };

    const status = getStatusInfo();
    const showDropdown = !community.verified || community.restrict;

    return (
      <div className="flex items-center">
        {showDropdown ? (
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
                {status.text}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              {!community.verified && (
                <button
                  onClick={() => handleStatusChange(community.id, 'verify')}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Verify
                </button>
              )}
              {!community.restrict && (
                <button
                  onClick={() => handleStatusChange(community.id, 'block')}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Block
                </button>
              )}
              {community.restrict && (
                <button
                  onClick={() => handleStatusChange(community.id, 'unblock')}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Unblock
                </button>
              )}
            </div>
          </div>
        ) : (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
            {status.text}
          </span>
        )}
      </div>
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading && communities.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

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
              placeholder="Search communities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* CSV Export */}
          <button 
            onClick={exportToCSV}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <Download className="w-4 h-4" />
            <span>CSV</span>
          </button>

          {/* Add Community Button */}
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center space-x-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Community</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="text-red-800">{error}</div>
          <button 
            onClick={fetchCommunities}
            className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="w-12 px-6 py-4">
                <input
                  type="checkbox"
                  checked={selectedCommunities.length === communities.length && communities.length > 0}
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
            {loading ? (
              // Loading skeleton
              Array.from({ length: resultsPerPage }).map((_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-4 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-20 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-24 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-36 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-16 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-6 w-20 rounded-full"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-4 rounded"></div>
                  </td>
                </tr>
              ))
            ) : communities.length > 0 ? (
              communities.map((community, index) => (
                <tr key={community.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedCommunities.includes(index)}
                      onChange={() => handleSelectCommunity(index)}
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    #{community.id.slice(0, 8)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {community.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(community.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {community.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {community.accessType || 'Free'}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge community={community} />
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-8 text-center text-gray-500">
                  No communities found
                </td>
              </tr>
            )}
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
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={currentPage === 1 || loading}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 rounded ${
                currentPage === page
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              disabled={loading}
            >
              {page}
            </button>
          ))}
          
          {totalPages > 5 && (
            <>
              <span className="px-2 text-gray-500">...</span>
              <button
                onClick={() => handlePageChange(totalPages)}
                className={`w-8 h-8 rounded ${
                  currentPage === totalPages
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                disabled={loading}
              >
                {totalPages}
              </button>
            </>
          )}
          
          <button 
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={currentPage === totalPages || loading}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Create Community Modal */}
      <CreateCommunityModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSuccess={handleCreateSuccess}
      />
    </>
  );
};

export default CommunitiesPage;
