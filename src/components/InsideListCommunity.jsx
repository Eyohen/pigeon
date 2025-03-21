import React,{useState, useEffect} from 'react'
import { URL } from "../url";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import toast, {Toaster} from 'react-hot-toast';
import { AiFillAndroid } from 'react-icons/ai';
import CustomDropdown from './CustomDropDown';
import usflag from '../assets/usflag.png'
import cadflag from '../assets/cadflag.png'
import gbpflag from '../assets/gbpflag.jpeg'
import ngnflag from '../assets/ngnflag.png'
import australianflag from '../assets/australianflag.png'
import chinaflag from '../assets/chinaflag.png'

const currencies = [
  { id: 1, currency: "USD", image: usflag },
  { id: 2, currency: "GBP", image: gbpflag },
  { id: 3, currency: "CAD", image: cadflag },
  { id: 4, currency: "NGN", image: ngnflag },
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


const InsideListCommunity = () => {
const {user , logout} = useAuth();
// const [selectedCommunity, setSelectedCommunity] = useState([])
// const [communities, setCommunities] = useState([])
const [selectedCommunityOwner, setSelectedCommunityOwner] = useState([])
const [communityOwner, setCommunityOwner] = useState([])
const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [selectedLocation, setSelectedLocation] = useState('');
const [location, setLocation] = useState('');
const [communicationPlatform, setCommPlatform] = useState([])
const [selectedCommPlatform, setSelectedCommPlatform] = useState('')
const [communityType, setCommType] = useState([])
const [selectedCommType, setSelectedCommType] = useState('')
const [selectedSize, setSelectedSize] = useState([])
const [size, setSize] = useState([])
const [communityInterest, setInterest] = useState([])
const [selectedInterest, setSelectedInterest] = useState('');
const [selectedEnglevel, setSelectedEnglevel] = useState([])
const [engagementLevel, setLevel] = useState([])
const [selectedGoal, setSelectedGoal] = useState([])
const [communityGoal, setGoal] = useState([])
const [content, setContent] = useState('')
const [prevCollabType, setPrevCollabType] = useState('')
const [collab, setCollab] = useState([])
const [collaborationType, setCollaborationType] = useState([])
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

const [selectedConnCategory, setSelectedConnCategory] = useState('');
const [connCategory, setConnCategory] = useState([]);


const [isLoading, setIsLoading] = useState(false)
const [isLoading2, setIsLoading2] = useState(true)
const [error, setError] = useState(false)

const [selectedCurrency, setSelectedCurrency] = useState('')

  const navigate = useNavigate()


  const userId = user?.id;

  console.log("Daniel check for user object", userId)

  const fetchMyCommunityOwners = async () => {
    try {
      const res = await axios.get(`${URL}/api/communities/user/${userId}`);
      setCommunityOwner(res.data);
      console.log("Filtered my communities:", communityOwner)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyCommunityOwners();
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

  const fetchCollaborationTypes = async (userId) => {
    if(!userId){
      setIsLoading2(false);
      setError("User Id is not available");
      return;
    }

    try {
      setIsLoading2(true);
      const res = await axios.get(`${URL}/api/collaborationTypes/user/${userId}`);
      console.log("my collaboration types", res.data)
      setCollaborationType(res.data);
      setError(null)
    } catch (err) {
      console.log(err);
      setError("Failed to get collaboartion types");

    } finally {
      setIsLoading2(false);
    }
  };

  useEffect(() => {
    if (user?.id){
    fetchCollaborationTypes(user?.id);
    }
  }, [user]);





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

      const res = await axios.post(URL+"/api/communities/create",
      {
      name,description,location:selectedLocation,size:selectedSize,
      communityType:type, 
      commTypeCategory:typecat || null,
      communityInterest:interest,
      interestCategory:interestcat || null,
      communicationPlatform:platform,
      communicationCategory:category || null,
      engagementLevel:selectedEnglevel, 
      communityGoal:selectedGoal, 
        prevCollabType,
        connCategory:selectedConnCategory,
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
      // setCollabType(res.data.collabtype)
      // setCommInterest(res.data.commInterest)
      setWhatsapp(res.data.whatsapp)
      setTelegram(res.data.telegram)
      setTwitter(res.data.twitter)
      setRecognition(res.data.recgonition)
      setUSP(res.data.usp)
      setError(false)
      toast.success('Community Creation Successful!!', toastStyles.success)
      setTimeout(() => navigate('/communityowner'), 3000);
      // navigate("/communityowner")    
    }
    catch(err){
      setError(true)
      toast.error('Failed to create Community');
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
    
      title:selectedCollabType,
      amount,
      currency:selectedCurrency,
      userId: userId,
      communityId:selectedCommunityOwner

      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      })
      console.log("collab type", res.data)
      

      setError(false)
      toast.success('Collaboration created Successfully!', toastStyles.success)
   
    }
    catch(err){
      setError(true)
      toast.error('Failed to create Collaboration!');
      console.log(err)
    }finally {
      setIsLoading(false)
    }
  }

  const countries = [
    {
      id: 1,
      location: "Global",
    },
    {
      id: 2,
      location: "Online",
    },
    {
      id: 3,
      location: "Algeria",
    },
    {
      id: 4,
      location: "Angola",
    },
    {
      id: 5,
      location: "Argentina",
    },
    {
      id: 6,
      location: "Australia",
    },
    {
      id: 7,
      location: "Bangladesh",
    },
    {
      id: 8,
      location: "Brazil",
    },
    {
      id: 9,
      location: "Canada",
    },
    {
      id: 10,
      location: "China",
    },
    {
      id: 11,
      location: "Croatia",
    },
    {
      id: 12,
      location: "Denmark",
    },
    {
      id: 13,
      location: "Dominica",
    },
    {
      id: 14,
      location: "Ecuador",
    },
    {
      id: 15,
      location: "Egypt",
    },
    {
      id: 16,
      location: "Estonia",
    },
    {
      id: 17,
      location: "France",
    },
    {
      id: 18,
      location: "Germany",
    },
    {
      id: 19,
      location: "Ghana",
    },
    {
      id: 20,
      location: "India",
    },
    {
      id: 21,
      location: "Indonesia",
    },
    {
      id: 22,
      location: "Italy",
    },
    {
      id: 23,
      location: "Japan",
    },
    {
      id: 24,
      location: "Kenya",
    },
    {
      id: 25,
      location: "Mexico",
    },
    {
      id: 26,
      location: "Morocco",
    },
    {
      id: 27,
      location: "Netherlands",
    },
    {
      id: 28,
      location: "Nigeria",
    },
    {
      id: 29,
      location: "Philippines",
    },
    {
      id: 30,
      location: "Singapore",
    },
    {
      id: 31,
      location: "South Africa",
    },
    {
      id: 32,
      location: "South Korea",
    },
    {
      id: 33,
      location: "Spain",
    },
    {
      id: 34,
      location: "United Arab Emirates",
    },
    {
      id: 35,
      location: "United Kingdom",
    },
    {
      id: 36,
      location: "United States",
    },
    {
      id: 37,
      location: "Venezuela",
    },
    {
      id: 38,
      location: "Zambia",
    },
  ]



  // const accesses = [
  //   {
  //       _id: 1,
  //       accessType: "Free",
  //   },
  //   {
  //       _id: 2,
  //       accessType: "Paid",
  //   },]

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
        id: 4,
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
  

  // const handleInterest = (e) => {
  //   setSelectedInterest(e.target.value);
  // }
  const handleCommType = (e) => {
    setSelectedCommType(e.target.value);
  }
  const handleSize = (e) => {
    setSelectedSize(e.target.value);
  }
  // const handleCommInterest = (e) => {
  //   setSelectedCommInterest(e.target.value);
  // }
  const handleEnglevel = (e) => {
    setSelectedEnglevel(e.target.value);
  }
  const handleGoal = (e) => {
    setSelectedGoal(e.target.value);
  }
  const handleCommunityOwner = (e) => {
    setSelectedCommunityOwner(e.target.value);
  }
    const handleCollabType = (e) => {
    setSelectedCollabType(e.target.value);
  }
  const handleAccess = (e) => {
    setSelectedAccess(e.target.value);
  }
  const handleCommunicationOption = (event) => {
    setSelectedCommPlatform(event.target.value);
};
const handleInterestOption = (event) => {
  setSelectedInterest(event.target.value);
};
const handleCommunityType = (event) => {
  setSelectedCommType(event.target.value);
};
const handleLocation = (event) => {
  setSelectedLocation(event.target.value);
};
const handleConnCategory = (event) => {
  setSelectedConnCategory(event.target.value);
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
    <div className='flex-1'>

<div className='flex justify-evenly'>
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
        <select 
   
   value={selectedCommType} 
   onChange={handleCommunityType} 
   className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
>
   <option value="">Select community type</option>
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



          <p className='text-sm'>Location</p>
          <select value={selectedLocation} onChange={handleLocation} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Location</option>
            {countries?.map(item => (
              <option key={item.id} value={item.location}>{item.location}</option>
            ) )}
          </select>
        {/* <input onChange={(e)=>setLocation(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' /> */}

          <p className='text-sm'>Size of community<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedSize} onChange={handleSize} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Size of Community</option>
            {size?.map(item => (
              <option key={item._id} value={item.size}>{item.size}</option>
            ) )}
          </select>

          <p className='text-sm'>Community Interest<span className='text-red-500 text-xl'> *</span></p>
          <select 
   
   value={selectedInterest} 
   onChange={handleInterestOption} 
   className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
>
   <option value="">Select community Interest</option>
   {interests?.map(interest => (
       <optgroup key={interest.id} label={interest.interest}>
           {interest?.interestCategory 
               ? interest?.interestCategory?.map(interestcat => (
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


        {/* <select value={selectedCommInterest} onChange={handleCommInterest} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Interest</option>
            {interests.map(item => (
              <option key={item.id} value={item.interest}>{item.interest}</option>
            ) )}
          </select> */}

          <p className='text-sm'>Engagement level<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedEnglevel} onChange={handleEnglevel} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Engagement level</option>
            {engagementLevel?.map(item => (
              <option key={item.id} value={item.engagementLevel}>{item.engagementLevel}</option>
            ) )}
          </select>



          <p className='text-sm'>Communication Platforms Used<span className='text-red-500 text-xl'> *</span></p>
          <select 
   
                value={selectedCommPlatform} 
                onChange={handleCommunicationOption} 
                className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
            >
                <option value="">Select communication option</option>
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


          <p className='text-sm'>Community Goals/Content<span className='text-red-500 text-xl'> *</span></p>
        <select value={selectedGoal} onChange={handleGoal} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select goal/content</option>
            {communityGoal?.map(item => (
              <option key={item.id} value={item.communityGoal}>{item.communityGoal}</option>
            ) )}
          </select>

          <p>Connection Category</p>
          <select value={selectedConnCategory} onChange={handleConnCategory} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Connection categories</option>
            {connCategory?.map(item => (
              <option key={item.id} value={item.connCategory}>{item.connCategory}</option>
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
<button onClick={handleCreate} className='bg-[#F08E1F] text-white rounded-full px-32 py-2'>{isLoading ? "Loading..." : "Create Community Owner"}</button>
      </div>


          {/* collaboration types */}
   <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3 mb-9'>
        <p className='font-semibold'>Collaboration Types</p>

        <p className='text-sm'>Title</p>
        <select value={selectedCollabType} onChange={handleCollabType} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Collaboration Type</option>
            {collab.map(item => (
              <option key={item.id} value={item.collab}>{item.collab}</option>
            ) )}
          </select>

                   <p className='text-sm pt-2'>Select Currency</p>
         <CustomDropdown
   options={currencies}
   value={selectedCurrency}
   onChange={(value) => setSelectedCurrency(value)}
 />

          <p className='text-sm'>Amount</p>
          <input onChange={(e)=>setAmount(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

          <p>Community Owner</p>
          <select value={selectedCommunityOwner} onChange={handleCommunityOwner} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Select Community Owner</option>
            {communityOwner?.map(item => (
              <option key={item.id} value={item?.id}>{item?.name}</option>
            ) )}
          </select>



<div className='items-center justify-center flex'>
          <button onClick={createCollaboration} className='border border-[#F08E1F] rounded-full px-16 py-2 mt-6'>Add Collaboration Type</button>

          </div>

          <p className='text-sm'>My Collaborations Created</p>
        <select className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
            <option value="">Collaboration types created</option>
            {collaborationType?.map(item => (
              <option key={item.id}>{item.title}</option>
            ) )}
          </select>
          </div>




      </div>
      </div>
      <div className='mb-24'></div>
      </div>
  )
}

export default InsideListCommunity

