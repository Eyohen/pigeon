import React, { useState, useEffect } from 'react'
import { URL } from "../url";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillAndroid } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Navbar2 from '../components/Navbar2';
import AdminSidebar from '../components/AdminSidebar';


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
    interestCategory: [
      "Visual Arts (painting, sculpture)", "Performing Arts (theater, dance, opera)",
      "Music (various genres, playing instruments)", "Literature (book clubs, writing groups)",
      "Film and Cinema (movie buffs, filmmaking)", "Photography", "Crafts (knitting, DIY crafts)", "Fashion and Design",
    ]
  },
  {
    id: 2,
    interest: "Technology and Science",
    interestCategory: [
      "Information Technology (programming, cybersecurity)", "Consumer Electronics (gadgets, home tech)", "Science Enthusiasts (astronomy, biology)",
      "Robotics and AI", "Gaming (video games, esports)", "Virtual Reality/Augmented Reality"
    ]
  },
  {
    id: 3,
    interest: "Health and Wellness",
    interestCategory: [
      "Fitness and Exercise (yoga, gym, running)", "Mental Health Awareness", "Nutrition and Diet (veganism, keto, etc.)", "Alternative Medicine", "Sports and Athletics", "Outdoor Activities (hiking, camping)",
    ]
  },
  {
    id: 4,
    interest: "Business and Finance",
    interestCategory: [
      "Entrepreneurship and Startups", "Investing (stocks, real estate)", "Personal Finance (budgeting, saving)", "Leadership and Management", "Marketing and Advertising", "E-commerce",
    ]
  },
  {
    id: 5,
    interest: "Education and Learning",
    interestCategory: [
      "Language Learning", "Online Courses and MOOCs", "Educational Resources for Children", "Professional Development", "History Buffs", "Science and Research",
    ]
  },
  {
    id: 6,
    interest: "Social and Community",
    interestCategory: [
      "Volunteering and Social Causes", "Local Community Events", "Parenting and Family Groups", "Student Organizations", "Cultural and Ethnic Groups", "Religious and Spiritual Groups",
    ]
  },
  {
    id: 7,
    interest: "Lifestyle and Hobbies",
    interestCategory: [
      "Travel and Exploration", "Gardening and Horticulture", "Pet Owners and Animal Lovers", "Cooking and Food Enthusiasts", "DIY Home Improvement", "Collectibles and Antiques", "Cars and Motorcycles", "Boating and Sailing", "Fishing and Hunting",
    ]
  },
  {
    id: 8,
    interest: "Entertainment and Leisure",
    interestCategory: [
      "Board Games and Puzzles", "Comics and Anime", "Fan Clubs (TV shows, movies, celebrities)", "Humor and Comedy", "Magic and Illusion",
    ]
  },
  {
    id: 9,
    interest: "Environment and Sustainability",
    interestCategory: [
      "Environmental Activism", "Renewable Energy", "Sustainable Living", "Wildlife Conservation",
    ]
  },
  {
    id: 10,
    interest: "Special Interest",
    interestCategory: [
      "Astrology and Mysticism", "Conspiracy Theories", "Survivalism and Prepping", "Cryptocurrency and Blockchain",
    ]
  },
  {
    id: 11,
    interest: "Creative and Expressive",
    interestCategory: [
      "Writing and Blogging", "Podcasting and Vlogging", "Stand-up Comedy", "Digital Art and Animation",
    ]
  },
  {
    id: 12,
    interest: "Business Technologies",
    interestCategory: [
      "Enterprise Software Solutions", "Business Intelligence Tools", "Fintech", "E-commerce Platforms", "Digital Marketing Technologies", "Cybersecurity Solutions", "Cloud Computing and Storage", "Project Management Tools", "Artificial Intelligence and Machine Learning in Business", "Remote Work Technologies", "Supply Chain and Logistics Tech", "HR Tech", "Sales Tech", "IoT in Business", "Green Tech in Business",

    ]
  },

]




const AdminAddCommunity = () => {
  const { user, logout } = useAuth();
  const { id: ownerId } = useParams();
  const [owner, setOwner] = useState([])
  const [oid, setOid] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [twitter, setTwitter] = useState('')
  const [telegram, setTelegram] = useState('')
  const [rating, setRating] = useState('')
  const [review, setReview] = useState('')
  const [recognition, setRecognition] = useState('')
  const [communityType, setCommType] = useState([])
  const [selectedCommType, setSelectedCommType] = useState('')

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
  const [communityPhone, setCommunityPhone] = useState('')
  const [communityEmail, setCommunityEmail] = useState('')
  const [platformLink, setPlatformLink] = useState('')
  const [selectedCommPlatform, setSelectedCommPlatform] = useState([])
  const [communicationPlatform, setCommPlatform] = useState([])
  const [selectedSize, setSelectedSize] = useState([])
  const [size, setSize] = useState([])
  const [selectedCommInterest, setSelectedCommInterest] = useState([])
  const [selectedEnglevel, setSelectedEnglevel] = useState([])
  const [engagementLevel, setLevel] = useState([])
  const [communityGoal, setCommunityGoal] = useState([])
  const [selectedGoal, setSelectedGoal] = useState([])
  const [isGoalDropdownOpen, setIsGoalDropdownOpen] = useState(false)
  const [content, setContent] = useState('')
  const [accessType, setAccessType] = useState('')
  const [selectedAccess, setSelectedAccess] = useState('')
  const [collab, setCollab] = useState([])
  const [collaborationType, setCollabType] = useState([])
  const [selectedCollabType, setSelectedCollabType] = useState([])
  const [additionalService, setAdditionalService] = useState('');
  const [usp, setUSP] = useState('')
  const [amount, setAmount] = useState('')
  const [selectedDuration, setSelectedDuration] = useState('')
  const [duration, setDuration] = useState('')
  const [accessRequire, setAccessRequire] = useState('')


  console.log("owner id", ownerId)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate()


  const fetchOwner = async () => {
    try {
      const res = await axios.get(`${URL}/api/owners/${ownerId}`)
      console.log("owner data", res.data)
      setOwner(res.data)
      setName(res.data.name)
      setEmail(res.data.email)
      setOid(res.data.id)
    } catch (error) {
      console.error("Error fetching owner :", error)
    }

  }


  useEffect(() => {
    console.log('Current ownerId:', ownerId);
    if (ownerId) {
      fetchOwner()
    }
  }, [ownerId])


  const handleInterest = (e) => {
    setSelectedInterest(e.target.value);
  }
  const handleCommunityType = (event) => {
    setSelectedCommType(event.target.value);
  };
  const handleSize = (e) => {
    setSelectedSize(e.target.value);
  }

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






  const handleCreate = async () => {
    const [platform, category] = selectedCommPlatform.split('|');
    const [interest, interestcat] = selectedInterest.split('|');
    const [type, typecat] = selectedCommType.split('|');


    setIsLoading(true)
    try {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        // Handle the case where the access token is not available
        console.error('Access token not found')
      }

      const res = await axios.post(`${URL}/api/comunities/create`,
        {
          title, email, description, location: selectedLocation, ownerId, communityType: type,
          commTypeCategory: typecat || null,
          size: selectedSize, frequency, recognition,
          twitter, telegram, whatsapp, contentType,
          communityInterest: interest,
          interestCategory: interestcat || null,
          communicationPlatform: platform,
          communicationCategory: category || null,
          platformLink,
          engagementLevel: selectedEnglevel, accessType:selectedAccess,communityPhone,communityEmail, 
          connCategory:selectedConnCategory, contentShared:selectedContentShared, established:startDate,communityGoal:selectedGoal, accessRequire,rating, review
        }

        //   {
        //   title,name,description,email
        //   ,
        //   communityType:type, 
        //   commTypeCategory:typecat || null,
        //   size:selectedSize, frequency, days:selectedDays, 
        //   contentType,
        //   communityInterest:interest,
        //   interestCategory:interestcat || null,
        //   communicationPlatform:platform,
        //   communicationCategory:category || null,
        //   platformLink, 
        //   engagementLevel:selectedEnglevel, 
        //   accessType:selectedAccess,communityPhone,communityEmail, 
        //   connCategory:selectedConnCategory, contentShared:selectedContentShared, established:startDate,communityGoal:selectedGoal, accessRequire,rating, review, recognition,
        //   twitter, telegram, whatsapp
        // },
        // }, 
        // {
        //   headers: {
        //     // Authorization: `Bearer ${accessToken}`,
        //     contentType:'Application/json',
        //   }
        // }
      )

      setError(false)
      toast.success('Community Owner Created Successfully!!', toastStyles.success)
      setTimeout(() => navigate('/admincommunityowner'), 1000);
      // navigate("/communityowner")    
    }
    catch (err) {
      setError(true)
      if (!ownerId) {
        toast.error('Failed to create Community');
        return;
      }
      console.log(err)
    } finally {
      setIsLoading(false)
    }
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
    <div className='flex-1'>
      <AdminSidebar />
      <Navbar2 />

      <div className='flex justify-evenly'>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 9000,
            style: {
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)'
            }
          }}
        />



        {/* border for community info */}
        <div>
          <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3'>
            <p className='font-semibold'>Create Community</p>

            <p>Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

            <p>Email </p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

            <p>Title</p>
            <input onChange={(e) => setTitle(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

            <p>Description</p>
            <textarea onChange={(e) => setDescription(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

            <p>Location</p>
            <select value={selectedLocation} onChange={handleLocation} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
              <option value=""></option>
              {countries?.map(item => (
                <option key={item.id} value={item.location}>{item.location}</option>
              ))}
            </select>

            <p className='text-sm pt-2'>Community Type<span className='text-red-500 text-xl'> *</span></p>
            <select

              value={selectedCommType}
              onChange={handleCommunityType}
              className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
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

            <p className='text-sm pt-2'>Total Number of members <span className='text-red-500 text-xl'> *</span></p>
            <select value={selectedSize} onChange={handleSize} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
              <option value=""></option>
              {size?.map(item => (
                <option key={item._id} value={item.size}>{item.size}</option>
              ))}
            </select>

            <p>Established Date<span className='text-red-500 text-xl'> *</span></p>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border border-[#D7D7D7] w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'  />

            <p className='text-sm pt-3'>Post Frequency (e.g number of posts per day/week)</p>
            <input onChange={(e) => setFrequency(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' placeholder='e.g 5' />

            <p className='text-sm'>Engagement level<span className='text-red-500 text-xl'> *</span></p>
            <select value={selectedEnglevel} onChange={handleEnglevel} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'>
              <option value=""></option>
              {engagementLevel?.map(item => (
                <option key={item._id} value={item.engagementLevel}>{item.engagementLevel}</option>
              ))}
            </select>

            <p className='text-sm pt-3'>Key Topics and Interests</p>
            <select

              value={selectedInterest}
              onChange={handleInterestOption}
              className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
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

            <p className='text-sm pt-3'>Communication Platforms Used<span className='text-red-500 text-xl'> *</span></p>
            <select

              value={selectedCommPlatform}
              onChange={handleCommunicationOption}
              className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4'
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


            <div className="relative pt-3">
              <p>Content Shared</p>
              <div
                onClick={toggleContentDropdown}
                className="border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4 cursor-pointer flex justify-between items-center"
              >
                <span>{selectedContentShared.length ? `${selectedContentShared.length} selected` : 'Select content'}</span>
                <span>{isContentDropdownOpen ? '▲' : '▼'}</span>
              </div>
              {isContentDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full md:w-[800px] max-h-60 overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg">
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

            <div className="relative pt-3">
              <p>Type Of Interaction</p>
              <div
                onClick={toggleGoalDropdown}
                className="border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4 cursor-pointer flex justify-between items-center"
              >
                <span>{selectedGoal.length ? `${selectedGoal.length} selected` : 'Select Interaction'}</span>
                <span>{isGoalDropdownOpen ? '▲' : '▼'}</span>
              </div>
              {isGoalDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full md:w-[800px] max-h-60 overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg">
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

            <p className='pt-3'>Access Requirement<span className='text-red-500 text-xl'> *</span></p>
            <input onChange={(e) => setAccessRequire(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' placeholder='Access Requirements (e.g., membership fees, application process, open/free)' />


          </div>

          {/* Contact information */}
          <div className='border-2 rounded-xl mt-12 py-9 px-6 space-y-3'>
            <p className='font-semibold'>Contact Information (add links)</p>

            <p>Platform Link </p>
            <input onChange={(e) => setPlatformLink(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />


            <p>Special Achievements or Recognitions</p>
            <textarea onChange={(e) => setRecognition(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

            <p className='font-semibold'>Contact Information</p>
            <p>Whatsapp </p>
            <input onChange={(e) => setWhatsapp(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

            <p>Telegram</p>
            <input onChange={(e) => setTelegram(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

            <p>Twitter</p>
            <input onChange={(e) => setTwitter(e.target.value)} className='border border-[#D7D7D7] w-full md:w-[800px] py-2 px-3 rounded-lg hover:border-[#F08E1F] border-r-4' />

          </div>




          <div className='items-center justify-center flex mt-9'>
            <button onClick={handleCreate} className='bg-[#F08E1F] text-white rounded-full px-32 py-2'>{isLoading ? "Loading..." : "Create Community"}</button>
          </div>


        </div>
      </div>
      <div className='mb-24'></div>
    </div>
  )
}

export default AdminAddCommunity

