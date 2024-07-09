import React,{useState} from 'react'
import { BsToggleOn } from "react-icons/bs";


const InsideSettings = () => {
    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(false);
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
    <div className='flex-1'>

     <div className='flex justify-evenly px-9'>
    
        <div className='border rounded-lg  mt-12 '>
            <div onClick={handleToggle1}  className={`flex justify-between hover:bg-gray-100 ${toggle1 ? 'bg-orange-100' : null}`}>
            <p className='hover:bg-gray-100  py-4 px-9'>Edit Profile</p>
           
            </div>

            <div onClick={handleToggle2}  className={`flex justify-between hover:bg-gray-100 ${toggle2 ? 'bg-orange-100' : null}`}>
            <p className='hover:bg-gray-100 py-4 px-9'>Password & Security</p>
            {/* <p className='hover:bg-orange-100 text-white hover:text-orange-100  py-4 '>Edit Profile</p> */}
            </div>

            <div onClick={handleToggle3}  className={`flex justify-between hover:bg-gray-100 ${toggle3 ? 'bg-orange-100' : null}`}>
            <p className='hover:bg-gray-100 py-4 px-9'>Community Setting</p>
            {/* <p className='hover:bg-orange-100 text-white hover:text-orange-100 py-4 '>Edit Profile</p> */}
            </div>

            <div onClick={handleToggle4}  className={`flex justify-between hover:bg-gray-100 ${toggle4 ? 'bg-orange-100' : null}`}>
            <p onClick={handleToggle4} className='hover:bg-gray-100 py-4 px-9'>Manage Notifications</p>
            <p className='hover:bg-orange-100 text-white hover:text-orange-100 py-4 px-9'></p>
            </div>
           
        
        </div>

        <div className='border-2 rounded-xl mt-12 py-9 px-32 '>
            {toggle1 && 
            
            <div>
            <p className='font-semibold text-xl'>Edit Profile</p>


            <p className='mt-4'>Email</p>
        <input className='border border-[#D7D7D7] w-full md:w-[600px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

            <p className='mt-4'>Phone Number</p>
        <input className='border border-[#D7D7D7] w-full md:w-[600px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <div className='justify-center items-center mt-6 flex'>
        <button className='bg-[#F08E1F] px-[280px] rounded-full text-white py-2'>Save</button>
        </div> 
   
        
        
        
        </div>}



        {toggle2 && <div>
            <p className='font-semibold text-lg text-center'>Kindly provide the email address linked to your account</p>

<p className='mt-4'>Email</p>
<input className='border border-[#D7D7D7] w-full md:w-[600px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>



<div className='justify-center items-center mt-9 flex'>
<button className='hover:bg-[#F08E1F] bg-gray-200 px-[265px] hover:text-white rounded-full text-gray-500 py-2'>Continue</button>
</div>
        </div> }



        
        {toggle4 && <div>
            <p className='font-semibold text-xl'>Manage Notifications</p>

<div className='border-b-2 flex justify-between items-center py-3 gap-x-9'>
<div className=''>
<p className='text-gray-500 mt-6'>Email Notification</p>
<p className='text-sm text-gray-300'>This will be sent to mic******an@gmail.com when you're online or offline</p>
</div>
<BsToggleOn  size={35} className='text-[#F08E1F]'/>
</div>


<div className='border-b-2 flex justify-between items-center py-3'>
<div className=''>
<p className='text-md text-gray-500 mt-6'>Push Notification</p>
<p className='text-sm text-gray-300'>This will be sent to you're phone when online or offline</p>
</div>
<BsToggleOn size={35} className='text-[#F08E1F]'/>
</div>

        </div> }
      
              

        </div>



        </div>
    </div>
  )
}

export default InsideSettings