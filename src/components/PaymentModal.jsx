import React, {useState} from 'react'
import { HiMiniXMark } from "react-icons/hi2";
import { IoMdSquareOutline,IoMdSquare  } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const PaymentModal = ({ isOpen, onClose, title, content }) => {
    const navigate = useNavigate()
    const [checkbox, setCheckbox] = useState(false)
    const handleToggle = (checkboxId) => {
        setCheckbox((prevCheckbox) => ({
            ...prevCheckbox,
            [checkboxId]: !prevCheckbox[checkboxId],
        }));
    };
    
    if(!isOpen) return null
  return (
    
    




<div id="popup-modal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className='relative h-full w-full  flex justify-center items-center bg-slate-500/50'>

    
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" onClick={() =>{
           onClose()
          }} class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
  
         

  <div className='flex pt-6 justify-center gap-x-4 px-4'>
    <div>
            <input type='checkbox' checked={checkbox} onChange={() => handleToggle('checkbox')}  class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600 mt-6"  />
           </div>
            <div class="p-4 md:p-5 ">
       <p className='font-light text-sm'> I Agree to the Community Standards and Payment Implications. By checking this box, I acknowledge and agree that I will not engage in, promote, or distribute any form of explicit content, including but not limited to pornography, graphic violence, hate speech, or illegal activities through our community owners. I understand that such actions are strictly prohibited on this platform and that violating these standards may result in the suspension or termination of my account and the forfeiture of any payments made to community owners. I commit to upholding the values of respect, inclusivity, and safety within the community, fully aware that non-compliance will directly impact my financial transactions on this platform.</p>
            </div>
   
</div>

<div className='items-center justify-center flex pb-6'>
<button onClick={() => navigate('/paymentpage')} className='bg-gray-100 text-gray-400 rounded-full px-9 py-1 mt-2 '>Make Payment</button>
</div>


        </div>
    </div>
    </div>
</div>

  )
}

export default PaymentModal