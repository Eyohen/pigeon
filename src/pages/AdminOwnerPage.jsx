import React from 'react'
import { LiaSlidersHSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import AdminSidebar from '../components/AdminSidebar';
import Adminownerpage from '../components/AdminOwnerPage';



const AdminOwnerPage = () => {
  return (
    <div className='flex justify-between'>
<AdminSidebar/>
<Adminownerpage/>
   
    </div>
  )
}

export default AdminOwnerPage