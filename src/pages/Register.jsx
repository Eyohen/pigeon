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
import registerimage from '../assets/pana.png'
import CustomDropdown from '../components/CustomDropDown';
import usflag from '../assets/usflag.png'
import cadflag from '../assets/cadflag.png'
import gbpflag from '../assets/gbpflag.jpeg'
import ngnflag from '../assets/ngnflag.png'
import australianflag from '../assets/australianflag.png'
import chinaflag from '../assets/chinaflag.png'


const currencies = [
  {
    id: 1,
    currency: "USD",
    image:usflag
},
{
    id: 2,
    currency: "GBP",
    image:gbpflag
    
},
{
  id: 3,
  currency: "CAD",
  image:cadflag
},
{
  id: 4,
  currency: "NGN",
  image:ngnflag
},
{
  id: 5,
  currency: "AUD",
  image:australianflag
},
{
  id: 6,
  currency: "CNY",
  image:chinaflag
},

]


const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].currency)
  const [currency, setCurrency] = useState('')
  const [valid,setValid] = useState(true)
  const [error,setError] = useState(false)

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }


  const handleSubmit = async() => {
    //e.preventDefault()

    //validate before submission
    if(password === confirmPassword){
      //passwords match, you can proceed with further 
      console.log('Passwords match!');
    } else {
      // passwords do not match
      console.log('Passwords do not match!')
    }

    const userData = {
      firstName, 
      lastName,
      email, 
      password,
      phone: phoneNumber,
      currency: selectedCurrency
    };
    console.log('Sending data:', userData);
  

    setIsLoading(true)
    try{
      const res = await axios.post(URL+"/api/auth/register",
  
      userData, 
    
      
      )

      // const {access_token} = res.data;

      // if(res.status == 200){
      //   localStorage.setItem("access_token", access_token)
      //   localStorage.setItem("currentUser", JSON.stringify(res.data))
      //   console.log(res.data)
      //   // setUser(res.data)
      //   navigate("/")
      // }
      setError(false)
      console.log(res.data)
      navigate("/login")
    }
    catch(err) {
      setError(true)
      console.log(err)
    } finally {
      setIsLoading(false)
    }

}

const handleChange = (value) => {
  // const input = event.target.value;
  setPhone(value);
  setPhoneNumber(value);
  setValid(validatePhoneNumber(value));
}


const validatePhoneNumber = (phoneNumber) => {
  return phoneNumber && phoneNumber.length >= 10;
}

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
   // Check if passwords match when the password is changed
   setPasswordsMatch(e.target.value === confirmPassword);
}

const handleConfirmPasswordChange = (e) => {
  setConfirmPassword(e.target.value)
   // Check if passwords match when the confirm password is changed
   setPasswordsMatch(e.target.value === password);
}


  return (
    <div className='font-nunito'>
    <div className=' flex items-center justify-center'>

    <img src={registerimage} className='pt-32' />

        <div className='rounded-lg px-[180px] py-[20px] relative'>
        <img src={logo} alt='' className='mx-auto'/>

        <p className='text-center font-semibold text-3xl mt-3'>Create an account</p>

        <p className='pt-6'>First Name</p>
        <input onChange={(e) => setFirstName(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F]' />


        <p className='pt-6'>Last Name</p>
        <input onChange={(e) => setLastName(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F]' />
      
        <p className='pt-6'>Email</p>
        <input onChange={(e) => setEmail(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F]' />

        <p className='pt-5'>Phone Number</p>
        <PhoneInput  inputProps={{required:true,}} value={phoneNumber} onChange={handleChange}  className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F]' />
        {!valid && <p className='text-red-500'>Please enter a valid phone number</p>}

        <p className='text-sm pt-5'>Select Preferred Currency</p>
        <CustomDropdown
  options={currencies}
  value={selectedCurrency}
  onChange={(value) => setSelectedCurrency(value)}
/>

        <p className='pt-5'>Password</p>

        <div class="relative w-full md:w-[400px]">
    <div class="absolute inset-y-0 right-0 flex items-center px-2">
      {/* <input class="hidden js-password-toggle" id="toggle" type="checkbox" /> */}
      <label onClick={togglePasswordVisibility} className=" px-2 py-1 text-xl font-mono cursor-pointer text-gray-400" for="toggle">{isPasswordVisible ? (<RiEyeLine />):(<RiEyeOffLine />)}</label>
    </div>
    <input value={password} onChange={handlePasswordChange} className="border rounded-lg w-full py-2 px-3 leading-tight hover:border-[#F08E1F] pr-16 font-mono " type={isPasswordVisible ? "text" : "password"} autocomplete="off"
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
        <p className='text-gray-600 text-sm text-center mt-4'>By clicking sign up, you agree to our <span className='text-[#F08E1F]'>terms and data policy</span></p>
        <button onClick={handleSubmit}  className='bg-[#F7F7F7] text-[#98999A] w-full md:w-[400px] py-2 rounded-2xl mt-6 hover:bg-[#F08E1F] hover:text-white'>{isLoading ? "Loading..." : "Sign Up"}</button>
        {error && <h3 className='text-red-500 text-lg text-center'>Something went wrong</h3>}
        </div>
        <p className='pt-3 text-center text-[#98999A]'>Already have an account?   <Link to={'/login'}><span className='text-[#F08E1F] ml-1'>Login</span></Link></p>
        </div>

    </div>
    <div className='flex justify-between mb-12 '>
    <p className='px-6 text-[#6A6B6C]'>Privacy Policy</p>
    <p className='px-6 text-[#6A6B6C]'>All Rights Reserved © 2024</p>
    </div>
</div>
  )
}

export default Register