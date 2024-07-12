import React from 'react'
import { LiaSlidersHSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import Sidebar from '../components/Sidebar';
import InsideOwner from '../components/InsideOwner';


const CommunityOwner = () => {
  return (
    <div className='flex justify-between'>

<Sidebar/>

<InsideOwner/>
   
    </div>
  )
}

export default CommunityOwner