// //pages/UsersPage.jsx
import React, { useState, useEffect } from 'react';
import { Search, Download, MoreHorizontal, ChevronDown, ChevronLeft, ChevronRight, Filter, UserCheck, UserX, X } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const UsersPage = () => {
  const { token } = useAuth();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(6);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState({});
  
  // Modal states
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [subscriptionForm, setSubscriptionForm] = useState({
    currencyCode: 'USD',
    planType: 'monthly'
  });

  useEffect(() => {
    fetchUsers();
    fetchCurrencies();
  }, [currentPage, resultsPerPage, searchTerm, token]);

  const fetchCurrencies = async () => {
    try {
      const response = await axios.get(`${URL}/api/currencies`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setCurrencies(response.data || []);
    } catch (error) {
      console.error('Error fetching currencies:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${URL}/api/users`, {
        params: {
          page: currentPage,
          limit: resultsPerPage,
          search: searchTerm
        },
        headers: { 'Authorization': `Bearer ${token}` }
      });

      setUsers(response.data.users || []);
      setTotalPages(response.data.totalPages || 1);
      setError(null);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedUsers(users.map((_, index) => index));
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

  const handleVerifyUser = async (userId) => {
    try {
      setActionLoading(prev => ({ ...prev, [`verify_${userId}`]: true }));
      
      await axios.put(`${URL}/api/users/${userId}`, {
        verified: true
      }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      fetchUsers();
    } catch (error) {
      console.error('Error verifying user:', error);
      alert('Failed to verify user');
    } finally {
      setActionLoading(prev => ({ ...prev, [`verify_${userId}`]: false }));
    }
  };

  const openSubscriptionModal = (user) => {
    setSelectedUser(user);
    setShowSubscriptionModal(true);
    setSubscriptionForm({
      currencyCode: 'USD',
      planType: 'monthly'
    });
  };

  const closeSubscriptionModal = () => {
    setShowSubscriptionModal(false);
    setSelectedUser(null);
  };

  const handleSubscribeUser = async () => {
    if (!selectedUser) return;

    try {
      setActionLoading(prev => ({ ...prev, [`subscribe_${selectedUser.id}`]: true }));
      
      await axios.put(`${URL}/api/users/${selectedUser.id}/subscribe`, subscriptionForm, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      fetchUsers();
      closeSubscriptionModal();
      alert('User successfully subscribed');
    } catch (error) {
      console.error('Error subscribing user:', error);
      alert('Failed to subscribe user');
    } finally {
      setActionLoading(prev => ({ ...prev, [`subscribe_${selectedUser.id}`]: false }));
    }
  };

  const handleUnsubscribeUser = async (userId) => {
    if (!window.confirm('Are you sure you want to unsubscribe this user?')) {
      return;
    }

    try {
      setActionLoading(prev => ({ ...prev, [`unsubscribe_${userId}`]: true }));
      
      await axios.put(`${URL}/api/users/${userId}/unsubscribe`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      fetchUsers();
      alert('User successfully unsubscribed');
    } catch (error) {
      console.error('Error unsubscribing user:', error);
      alert('Failed to unsubscribe user');
    } finally {
      setActionLoading(prev => ({ ...prev, [`unsubscribe_${userId}`]: false }));
    }
  };

  const getPriceForPlan = (currencyCode, planType) => {
    const currency = currencies.find(c => c.currency === currencyCode);
    return currency ? currency[planType] : 0;
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Verified', 'Subscription Status', 'Created At'];
    const csvData = users.map(user => [
      user.id,
      `${user.firstName} ${user.lastName}`,
      user.email,
      user.phone || 'N/A',
      user.verified ? 'Yes' : 'No',
      user.subscribed ? 'Subscribed' : 'Unsubscribed',
      new Date(user.createdAt).toLocaleDateString()
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `users-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const StatusBadge = ({ user }) => {
    const isVerified = user.verified;
    return (
      <div className="flex items-center">
        {isVerified ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Verified
          </span>
        ) : (
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                Unverified
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <button
                onClick={() => handleVerifyUser(user.id)}
                disabled={actionLoading[`verify_${user.id}`]}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                {actionLoading[`verify_${user.id}`] ? 'Verifying...' : 'Verify'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const SubscriptionBadge = ({ user }) => {
    const isSubscribed = user.subscribed;
    const hasActiveSubscription = user.subscriptions && user.subscriptions.length > 0;
    
    return (
      <div className="flex items-center">
        {isSubscribed ? (
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Subcribed
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <button
                onClick={() => handleUnsubscribeUser(user.id)}
                disabled={actionLoading[`unsubscribe_${user.id}`]}
                className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
              >
                <div className="flex items-center space-x-2">
                  <UserX className="w-4 h-4" />
                  <span>{actionLoading[`unsubscribe_${user.id}`] ? 'Unsubscribing...' : 'Unsubscribe'}</span>
                </div>
              </button>
              {hasActiveSubscription && (
                <div className="px-4 py-2 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    Plan: {user.subscriptions[0]?.planType || 'N/A'}
                  </div>
                  <div className="text-xs text-gray-500">
                    Status: {user.subscriptions[0]?.status || 'N/A'}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Unsubscribed
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <button
                onClick={() => openSubscriptionModal(user)}
                className="block w-full px-4 py-2 text-left text-sm text-green-600 hover:bg-green-50"
              >
                <div className="flex items-center space-x-2">
                  <UserCheck className="w-4 h-4" />
                  <span>Subscribe</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (loading && users.length === 0) {
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
              placeholder="Search users..."
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
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="text-red-800">{error}</div>
          <button 
            onClick={fetchUsers}
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
                  checked={selectedUsers.length === users.length && users.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
              {/* <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Verification Status</th> */}
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Subscription Status</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Registration Date</th>
              <th className="w-12 px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              Array.from({ length: resultsPerPage }).map((_, index) => (
                <tr key={index}>
                  {Array.from({ length: 9 }).map((_, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4">
                      <div className="animate-pulse bg-gray-200 h-4 w-20 rounded"></div>
                    </td>
                  ))}
                </tr>
              ))
            ) : users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(index)}
                      onChange={() => handleSelectUser(index)}
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">#{user.id.slice(0, 8)}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.phone || 'N/A'}</td>
                  {/* <td className="px-6 py-4"><StatusBadge user={user} /></td> */}
                  <td className="px-6 py-4"><SubscriptionBadge user={user} /></td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}
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
                <td colSpan="9" className="px-6 py-8 text-center text-gray-500">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Subscribe User</h3>
              <button onClick={closeSubscriptionModal} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-4">
                Subscribing: <span className="font-medium">{selectedUser?.firstName} {selectedUser?.lastName}</span>
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                  <select
                    value={subscriptionForm.currencyCode}
                    onChange={(e) => setSubscriptionForm({...subscriptionForm, currencyCode: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {currencies.map(currency => (
                      <option key={currency.id} value={currency.currency}>
                        {currency.currency}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Plan Type</label>
                  <select
                    value={subscriptionForm.planType}
                    onChange={(e) => setSubscriptionForm({...subscriptionForm, planType: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annually">Annually</option>
                  </select>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Price: <span className="font-medium">
                      {getPriceForPlan(subscriptionForm.currencyCode, subscriptionForm.planType)} {subscriptionForm.currencyCode}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={closeSubscriptionModal}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubscribeUser}
                disabled={actionLoading[`subscribe_${selectedUser?.id}`]}
                className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50"
              >
                {actionLoading[`subscribe_${selectedUser?.id}`] ? 'Subscribing...' : 'Subscribe User'}
              </button>
            </div>
          </div>
        </div>
      )}

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
                currentPage === page ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-100'
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
                  currentPage === totalPages ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-100'
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

export default UsersPage;