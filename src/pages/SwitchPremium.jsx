import React from 'react'
import { LiaSlidersHSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import Sidebar from '../components/Sidebar';
import SubscriptionPlans from '../components/SubscriptionPlans';
import InnerSwitchPremium from '../components/InnerSwitchPremium';



const SwitchPremium = () => {
    return (
      <div className='flex justify-between'>
  
  <Sidebar/>
  
<InnerSwitchPremium/>
     
      </div>
    )
  }
  
  export default SwitchPremium