import React,{useState, useEffect} from 'react'
import { URL } from "../url";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const InsideListCommunity = () => {
const {user , logout} = useAuth();
const [selectedCommunity, setSelectedCommunity] = useState([])
const [communities, setCommunities] = useState([])
const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [location, setLocation] = useState('')
const [selectedCommType, setSelectedCommType] = useState([])
const [selectedCommPlatfrom, setSelectedCommPlatform] = useState([])
const [communicationPlatform, setCommPlatform] = useState([])
const [communityType, setCommType] = useState([])
const [selectedSize, setSelectedSize] = useState([])
const [size, setSize] = useState([])
const [selectedCommInterest, setSelectedCommInterest] = useState([])
const [communityInterest, setInterest] = useState([])
const [selectedEnglevel, setSelectedEnglevel] = useState([])
const [engagementLevel, setLevel] = useState([])
const [selectedGoal, setSelectedGoal] = useState([])
const [communityGoal, setGoal] = useState([])
// const [user, setUser] = useState([])
const [content, setContent] = useState('')
const [accessType, setAccessType] = useState('')
const [prevCollabType, setPrevCollabType] = useState('')
// const [preferredCollabType, setPreferredCollabType] = useState('')
const [selectedAccess, setSelectedAccess] = useState('')
const [collab, setCollab] = useState([])
const [collaborationType, setCollabType] = useState([])
const [selectedCollabType, setSelectedCollabType] = useState([])
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [additionalService, setAdditionalService] = useState('');
  const [whatsapp, setWhatsapp] = useState('')
const [twitter, setTwitter] = useState('')
const [telegram, setTelegram] = useState('')
const [usp, setUSP] = useState('')
const [recognition, setRecognition] = useState('')
const [amount, setAmount] = useState('')
const [selectedDuration, setSelectedDuration] = useState('')
const [duration, setDuration] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate()


  const userId = user?.id;


  console.log("Daniel check for user object", userId)



  const fetchMyCommunities = async () => {
    try {

      const res = await axios.get(URL + `/api/communities/user/${userId}`);
      setCommunities(res.data);
      console.log("Filtered communities:", communities)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyCommunities();
  }, []);  


// get collaborationTypes
const fetchMyCollaborationTypes = async () => {
  try {
    const res = await axios.get(URL + "/api/engagementLevel/");
    setLevel(res.data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  fetchEnglevel();
}, []);


  const fetchCommType = async () => {
    try {
      const res = await axios.get(URL + "/api/communityTypes/");
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

  
  const fetchEnglevel = async () => {
    try {
      const res = await axios.get(URL + "/api/engagementLevels/");
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

  const fetchCommPlatform = async () => {
    try {
      const res = await axios.get(URL + "/api/communicationPlatforms/");
      setCommPlatform(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCommPlatform();
  }, []);

  const fetchCollab = async () => {
    try {
      const res = await axios.get(URL + "/api/collabs/");
      setCollab(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCollab();
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
      {name,description,location,communityType:selectedCommType,
       size:selectedSize,
      communityInterest:selectedCommInterest,
      communicationPlatform:selectedCommPlatfrom,
      engagementLevel:selectedEnglevel, 
      communityGoal:selectedGoal, 
      accessType:selectedAccess,
      //collaborationType:selectedCollabType,
        // preferredCollabType,
        prevCollabType,
      //  commInterest:selectedInterest,
         twitter, telegram, whatsapp, usp, recognition, additionalService, user:userId
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      })
      console.log("This is to see the communtity progress", res.data)
      setName(res.data.name)
      setDescription(res.data.description)
      setLocation(res.data.location)
      setCommType(res.data.communityType)
      setSize(res.data.size)
      setInterest(res.data.interest)
      setLevel(res.data.engagementLevel)
      setGoal(res.data.goal)
      setAccessType(res.data.accessType)
      // setCollabType(res.data.collabtype)
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



  const createCollaboration = async ()=>{
    setIsLoading(true)
    try{
      const accessToken = localStorage.getItem("access_token");

      if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }

      const res = await axios.post(URL+"/api/collaborationTypes/create",
      {
      collaborationType:selectedCollabType,
      duration:selectedDuration,
      amount,
      communityId:selectedCommunity
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      })
      console.log("collab type", res.data)
      

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

    const durations = [
      {
          id: 1,
          duration: "15 days",
      },
      {
          id: 2,
          duration: "30 days",
      },
      {
        id: 3,
        duration: "2 months",
    },
    {
        id: 3,
        duration: "6 months",
    },
    ]


  const interests = [
    {
        id: 1,
        interest: "Arts and Culture",
    },
    {
        id: 2,
        interest: "Technology and Science",
    },
    {
        id: 3,
        interest: "Health and Wellness",
    },
    {
      id: 4,
      interest: "Business and Finance",
    },
    {
      id: 5,
      interest: "Education and Learning",
    },
    {
      id: 6,
      interest: "Social and Community",
    },
    {
      id: 7,
      interest: "Lifestyle and Hobbies",
  },
  {
    id: 8,
    interest: "Entertainment and Leisure",
  },
  {
    id: 9,
    interest: "Environment and Sustainability",
  },
  {
    id: 10,
    interest: "Special Interest",
  },
  {
    id: 11,
    interest: "Creative and Expressive",
  },
  {
    id: 12,
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
  const handleCommunity = (e) => {
    setSelectedCommunity(e.target.value);
  }
    const handleCollabType = (e) => {
    setSelectedCollabType(e.target.value);
  }
  const handleCommPlatform = (e) => {
    setSelectedCommPlatform(e.target.value);
  }
  const handleAccess = (e) => {
    setSelectedAccess(e.target.value);
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
        <p className='font-semibold'>Community Information</p>

    

        <p>Community Name</p>
        <input onChange={(e)=>setName(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <p>Community Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

        <p className='text-sm'>Community Type<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedCommType} onChange={handleCommType} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select community type</option>
            {communityType.map(item => (
              <option key={item.id} value={item.communityType}>{item.communityType}</option>
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
            {interests.map(item => (
              <option key={item.id} value={item.interest}>{item.interest}</option>
            ) )}
          </select>

          <p className='text-sm'>Engagement level<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedEnglevel} onChange={handleEnglevel} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Engagement level</option>
            {engagementLevel.map(item => (
              <option key={item._id} value={item.engagementLevel}>{item.engagementLevel}</option>
            ) )}
          </select>

          <p className='text-sm'>Communication Platforms Used<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedCommPlatfrom} onChange={handleCommPlatform} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value=""></option>
            {communicationPlatform.map(item => (
              <option key={item.id} value={item.communicationPlatform}>{item.communicationPlatform}</option>
            ) )}
          </select>

          <p className='text-sm'>Community Goals/Content<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedGoal} onChange={handleGoal} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select goal/content</option>
            {communityGoal.map(item => (
              <option key={item.id} value={item.communityGoal}>{item.communityGoal}</option>
            ) )}
          </select>

          <p className='text-sm'>Access Type<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedAccess} onChange={handleAccess} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Access  Type</option>
            {accesses.map(item => (
              <option key={item._id} value={item.accessType}>{item.accessType}</option>
            ) )}
          </select>

       
</div>



{/* additional features */}
 <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3'>
        <p className='font-semibold'>Additional Features</p>


       

        <p>Unique Selling Points of the Community</p>
        <textarea onChange={(e)=>setUSP(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <p>Special Achievements or Recognitions</p>
        <textarea onChange={(e)=>setRecognition(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

          <p className='text-sm'>Any additional Services Offered</p>
          <textarea onChange={(e)=>setAdditionalService(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />
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

</div>

<div className='items-center justify-center flex mt-9'>
<button onClick={handleCreate} className='bg-[#F08E1F] text-white rounded-full px-32 py-2'>{isLoading ? "Loading..." : "List Community"}</button>
      </div>


          {/* collaboration types */}
   <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3 mb-9'>
        <p className='font-semibold'>Collaboration Types</p>

        <p className='text-sm'>Title <span className='text-red-500 text-xl'>*</span></p>
        <select value={selectedCollabType} onChange={handleCollabType} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Collaboration Type</option>
            {collab.map(item => (
              <option key={item.id} value={item.collaborationType}>{item.collab}</option>
            ) )}
          </select>

      
        <p className='text-sm'>Duration<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedInterest} onChange={handleInterest} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select duration</option>
            {durations.map(item => (
              <option key={item.id} value={item.duration}>{item.duration}</option>
            ) )}
          </select>

          <p className='text-sm'>Amount<span className='text-red-500 text-xl'> *</span></p>
          <input onChange={(e)=>setAmount(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

          <p className='text-sm'>Community<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedCommunity} onChange={handleCommunity} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Community You Created</option>
            {communities?.map(item => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ) )}
          </select>

          <div>
            {collaborationType.map((c) =>(
              <div key={c.id}>{c.collaborationType}</div>
            ))}
          </div>
{/*      
          <div className='items-center justify-center flex'>
          <button className='border border-[#F08E1F] rounded-full px-16 py-2'>Create Collaboration Type</button>
          </div> */}

<div className='items-center justify-center flex'>
          <button onClick={createCollaboration} className='border border-[#F08E1F] rounded-full px-16 py-2'>Add Collaboration Type</button>

          </div>
          </div>




      </div>
      </div>
      </div>
  )
}

export default InsideListCommunity

