//App.jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DashboardLayout from './components/DashboardLayout';
import AnalyticsPage from './pages/AnalyticsPage'
import ConnectorsPage from './pages/ConnectorsPage';
import TransactionsPage from './pages/TransactionsPage';
import CommunitiesPage from './pages/CommunitiesPage';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';
import FeaturedCommunitiesPage from './pages/FeaturedCommunitiesPage';
import BlogPage from './pages/BlogPage';





const App = () => {
  return (

    <Routes>
     

       <Route exact path="/analytics" element={
        <DashboardLayout activeTab="Analytics">
          <AnalyticsPage />
        </DashboardLayout>
      } />

      <Route exact path="/connectors" element={
        <DashboardLayout activeTab="Connectors">
          <ConnectorsPage />
        </DashboardLayout>
      } />

      <Route path="/transactions" element={
  <DashboardLayout activeTab="Transactions">
    <TransactionsPage />
  </DashboardLayout>
} />

<Route path="/communities" element={
  <DashboardLayout activeTab="Communities">
    <CommunitiesPage />
  </DashboardLayout>
} />

<Route path="/users" element={
  <DashboardLayout activeTab="Users">
    <UsersPage />
  </DashboardLayout>
} />

<Route path="/settings" element={
  <DashboardLayout activeTab="Settings">
    <SettingsPage />
  </DashboardLayout>
} />

<Route path="/featured-communities" element={
  <DashboardLayout activeTab="Featured Communities">
    <FeaturedCommunitiesPage />
  </DashboardLayout>
} />

<Route path="/blog" element={
  <DashboardLayout activeTab="Blog">
    <BlogPage />
  </DashboardLayout>
} />

    </Routes>


  )
}

export default App