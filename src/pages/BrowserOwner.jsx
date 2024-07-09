import React from 'react'
import { LiaSlidersHSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import Sidebar from '../components/Sidebar';
import InsideBrowseOwner from '../components/insideBrowseOwner';



const BrowserOwner = () => {
  return (
    <div className='flex justify-between'>

<Sidebar/>

<InsideBrowseOwner/>
   
    </div>
  )
}

export default BrowserOwner