import React,{useState, useEffect} from 'react'
import { URL } from "../url";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const InsideListVisibility = () => {
const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [location, setLocation] = useState('')
const [selectedCommType, setSelectedCommType] = useState([])
// const [type, setType] = useState([])
const [commtype, setCommType] = useState([])
const [selectedSize, setSelectedSize] = useState([])
const [size, setSize] = useState([])
const [selectedCommInterest, setSelectedCommInterest] = useState([])
const [interest, setInterest] = useState([])
const [selectedEnglevel, setSelectedEnglevel] = useState([])
const [level, setLevel] = useState([])
const [selectedGoal, setSelectedGoal] = useState([])
const [goal, setGoal] = useState([])
const [user, setUser] = useState([])
const [content, setContent] = useState('')
const [accessType, setAccessType] = useState('')
const [prevCollabType, setPrevCollabType] = useState('')
const [preferredCollabType, setPreferredCollabType] = useState('')
const [selectedAccess, setSelectedAccess] = useState('')
const [collabtype, setCollabType] = useState([])
const [selectedCollabType, setSelectedCollabType] = useState([])
  const [selectedInterest, setSelectedInterest] = useState([])
  const [whatsapp, setWhatsapp] = useState('')
const [twitter, setTwitter] = useState('')
const [telegram, setTelegram] = useState('')
const [usp, setUSP] = useState('')
const [recognition, setRecognition] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate()


  const fetchCommType = async () => {
    try {
      const res = await axios.get(URL + "/api/commtypes/");
      setCommType(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCommType();
  }, []);

  
  const fetchSize = async () => {
    try {
      const res = await axios.get(URL + "/api/sizes/");
      setSize(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSize();
  }, []);


  const fetchCommInterest = async () => {
    try {
      const res = await axios.get(URL + "/api/interests/");
      setInterest(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCommInterest();
  }, []);

  
  const fetchEnglevel = async () => {
    try {
      const res = await axios.get(URL + "/api/englevels/");
      setLevel(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEnglevel();
  }, []);


  const fetchGoal = async () => {
    try {
      const res = await axios.get(URL + "/api/goals/");
      setGoal(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGoal();
  }, []);

  const fetchCollabTypes = async () => {
    try {
      const res = await axios.get(URL + "/api/collabtypes/");
      setCollabType(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCollabTypes();
  }, []);


  const handleCreate = async ()=>{
    setIsLoading(true)
    try{
      const accessToken = localStorage.getItem("access_token");

      if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }

      const res = await axios.post(URL+"/api/communities/create",
      {name,description,location,communicationType:selectedCommType,
       size:selectedSize,
      communityInterest:selectedCommInterest,
      engagementLevel:selectedEnglevel, 
      communityGoal:selectedGoal, 
      accessType:selectedAccess,
        collabtype:selectedCollabType,
        preferredCollabType,
        prevCollabType,
      //  commInterest:selectedInterest,
         twitter, telegram, whatsapp, usp, recognition, additionalService
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      })
      setName(res.data.name)
      setDescription(res.data.description)
      setLocation(res.data.location)
      setCommType(res.data.commtype)
      setSize(res.data.size)
      setInterest(res.data.interest)
      setLevel(res.data.level)
      setGoal(res.data.goal)
      setAccessType(res.data.accessType)
      setCollabType(res.data.collabtype)
      // setCommInterest(res.data.commInterest)
      setWhatsapp(res.data.whatsapp)
      setTelegram(res.data.telegram)
      setTwitter(res.data.twitter)
      setRecognition(res.data.recgonition)
      setUSP(res.data.usp)
      setError(false)
      navigate("/communityowner")    
    }
    catch(err){
      setError(true)
      console.log(err)
    }finally {
      setIsLoading(false)
    }

  }

  const accesses = [
    {
        _id: 1,
        accessType: "Free",
    },
    {
        _id: 2,
        accessType: "Paid",
    },]


  const interests = [
    {
        _id: 1,
        interest: "Arts and Culture",
    },
    {
        _id: 2,
        interest: "Technology and Science",
    },
    {
        _id: 3,
        interest: "Health and Wellness",
    },
    {
      _id: 4,
      interest: "Business and Finance",
    },
    {
      _id: 5,
      interest: "Education and Learning",
    },
    {
      _id: 6,
      interest: "Social and Community",
    },
    {
      _id: 7,
      interest: "Lifestyle and Hobbies",
  },
  {
    _id: 8,
    interest: "Entertainment and Leisure",
  },
  {
    _id: 9,
    interest: "Environment and Sustainability",
  },
  {
    _id: 10,
    interest: "Special Interest",
  },
  {
    _id: 11,
    interest: "Creative and Expressive",
  },
  {
    _id: 12,
    interest: "Business Technologies",
  }
    ]
  

  const handleInterest = (e) => {
    setSelectedInterest(e.target.value);
  }
  const handleCommType = (e) => {
    setSelectedCommType(e.target.value);
  }
  const handleSize = (e) => {
    setSelectedSize(e.target.value);
  }
  const handleCommInterest = (e) => {
    setSelectedCommInterest(e.target.value);
  }
  const handleEnglevel = (e) => {
    setSelectedEnglevel(e.target.value);
  }
  const handleGoal = (e) => {
    setSelectedGoal(e.target.value);
  }
  const handleAccess = (e) => {
    setSelectedAccess(e.target.value);
  }
  const handleCollabType = (e) => {
    setSelectedCollabType(e.target.value);
  }


  return (
    <div className='flex-1'>

<div className='flex justify-evenly'>

  <div className='mt-12 '>
    <div className='flex gap-x-4 items-center'>
      <button className='border-2 border-gray-400 text-gray-400 h-6 w-6 rounded-full flex items-center justify-center p-5'>01</button>
      <p className='text-gray-400'>Community Information</p>
      </div>
      <div className='h-9 w-[2px] bg-gray-400 ml-5'></div>

      <div className='flex gap-x-4 items-center '>
      <button className='border-2 border-gray-400 text-gray-400  h-6 w-6 rounded-full flex items-center justify-center p-5'>02</button>
      <p className='text-gray-400'>Logo</p>
      </div>
      <div className='h-9 w-[2px] bg-gray-400 ml-5'></div>

      <div className='flex gap-x-4 items-center'>
      <button className='border-2 border-gray-400 text-gray-400  h-6 w-6 rounded-full flex items-center justify-center p-5'>03</button>
      <p className='text-gray-400'>Collaboration Types</p>
      </div>
      <div className='h-9 w-[2px] bg-gray-400 ml-5'></div>

      <div className='flex gap-x-4 items-center '>
      <button className='border-2 border-gray-400 text-gray-400  h-6 w-6 rounded-full flex items-center justify-center p-5'>04</button>
      <p className='text-gray-400'>Additional Features</p>
      </div>
      <div className='h-9 w-[2px] bg-gray-400 ml-5'></div>

      <div className='flex gap-x-4 items-center'>
      <button className='border-2 border-gray-400 text-gray-400  h-6 w-6 rounded-full flex items-center justify-center p-5'>05</button>
      <p className='text-gray-400'>Contact Information</p>
      </div>
      </div>


{/* border for community info */}
<div>
      <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3'>
        <p className='font-semibold'>Create for visibility</p>

        <p>Community Name</p>
        <input onChange={(e)=>setName(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <p>Community Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

        <p className='text-sm'>Community Type<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedCommType} onChange={handleCommType} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select community type</option>
            {commtype.map(item => (
              <option key={item._id} value={item.commtype}>{item.commtype}</option>
            ) )}
          </select>

          <p>Location</p>
        <input onChange={(e)=>setLocation(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

          <p className='text-sm'>Size of community<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedSize} onChange={handleSize} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Size of Community</option>
            {size.map(item => (
              <option key={item._id} value={item.size}>{item.size}</option>
            ) )}
          </select>

          <p className='text-sm'>Community Interest<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedCommInterest} onChange={handleCommInterest} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Interest</option>
            {interest.map(item => (
              <option key={item._id} value={item.interest}>{item.interest}</option>
            ) )}
          </select>

          <p className='text-sm'>Engagement level<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedEnglevel} onChange={handleEnglevel} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Engagement level</option>
            {level.map(item => (
              <option key={item._id} value={item.level}>{item.level}</option>
            ) )}
          </select>

          <p className='text-sm'>Community Platforms Used<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedInterest} onChange={handleInterest} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value=""></option>
            {interests.map(item => (
              <option key={item._id} value={item.interest}>{item.interest}</option>
            ) )}
          </select>

          <p className='text-sm'>Community content<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedGoal} onChange={handleGoal} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select goal/content</option>
            {goal.map(item => (
              <option key={item._id} value={item.goal}>{item.goal}</option>
            ) )}
          </select>

          <p className='text-sm'>Access Type<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedAccess} onChange={handleAccess} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Access  Type</option>
            {accesses.map(item => (
              <option key={item._id} value={item.accessType}>{item.accessType}</option>
            ) )}
          </select>

          <p className='text-sm'>Preferred Collaboration Types<span className='text-red-500 text-xl'> *</span></p>
          <select value={selectedInterest} onChange={handleCollabType} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Collaboration Type</option>
            {collabtype.map(item => (
              <option className='left-0 absolute' key={item._id} value={item.collabtype}>{item.collabtype}</option>
            ) )}
          </select>
</div>

{/* collaboration types */}
   <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3'>
        <p className='font-semibold'>Collaboration Types</p>

        <p className='text-sm'>Title <span className='text-red-500 text-xl'>*</span></p>
        <select value={selectedInterest} onChange={handleCollabType} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Collaboration Type</option>
            {interests.map(item => (
              <option key={item._id} value={item.interest}>{item.interest}</option>
            ) )}
          </select>

      
        <p className='text-sm'>Duration<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedInterest} onChange={handleInterest} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value=""></option>
            {interests.map(item => (
              <option key={item._id} value={item.interest}>{item.interest}</option>
            ) )}
          </select>

          <p className='text-sm'>Amount<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedInterest} onChange={handleInterest} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value=""></option>
            {interests.map(item => (
              <option key={item._id} value={item.interest}>{item.interest}</option>
            ) )}
          </select>


<div className='items-center justify-center flex'>
          <button className='border border-[#F08E1F] rounded-full px-16 py-2'>Add Collaboration Type</button>

          </div>

          </div>

{/* additional features */}
 <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3'>
        <p className='font-semibold'>Additional Features</p>


       

        <p>Unique Selling Points of the Community</p>
        <textarea onChange={(e)=>setUSP(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <p>Special Achievements or Recognitions</p>
        <textarea onChange={(e)=>setRecognition(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

          <p className='text-sm'>Any additional Services Offered</p>
        <select value={selectedInterest} onChange={handleInterest} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value=""></option>
            {interests.map(item => (
              <option key={item._id} value={item.interest}>{item.interest}</option>
            ) )}
          </select>
      </div>


      {/* Contact information */}
<div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3'>
        <p className='font-semibold'>Contact Information</p>
        <p>Whatsapp </p>
        <input onChange={(e)=>setWhatsapp(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <p>Telegram</p>
        <input onChange={(e)=>setTelegram(e.target.value)}  className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

        <p>Twitter</p>
        <input onChange={(e)=>setTwitter(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />


        <div className='items-center justify-center flex'>
<button onClick={handleCreate} className='bg-[#F08E1F] text-white rounded-full px-32 py-2'>{isLoading ? "Loading..." : "List Community"}</button>
      </div>



</div>

      </div>

      </div>
      
      </div>
  )
}

export default InsideListVisibility