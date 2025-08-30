import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('Edit Profile');
  const [email, setEmail] = useState('community@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('0816 000 0000');
  const [countryCode, setCountryCode] = useState('NG');

  const settingsSections = [
    'Edit Profile',
    'Teams & Staffs',
    'Password & Security',
    'Manage Notifications'
  ];

  const handleSave = () => {
    // Handle save functionality
    console.log('Saving profile:', { email, phoneNumber, countryCode });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Edit Profile':
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Edit Profile</h2>
            
            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  {/* Country Code Selector */}
                  <div className="relative">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-l-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="NG">🇳🇬</option>
                      <option value="US">🇺🇸</option>
                      <option value="GB">🇬🇧</option>
                      <option value="CA">🇨🇦</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  
                  {/* Phone Number Input */}
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        );

      case 'Teams & Staffs':
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Teams & Staffs</h2>
            <p className="text-gray-600">Manage your team members and staff permissions here.</p>
          </div>
        );

      case 'Password & Security':
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Password & Security</h2>
            <p className="text-gray-600">Update your password and security settings.</p>
          </div>
        );

      case 'Manage Notifications':
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Manage Notifications</h2>
            <p className="text-gray-600">Configure your notification preferences.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex gap-8">
      {/* Settings Sidebar */}
      <div className="w-64 flex-shrink-0">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <nav className="space-y-1">
            {settingsSections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`w-full text-left px-6 py-4 text-sm font-medium transition-colors ${
                  activeSection === section
                    ? 'bg-orange-100 text-orange-800 border-r-2 border-orange-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
};

export default SettingsPage;