import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'


const reasons = [

  {id:1,
   item:'Add or Update a Listing'
  },
  {id:2,
  item:'Billing or Subscription'
  },
  {id:3,
  item:'Advertising or Sponsorship'
  },
  {id:4,
  item:'Volunteer or Partnership'
  },
  {id:5,
  item:'Event Submission'
  },
  {id:6,
  item:'Report an Issue'
  },
  {id:7,
  item:'General Feedback'
  },
  {id:8,
  item:'Other'
  },

]

const ContactUs = () => {


  const [reason, setReason] = useState('')
  const [selectedReason, setSelectedReason] = useState('')

  const handleReasons = (e) => {
    setSelectedReason(e.target.value);
  }


  return (
    <>
       <Navbar />
    <div className="bg-gray-100 font-nunito p-9 mt-[60px]">
   

<div className='border w-[1000px] mx-auto border-gray-600 rounded-2xl px-12 py-8 mt-[35px] flex flex-col '>

<div>
     <p className='text-[#2A2B2B] text-3xl font-normal'>Name</p>
      <input className='w-[900px] px-2 py-3 bg-white border border-gray-200 rounded-lg mb-4' />

      <p className='text-[#2A2B2B] mt-4 text-3xl font-normal'>Email Address</p>
      <input className='w-[900px] px-2 py-3 bg-white border border-gray-200 rounded-lg mb-4' />


      <p className='text-[#2A2B2B] mt-4 text-3xl font-normal'>Select Reason</p>
      
      <select value={selectedReason} onChange={handleReasons} className='border border-gray-200 w-full md:w-[900px] py-3 px-3 rounded-lg'>
            <option value="">Select Reason</option>
            {reasons.map(item => (
              <option key={item.id} value={item.item}>{item.item}</option>
            ) )}
          </select>

      <p className='text-[#2A2B2B] mt-4 text-3xl font-normal'>Subject</p>
      <input className='w-[900px] px-2 py-3 bg-white border border-gray-200 rounded-lg mb-4' />

      <p className='text-[#2A2B2B] mt-4 text-3xl font-normal'>Message</p>
      <textarea className='w-[900px] h-[160px] px-2 py-3 bg-white border border-gray-200 rounded-lg mb-4' />

    <div className='mt-4'><button className='text-white text-3xl bg-[#F08E1F] py-3 px-6 w-[900px] rounded-full' >Submit</button></div>

</div>

</div>



      </div>
    <Footer/></>
  )
}

export default ContactUs