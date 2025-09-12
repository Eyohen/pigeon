// //App.jsx
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import DashboardLayout from './components/DashboardLayout';
// import AnalyticsPage from './pages/AnalyticsPage'
// import ConnectorsPage from './pages/ConnectorsPage';
// import TransactionsPage from './pages/TransactionsPage';
// import CommunitiesPage from './pages/CommunitiesPage';
// import UsersPage from './pages/UsersPage';
// import SettingsPage from './pages/SettingsPage';
// import FeaturedCommunitiesPage from './pages/FeaturedCommunitiesPage';
// import BlogPage from './pages/BlogPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';





// const App = () => {
//   return (

//     <Routes>


//       <Route path="/" element={<LoginPage />} />
//       <Route path="/register" element={<RegisterPage />} />

//       <Route exact path="/analytics" element={
//         <DashboardLayout activeTab="Analytics">
//           <AnalyticsPage />
//         </DashboardLayout>
//       } />

//       <Route exact path="/connectors" element={
//         <DashboardLayout activeTab="Connectors">
//           <ConnectorsPage />
//         </DashboardLayout>
//       } />

//       <Route path="/transactions" element={
//         <DashboardLayout activeTab="Transactions">
//           <TransactionsPage />
//         </DashboardLayout>
//       } />

//       <Route path="/communities" element={
//         <DashboardLayout activeTab="Communities">
//           <CommunitiesPage />
//         </DashboardLayout>
//       } />

//       <Route path="/users" element={
//         <DashboardLayout activeTab="Users">
//           <UsersPage />
//         </DashboardLayout>
//       } />

//       <Route path="/settings" element={
//         <DashboardLayout activeTab="Settings">
//           <SettingsPage />
//         </DashboardLayout>
//       } />

//       <Route path="/featured-communities" element={
//         <DashboardLayout activeTab="Featured Communities">
//           <FeaturedCommunitiesPage />
//         </DashboardLayout>
//       } />

//       <Route path="/blog" element={
//         <DashboardLayout activeTab="Blog">
//           <BlogPage />
//         </DashboardLayout>
//       } />

//     </Routes>


//   )
// }

// export default App






import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import DashboardLayout from './components/DashboardLayout';
import AnalyticsPage from './pages/AnalyticsPage';
import ConnectorsPage from './pages/ConnectorsPage';
import TransactionsPage from './pages/TransactionsPage';
import CommunitiesPage from './pages/CommunitiesPage';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';
import FeaturedCommunitiesPage from './pages/FeaturedCommunitiesPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import logo from './assets/pigeonfavicon.png'

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Check if user has admin privileges
  if (user && user.role !== 'admin' && user.role !== 'superadmin') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-800 mb-2">Access Denied</h2>
            <p className="text-red-600 mb-4">
              You don't have the required permissions to access the admin dashboard.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

// Loading component for initial app load
const AppLoader = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
         <span className="text-white font-bold text-lg"><img src={logo}></img></span>
        </div>
        <span className="text-2xl font-semibold text-gray-900">pigeonhire</span>
      </div>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
      <p className="text-gray-600 mt-2">Loading...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

const AppContent = () => {
  const { loading } = useAuth();

  if (loading) {
    return <AppLoader />;
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Dashboard Routes */}
      <Route path="/analytics" element={
        <ProtectedRoute>
          <DashboardLayout activeTab="Analytics">
            <AnalyticsPage />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      <Route path="/connectors" element={
        <ProtectedRoute>
          <DashboardLayout activeTab="Connectors">
            <ConnectorsPage />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      <Route path="/transactions" element={
        <ProtectedRoute>
          <DashboardLayout activeTab="Transactions">
            <TransactionsPage />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      <Route path="/communities" element={
        <ProtectedRoute>
          <DashboardLayout activeTab="Communities">
            <CommunitiesPage />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      <Route path="/users" element={
        <ProtectedRoute>
          <DashboardLayout activeTab="Users">
            <UsersPage />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      <Route path="/settings" element={
        <ProtectedRoute>
          <DashboardLayout activeTab="Settings">
            <SettingsPage />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      <Route path="/featured-communities" element={
        <ProtectedRoute>
          <DashboardLayout activeTab="Featured-Communities">
            <FeaturedCommunitiesPage />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      <Route path="/blog" element={
        <ProtectedRoute>
          <DashboardLayout activeTab="Blog">
            <BlogPage />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      {/* Catch all route - redirect to login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;