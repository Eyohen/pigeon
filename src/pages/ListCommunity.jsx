import React from 'react'
import { LiaSlidersHSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import Sidebar from '../components/Sidebar';
import InsideListCommunity from '../components/InsideListCommunity';



const ListCommunity = () => {
  return (
    <div className='flex justify-between'>

<Sidebar/>

<InsideListCommunity/>
   
    </div>
  )
}

export default ListCommunity