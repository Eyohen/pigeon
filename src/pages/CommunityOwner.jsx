import React from 'react'
import { LiaSlidersHSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import Sidebar from '../components/Sidebar';
import InsideOwner from '../components/InsideOwner';


const data = [ 
{
    id: 1,
    name: "Community Type"
},
{
    id: 2,
    name: "Location"
},
{
    id: 3,
    name: "Community Size"
},
{
    id: 4,
    name: "Interests"
},
{
    id: 5,
    name: "Engagement"
},
{
    id: 6,
    name: "Community Goals"
},
{
    id: 7,
    name: "Platform"
},

]

const CommunityOwner = () => {
  return (
    <div className='flex justify-between'>

<Sidebar/>

<InsideOwner/>
   
    </div>
  )
}

export default CommunityOwner