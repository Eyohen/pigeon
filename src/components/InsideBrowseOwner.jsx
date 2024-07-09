import React, { useState, useEffect } from 'react'
import { LiaSlidersHSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import Sidebar from './Sidebar';
import Navbar2 from './Navbar2';
import { Link } from 'react-router-dom';
import { URL } from "../url";
import axios from "axios";
import BrowseCard from './BrowseCard';




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


const InsideBrowseOwner = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [communities, setCommunities] = useState([])


    const fetchCommunities = async () => {
        try {
          const res = await axios.get(URL + "/api/visibility/");
          setCommunities(res.data);
          console.log(res.data)
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        fetchCommunities();
      }, []);

  return (
    <div className='flex-1'>
        
        <Navbar2/>

<p className='ml-12 font-semibold text-4xl mt-9'>Browse Communities</p>

<div className='flex items-center gap-2 px-12 mt-12'>
  
        <CiSliderHorizontal size={25} />
        <p>Filter by</p>
        <div className='relative'>
        <button onClick={() => setIsOpen((prev) => !prev)} className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full hover:bg-[#F08E1F] hover:text-white '>Community Type</button>
{isOpen && (<div  className='rounded border border-gray-300 bg-white py-4 px-4 absolute w-[400px]'>
    <p className='font-semibold'>Community Type</p>
    <div className='flex justify-between items-center mt-6'>
    <p className=''>Social and Interest-Based Communities</p>
    <IoChevronForward color='#F08E1F' size={20} />
    </div>
    <p className='text-gray-400'>Hobbyist Communities</p>
    <p className='text-gray-400'>Fan Clubs</p>
    <p className='text-gray-400'>Book Clubs and Literary Groups</p>
    <p className='text-gray-400'>Food stores/communities</p>
    <p className='text-gray-400'>Mobility</p>

    <div className='flex justify-between items-center border-b-2 py-2'>
    <p className=''>Gaming Communities</p>
    <IoChevronDown color='#F08E1F' size={20} />
    </div>
    <div className='flex justify-between items-center border-b-2 py-2'>
    <p className=''>Professional and Business-Oriented Communities</p>
    <IoChevronDown color='#F08E1F' size={20} />
    </div>
    <div className='flex justify-between items-center border-b-2 py-2'>
    <p className=''>Health and Wellness Communities</p>
    <IoChevronDown color='#F08E1F' size={20} />
    </div>
    <div className='flex justify-between items-center border-b-2 py-2'>
    <p className=''>Cultural and Identity-Based Communities</p>
    <IoChevronDown color='#F08E1F' size={20} />
    </div>
    <div className='flex justify-between items-center border-b-2 py-2'>
    <p className=''>Geographical and Local Communities</p>
    <IoChevronDown color='#F08E1F' size={20} />
    </div>
    <div className='flex justify-between items-center border-b-2 py-2'>
    <p className=''>Country-Specific Communities</p>
    <IoChevronDown color='#F08E1F' size={20} />
    </div>
    <div className='flex justify-between items-center border-b-2 py-2'>
    <p className=''>Online and Virtual Communities</p>
    <IoChevronDown color='#F08E1F' size={20} />
    </div>
    <div className='flex justify-between items-center  py-2'>
    <p className=''>Academic and Research Communities</p>
    <IoChevronDown color='#F08E1F' size={20} />
    </div>
</div>)}

</div>


        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full hover:bg-[#F08E1F] hover:text-white'>Location</button>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full hover:bg-[#F08E1F] hover:text-white'>Community Size</button>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full hover:bg-[#F08E1F] hover:text-white'>Interests</button>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full hover:bg-[#F08E1F] hover:text-white'>Engagements</button>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full hover:bg-[#F08E1F] hover:text-white'>Community Goals</button>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full hover:bg-[#F08E1F] hover:text-white'>Platforms Used</button>

       
        </div>
{/* <Link to={'/innerbrowsepage'}>
<div className='shadow-xl rounded-xl mt-12 px-16 py-4 max-w-[1200px] ml-12'>
    <div className='flex gap-x-5 items-center'>
        <div className='bg-green-400 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>G</div>
        <div>
            <p>Community Type: Environmental Activism</p>
            <div className='flex gap-x-9 items-center'>
                <p className='font-semibold text-xl'>Green Earth Advocates</p>
                <p className='bg-green-200 text-green-600 rounded-md font-semibold px-3'>Verified</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.....</p>

        </div>
        </div>
</div> 
</Link>
 */}




{communities.map((community) => (
        <Link to={`/innerbrowsepage/${community.id}`}>
    <BrowseCard key={community.id} community={community} />
    </Link>
    ))}



    </div>
  )
}

export default InsideBrowseOwner