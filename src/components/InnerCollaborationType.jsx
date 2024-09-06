import React, {useState, useEffect} from 'react'
import Navbar2 from './Navbar2'
import { IoIosSquareOutline } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { IoMdSquareOutline,IoMdSquare  } from "react-icons/io";
import { Link, useNavigate, useParams } from 'react-router-dom';
import PaymentModal from './PaymentModal';
import { URL } from "../url";
import axios from "axios";
import CollaborationCard from './CollaborationCard';


const InnerCollaborationType = () => {
    // const [isChecked, setIsChecked] = useState(false);
    const {id:communityId } = useParams()
    const [community, setCommunity] = useState([])
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
      const res = await axios.get(`${URL}/api/communities/${communityId}`)
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
    <div className='flex-1 ml-[300px]'>
        <Navbar2 />

        <div className='flex gap-x-4 ml-12 mt-9 items-center'>
        <p className='text-gray-400 cursor-pointer' onClick={() => navigate(-2)}>Community Owners</p>
        <IoChevronForward />
        <p className='font-semibold cursor-pointer' onClick={() => navigate(-1)}>{community?.name}</p>
        <IoChevronForward />
        <p className='font-semibold cursor-pointer' >Collaboration Type</p>
        </div>

        

        <div className='max-w-[1000px] px-12 mt-12'>
        {community.collaborationTypes && community.collaborationTypes.length > 0 ? (
                    community.collaborationTypes.map((collab) => (
                        <CollaborationCard key={collab.id} collaboration={collab} />
                    ))
                ) : (
                    <p>No collaboration types available for this community.</p>
                )}
          
        {/* <CollaborationCard community={community} /> */}

<div className='items-center justify-center flex'>
<button onClick={openModal} className='bg-[#F08E1F] text-white rounded-full px-9 py-1 mt-9 '>pay #22,000</button>
</div>
<PaymentModal isOpen={isModalOpen} onClose={closeModal} title="Baby" />

        </div>


        </div>
  )
}

export default InnerCollaborationType