import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CommunityOwner from './pages/CommunityOwner'
// import Sidebar from './components/Sidebar'
import CommunityPage from './pages/CommunityPage'
import CollaborationType from './pages/CollaborationType'
import InnerBrowsePage from './components/InnerBrowsePage'
import BrowserPage from './pages/BrowserPage'
import BrowserSubPlans from './pages/BrowserSubPlans'
import PurchaseHistory from './pages/PurchaseHistory'
import ListCommunity from './pages/ListCommunity'
import Settings from './pages/Settings'
import SwitchPremium from './pages/SwitchPremium'
import { UserContextProvider } from './context/UserContext'
import Pricing from './pages/Pricing'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Faq from './pages/Faq'
import ListVisibility from './pages/ListVisibility'
import AdminTransactions from './pages/AdminTransactions'
import AdminOwnerPage from './pages/AdminOwnerPage'
import FreeBrowseCommunity from './pages/FreeBrowseCommunity'
import FreeRegisterVisibility from './pages/FreeRegisterVisibility'
import FreeCommunityOwners from './pages/FreeCommunityOwners'
import ForgotPassword from './pages/ForgotPassword'
import CreateNewPassword from './pages/CreateNewPassword'
import Test from './pages/Test'
import VerifyEmail from './pages/VerifyEmail'
import ProtectedRoute from './context/ProtectedRoute'
import OTP from './pages/Otp'
import BlogDetails from './components/BlogDetails'
import MyCommunities from './pages/MyCommunities'
import MyCommunityDetail from './pages/MyCommunityDetail'
import AdminAnalytics from './pages/AdminAnalytics'
import AdminCommunityOwner from './pages/AdminCommunityOwner'
import Admin from './pages/Admin'
import AdminCommunities from './pages/AdminCommunities'
import AdminUsers from './pages/AdminUsers'
import AdminBlog from './pages/AdminBlog'
import AdminSettings from './pages/AdminSettings'
import AdminRestrictedOwners from './pages/AdminRestrictedOwners'
import AdminCommunityOwnerDetail from './pages/AdminCommunityOwnerDetail'
import AdminRestrictedCommunities from './pages/AdminRestrictedCommunities'
import AdminCommunityDetail from './pages/AdminCommunityDetail'
import SuperAdmin from './pages/SuperAdmin'
import ChangePrice from './pages/ChangePrice'
import PaymentPage from './pages/PaymentPage'
import ChatRoom from './pages/ChatRoom'
import AdminMessage from './pages/AdminMessage'
import SubscriptionDetails from './pages/SubscriptionDetails'
import Request from './pages/Request'
import UpgradePlan from './pages/UpgradePlan'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AdminAddCommunityOwner from './pages/AdminAddCommunityOwner'
import AdminEditCommunityOwner from './pages/AdminEditCommunityOwner'
import AdminAddCommunity from './pages/AdminAddCommunity'
import AdminUserDetail from './pages/AdminUserDetail'
import MyProfile from './pages/MyProfile'
import EditProfile from './pages/EditProfile'
import BrowseCommunities from './pages/BrowserCommunities'
import SubscriptionSucces from './pages/SubscriptionSuccess'
import SubscriptionCancel from './pages/Subscriptioncancel' 



const App = () => {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      <Route exact path="/reset-password" element={<CreateNewPassword />} />
      <Route exact path="/pricing" element={<Pricing />} />
      <Route exact path="/contactus" element={<ContactUs />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/aboutus" element={<AboutUs />} />
      <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route exact path="/termsofservice" element={<TermsOfService />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/freebrowsecommunity" element={<FreeBrowseCommunity />} />
      <Route exact path="/freeregisterVisibility" element={<FreeRegisterVisibility />} />
      <Route exact path="/freecommunityowners" element={<FreeCommunityOwners />} />
      <Route exact path="/verify" element={<VerifyEmail />} />
      <Route exact path="/otp" element={<OTP />} />
      <Route exact path="/blogdetails/:id" element={<BlogDetails />} />
      <Route exact path="/chatroom" element={<ChatRoom />} />


      <Route exact path="/communityowner" element={<ProtectedRoute><CommunityOwner /></ProtectedRoute>} />
      <Route exact path="/communitypage/:id" element={<CommunityPage />} />
      <Route exact path="/collaborationtype/:id" element={<CollaborationType />} />
      <Route exact path="/browsecommunities" element={<ProtectedRoute><BrowseCommunities /></ProtectedRoute>} />
      <Route exact path="/innerbrowsepage/:id" element={<BrowserPage />} />
      <Route exact path="/subscriptionplans/:id" element={<BrowserSubPlans />} />
      <Route exact path="/purchasehistory" element={<PurchaseHistory />} />
      <Route exact path="/requests" element={<Request />} />
      <Route exact path="/listcommunity" element={<ListCommunity />} />
      <Route exact path="/listvisibility" element={<ListVisibility />} />

      <Route exact path="/mycommunities" element={<ProtectedRoute><MyCommunities /></ProtectedRoute>} />
      <Route exact path="/mycommunitydetail/:id" element={<ProtectedRoute><MyCommunityDetail /></ProtectedRoute>} />
      <Route exact path="/settings" element={<Settings />} />
      <Route exact path="/switchpremium" element={<SwitchPremium />} />
      <Route exact path="/test" element={<Test />} />
      <Route exact path="/innerbrowsepage" element={<InnerBrowsePage />} />
      <Route exact path="/subdetails" element={<SubscriptionDetails />} />
      <Route exact path="/upgradeplan" element={<UpgradePlan />} />
      <Route exact path="/myprofile" element={<MyProfile />} />
      <Route exact path="/editprofile/:id" element={<EditProfile />} />


      <Route exact path="/subscription/success" element={<SubscriptionSucces />} />
      <Route exact path="/subscription/cancel" element={<SubscriptionCancel />} />

      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/superadmin" element={<SuperAdmin />} />
      <Route exact path="/paymentpage" element={<PaymentPage />} />
      <Route exact path="/adminanalytics" element={<ProtectedRoute><AdminAnalytics /></ProtectedRoute>} />
      <Route exact path="/changeprice" element={<ProtectedRoute><ChangePrice /></ProtectedRoute>} />
      <Route exact path="/admincommunityowner" element={<ProtectedRoute><AdminCommunityOwner /></ProtectedRoute>} />
      <Route exact path="/admincommunityownerdetail/:id" element={<ProtectedRoute><AdminCommunityOwnerDetail /></ProtectedRoute>} />
      <Route exact path="/adminrestrictedowners" element={<ProtectedRoute><AdminRestrictedOwners /></ProtectedRoute>} />
      <Route exact path="/adminrestrictedcommunities" element={<ProtectedRoute><AdminRestrictedCommunities /></ProtectedRoute>} />
      <Route exact path="/admincommunities" element={<ProtectedRoute><AdminCommunities /></ProtectedRoute>} />
      <Route exact path="/admincommunitydetail/:id" element={<ProtectedRoute><AdminCommunityDetail /></ProtectedRoute>} />
      <Route exact path="/adminusers" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
      <Route exact path="/adminblog" element={<ProtectedRoute><AdminBlog /></ProtectedRoute>} />
      <Route exact path="/adminmessage" element={<ProtectedRoute><AdminMessage /></ProtectedRoute>} />
      <Route exact path="/adminsettings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />
      <Route exact path="/admintransaction" element={<AdminTransactions />} />
      <Route exact path="/adminownerpage" element={<AdminOwnerPage />} />
      <Route exact path="/adminaddcommunityowner" element={<AdminAddCommunityOwner />} />
      <Route exact path="/admineditcommunityowner/:id" element={<AdminEditCommunityOwner />} />
      <Route exact path="/adminaddcommunity/:id" element={<AdminAddCommunity />} />
      <Route exact path="/adminuserdetail/:id" element={<AdminUserDetail />} />

    </Routes>


  )
}

export default App