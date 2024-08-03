import React, { useState, useContext } from 'react'
import { SlGlobe } from "react-icons/sl";
import logo from "../assets/LOGO-BLACK1.png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL } from "../url"
// import PhoneInput from 'react-phone-input-2';
import PhoneInput from 'react-phone-number-input';
// import 'react-phone-input-2/lib/style.css'
import  'react-phone-number-input/style.css'
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useAuth } from '../context/AuthContext';
import forgotimage from '../assets/forgotpassword.png'
import { resetPassword } from '../api';




const CreateNewPassword = () => {

  const { login} = useAuth();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [message, setMessage] = useState('');

  const [error,setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    const resetToken = localStorage.getItem('resetToken');

    if(!resetToken){
      setMessage('Reset token not found. Please start the process again.');
      return;
    }


    //validate before submission
    if(newPassword === confirmPassword){
      //passwords match, you can proceed with further 
      console.log('Passwords match!');
    } else {
      // passwords do not match
      console.log('Passwords do not match!')
    }


    setIsLoading(true)
    try{
      const response = await resetPassword(newPassword, resetToken);
      setMessage(response.msg);
      localStorage.removeItem('resetToken');

      // redirect to login after successful reset
      setTimeout(() => navigate('/login'), 2000);
     
    }
    catch(error) {
      console.log(error)
      setMessage(error.response?.data?.msg || 'An error occured'); 
    } finally {
      setIsLoading(false)
    }

}


const handleConfirmPasswordChange = (e) => {
  setConfirmPassword(e.target.value)
   // Check if passwords match when the confirm password is changed
   setPasswordsMatch(e.target.value === newPassword);
}





  return (
    <div className='font-nunito'>
    <div className='flex justify-center '>

    {/* h-[100vh] */}


<img src={forgotimage} className='pt-32' />

        <div className='rounded-lg px-[180px] py-[40px] relative pt-[75px]'>
        <img src={logo} alt='' className='mx-auto'/>

        <p className='text-center font-semibold text-3xl pt-6'>Create New Password</p>

 

        <p className='pt-5'>New Password</p>
        <div class="relative w-full md:w-[450px]">
    <div class="absolute inset-y-0 right-0 flex items-center px-2">
      {/* <input class="hidden js-password-toggle" id="toggle" type="checkbox" /> */}
      <label onClick={togglePasswordVisibility} className=" px-2 py-1 text-xl font-mono cursor-pointer text-gray-400" for="toggle">{isPasswordVisible ? (<RiEyeLine />):(<RiEyeOffLine />)}</label>
    </div>
    <input onChange={(e) => setNewPassword(e.target.value)} className="border rounded-lg w-full md:w-[450px] py-2 px-3 leading-tight hover:border-[#F08E1F] pr-16 font-mono " type={isPasswordVisible ? "text" : "password"} autocomplete="off"
    />
  </div>


  <p className='pt-5'>Confirm Password</p>
        <div class="relative w-full md:w-[400px]">
    <div class="absolute inset-y-0 right-0 flex items-center px-2">
      {/* <input class="hidden js-password-toggle" id="toggle" type="checkbox" /> */}
      <label onClick={togglePasswordVisibility} className=" px-2 py-1 text-xl font-mono cursor-pointer text-gray-400" for="toggle">{isPasswordVisible ? (<RiEyeLine />):(<RiEyeOffLine />)}</label>
    </div>
    <input onChange={handleConfirmPasswordChange} value={confirmPassword} className="border rounded-lg w-full py-2 px-3 leading-tight hover:border-[#F08E1F] pr-16 font-mono" type={isPasswordVisible ? "text" : "password"} autocomplete="off"
    />
  </div>
  {!passwordsMatch && <p className='text-red-500'>Both passwords must match!</p> }

       



        <div>
        <button onClick={handleSubmit}  className='bg-[#F7F7F7] text-[#98999A] w-full md:w-[450px] py-2 rounded-2xl mt-6 hover:bg-[#F08E1F] hover:text-white'>{isLoading ? "Loading..." : "Reset Password"}</button>
        {message && <h3 className='text-red-500 text-lg text-center'>{message}</h3>}
        </div>

        </div>

    </div>
    <div className='flex justify-between mb-12 '>
    <p className='px-6 text-[#6A6B6C]'>Privacy Policy</p>
    <p className='px-6 text-[#6A6B6C]'>All Rights Reserved © 2024</p>
    </div>
</div>
  )
}

export default CreateNewPassword