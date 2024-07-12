import React, { useState, useEffect } from 'react'
import { CiSliderHorizontal } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import Navbar from '../components/Navbar';
import { URL } from "../url";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CommunityOwnerCard from '../components/CommunityOwnerCard';
import { IoFilter } from "react-icons/io5";




const FreeBrowseCommunities = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [communities, setCommunities] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(3); // You can adjust the limit as needed
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [countryFilter, setCountryFilter] = useState('')
    const [sizeFilter, setSizeFilter] = useState('')
    const [interestFilter, setInterestFilter] = useState('')
    const [engagementFilter, setEngagementFilter] = useState('')
    const [goalFilter, setGoalFilter] = useState('')
    const [platformFilter, setPlatformFilter] = useState('')




    const fetchCommunities = async (searchTerm = '', page = 1, limit = 1, location = '') => {
        try {
          const res = await axios.get(`${URL}/api/visible`, {
                params: {
                    search: searchTerm,
                    page: page,
                    limit: limit,
                    location: location
                }
            });
          setCommunities(res.data.communities);
          console.log(res.data)
          setTotalPages(res.data.totalPages);
        } catch (err) {
          console.log(err);
        }
      };

      const handlePageChange = (page) => {
        setCurrentPage(page);
        fetchCommunities(search, page, limit, selectedLocation);
    };


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLocationFilter = (location) => {
        setSelectedLocation(location);
        setIsOpen(false); // Close dropdown after selecting location
        fetchCommunities(search, 1, limit, location, selectedLocation);
    };

    const handleCountryFilter = (e) => {
        setCountryFilter(e.target.value);
    }

    const handleSizeFilter = (e) => {
        setSizeFilter(e.target.value);
    }

    const handleInterestFilter = (e) => {
        setInterestFilter(e.target.value);
    }

    const handleEngagementFilter = (e) => {
        setEngagementFilter(e.target.value);
    }

    const handleGoalFilter = (e) => {
        setGoalFilter(e.target.value);
    }

    const handlePlatformFilter = (e) => {
        setPlatformFilter(e.target.value);
    }

      const filteredCommunities = communities.filter(c =>
    Object.keys(c).some(key =>
      c[key].toString().toLowerCase().includes(search.toLowerCase())
    ) && (!countryFilter || c.location === countryFilter) && (!sizeFilter || c.size === sizeFilter)
    && (!interestFilter || c.communityInterest === interestFilter) && (!engagementFilter || c.engagementLevel === engagementFilter)
    && (!goalFilter || c.communityGoal === goalFilter) && (!platformFilter || c.communicationPlatform === platformFilter)
  );


  const uniqueCountries = [...new Set(communities.map(c => c.location))];

  const uniqueSizes = [...new Set(communities.map(c => c.size))];

  const uniqueInterests = [...new Set(communities.map(c => c.communityInterest))];

  const uniqueEngagements = [...new Set(communities.map(c => c.engagementLevel))];

  const uniqueGoals = [...new Set(communities.map(c => c.communityGoal))];

  const uniquePlatforms = [...new Set(communities.map(c => c.communicationPlatform))];

    
  useEffect(() => {
    fetchCommunities(search, currentPage, limit);
}, [currentPage, limit, selectedLocation]);

useEffect(() => {
    // Fetch locations from API
    const fetchLocations = async () => {
        try {
            const res = await axios.get(`${URL}/api/locations`);
            setLocations(res.data); // Assuming the response contains an array of locations
        } catch (err) {
            console.log(err);
        }
    };
    fetchLocations();
}, []);


const renderLocationsDropdown = () => {
    return (
        <div className="absolute mt-2 w-[300px] bg-black rounded border border-gray-300 shadow-lg z-100 py-24">
            {locations.map((location) => (
                <button
                    key={location.id}
                    onClick={() => handleLocationFilter(location.name)}
                    className="block w-full px-4 py-2 text-white hover:bg-gray-200"
                >
                    {location.name}
                </button>
            ))}
        </div>
    );
};

const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`px-3 py-1 border rounded ${i === currentPage ? 'bg-gray-300' : 'bg-white'}`}
            >
                {i}
            </button>
        );
    }
    return pages;
};

      

  return (
    <>

    <Navbar/>
    <div className='px-4 md:px-64 font-nunito'>

<p className='ml-12 font-semibold text-4xl mt-9'>Browse Communities</p>

<div className='hidden md:block'>
<div className='flex items-center gap-2 px-12 mt-12'>
  
       
<IoFilter />Filter by

<select value={countryFilter} onChange={handleCountryFilter} className='border border-[#F08E1F] py-1 px-3 max-w-[130px]  flex items-center justify-center rounded-full text-gray-900'>
           <option value="" className='custom-option'>Location</option>
           {uniqueCountries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
           ))}
         </select>


         <select value={sizeFilter} onChange={handleSizeFilter} className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full text-gray-900'>
           <option value="" className='custom-option'>Community Size</option>
           {uniqueSizes.map((country, index) => (
            <option key={index} value={country}>{country}</option>
           ))}
         </select>


       <select value={interestFilter} onChange={handleInterestFilter} className='border border-[#F08E1F] py-1 px-3 max-w-[120px] flex items-center justify-center rounded-full text-gray-900'>
           <option value="" className='custom-option'>Interests</option>
           {uniqueInterests.map((country, index) => (
            <option key={index} value={country}>{country}</option>
           ))}
         </select>

         <select value={engagementFilter} onChange={handleEngagementFilter} className='border border-[#F08E1F] py-1 px-3 max-w-[155px]  flex items-center justify-center rounded-full text-gray-900'>
           <option value="" className='custom-option'>Engagements</option>
           {uniqueEngagements.map((country, index) => (
            <option key={index} value={country}>{country}</option>
           ))}
         </select>


           <select value={goalFilter} onChange={handleGoalFilter} className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full text-gray-900'>
           <option value="" className='custom-option'>Community Goals</option>
           {uniqueGoals.map((country, index) => (
            <option key={index} value={country}>{country}</option>
           ))}
         </select>

         <select value={platformFilter} onChange={handlePlatformFilter} className='border border-[#F08E1F] py-1 px-3 max-w-[120px] flex items-center justify-center rounded-full text-gray-900'>
           <option value="" className='custom-option'>Platforms Used</option>
           {uniquePlatforms.map((country, index) => (
            <option key={index} value={country}>{country}</option>
           ))}
         </select>



         </div>
     
        </div>

    {filteredCommunities.map((community) => (
        <Link to={`/communitypage/${community.id}`}>
    <CommunityOwnerCard key={community.id} community={community} />
    </Link>
    ))}

<div className="flex justify-center items-center gap-x-4 mt-4">
                {renderPagination()}
            </div>

    </div>
    </>
  )
}

export default FreeBrowseCommunities