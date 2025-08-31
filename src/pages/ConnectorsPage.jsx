// import React, { useState, useEffect } from 'react';
// import { Search, Download, MoreHorizontal, ChevronDown, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
// import axios from 'axios';
// import { URL } from '../url';
// import { useAuth } from '../context/AuthContext';

// const ConnectorsPage = () => {
//   const { token } = useAuth();
//   const [selectedConnectors, setSelectedConnectors] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [resultsPerPage, setResultsPerPage] = useState(6);
//   const [connectors, setConnectors] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchConnectors();
//   }, [currentPage, resultsPerPage, searchTerm, token]);

//   const fetchConnectors = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${URL}/api/connectors`, {
//         params: {
//           page: currentPage,
//           limit: resultsPerPage,
//           search: searchTerm
//         },
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       setConnectors(response.data.connectors || []);
//       setTotalPages(response.data.totalPages || 1);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching connectors:', error);
//       setError('Failed to load connectors');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelectAll = (checked) => {
//     if (checked) {
//       setSelectedConnectors(connectors.map((_, index) => index));
//     } else {
//       setSelectedConnectors([]);
//     }
//   };

//   const handleSelectConnector = (index) => {
//     if (selectedConnectors.includes(index)) {
//       setSelectedConnectors(selectedConnectors.filter(i => i !== index));
//     } else {
//       setSelectedConnectors([...selectedConnectors, index]);
//     }
//   };

//   const handleStatusChange = async (connectorId, newStatus) => {
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

//       await axios.put(`${URL}/api/connectors/${connectorId}`, updateData, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       fetchConnectors();
//     } catch (error) {
//       console.error('Error updating connector status:', error);
//       alert('Failed to update connector status');
//     }
//   };

//   const exportToCSV = () => {
//     const headers = ['ID', 'Name', 'Email', 'Community', 'Verified', 'Restricted', 'Created At'];
//     const csvData = connectors.map(connector => [
//       connector.id,
//       `${connector.firstName} ${connector.lastName}`,
//       connector.email,
//       connector.communityName || 'N/A',
//       connector.verified ? 'Yes' : 'No',
//       connector.restrict ? 'Yes' : 'No',
//       new Date(connector.createdAt).toLocaleDateString()
//     ]);

//     const csvContent = [headers, ...csvData]
//       .map(row => row.map(cell => `"${cell}"`).join(','))
//       .join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `connectors-${new Date().toISOString().split('T')[0]}.csv`;
//     a.click();
//   };

//   const StatusBadge = ({ connector }) => {
//     const getStatusInfo = () => {
//       if (connector.restrict) return { text: 'Block', color: 'bg-red-100 text-red-800' };
//       if (connector.verified) return { text: 'Verified', color: 'bg-green-100 text-green-800' };
//       return { text: 'Unverified', color: 'bg-orange-100 text-orange-800' };
//     };

//     const status = getStatusInfo();
//     const showDropdown = !connector.verified || connector.restrict;

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
//               {!connector.verified && (
//                 <button
//                   onClick={() => handleStatusChange(connector.id, 'verify')}
//                   className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
//                 >
//                   Verify
//                 </button>
//               )}
//               {!connector.restrict && (
//                 <button
//                   onClick={() => handleStatusChange(connector.id, 'block')}
//                   className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
//                 >
//                   Block
//                 </button>
//               )}
//               {connector.restrict && (
//                 <button
//                   onClick={() => handleStatusChange(connector.id, 'unblock')}
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

//   if (loading && connectors.length === 0) {
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
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search connectors..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
//             />
//           </div>
//         </div>

//         <div className="flex items-center space-x-3">
//           <button 
//             onClick={exportToCSV}
//             className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
//           >
//             <Download className="w-4 h-4" />
//             <span>CSV</span>
//           </button>
//           <button className="flex items-center space-x-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
//             <Plus className="w-4 h-4" />
//             <span>Add Connector</span>
//           </button>
//         </div>
//       </div>

//       {error && (
//         <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
//           <div className="text-red-800">{error}</div>
//           <button 
//             onClick={fetchConnectors}
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
//                   checked={selectedConnectors.length === connectors.length && connectors.length > 0}
//                   onChange={(e) => handleSelectAll(e.target.checked)}
//                   className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
//                 />
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 ID
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Connector Name
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Date Created
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Email Address
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Community
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="w-12 px-6 py-4"></th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {loading ? (
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
//                     <div className="animate-pulse bg-gray-200 h-4 w-28 rounded"></div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="animate-pulse bg-gray-200 h-6 w-20 rounded-full"></div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="animate-pulse bg-gray-200 h-4 w-4 rounded"></div>
//                   </td>
//                 </tr>
//               ))
//             ) : connectors.length > 0 ? (
//               connectors.map((connector, index) => (
//                 <tr key={connector.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4">
//                     <input
//                       type="checkbox"
//                       checked={selectedConnectors.includes(index)}
//                       onChange={() => handleSelectConnector(index)}
//                       className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
//                     />
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500">
//                     #{connector.id.slice(0, 8)}
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                     {connector.firstName} {connector.lastName}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500">
//                     {new Date(connector.createdAt).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'short',
//                       day: 'numeric',
//                       hour: '2-digit',
//                       minute: '2-digit'
//                     })}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500">
//                     {connector.email}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500">
//                     {connector.communityName || 'N/A'}
//                   </td>
//                   <td className="px-6 py-4">
//                     <StatusBadge connector={connector} />
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
//                   No connectors found
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
//             onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//             className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
//             disabled={currentPage === 1 || loading}
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
          
//           {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => setCurrentPage(page)}
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
//                 onClick={() => setCurrentPage(totalPages)}
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
//             onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
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

// export default ConnectorsPage;






import React, { useState, useEffect } from 'react';
import { Search, Download, MoreHorizontal, ChevronDown, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';
import CreateConnectorModal from '../components/CreateConnectorModal';

const ConnectorsPage = () => {
  const { token } = useAuth();
  const [selectedConnectors, setSelectedConnectors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(6);
  const [connectors, setConnectors] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    fetchConnectors();
  }, [currentPage, resultsPerPage, searchTerm, token]);

  const fetchConnectors = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${URL}/api/connectors`, {
        params: {
          page: currentPage,
          limit: resultsPerPage,
          search: searchTerm
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setConnectors(response.data.connectors || []);
      setTotalPages(response.data.totalPages || 1);
      setError(null);
    } catch (error) {
      console.error('Error fetching connectors:', error);
      setError('Failed to load connectors');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedConnectors(connectors.map((_, index) => index));
    } else {
      setSelectedConnectors([]);
    }
  };

  const handleSelectConnector = (index) => {
    if (selectedConnectors.includes(index)) {
      setSelectedConnectors(selectedConnectors.filter(i => i !== index));
    } else {
      setSelectedConnectors([...selectedConnectors, index]);
    }
  };

  const handleStatusChange = async (connectorId, newStatus) => {
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

      await axios.put(`${URL}/api/connectors/${connectorId}`, updateData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      fetchConnectors();
    } catch (error) {
      console.error('Error updating connector status:', error);
      alert('Failed to update connector status');
    }
  };

  const handleCreateSuccess = (newConnector) => {
    // Refresh the list to show the new connector
    fetchConnectors();
    console.log('Connector created successfully:', newConnector);
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Community', 'Verified', 'Restricted', 'Created At'];
    const csvData = connectors.map(connector => [
      connector.id,
      `${connector.firstName} ${connector.lastName}`,
      connector.email,
      connector.communityName || 'N/A',
      connector.verified ? 'Yes' : 'No',
      connector.restrict ? 'Yes' : 'No',
      new Date(connector.createdAt).toLocaleDateString()
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `connectors-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const StatusBadge = ({ connector }) => {
    const getStatusInfo = () => {
      if (connector.restrict) return { text: 'Block', color: 'bg-red-100 text-red-800' };
      if (connector.verified) return { text: 'Verified', color: 'bg-green-100 text-green-800' };
      return { text: 'Unverified', color: 'bg-orange-100 text-orange-800' };
    };

    const status = getStatusInfo();
    const showDropdown = !connector.verified || connector.restrict;

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
              {!connector.verified && (
                <button
                  onClick={() => handleStatusChange(connector.id, 'verify')}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Verify
                </button>
              )}
              {!connector.restrict && (
                <button
                  onClick={() => handleStatusChange(connector.id, 'block')}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Block
                </button>
              )}
              {connector.restrict && (
                <button
                  onClick={() => handleStatusChange(connector.id, 'unblock')}
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

  if (loading && connectors.length === 0) {
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
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search connectors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={exportToCSV}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <Download className="w-4 h-4" />
            <span>CSV</span>
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center space-x-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Connector</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="text-red-800">{error}</div>
          <button 
            onClick={fetchConnectors}
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
                  checked={selectedConnectors.length === connectors.length && connectors.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Connector Name
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Date Created
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Email Address
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Community
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="w-12 px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
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
                    <div className="animate-pulse bg-gray-200 h-4 w-28 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-6 w-20 rounded-full"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-200 h-4 w-4 rounded"></div>
                  </td>
                </tr>
              ))
            ) : connectors.length > 0 ? (
              connectors.map((connector, index) => (
                <tr key={connector.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedConnectors.includes(index)}
                      onChange={() => handleSelectConnector(index)}
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    #{connector.id.slice(0, 8)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {connector.firstName} {connector.lastName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(connector.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {connector.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {connector.communityName || 'N/A'}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge connector={connector} />
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
                  No connectors found
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
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={currentPage === 1 || loading}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
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
                onClick={() => setCurrentPage(totalPages)}
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
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={currentPage === totalPages || loading}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Create Connector Modal */}
      <CreateConnectorModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSuccess={handleCreateSuccess}
      />
    </>
  );
};

export default ConnectorsPage;