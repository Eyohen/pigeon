import React from 'react'
import { LiaSlidersHSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import AdminSidebar from '../components/AdminSidebar';
import AdminTransaction from '../components/Admintransaction';



const AdminTransactions = () => {
  return (
    <div className='flex justify-between'>

<AdminSidebar/>

<AdminTransaction/>
   
    </div>
  )
}

export default AdminTransactions