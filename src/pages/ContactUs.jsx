// import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/footer'


// const reasons = [

//   {id:1,
//    item:'Add or Update a Listing'
//   },
//   {id:2,
//   item:'Billing or Subscription'
//   },
//   {id:3,
//   item:'Advertising or Sponsorship'
//   },
//   {id:4,
//   item:'Volunteer or Partnership'
//   },
//   {id:5,
//   item:'Event Submission'
//   },
//   {id:6,
//   item:'Report an Issue'
//   },
//   {id:7,
//   item:'General Feedback'
//   },
//   {id:8,
//   item:'Other'
//   },

// ]

// const ContactUs = () => {


//   const [reason, setReason] = useState('')
//   const [selectedReason, setSelectedReason] = useState('')

//   const handleReasons = (e) => {
//     setSelectedReason(e.target.value);
//   }


//   return (
//     <>
//        <Navbar />
//     <div className="bg-gray-100 font-nunito p-9 mt-[60px]">
   

// <div className='border w-[1000px] mx-auto border-gray-600 rounded-2xl px-12 py-8 mt-[35px] flex flex-col '>

// <div>
//      <p className='text-[#2A2B2B] text-3xl font-normal'>Name</p>
//       <input className='w-[900px] px-2 py-3 bg-white border border-gray-200 rounded-lg mb-4' />

//       <p className='text-[#2A2B2B] mt-4 text-3xl font-normal'>Email Address</p>
//       <input className='w-[900px] px-2 py-3 bg-white border border-gray-200 rounded-lg mb-4' />


//       <p className='text-[#2A2B2B] mt-4 text-3xl font-normal'>Select Reason</p>
      
//       <select value={selectedReason} onChange={handleReasons} className='border border-gray-200 w-full md:w-[900px] py-3 px-3 rounded-lg'>
//             <option value="">Select Reason</option>
//             {reasons.map(item => (
//               <option key={item.id} value={item.item}>{item.item}</option>
//             ) )}
//           </select>

//       <p className='text-[#2A2B2B] mt-4 text-3xl font-normal'>Subject</p>
//       <input className='w-[900px] px-2 py-3 bg-white border border-gray-200 rounded-lg mb-4' />

//       <p className='text-[#2A2B2B] mt-4 text-3xl font-normal'>Message</p>
//       <textarea className='w-[900px] h-[160px] px-2 py-3 bg-white border border-gray-200 rounded-lg mb-4' />

//     <div className='mt-4'><button className='text-white text-3xl bg-[#F08E1F] py-3 px-6 w-[900px] rounded-full' >Submit</button></div>

// </div>

// </div>



//       </div>
//     <Footer/></>
//   )
// }

// export default ContactUs



import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const reasons = [
  { id: 1, item: 'Add or Update a Listing' },
  { id: 2, item: 'Billing or Subscription' },
  { id: 3, item: 'Advertising or Sponsorship' },
  { id: 4, item: 'Volunteer or Partnership' },
  { id: 5, item: 'Event Submission' },
  { id: 6, item: 'Report an Issue' },
  { id: 7, item: 'General Feedback' },
  { id: 8, item: 'Other' }
];

const ContactUs = () => {
  const [selectedReason, setSelectedReason] = useState('');

  const handleReasons = (e) => {
    setSelectedReason(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 font-nunito mt-[60px] min-h-screen overflow-hidden">
        {/* Main container with consistent padding */}
        <div className="w-full px-4 py-6 sm:py-9 mx-auto">
          {/* Form container with max-width */}
          <div className="w-full max-w-[1000px] mx-auto border border-gray-600 rounded-2xl 
                        p-4 sm:p-6 md:p-12">
            <div className="w-full max-w-[900px] mx-auto space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-[#2A2B2B] text-xl sm:text-2xl md:text-3xl font-normal mb-2">
                  Name
                </label>
                <input 
                  className="w-full px-3 py-2 md:py-3 bg-white border border-gray-200 
                           rounded-lg focus:ring-2 focus:ring-[#F08E1F] focus:border-transparent
                           outline-none" 
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-[#2A2B2B] text-xl sm:text-2xl md:text-3xl font-normal mb-2">
                  Email Address
                </label>
                <input 
                  type="email"
                  className="w-full px-3 py-2 md:py-3 bg-white border border-gray-200 
                           rounded-lg focus:ring-2 focus:ring-[#F08E1F] focus:border-transparent
                           outline-none" 
                />
              </div>

              {/* Reason Select */}
              <div>
                <label className="block text-[#2A2B2B] text-xl sm:text-2xl md:text-3xl font-normal mb-2">
                  Select Reason
                </label>
                <select 
                  value={selectedReason} 
                  onChange={handleReasons} 
                  className="w-full px-3 py-2 md:py-3 bg-white border border-gray-200 
                           rounded-lg focus:ring-2 focus:ring-[#F08E1F] focus:border-transparent
                           outline-none"
                >
                  <option value="">Select Reason</option>
                  {reasons.map(item => (
                    <option key={item.id} value={item.item}>
                      {item.item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-[#2A2B2B] text-xl sm:text-2xl md:text-3xl font-normal mb-2">
                  Subject
                </label>
                <input 
                  className="w-full px-3 py-2 md:py-3 bg-white border border-gray-200 
                           rounded-lg focus:ring-2 focus:ring-[#F08E1F] focus:border-transparent
                           outline-none" 
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[#2A2B2B] text-xl sm:text-2xl md:text-3xl font-normal mb-2">
                  Message
                </label>
                <textarea 
                  className="w-full h-[120px] md:h-[160px] px-3 py-2 md:py-3 bg-white 
                           border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F08E1F] 
                           focus:border-transparent outline-none resize-none" 
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  className="w-full text-white text-xl sm:text-2xl md:text-3xl bg-[#F08E1F] 
                           py-2 md:py-3 rounded-full hover:bg-[#e07d1e] 
                           transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;