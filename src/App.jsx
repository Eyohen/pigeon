import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CommunityOwner from './pages/CommunityOwner'
// import Sidebar from './components/Sidebar'
import CommunityPage from './pages/CommunityPage'
import CollaborationType from './pages/CollaborationType'
import BrowserOwner from './pages/BrowserOwner'
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
import AdminCommOwner from './pages/AdminCommOwners'
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
import InsideBrowseOwner from './components/InsideBrowseOwner'


const App = () => {
  return (
    // <UserContextProvider>
      <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/register" element={<Register />}/>
     <Route exact path="/forgotpassword" element={<ForgotPassword />}/>
     <Route exact path="/createnewpassword" element={<CreateNewPassword />}/>
     <Route exact path="/pricing" element={<Pricing />}/>
     <Route exact path="/contactus" element={<ContactUs />}/>
     <Route exact path="/blog" element={<Blog />}/>
     <Route exact path="/aboutus" element={<AboutUs />}/>
     <Route exact path="/faq" element={<Faq />}/>
     <Route exact path="/freebrowsecommunity" element={<FreeBrowseCommunity />}/>
     <Route exact path="/freeregisterVisibility" element={<FreeRegisterVisibility />}/>
     <Route exact path="/freecommunityowners" element={<FreeCommunityOwners/>}/>
     <Route exact path="/verify" element={<VerifyEmail/>}/>

  
     <Route exact path="/communityowner" element={ <ProtectedRoute><CommunityOwner /></ProtectedRoute> }/>
     <Route exact path="/communitypage/:id" element={<CommunityPage />}/>
     <Route exact path="/collaborationtype" element={<CollaborationType />}/>
     <Route exact path="/browserowner" element={<ProtectedRoute><BrowserOwner /></ProtectedRoute> }/>
     <Route exact path="/innerbrowsepage/:id" element={<BrowserPage />}/>
     <Route exact path="/subscriptionplans" element={<BrowserSubPlans />}/>
     <Route exact path="/purchasehistory" element={<PurchaseHistory />}/>
     <Route exact path="/listcommunity" element={<ListCommunity />}/>
     <Route exact path="/listvisibility" element={<ListVisibility />}/>
     <Route exact path="/settings" element={<Settings />}/>
     <Route exact path="/switchpremium" element={<SwitchPremium />}/>
     <Route exact path="/test" element={<Test />}/>
     <Route exact path="/insidebrowseowner" element={<InsideBrowseOwner />}/>
     <Route exact path="/innerbrowsepage" element={<InnerBrowsePage />}/>



     <Route exact path="/adminowner" element={<AdminCommOwner />}/>
     <Route exact path="/admintransaction" element={<AdminTransactions />}/>
     <Route exact path="/adminownerpage" element={<AdminOwnerPage />}/>

      </Routes>
      // </UserContextProvider>

  )
}

export default App