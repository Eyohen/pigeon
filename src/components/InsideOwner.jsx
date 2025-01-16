import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { URL } from "../url";
import axios from "axios";
import { Link } from "react-router-dom";
import CommunityOwnerCard from './CommunityOwnerCard';
import Navbar2 from './Navbar2';
import { IoFilter } from "react-icons/io5";

const InsideOwner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [owners, setOwner] = useState([]);
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
    const [commTypeFilter, setCommTypeFilter] = useState('')


    const fetchOwners = async (searchTerm = '', page = 1, limit = 1, location = '') => {
        try {
            const res = await axios.get(`${URL}/api/owners`, {
                params: {
                    search: searchTerm,
                    page: page,
                    limit: limit,
                    location: location
                }
            });
            setOwner(res.data.owners);
            // if(res.data.communities.location.length > 0) {
            //     console.log("see info",res.data.communities);
            //   }
            console.log("to see communities come here", res.data)
            console.log("see info",res.data.owners[0].location);
            setTotalPages(res.data.totalPages);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        fetchOwners(searchTerm, 1, limit, selectedLocation);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        fetchOwners(search, page, limit, selectedLocation);
    };


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLocationFilter = (location) => {
        setSelectedLocation(location);
        setIsOpen(false); // Close dropdown after selecting location
        fetchOwners(search, 1, limit, location, selectedLocation);
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

    const handleCommunityType = (e) => {
        setCommTypeFilter(e.target.value);
    }


      const filteredCommunities = owners?.filter(c =>
    Object.keys(c).some(key =>
      c[key].toString().toLowerCase().includes(search.toLowerCase())
    ) && (!countryFilter || c.location === countryFilter) && (!sizeFilter || c.size === sizeFilter)
    && (!interestFilter || c.communityInterest === interestFilter) && (!engagementFilter || c.engagementLevel === engagementFilter)
    && (!goalFilter || c.communityGoal === goalFilter) && (!platformFilter || c.communicationPlatform === platformFilter) 
    && (!commTypeFilter || c.communityType === commTypeFilter)
   
  );

  const uniqueCommunityTypes = [...new Set(owners.map(c => c.commTypeCategory))];

  const uniqueCountries = [...new Set(owners.map(c => c.location))];

  const uniqueSizes = [...new Set(owners.map(c => c.size))];

  const uniqueInterests = [...new Set(owners.map(c => c.interestCategory))];

  const uniqueEngagements = [...new Set(owners.map(c => c.engagementLevel))];

  const uniqueGoals = [...new Set(owners.map(c => c.communityGoal))];

  const uniquePlatforms = [...new Set(owners.map(c => c.communicationCategory))];


    useEffect(() => {
        fetchOwners(search, currentPage, limit);
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

    const colors = ['bg-green-400', 'bg-red-400', 'bg-blue-400', 'bg-violet-400', 'bg-gray-400', 'bg-yellow-400'];

    return (
        <div className='flex-1 ml-[300px]'>
            <Navbar2 />
            <div className='flex items-center justify-start gap-x-24'>
                <p className='ml-12 font-semibold text-4xl mt-9'>Community Owners</p>
                <div className="relative mt-9">
                    <div className="absolute inset-y-0 left-0 flex items-center px-2">
                        <label className="px-2 py-1 text-xl font-mono cursor-pointer text-gray-400 text-left">
                            <IoSearchOutline />
                        </label>
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearch}
                        className="px-11 py-2 w-[300px] border border-gray-400 bg-gray-200 rounded"
                    />
                </div>
            </div>
            {/* <div className='flex items-center gap-2 px-12 mt-12'>
                <button className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full hover:bg-[#F08E1F] hover:text-white'>Location</button>

            </div> */}


<div className='flex items-center justify-evenly px-16 mt-12'>

<IoFilter />Filter by

<select value={commTypeFilter} onChange={handleCommunityType} className='border border-[#F08E1F] py-1 px-2 max-w-[170px] flex items-center justify-center rounded-full text-gray-900'>
           <option value="" className='custom-option'>Community Type</option>
           {uniqueCommunityTypes.map((country, index) => (
            <option key={index} value={country}>{country}</option>
           ))}
         </select>

<select value={countryFilter} onChange={handleCountryFilter} className='border border-[#F08E1F] py-1 px-3 max-w-[115px]  flex items-center justify-center rounded-full text-gray-900'>
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


       <select value={interestFilter} onChange={handleInterestFilter} className='border border-[#F08E1F] py-1 px-3 max-w-[115px] flex items-center justify-center rounded-full text-gray-900'>
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


            {filteredCommunities.map((community, index) => (
                <Link key={community.id} to={`/communitypage/${community.id}`}>
                    <CommunityOwnerCard community={community} bgColor={colors[index % colors.length]} />
                </Link>
            ))}
            <div className="flex justify-center items-center gap-x-4 mt-4">
                {renderPagination()}
            </div>


            <div className='mb-24'></div>
        </div>
    );
};

export default InsideOwner;