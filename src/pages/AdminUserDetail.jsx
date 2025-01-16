import React, { useState, useEffect } from 'react'
import Navbar2 from '../components/Navbar2';
import { IoChevronForward } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from "../url";
import axios from "axios";
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';


const AdminUserDetail = () => {
  return (
    <div>
        <AdminSidebar/>
        AdminUserDetail</div>
  )
}

export default AdminUserDetail