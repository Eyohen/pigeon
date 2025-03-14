import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { SlPencil } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { SlTrash } from "react-icons/sl";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import Navbar2 from './Navbar2';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

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

const {user} = useAuth()
const [Purchases, setPurchase] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(false)

const userId = user?.id;

const fetchPurchases = async (userId) => {
  if(!userId){
    setIsLoading(false);
    setError("User Id is not available");
    return;
  }

  try {
    setIsLoading(true);
    const res = await axios.get(`${URL}/api/purchases/user/${userId}`);
    console.log("my purchases", res.data)
    setPurchase(res.data);
    setError(null)
  } catch (err) {
    console.log(err);
    setError("Failed to get collaboartion types");

  } finally {
    setIsLoading(false);
  }
};

useEffect(() => {
  if (user?.id){
  fetchPurchases(user?.id);
  }
}, [user]);







  return (
    <div className='flex-1 ml-[250px]'> 
    <Navbar2/>
        <p className='text-3xl ml-32 mt-6'>Purchase History</p>
           <div className='max-w-[1100px] bg-white ml-32'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
   
<div>
<div className='flex gap-x-10 border-b-2 py-3 px-2'>


    {/* <div className='relative'>


    </div> */}


</div>
</div>

      <div class="max-h-60 overflow-y-auto">
      <table class="w-full text-sm text-left text-gray-700 mt-5">
        <thead class="text-xs text-gray-700 bg-gray-50">
          <tr  className='font-semibold'>
          <th scope="col" class="px-6 py-3 font-light text-gray-300">
              id
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
              Collaboration Type
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            date
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            community
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            first name
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            price
            </th>
            <th scope="col" class="px-6 py-3 font-light text-gray-300">
            status
            </th>
       

          
          </tr>
        </thead>
        <tbody>
      
     {Purchases?.map((item) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={item.id}
              >
                 <td class="px-6 py-4">{item.id?.slice(0,6)}</td>

               <td class="px-6 py-2 max-w-[320px]">{item.title}</td>
                <td class="px-6 py-2">{new Date(item.createdAt).toDateString()}</td>
                <td class="px-6 py-2">{item.communityName?.slice(0,6)}</td>
                <td class="px-6 py-2">{item.firstName?.slice(0,6)}</td>
                <td class="px-6 py-2">{item.amount}</td>

                <button class="px-6 py-1 bg-green-100 rounded-lg text-green-500 mt-3">Completed</button>

              
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