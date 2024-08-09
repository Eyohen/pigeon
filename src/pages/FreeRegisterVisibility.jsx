import React,{useState, useEffect} from 'react'
import { URL } from "../url";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../components/Navbar';
import toast, { Toaster } from "react-hot-toast";
import { AiFillAndroid } from "react-icons/ai";

const FreeRegisterVisibility = () => {
  const {user , logout} = useAuth();
  const [selectedCommunity, setSelectedCommunity] = useState([])
  const [communities, setCommunities] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [selectedLocation, setSelectedLocation] = useState('')
  const [location, setLocation] = useState('')

  
const [selectedConnCategory, setSelectedConnCategory] = useState('');
const [connCategory, setConnCategory] = useState([]);

const [selectedContentShared, setSelectedContentShared] = useState([]);
const [contentShared, setContentShared] = useState([]);
const [isContentDropdownOpen, setIsContentDropdownOpen] = useState(false);

const [established, setEstablished] = useState(new Date())
const [startDate, setStartDate] = useState(new Date());

const [selectedInterest, setSelectedInterest] = useState('');
  const [frequency, setFrequency] = useState('')
  const [selectedDays, setSelectedDays] = useState('')
  const [days, setDays] = useState('')
  const [contentType, setContentType] = useState('')
  const [interest, setInterest] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [platformLink, setPlatformLink] = useState('')

  const [selectedCommPlatform, setSelectedCommPlatform] = useState([])
  const [communicationPlatform, setCommPlatform] = useState([])


  const [communityType, setCommType] = useState([])
  const [selectedCommType, setSelectedCommType] = useState('')


  const [selectedSize, setSelectedSize] = useState([])
  const [size, setSize] = useState([])
  const [selectedCommInterest, setSelectedCommInterest] = useState([])
  
  const [selectedEnglevel, setSelectedEnglevel] = useState([])
  const [engagementLevel, setLevel] = useState([])

  const [communityGoal, setCommunityGoal] = useState([])
  const [selectedGoal, setSelectedGoal] = useState([])
  const [isGoalDropdownOpen, setIsGoalDropdownOpen] = useState(false)

  // const [user, setUser] = useState([])
  const [content, setContent] = useState('')
  const [accessType, setAccessType] = useState('')
  const [prevCollabType, setPrevCollabType] = useState('')
  // const [preferredCollabType, setPreferredCollabType] = useState('')
  const [selectedAccess, setSelectedAccess] = useState('')
  const [collab, setCollab] = useState([])
  const [collaborationType, setCollabType] = useState([])
  const [selectedCollabType, setSelectedCollabType] = useState([])

  const [additionalService, setAdditionalService] = useState('');
  const [whatsapp, setWhatsapp] = useState('')
  const [twitter, setTwitter] = useState('')
  const [telegram, setTelegram] = useState('')
  const [usp, setUSP] = useState('')
  const [recognition, setRecognition] = useState('')
  const [amount, setAmount] = useState('')
  const [selectedDuration, setSelectedDuration] = useState('')
  const [duration, setDuration] = useState('')
  const [accessRequire, setAccessRequire] = useState('')
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
        setCommunityGoal(res.data);
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
  

    const fetchConnectionCategories = async () => {
      try {
        const res = await axios.get(URL + "/api/connectioncategories/");
        setConnCategory(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchConnectionCategories();
    }, []);
  
  
    const fetchContentShared = async () => {
      try {
        const res = await axios.get(URL + "/api/contentshared/");
        setContentShared(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchContentShared();
    }, []);
  
  
  
  
    const handleCreate = async ()=>{
      const [platform, category] = selectedCommPlatform.split('|');
      const [interest, interestcat] = selectedInterest.split('|');
      const [type, typecat] = selectedCommType.split('|');

      setIsLoading(true)
      try{
        const accessToken = localStorage.getItem("access_token");
  
        if(!accessToken){
              // Handle the case where the access token is not available
          console.error('Access token not found')
        }
  
        const res = await axios.post(URL+"/api/visible/create",
        {name,description,location:selectedLocation,
          communityType:type, 
          commTypeCategory:typecat || null,
          size:selectedSize, price, frequency, days:selectedDays, 
          contentType,
          communityInterest:interest,
          interestCategory:interestcat || null,
          communicationPlatform:platform,
          communicationCategory:category || null,
          platformLink, 
         engagementLevel:selectedEnglevel, 
         accessType:selectedAccess,phone,email, 
         connCategory:selectedConnCategory, contentShared:selectedContentShared,
           prevCollabType, established:startDate,communityGoal:selectedGoal, accessRequire,
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
        setAccessType(res.data.accessType)
        setWhatsapp(res.data.whatsapp)
        setTelegram(res.data.telegram)
        setTwitter(res.data.twitter)
        setRecognition(res.data.recgonition)
        setUSP(res.data.usp)
        setError(false)
        toast.success('Community creation successful!!', toastStyles.success)
        setTimeout(() => navigate('/'), 3000); 
      }
      catch(err){
        setError(true)
        toast.error('Failed to create community');
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
        navigate("/")    
      }
      catch(err){
        setError(true)
        toast.error('Failed to create community');
        console.log(err)
      }finally {
        setIsLoading(false)
      }
    }

    const weeks = [
      {
          id: 1,
          days: "Everyday",
      },
      {
          id: 2,
          days: "Mondays",
      },
      {
        id: 3,
        days: "Tuesdays",
    },
    {
        id: 4,
        days: "Wednesdays",
    },
    {
      id: 5,
      days: "Thursdays",
  },
  {
      id: 6,
      days: "Fridays",
  },
  {
    id: 7,
    days: "Saturdays",
},
{
    id: 8,
    days: "Sundays",
},
    ]


    const countries = [
      {
        id: 1,
        location: "Angola",
      },
      {
        id: 2,
        location: "Algeria",
      },
      {
      id: 3,
      location: "Argentina",
      },
      {
      id: 4,
      location: "Bangledesh",
      },
      {
      id: 5,
     location: "Brazil",
      },
      {
        id: 6,
        location: "Canada",
      },
      {
        id: 7,
        location: "China",
      },
      {
      id: 8,
      location: "Croatia",
    },
    {
      id: 9,
      location: "Dominica",
    },
    {
    id: 10,
    location: "Denmark",
    },
      {
      id:11,
      location: "Egypt",
    },
    {
      id: 12,
      location: "Ecuador",
    },
    {
    id: 13,
    location: "Estonia",
    },
    {
      id:14,
      location: "France",
    },
    {
        id: 15,
        location: "Morocco",
    },
    {
      id: 16,
      location: "Nigeria",
    },
    {
      id: 17,
      location: "South Africa",
    },
    {
      id: 18,
      location: "United State of America",
    },
    {
      id: 19,
      location: "United Kingdom",
    },
    {
      id: 20,
      location: "Venezuela",
    },
    ]
  
  
  
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
            interestCategory:[
              "Visual Arts (painting, sculpture)","Performing Arts (theater, dance, opera)",
              "Music (various genres, playing instruments)","Literature (book clubs, writing groups)",
              "Film and Cinema (movie buffs, filmmaking)","Photography","Crafts (knitting, DIY crafts)","Fashion and Design",
            ]
        },
        {
            id: 2,
            interest: "Technology and Science",
            interestCategory:[
              "Information Technology (programming, cybersecurity)","Consumer Electronics (gadgets, home tech)","Science Enthusiasts (astronomy, biology)",
              "Robotics and AI","Gaming (video games, esports)","Virtual Reality/Augmented Reality"
            ]
        },
        {
            id: 3,
            interest: "Health and Wellness",
            interestCategory:[
              "Fitness and Exercise (yoga, gym, running)","Mental Health Awareness","Nutrition and Diet (veganism, keto, etc.)","Alternative Medicine","Sports and Athletics","Outdoor Activities (hiking, camping)",
            ]
        },
        {
          id: 4,
          interest: "Business and Finance",
          interestCategory:[
            "Entrepreneurship and Startups","Investing (stocks, real estate)","Personal Finance (budgeting, saving)","Leadership and Management","Marketing and Advertising","E-commerce",
          ]
        },
        {
          id: 5,
          interest: "Education and Learning",
          interestCategory:[
            "Language Learning","Online Courses and MOOCs","Educational Resources for Children","Professional Development","History Buffs","Science and Research",
          ]
        },
        {
          id: 6,
          interest: "Social and Community",
          interestCategory:[
            "Volunteering and Social Causes","Local Community Events","Parenting and Family Groups","Student Organizations","Cultural and Ethnic Groups","Religious and Spiritual Groups",
          ]
        },
        {
          id: 7,
          interest: "Lifestyle and Hobbies",
          interestCategory:[
            "Travel and Exploration","Gardening and Horticulture","Pet Owners and Animal Lovers","Cooking and Food Enthusiasts","DIY Home Improvement","Collectibles and Antiques","Cars and Motorcycles","Boating and Sailing","Fishing and Hunting",
          ]
      },
      {
        id: 8,
        interest: "Entertainment and Leisure",
        interestCategory:[
          "Board Games and Puzzles","Comics and Anime","Fan Clubs (TV shows, movies, celebrities)","Humor and Comedy","Magic and Illusion",
        ]
      },
      {
        id: 9,
        interest: "Environment and Sustainability",
        interestCategory:[
          "Environmental Activism","Renewable Energy","Sustainable Living","Wildlife Conservation",
        ]
      },
      {
        id: 10,
        interest: "Special Interest",
        interestCategory:[
          "Astrology and Mysticism","Conspiracy Theories","Survivalism and Prepping","Cryptocurrency and Blockchain",
        ]
      },
      {
        id: 11,
        interest: "Creative and Expressive",
        interestCategory:[
          "Writing and Blogging","Podcasting and Vlogging","Stand-up Comedy","Digital Art and Animation",
        ]
      },
      {
        id: 12,
        interest: "Business Technologies",
        interestCategory:[
          "Enterprise Software Solutions","Business Intelligence Tools","Fintech","E-commerce Platforms","Digital Marketing Technologies","Cybersecurity Solutions","Cloud Computing and Storage","Project Management Tools","Artificial Intelligence and Machine Learning in Business","Remote Work Technologies","Supply Chain and Logistics Tech","HR Tech","Sales Tech","IoT in Business","Green Tech in Business",
    
        ]
      },
    
        ]
    
  
    const handleInterest = (e) => {
      setSelectedInterest(e.target.value);
    }
    const handleCommunityType = (event) => {
      setSelectedCommType(event.target.value);
    };
    const handleSize = (e) => {
      setSelectedSize(e.target.value);
    }
    const handleCommInterest = (e) => {
      setSelectedCommInterest(e.target.value);
    }
    const handleEnglevel = (e) => {
      setSelectedEnglevel(e.target.value);
    }

    const handleGoal = (event) => {
      const value = event.target.value;
      setSelectedGoal(prevSelected => 
        prevSelected.includes(value)
         ? prevSelected.filter(item => item !== value)
         : [...prevSelected, value]
      );
    };

    const toggleGoalDropdown = () => {
      setIsGoalDropdownOpen(!isGoalDropdownOpen);
    };

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
    const handleLocation = (e) => {
      setSelectedLocation(e.target.value);
    }
    const handleDays = (e) => {
      setSelectedDays(e.target.value);
    }
    const handleConnCategory = (event) => {
      setSelectedConnCategory(event.target.value);
    };

    const handleContentShared = (event) => {
      const value = event.target.value;
      setSelectedContentShared(prevSelected => 
        prevSelected.includes(value)
          ? prevSelected.filter(item => item !== value)
          : [...prevSelected, value]
      );
    };
  
    const toggleContentDropdown = () => {
      setIsContentDropdownOpen(!isContentDropdownOpen);
    };

    const handleInterestOption = (event) => {
      setSelectedInterest(event.target.value);
    };
    const handleCommunicationOption = (event) => {
      setSelectedCommPlatform(event.target.value);
  };
  

  const toastStyles = {
    success: {
  
      duration: 10000,
      // style: {
      //   background: '#4CAF50',
      //   color: 'white',
      //   fontWeight: 'bold',
      // },
      iconTheme: {
        primary: 'white',
        secondary: '#4CAF50',
      },
        style: {
  
                 background: "green",
                 color: "whitesmoke",
                 icon: <AiFillAndroid background-color="whitesmoke" color='green' />,
               },
    },
    error: {
      duration: 10000,
      style: {
        background: '#F44336',
        color: 'white',
        fontWeight: 'bold',
      },
      iconTheme: {
        primary: 'white',
        secondary: '#F44336',
      },
    },
  };
  
  

  return (
    <>
    <Navbar/>
    <div>
    <Toaster 
    position="top-right"
    reverseOrder={false}
    gutter={8}
    toastOptions={{
        duration:9000,
        style:{
            borderRadius:'8px',
            boxShadow:'0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)'
        }
    }} 
     />


<div className='flex justify-evenly'>

  <div className='mt-12 hidden md:block'>
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
        <p className='font-semibold'>Create Community for Visibility</p>

        <p>Community Name</p>
        <input onChange={(e)=>setName(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <p>Community Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

        <p className='text-sm'>Community Type<span className='text-red-500 text-xl'> *</span></p>
        <select 
   
   value={selectedCommType} 
   onChange={handleCommunityType} 
   className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
>
   <option value=""></option>
   {communityType?.map(type => (
       <optgroup key={type.id} label={type.communityType}>
           {type?.commTypeCategory 
               ? type.commTypeCategory?.map(typecat => (
                   <option key={`${type.id}-${typecat}`} value={`${type.communityType}|${typecat}`}>
                       {typecat}
                   </option>
                 ))
               : <option value={`${type.communityType}|null`}>
                   No category
                 </option>
           }
       </optgroup>
   ))}
</select>

<p>Connection Category</p>
          <select value={selectedConnCategory} onChange={handleConnCategory} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value=""></option>
            {connCategory?.map(item => (
              <option key={item.id} value={item.connCategory}>{item.connCategory}</option>
            ) )}
          </select>

          <p>Established Date<span className='text-red-500 text-xl'> *</span></p>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'  />
        {/* <input onChange={(e)=>setEstablished(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' /> */}

          <p className='text-sm'>Total Number of members <span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedSize} onChange={handleSize} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value=""></option>
            {size?.map(item => (
              <option key={item._id} value={item.size}>{item.size}</option>
            ) )}
          </select>

          <p>Location</p>
          <select value={selectedLocation} onChange={handleLocation} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value=""></option>
            {countries?.map(item => (
              <option key={item.id} value={item.location}>{item.location}</option>
            ) )}
          </select>

          <p className='text-sm'>Access Type<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedAccess} onChange={handleAccess} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value=""></option>
            {accesses?.map(item => (
              <option key={item._id} value={item.accessType}>{item.accessType}</option>
            ) )}
          </select>

          <p>Price Tag</p>
          <input onChange={(e)=>setPrice(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />


          <p className='text-sm'>Engagement level<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedEnglevel} onChange={handleEnglevel} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value=""></option>
            {engagementLevel?.map(item => (
              <option key={item._id} value={item.engagementLevel}>{item.engagementLevel}</option>
            ) )}
          </select>

          <p className='text-sm'>Post Frequency (e.g number of posts per day/week)</p>
          <input onChange={(e)=>setFrequency(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' placeholder='e.g 5' />

          <p className='text-sm'>Days for Engagement</p>
          <select value={selectedDays} onChange={handleDays} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Days</option>
            {weeks.map(item => (
              <option key={item.id} value={item.days}>{item.days}</option>
            ) )}
          </select>

          <p className='text-sm'>Key Topics and Interests</p>
                  <select 
   
   value={selectedInterest} 
   onChange={handleInterestOption} 
   className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
>
   <option value="">Select community Interest</option>
   {interests?.map(interest => (
       <optgroup key={interest.id} label={interest.interest}>
           {interest?.interestCategory 
               ? interest.interestCategory?.map(interestcat => (
                   <option key={`${interest.id}-${interestcat}`} value={`${interest.interest}|${interestcat}`}>
                       {interestcat}
                   </option>
                 ))
               : <option value={`${interest.communicationPlatform}|null`}>
                   No category
                 </option>
           }
       </optgroup>
   ))}
</select>

          <p className='text-sm'>Communication Platforms Used<span className='text-red-500 text-xl'> *</span></p>
          <select 
   
                value={selectedCommPlatform} 
                onChange={handleCommunicationOption} 
                className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
            >
                <option value=""></option>
                {communicationPlatform?.map(platform => (
                    <optgroup key={platform.id} label={platform.communicationPlatform}>
                        {platform?.communicationCategory 
                            ? platform?.communicationCategory?.map(category => (
                                <option key={`${platform.id}-${category}`} value={`${platform.communicationPlatform}|${category}`}>
                                    {category}
                                </option>
                              ))
                            : <option value={`${platform.communicationPlatform}|null`}>
                                No category
                              </option>
                        }
                    </optgroup>
                ))}
            </select>

            <div className="relative">
  <p>Content Shared</p>
  <div 
    onClick={toggleContentDropdown}
    className="border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4 cursor-pointer flex justify-between items-center"
  >
    <span>{selectedContentShared.length ? `${selectedContentShared.length} selected` : 'Select content'}</span>
    <span>{isContentDropdownOpen ? '▲' : '▼'}</span>
  </div>
  {isContentDropdownOpen && (
    <div className="absolute z-10 mt-1 w-full md:w-[400px] max-h-60 overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg">
      {contentShared?.map(item => (
        <div key={item.id} className="flex items-center p-2 hover:bg-gray-100">
          <input
            type="checkbox"
            id={`content-${item.id}`}
            value={item.contentShared}
            checked={selectedContentShared.includes(item.contentShared)}
            onChange={handleContentShared}
            className="mr-2"
          />
          <label htmlFor={`content-${item.id}`} className="flex-grow cursor-pointer">{item.contentShared}</label>
        </div>
      ))}
    </div>
  )}
</div>

<div className="relative">
              <p>Type Of Interaction</p>
 <div 
    onClick={toggleGoalDropdown}
    className="border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4 cursor-pointer flex justify-between items-center"
  >
    <span>{selectedGoal.length ? `${selectedGoal.length} selected` : 'Select Interaction'}</span>
    <span>{isGoalDropdownOpen ? '▲' : '▼'}</span>
  </div>
  {isGoalDropdownOpen && (
    <div className="absolute z-10 mt-1 w-full md:w-[400px] max-h-60 overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg">
      {communityGoal?.map(item => (
        <div key={item.id} className="flex items-center p-2 hover:bg-gray-100">
          <input
            type="checkbox"
            id={`content-${item.id}`}
            value={item.communityGoal}
            checked={selectedGoal.includes(item.communityGoal)}
            onChange={handleGoal}
            className="mr-2"
          />
          <label htmlFor={`content-${item.id}`} className="flex-grow cursor-pointer">{item.communityGoal}</label>
        </div>
      ))}
    </div>
  )}
</div>

          <p>Access Requirement<span className='text-red-500 text-xl'> *</span></p>
        <input onChange={(e)=>setAccessRequire(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' placeholder='Access Requirements (e.g., membership fees, application process)'/>


</div>



      {/* Contact information */}
      <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3'>
        <p className='font-semibold'>Contact Information (add links)</p>

        <p>Platform Link </p>
        <input onChange={(e)=>setPlatformLink(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <p>Whatsapp Contact</p>
        <input onChange={(e)=>setWhatsapp(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'/>

        <p>Phone Number</p>
        <input onChange={(e)=>setPhone(e.target.value)}  className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

        <p>Email Address</p>
        <input onChange={(e)=>setEmail(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

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


<div className='items-center justify-center flex mt-9'>
<button onClick={handleCreate} className='bg-[#F08E1F] text-white rounded-full px-32 py-2'>{isLoading ? "Loading..." : "List Community"}</button>
      </div>

          {/* collaboration types */}
   {/* <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3 mb-9'>
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

<div className='items-center justify-center flex'>
          <button onClick={createCollaboration} className='border border-[#F08E1F] rounded-full px-16 py-2'>Add Collaboration Type</button>

          </div>
          </div> */}




      </div>
      </div>
      </div>
      </>
  )
}

export default FreeRegisterVisibility