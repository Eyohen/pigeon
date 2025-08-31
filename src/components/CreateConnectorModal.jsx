import React, { useState, useEffect } from 'react';
import { X, Users } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const CreateConnectorModal = ({ isOpen, onClose, onSuccess }) => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    description: '',
    communityName: '',
    website: '',
    linkedIn: '',
    whatsapp: '',
    telegram: '',
    twitter: '',
    instagram: '',
    accessRequirement: 'Open Access',
    connectionType: 'Professional',
    connectionPlatform: 'Email',
    sourceOfInfo: 'Admin Created',
    verified: false
  });
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingCommunities, setLoadingCommunities] = useState(false);
  const [error, setError] = useState('');

  const roles = [
    'Community Manager', 'Technical Lead', 'Content Creator', 'Startup Advisor',
    'Remote Work Consultant', 'Environmental Scientist', 'Business Development',
    'Marketing Specialist', 'Product Manager', 'Software Engineer', 'Designer',
    'Consultant', 'Freelancer', 'Entrepreneur', 'Investor', 'Mentor', 'Other'
  ];

  const accessRequirements = ['Open Access', 'Application Required', 'Membership Required', 'Invitation Only', 'Verification Required'];
  const connectionTypes = ['Professional', 'Technical', 'Creative', 'Business', 'Academic', 'Social', 'Lifestyle'];
  const connectionPlatforms = ['Email', 'LinkedIn', 'Discord', 'Slack', 'Telegram', 'WhatsApp', 'Twitter', 'Instagram', 'Phone', 'Website'];

  // Fetch communities when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchCommunities();
    }
  }, [isOpen]);

  const fetchCommunities = async () => {
    try {
      setLoadingCommunities(true);
      const response = await axios.get(`${URL}/api/communities?limit=100`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCommunities(response.data.communities || []);
    } catch (error) {
      console.error('Error fetching communities:', error);
    } finally {
      setLoadingCommunities(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.role) {
      setError('First name, last name, email, and role are required');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${URL}/api/connectors/admin/create`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data) {
        onSuccess && onSuccess(response.data.record);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          role: '',
          description: '',
          communityName: '',
          website: '',
          linkedIn: '',
          whatsapp: '',
          telegram: '',
          twitter: '',
          instagram: '',
          accessRequirement: 'Open Access',
          connectionType: 'Professional',
          connectionPlatform: 'Email',
          sourceOfInfo: 'Admin Created',
          verified: false
        });
        onClose();
      }
    } catch (error) {
      console.error('Error creating connector:', error);
      setError(error.response?.data?.msg || 'Failed to create connector');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-orange-500" />
            <h2 className="text-xl font-semibold text-gray-900">Create New Connector</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            disabled={loading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="text-red-800 text-sm">{error}</div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Personal Information</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="John"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Doe"
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="john@example.com"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="+1234567890"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={loading}
                >
                  <option value="">Select role</option>
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Brief description of the connector..."
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Associated Community
                </label>
                <select
                  name="communityName"
                  value={formData.communityName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={loading || loadingCommunities}
                >
                  <option value="">No community association</option>
                  {communities.map(community => (
                    <option key={community.id} value={community.name}>
                      {community.name}
                    </option>
                  ))}
                </select>
                {loadingCommunities && (
                  <p className="text-xs text-gray-500 mt-1">Loading communities...</p>
                )}
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Professional Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="https://example.com"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="https://linkedin.com/in/username"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Connection Type
                </label>
                <select
                  name="connectionType"
                  value={formData.connectionType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={loading}
                >
                  {connectionTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Connection Platform
                </label>
                <select
                  name="connectionPlatform"
                  value={formData.connectionPlatform}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={loading}
                >
                  {connectionPlatforms.map(platform => (
                    <option key={platform} value={platform}>{platform}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Access Requirement
                </label>
                <select
                  name="accessRequirement"
                  value={formData.accessRequirement}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={loading}
                >
                  {accessRequirements.map(req => (
                    <option key={req} value={req}>{req}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2 mb-4">Social Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp
                </label>
                <input
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="+1234567890"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telegram
                </label>
                <input
                  type="text"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="@username"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Twitter
                </label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="@username"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Instagram
                </label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="@username"
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          {/* Admin Options */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2 mb-4">Admin Options</h3>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="verified"
                name="verified"
                checked={formData.verified}
                onChange={handleChange}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                disabled={loading}
              />
              <label htmlFor="verified" className="ml-2 block text-sm text-gray-700">
                Mark as verified
              </label>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create Connector'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateConnectorModal;