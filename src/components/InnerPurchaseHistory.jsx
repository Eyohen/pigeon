import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
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
    price:'N206,300.00',
    status:'Completed'
    
},
{
    _id:245,
    name:'Resource Sharing or Product/Service Testing Post',
    date: 'May 25, 2023 05:43 PM',
    community:'Green Earth Advocates',
    price:'N206,300.00',
    status:'Completed'
    
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

const InnerPurchaseHistory = () => {
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
  return (
    <div className='flex-1 ml-[250px]'> 
    <Navbar2/>
        <p className='text-3xl ml-32 mt-6'>Purchase History</p>
           <div className='max-w-[1100px] bg-white ml-32'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
      {/* <div className="flex justify-between">
        <Link to={"/home"}>
          <button className="bg-[#2C5C4B] p-2 text-white rounded-lg">
            All Participants
          </button>
        </Link>

        <div>
          <input
            type="text"
            placeholder="Search name"
            className=" h-10 border border-gray-500"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-[#2C5C4B] p-2 text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div> */}

<div>
<div className='flex gap-x-10 border-b-2 py-3 px-2'>
<div className='relative'>
    <p onClick={handleToggle1}  className={`${toggle1 ? 'text-black' : 'text-gray-300'}`}>All Purchases</p>
    {toggle1 ? <div className='bg-[#F08E1F] h-[3px] w-[90px] absolute mt-[10px]'></div> : null }
    </div>

    <div className='relative'>
    <p onClick={handleToggle2}  className={`${toggle2 ? 'text-black' : 'text-gray-300'}`} >Completed</p>
   {toggle2 ? <div className='bg-[#F08E1F] h-[3px] w-[90px] absolute mt-[10px]'></div> : null } 
    </div>

    <div className='relative'>
    <p onClick={handleToggle3}   className={`${toggle3 ? 'text-black' : 'text-gray-300'}`}>In Progress</p>
    {toggle3 ? <div className='bg-[#F08E1F] h-[3px] w-[90px] absolute mt-[10px]'></div> : null }
    </div>

    <div className='relative'>
    <p onClick={handleToggle4}  className={`${toggle4 ? 'text-black' : 'text-gray-300'}`}>Failed</p>
    {toggle4 ? <div className='bg-[#F08E1F] h-[3px] w-[90px] absolute mt-[10px]'></div> : null }
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
              product name
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            date
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
              community
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            price
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
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={item._id}
         
              >
                 <td class="px-6 py-4">{item._id}</td>

               <td class=" py-2">{item.name}</td>
                <td class="px-6 py-2">{item.date}</td>
                <td class="px-6 py-2">{item.community}</td>
                <td class="px-6 py-2">{item.price}</td>

                <button class="px-6 py-1 bg-green-100 rounded-lg text-green-500 mt-3">{item.status}</button>

              
              </tr>
            ))} 
                
            { toggle4 && items4.map((item) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={item._id}
         
              >
                 <td class="px-6 py-4">{item._id}</td>

               <td class=" py-2">{item.name}</td>
                <td class="px-6 py-2">{item.date}</td>
                <td class="px-6 py-2">{item.community}</td>
                <td class="px-6 py-2">{item.price}</td>

                <button class="px-6 py-1 bg-red-100 rounded-lg text-red-500 mt-3">{item.status}</button>

              
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

export default InnerPurchaseHistory