// //pages/TransactionsPage.jsx
// import React, { useState } from 'react';
// import { Search, Download, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';
// import { URL } from '../url';
// import { useAuth } from '../context/AuthContext';

// const TransactionsPage = () => {
//   const [activeTab, setActiveTab] = useState('All Transactions');
//   const [selectedTransactions, setSelectedTransactions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(2);
//   const [resultsPerPage, setResultsPerPage] = useState(6);

//   const tabs = [
//     'All Transactions',
//     'Completed', 
//     'In Progress',
//     'Failed'
//   ];

//   // Sample transaction data
//   const transactionsData = [
//     {
//       transactionRef: 'PN-24-05-28',
//       customerName: 'Michael Dean',
//       communityPaidFor: 'Green Earth Advocat...',
//       amountPaid: '$200.00',
//       date: 'May 25, 2023\n05:43 PM',
//       collaborationType: 'Resource Sharing...',
//       status: 'Completed'
//     },
//     {
//       transactionRef: 'PN-24-05-28',
//       customerName: 'Michael Dean',
//       communityPaidFor: 'Annual Subscription...',
//       amountPaid: '$200.00',
//       date: 'May 25, 2023\n05:43 PM',
//       collaborationType: 'NIL',
//       status: 'Completed'
//     },
//     {
//       transactionRef: 'PN-24-05-28',
//       customerName: 'Michael Dean',
//       communityPaidFor: 'Green Earth Advocat...',
//       amountPaid: '$200.00',
//       date: 'May 25, 2023\n05:43 PM',
//       collaborationType: 'Resource Sharing...',
//       status: 'In Progress'
//     },
//     {
//       transactionRef: 'PN-24-05-28',
//       customerName: 'Michael Dean',
//       communityPaidFor: 'Green Earth Advocat...',
//       amountPaid: '$200.00',
//       date: 'May 25, 2023\n05:43 PM',
//       collaborationType: 'Resource Sharing...',
//       status: 'Completed'
//     },
//     {
//       transactionRef: 'PN-24-05-28',
//       customerName: 'Michael Dean',
//       communityPaidFor: 'Annual Subscription...',
//       amountPaid: '$200.00',
//       date: 'May 25, 2023\n05:43 PM',
//       collaborationType: 'NIL',
//       status: 'In Progress'
//     },
//     {
//       transactionRef: 'PN-24-05-28',
//       customerName: 'Michael Dean',
//       communityPaidFor: 'Green Earth Advocat...',
//       amountPaid: '$200.00',
//       date: 'May 25, 2023\n05:43 PM',
//       collaborationType: 'Resource Sharing...',
//       status: 'Completed'
//     },
//     {
//       transactionRef: 'PN-24-05-28',
//       customerName: 'Michael Dean',
//       communityPaidFor: 'Green Earth Advocat...',
//       amountPaid: '$200.00',
//       date: 'May 25, 2023\n05:43 PM',
//       collaborationType: 'Resource Sharing...',
//       status: 'Failed'
//     }
//   ];

//   const handleSelectAll = (checked) => {
//     if (checked) {
//       setSelectedTransactions(transactionsData.map((_, index) => index));
//     } else {
//       setSelectedTransactions([]);
//     }
//   };

//   const handleSelectTransaction = (index) => {
//     if (selectedTransactions.includes(index)) {
//       setSelectedTransactions(selectedTransactions.filter(i => i !== index));
//     } else {
//       setSelectedTransactions([...selectedTransactions, index]);
//     }
//   };

//   const StatusBadge = ({ status }) => {
//     let badgeClass = '';
//     switch (status) {
//       case 'Completed':
//         badgeClass = 'bg-green-100 text-green-800';
//         break;
//       case 'In Progress':
//         badgeClass = 'bg-orange-100 text-orange-800';
//         break;
//       case 'Failed':
//         badgeClass = 'bg-red-100 text-red-800';
//         break;
//       default:
//         badgeClass = 'bg-gray-100 text-gray-800';
//     }

//     return (
//       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}>
//         {status}
//       </span>
//     );
//   };

//   return (
//     <>
//       {/* Tabs */}
//       <div className="mb-6">
//         <div className="border-b border-gray-200">
//           <nav className="flex space-x-8">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
//                   activeTab === tab
//                     ? 'border-orange-500 text-orange-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Header Actions */}
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center space-x-4">
//           {/* Search */}
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
//             />
//           </div>
//         </div>

//         <div className="flex items-center space-x-3">
//           {/* CSV Export */}
//           <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
//             <Download className="w-4 h-4" />
//             <span>CSV</span>
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-gray-50 border-b border-gray-200">
//               <th className="w-12 px-6 py-4">
//                 <input
//                   type="checkbox"
//                   checked={selectedTransactions.length === transactionsData.length}
//                   onChange={(e) => handleSelectAll(e.target.checked)}
//                   className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
//                 />
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Transaction Ref
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Customer Name
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Community Paid For
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Amount Paid
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Date
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Collaboration Type
//               </th>
//               <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {transactionsData.map((transaction, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="px-6 py-4">
//                   <input
//                     type="checkbox"
//                     checked={selectedTransactions.includes(index)}
//                     onChange={() => handleSelectTransaction(index)}
//                     className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
//                   />
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-500">
//                   {transaction.transactionRef}
//                 </td>
//                 <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                   {transaction.customerName}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-500">
//                   {transaction.communityPaidFor}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-900 font-medium">
//                   {transaction.amountPaid}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-500 whitespace-pre-line">
//                   {transaction.date}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-500">
//                   {transaction.collaborationType}
//                 </td>
//                 <td className="px-6 py-4">
//                   <StatusBadge status={transaction.status} />
//                 </td>
//               </tr>
//             ))}
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
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
          
//           {[1, 2, 3, 4].map((page) => (
//             <button
//               key={page}
//               onClick={() => setCurrentPage(page)}
//               className={`w-8 h-8 rounded ${
//                 currentPage === page
//                   ? 'bg-orange-500 text-white'
//                   : 'text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               {page}
//             </button>
//           ))}
          
//           <span className="px-2 text-gray-500">...</span>
          
//           <button
//             onClick={() => setCurrentPage(20)}
//             className={`w-8 h-8 rounded ${
//               currentPage === 20
//                 ? 'bg-orange-500 text-white'
//                 : 'text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             20
//           </button>
          
//           <button 
//             onClick={() => setCurrentPage(Math.min(20, currentPage + 1))}
//             className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
//             disabled={currentPage === 20}
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TransactionsPage;






import React, { useState, useEffect } from 'react';
import { Search, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const TransactionsPage = () => {
  const { token } = useAuth();
  const [activeTab, setActiveTab] = useState('All Transactions');
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(6);
  const [subscriptions, setSubscriptions] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tabs = [
    'All Transactions',
    'Completed', 
    'In Progress',
    'Failed'
  ];

  useEffect(() => {
    fetchTransactions();
  }, [currentPage, resultsPerPage, searchTerm, activeTab, token]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      let status = null;
      
      // Map tab to status filter
      switch (activeTab) {
        case 'Completed':
          status = 'active';
          break;
        case 'In Progress':
          status = 'pending';
          break;
        case 'Failed':
          status = 'failed';
          break;
        default:
          status = null;
      }

      const response = await axios.get(`${URL}/api/subscriptions`, {
        params: {
          page: currentPage,
          limit: resultsPerPage,
          status: status,
          search: searchTerm
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setSubscriptions(response.data.subscriptions || []);
      setTotalPages(response.data.totalPages || 1);
      setError(null);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setError('Failed to load transactions');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedTransactions(subscriptions.map((_, index) => index));
    } else {
      setSelectedTransactions([]);
    }
  };

  const handleSelectTransaction = (index) => {
    if (selectedTransactions.includes(index)) {
      setSelectedTransactions(selectedTransactions.filter(i => i !== index));
    } else {
      setSelectedTransactions([...selectedTransactions, index]);
    }
  };

  const exportToCSV = () => {
    const headers = ['Transaction ID', 'Customer', 'Plan Type', 'Amount', 'Status', 'Date', 'Payment Method'];
    const csvData = subscriptions.map(subscription => [
      subscription.id || 'N/A',
      subscription.user ? `${subscription.user.firstName} ${subscription.user.lastName}` : 'Unknown',
      subscription.planType || 'N/A',
      `${subscription.currency || 'USD'} ${subscription.amount || '0'}`,
      subscription.status || 'Unknown',
      new Date(subscription.createdAt).toLocaleDateString(),
      subscription.paymentMethod || 'Card'
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transactions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const StatusBadge = ({ status }) => {
    let badgeClass = '';
    let displayText = '';
    
    switch (status) {
      case 'active':
        badgeClass = 'bg-green-100 text-green-800';
        displayText = 'Completed';
        break;
      case 'pending':
        badgeClass = 'bg-orange-100 text-orange-800';
        displayText = 'In Progress';
        break;
      case 'failed':
      case 'cancelled':
        badgeClass = 'bg-red-100 text-red-800';
        displayText = 'Failed';
        break;
      default:
        badgeClass = 'bg-gray-100 text-gray-800';
        displayText = status || 'Unknown';
    }

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}>
        {displayText}
      </span>
    );
  };

  const getCollaborationType = (subscription) => {
    if (subscription.planType === 'annually') {
      return 'Annual Subscription';
    } else if (subscription.planType === 'monthly') {
      return 'Monthly Subscription';
    } else if (subscription.planType === 'quarterly') {
      return 'Quarterly Subscription';
    }
    return 'Subscription';
  };

  if (loading && subscriptions.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1); // Reset to first page when changing tabs
                }}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search transactions..."
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
        </div>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="text-red-800">{error}</div>
          <button 
            onClick={fetchTransactions}
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
                  checked={selectedTransactions.length === subscriptions.length && subscriptions.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Transaction Ref
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Plan Type
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Amount Paid
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Collaboration Type
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              Array.from({ length: resultsPerPage }).map((_, index) => (
                <tr key={index}>
                  {[...Array(8)].map((_, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4">
                      <div className="animate-pulse bg-gray-200 h-4 w-20 rounded"></div>
                    </td>
                  ))}
                </tr>
              ))
            ) : subscriptions.length > 0 ? (
              subscriptions.map((subscription, index) => (
                <tr key={subscription.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedTransactions.includes(index)}
                      onChange={() => handleSelectTransaction(index)}
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    PN-{subscription.id.slice(0, 8)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {subscription.user 
                      ? `${subscription.user.firstName} ${subscription.user.lastName}`
                      : 'Unknown User'
                    }
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {getCollaborationType(subscription)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {subscription.currency || 'USD'} {subscription.amount || '0.00'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(subscription.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {subscription.planType ? `${subscription.planType} Plan` : 'Subscription'}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={subscription.status} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-8 text-center text-gray-500">
                  No transactions found for {activeTab.toLowerCase()}
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
    </>
  );
};

export default TransactionsPage;