import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { URL } from "../url";
import axios from "axios";
import { Link } from "react-router-dom";
import CommunityOwnerCard from '../components/CommunityOwnerCard'
import Navbar2 from '../components/Navbar2';
import { IoFilter } from "react-icons/io5";
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';
import SimpleLoader from '../components/SimpleLoader';

const CommunityOwner = () => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [owners, setOwner] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(4); // You can adjust the limit as needed
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [countryFilter, setCountryFilter] = useState('')
    const [sizeFilter, setSizeFilter] = useState('')
    const [interestFilter, setInterestFilter] = useState('')
    const [engagementFilter, setEngagementFilter] = useState('')
    const [goalFilter, setGoalFilter] = useState('')
    const [platformFilter, setPlatformFilter] = useState('')
    const [commTypeFilter, setCommTypeFilter] = useState('')
    const [loading, setLoading] = useState(false);


    const fetchOwners = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${URL}/api/users`);
            const allUsers = res.data.users;
             
        // Apply filters
        const filtered = allUsers?.filter(c =>
            Object.keys(c).some(key =>
                c[key].toString().toLowerCase().includes(search.toLowerCase())
            ) && (!countryFilter || c.location === countryFilter)
            && (!sizeFilter || c.size === sizeFilter)
            && (!interestFilter || c.communityInterest === interestFilter)
            && (!engagementFilter || c.engagementLevel === engagementFilter)
            && (!goalFilter || c.communityGoal === goalFilter)
            && (!platformFilter || c.communicationPlatform === platformFilter)
            && (!commTypeFilter || c.communityType === commTypeFilter)
        );

        // Calculate pagination
        const totalItems = filtered.length;
        const totalPages = Math.ceil(totalItems / limit);
        setTotalPages(totalPages);

        // Get paginated results
        const startIndex = (currentPage - 1) * limit;
        const paginatedUsers = filtered.slice(startIndex, startIndex + limit);
        
        setOwner(paginatedUsers);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false); // Set loading to false after fetch completes
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



    const uniqueCommunityTypes = [...new Set(owners.map(c => c.commTypeCategory))];

    const uniqueCountries = [...new Set(owners.map(c => c.location))];

    const uniqueSizes = [...new Set(owners.map(c => c.size))];

    const uniqueInterests = [...new Set(owners.map(c => c.interestCategory))];

    const uniqueEngagements = [...new Set(owners.map(c => c.engagementLevel))];

    const uniqueGoals = [...new Set(owners.map(c => c.communityGoal))];

    const uniquePlatforms = [...new Set(owners.map(c => c.communicationCategory))];


    useEffect(() => {
        fetchOwners();
    }, [   currentPage,
        limit,
        selectedLocation,
        search,
        countryFilter,
        sizeFilter,
        interestFilter,
        engagementFilter,
        goalFilter,
        platformFilter,
        commTypeFilter]);


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
        <div>
            <Sidebar />
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



                <div className='flex items-center gap-x-2 px-16 mt-12'>

                    <IoFilter />Filter by

                    <select value={commTypeFilter} onChange={handleCommunityType} className='border border-[#F08E1F] py-1 px-2 max-w-[180px] flex items-center justify-center rounded-full text-gray-900'>
                        <option value="" className='custom-option'>Connection Type</option>
                        {uniqueCommunityTypes.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>

                    <select value={countryFilter} onChange={handleCountryFilter} className='border border-[#F08E1F] py-1 px-3 max-w-[150px]  flex items-center justify-center rounded-full text-gray-900'>
                        <option value="" className='custom-option'>Location</option>
                        {uniqueCountries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>

            

                    <select value={platformFilter} onChange={handlePlatformFilter} className='border border-[#F08E1F] py-1 px-2 max-w-[200px] flex items-center justify-center rounded-full text-gray-900'>
                        <option value="" className='custom-option'>Community Platform</option>
                        {uniquePlatforms.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <SimpleLoader size={60} color="#F08E1F" />
                    </div>
                ) : (

                    owners?.map((community, index) => (
                        <Link key={community.id} to={`/app/communitypage/${community.id}`}>
                            <CommunityOwnerCard community={community} bgColor={colors[index % colors.length]} />
                        </Link>
                    )
                    ))


                }
                <div className='ml-12 w-[1100px]'>
                <div className="flex justify-end items-center gap-x-4 mt-9">
                    {renderPagination()}
                </div>

                </div>

                <div className='mb-24'></div>
            </div>

        </div>
    );
};

export default CommunityOwner;