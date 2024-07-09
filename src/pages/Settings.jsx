import React from 'react'
import { LiaSlidersHSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import Sidebar from '../components/Sidebar';
import InsideSettings from '../components/InsideSettings';



const Settings = () => {
    return (
      <div className='flex justify-between'>
  
  <Sidebar/>
  
<InsideSettings/>
     
      </div>
    )
  }
  
  export default Settings