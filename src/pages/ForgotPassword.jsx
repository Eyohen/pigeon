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
import { forgotPassword } from '../api';


const ForgotPassword = () => {

  const { login} = useAuth();

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error,setError] = useState(false)


  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try{
      const response = await forgotPassword(email);
        setMessage(response.msg);
        localStorage.setItem('resetToken', response.resetToken);
        navigate("/otp")
    }
    catch(error) {
      setMessage(error.response?.data?.msg || 'An error occurred');
      console.log(error)
    } finally {
      setIsLoading(false)
    }

}






  return (
    <div className='font-nunito'>
    <div className='flex justify-center '>

    {/* h-[100vh] */}


<img src={forgotimage} className='pt-32' />

        <div className='rounded-lg px-[180px] py-[40px] relative pt-[75px]'>
        <img src={logo} alt='' className='mx-auto'/>

        <p className='text-center font-semibold text-3xl pt-9'>Forgot Password</p>

        <p className='text-center font-semibold text-xl pt-3'>Kindly provide the email address linked to your account.</p>
 
      
        <p className='pt-6'>Email</p>
        <input onChange={(e) => setEmail(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[550px] py-2 px-3 rounded-lg hover:border-[#F08E1F]' />
       



        <div>
        {/* <p className='text-gray-600 text-sm text-center mt-4'>By clicking sign up, you agree to our <span className='text-[#F08E1F]'>terms and data policy</span></p> */}
        <button onClick={handleSubmit}  className='bg-[#F7F7F7] text-[#98999A] w-full md:w-[550px] py-2 rounded-2xl mt-6 hover:bg-[#F08E1F] hover:text-white'>{isLoading ? "Loading..." : "Continue"}</button>
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

export default ForgotPassword