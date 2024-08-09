import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL, IF } from '../url'
import { SlPencil } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { SlTrash } from "react-icons/sl";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import Navbar2 from './Navbar2';

const items = [ {
    _id:123,
    name:'Resource Sharing or Product/Service Testing Post',
    date: 'May 25, 2023 05:43 PM',
    community:'Green Earth Advocates',
    accessType:'Free',
    status:'Unverified'
    
},
{
    _id:245,
    name:'Resource Sharing or Product/Service Testing Post',
    date: 'May 25, 2023 05:43 PM',
    community:'Green Earth Advocates',
    accessType:'Paid',
    status:'verified'
    
},
]

const items4 = [ {
  _id:123,
  name:'Resource Sharing or Product/Service Testing Post',
  date: 'May 25, 2023 05:43 PM',
  community:'Green Earth Advocates',
  price:'N206,300.00',
  status:'Failed'
  
},
{
  _id:245,
  name:'Resource Sharing or Product/Service Testing Post',
  date: 'May 25, 2023 05:43 PM',
  community:'Green Earth Advocates',
  price:'N206,300.00',
  status:'Failed'
  
},
]

const AdminOwner = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const handleToggle1 = () => {
    setToggle1(true);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
  };

  const handleToggle2 = () => {
    setToggle1(false);
    setToggle2(true);
    setToggle3(false);
    setToggle4(false);
  };

  const handleToggle3 = () => {
    setToggle1(false);
    setToggle2(false);
    setToggle3(true);
    setToggle4(false);
  };

    
  const handleToggle4 = () => {
      setToggle1(false);
      setToggle2(false);
      setToggle3(false);
      setToggle4(true);
    };

    const navigate = useNavigate()
  return (
    <div className='flex-1'> 
    <Navbar2/>
        <p className='text-3xl ml-32 mt-6'>Community Owners</p>
           <div className='max-w-[1100px] bg-white ml-32'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">

<div>
<div className='flex gap-x-10 border-b-2 py-3 px-2'>

    <div className="flex gap-x-[750px]">
    <input className='border border-gray-400 rounded py-2 px-2' placeholder='search' />
    <div className='text-gray-400 border border-gray-400 rounded px-4'>CSV</div>
    </div>

</div>
</div>

      <div class="max-h-60 overflow-y-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
          <th scope="col" class="px-6 py-3 font-light text-gray-300">
              id
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
              community name
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            date created
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            email
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            access type
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            status
            </th>
       
       
       
            {/* <th scope="col" class="px-6 py-3 font-light text-[#F08E1F]">
              edit
            </th>
            <th scope="col" class="px-6 py-3 font-light text-[#F08E1F]">
              delete
            </th> */}
          
          </tr>
        </thead>
 <tbody>

      
     {toggle2 && items.map((item) => (
       <tr
           onClick={() => navigate('/adminownerpage')}  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={item._id}>
                 <td class="px-6 py-4">{item._id}</td>

               <td class=" py-2">{item.name}</td>
                <td class="px-6 py-2">{item.date}</td>
                <td class="px-6 py-2">{item.community}</td>
                <td class="px-6 py-2">{item.accessType}</td>

               {item.status === 'Unverified' ? <button class="px-6 py-1 bg-yellow-100 rounded-lg text-yellow-500 mt-3">{item.status}</button> : <button class="px-6 py-1 bg-green-100 rounded-lg text-green-500 mt-3">{item.status}</button> } 

              
              </tr>
            ))} 
           

        </tbody>
      </table>
      </div>
    </div>
        </div>
       
    </div>
  )
}

export default AdminOwner