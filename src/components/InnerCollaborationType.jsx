import React, {useState, useEffect} from 'react'
import Navbar2 from './Navbar2'
import { IoIosSquareOutline } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { IoMdSquareOutline,IoMdSquare  } from "react-icons/io";
import { Link, useNavigate, useParams } from 'react-router-dom';
import PaymentModal from './PaymentModal';
import { URL } from "../url";
import axios from "axios";


const InnerCollaborationType = () => {
    // const [isChecked, setIsChecked] = useState(false);
    const communityId = useParams().id
    const [community, setCommunity] = useState('')
    const navigate = useNavigate()
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        // Add more checkboxes as needed
      });

      const [isModalOpen, setIsModalOpen] = useState(false);
      const openModal = () => setIsModalOpen(true)
      const closeModal = () => setIsModalOpen(false)

const handleToggle = (checkboxId) => {
    setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [checkboxId]: !prevCheckboxes[checkboxId],
    }));
};


const fetchCommunity = async () => {
    try{
      const res = await axios.get(URL+"/api/communities/"+communityId)
      console.log("this is community owner henry",res.data)
      setCommunity(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchCommunity()

  },[communityId])
  return (
    <div className='flex-1'>
        <Navbar2 />

        <div className='flex gap-x-4 ml-12 mt-9 items-center'>
        <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-2)}>Community Owners</p>
        <IoChevronForward />
        <p className='font-semibold cursor-pointer' onClick={() => navigate(-1)}>{community.name}</p>
        <IoChevronForward />
        <p className='font-semibold cursor-pointer' >Collaboration Type</p>
        </div>

        

        <div className='max-w-[1100px] px-12 mt-12'>
            <div className='flex justify-between border-b-2 py-4 items-center'>
                <p className=''>Resource Sharing or Product/Service Testing Pos:- #7000</p>
                <p className='bg-[#ffe2dc] text-[#F08E1F] text-sm py-1 px-2 rounded-md'>Single Promotion</p>
                <input type='checkbox' checked={checkboxes.checkbox1} onChange={() => handleToggle('checkbox1')}  class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  />
            </div>
            <div className='flex justify-between border-b-2 py-4 items-center'>
                <p className=''>Resource Sharing or Product/Service Testing Post:- #47000</p>
                <p className='bg-[#ffe2dc] text-[#F08E1F] text-sm py-1 px-2 rounded-md'>30 days Promotion</p>
                <input type='checkbox' checked={checkboxes.checkbox2} onChange={() => handleToggle('checkbox2')}  class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  />
            </div>
            <div className='flex justify-between border-b-2 py-4 items-center'>
                <p className=''>Community Polls and Surveys:- #7000</p>
                <p className='bg-[#ffe2dc] text-[#F08E1F] text-sm py-1 px-2 rounded-md'>Single Promotion</p>
                <input type='checkbox' checked={checkboxes.checkbox3} onChange={() => handleToggle('checkbox3')}  class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  />
            </div>
            <div className='flex justify-between border-b-2 py-4 items-center'>
                <p className=''>Community Polls and Surveys:- #48000</p>
                <p className='bg-[#ffe2dc] text-[#F08E1F] text-sm py-1 px-2 rounded-md'>30 days Promotion</p>
                <input type='checkbox' checked={checkboxes.checkbox3} onChange={() => handleToggle('checkbox3')}  class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  />
            </div>
            <div className='flex justify-between border-b-2 py-4 items-center'>
                <p className='max-w-[600px]'>Sponsorship Post (Caption, Videos, Podcast Link, Blog Link, Social Content Posts etc) :-   #7,000</p>
                <p className='bg-[#ffe2dc] text-[#F08E1F] text-sm py-1 px-2 rounded-md'>Single Promotion</p>
                <input type='checkbox' checked={checkboxes.checkbox4} onChange={() => handleToggle('checkbox4')}  class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  />
            </div>

            <div className='flex justify-between border-b-2 py-4 items-center'>
                <p className=''>Partnership: Basic introduction to Five (5) potential partners based on our interest(s). Access and initiate contact with a curated list of potential partners in interest areas - #8,000 </p>

                <input type='checkbox' checked={checkboxes.checkbox4} onChange={() => handleToggle('checkbox4')}  class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  />
            </div>

            <div className='flex justify-between border-b-2 py-4 items-center'>
            <p className=''>Partnership: Basic introduction to Five (5) potential partners based on our interest(s). Access and initiate contact with a curated list of potential partners in interest areas - #8,000 </p>

              
                <input type='checkbox' checked={checkboxes.checkbox4} onChange={() => handleToggle('checkbox4')}  class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  />
            </div>

            <div className='flex justify-between border-b-2 py-4 items-center'>
            <p className=''>Partnership: Basic introduction to Five (5) potential partners based on our interest(s). Access and initiate contact with a curated list of potential partners in interest areas - #8,000 </p>

                
                <input type='checkbox' checked={checkboxes.checkbox4} onChange={() => handleToggle('checkbox4')}  class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  />
            </div>

<div className='items-center justify-center flex'>
<button onClick={openModal} className='bg-[#F08E1F] text-white rounded-full px-9 py-1 mt-9 '>pay #22,000</button>
</div>
<PaymentModal isOpen={isModalOpen} onClose={closeModal} title="Baby" />

        </div>


        </div>
  )
}

export default InnerCollaborationType