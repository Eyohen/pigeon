// import React, { useState, useEffect } from 'react';
// import { IoSearchOutline } from "react-icons/io5";
// import { URL } from "../url";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Navbar2 from '../components/Navbar2';
// import CommunityOwnerCard from '../components/CommunityOwnerCard';

// const Test = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [communities, setCommunities] = useState([]);
//     const [search, setSearch] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [limit, setLimit] = useState(2); // You can adjust the limit as needed
//     const [locations, setLocations] = useState([]);
//     const [selectedLocation, setSelectedLocation] = useState('');

//     const fetchCommunities = async (searchTerm = '', page = 1, limit = 1, location = '') => {
//         try {
//             const res = await axios.get(`${URL}/api/communities`, {
//                 params: {
//                     search: searchTerm,
//                     page: page,
//                     limit: limit,
//                     location: location
//                 }
//             });
//             setCommunities(res.data.communities);
//             setTotalPages(res.data.totalPages);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const handleSearch = (e) => {
//         const searchTerm = e.target.value;
//         setSearch(searchTerm);
//         fetchCommunities(searchTerm, 1, limit, selectedLocation);
//     };

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//         fetchCommunities(search, page, limit, selectedLocation);
//     };

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLocationFilter = (location) => {
//         setSelectedLocation(location);
//         setIsOpen(false); // Close dropdown after selecting location
//         fetchCommunities(search, 1, limit, location);
//     };

//     useEffect(() => {
//         fetchCommunities(search, currentPage, limit, selectedLocation);
//     }, [currentPage, limit, selectedLocation]);

//     useEffect(() => {
//         // Fetch locations from API
//         const fetchLocations = async () => {
//             try {
//                 const res = await axios.get(`${URL}/api/communities`);
//                 const uniqueLocations = [...new Set(res.data.communities.map(community => community.location))];
//                 setLocations(uniqueLocations); // Assuming the response contains an array of unique locations
//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         fetchLocations();
//     }, []);

//     const renderLocationsDropdown = () => {
//         return (
//             <div className="absolute mt-2 w-[300px] bg-black rounded border border-gray-300 shadow-lg z-100 py-24">
//                 {locations.map((location, index) => (
//                     <button
//                         key={index}
//                         onClick={() => handleLocationFilter(location)}
//                         className="block w-full px-4 py-2 text-white hover:bg-gray-200"
//                     >
//                         {location}
//                     </button>
//                 ))}
//             </div>
//         );
//     };

//     const renderPagination = () => {
//         const pages = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pages.push(
//                 <button
//                     key={i}
//                     onClick={() => handlePageChange(i)}
//                     className={`px-3 py-1 border rounded ${i === currentPage ? 'bg-gray-300' : 'bg-white'}`}
//                 >
//                     {i}
//                 </button>
//             );
//         }
//         return pages;
//     };

//     return (
//         <div className='flex-1'>
//             <Navbar2 />
//             <div className='flex items-center justify-start gap-x-24'>
//                 <p className='ml-12 font-semibold text-4xl mt-9'>Community Owners</p>
//                 <div className="relative mt-9">
//                     <div className="absolute inset-y-0 left-0 flex items-center px-2">
//                         <label className="px-2 py-1 text-xl font-mono cursor-pointer text-gray-400 text-left">
//                             <IoSearchOutline />
//                         </label>
//                     </div>
//                     <input
//                         type="text"
//                         placeholder="Search"
//                         value={search}
//                         onChange={handleSearch}
//                         className="px-11 py-2 w-[300px] border border-gray-400 bg-gray-200 rounded"
//                     />
//                 </div>
//             </div>
//             <div className='relative'>
//                 <button
//                     onClick={toggleDropdown}
//                     className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full hover:bg-[#F08E1F] hover:text-white'
//                 >
//                     Location
//                 </button>
//                 {isOpen && renderLocationsDropdown()}
//             </div>
//             {communities.map((community) => (
//                 <Link key={community.id} to={`/communitypage/${community.id}`}>
//                     <CommunityOwnerCard community={community} />
//                 </Link>
//             ))}
//             <div className="flex justify-center items-center gap-x-4 mt-4">
//                 {renderPagination()}
//             </div>
//         </div>
//     );
// };

// export default Test;



import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar2 from '../components/Navbar2';
import CommunityOwnerCard from '../components/CommunityOwnerCard';
import { URL } from '../url';
import './test.css';
import Select from 'react-select';

// const URL = 'http://your-api-url-here'; // Replace with your actual API URL

const Test = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [communities, setCommunities] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(4); // You can adjust the limit as needed
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [countryFilter, setCountryFilter] = useState('')
    const [sizeFilter, setSizeFilter] = useState('')

    const fetchCommunities = async (searchTerm = '', page = 1, limit = 2, location = '') => {
        try {
            console.log("Fetching communities with params:", { searchTerm, page, limit, location });
            const res = await axios.get(`${URL}/api/communities`, {
                params: {
                    search: searchTerm,
                    page: page,
                    limit: limit,
                    location: location
                }
            });
            setCommunities(res.data.communities);
            setTotalPages(res.data.totalPages);
            console.log("Fetched communities:", res.data.communities);
        } catch (err) {
            console.log("Error fetching communities:", err);
        }
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        fetchCommunities(searchTerm, 1, limit, selectedLocation);
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
        setCurrentPage(1); // Reset to first page
        setIsOpen(false); // Close dropdown after selecting location
        console.log("Selected location:", location);
        fetchCommunities(search, 1, limit, location);
    };

    const handleCountryFilter = (e) => {
        setCountryFilter(e.target.value);
    }

      const filteredCommunities = communities.filter(c =>
    Object.keys(c).some(key =>
      c[key].toString().toLowerCase().includes(search.toLowerCase())
    ) && (!countryFilter || c.location === countryFilter)
  );

  const uniqueCountries = [...new Set(communities.map(c => c.location))];

    useEffect(() => {
        fetchCommunities(search, currentPage, limit, selectedLocation);
    }, [currentPage, limit, selectedLocation]);

    useEffect(() => {
        // Fetch locations from API
        const fetchLocations = async () => {
            try {
                const res = await axios.get(`${URL}/api/communities`);
                const uniqueLocations = [...new Set(res.data.communities.map(community => community.location))];
                setLocations(uniqueLocations); // Assuming the response contains an array of unique locations
                console.log("Fetched locations:", uniqueLocations);
            } catch (err) {
                console.log("Error fetching locations:", err);
            }
        };
        fetchLocations();
    }, []);

    const renderLocationsDropdown = () => {
        return (
            <div className="absolute mt-2 w-[300px] bg-black rounded border border-gray-300 shadow-lg z-100 py-2">
                {locations.map((location, index) => (
                    <button
                        key={index}
                        onClick={() => handleLocationFilter(location)}
                        className="block w-full px-4 py-2 text-white hover:bg-gray-200"
                    >
                        {location}
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
        <div className='flex-1'>
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
            <select value={countryFilter} onChange={handleCountryFilter} className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full text-[#F08E1F]'>
           <option value="" className='custom-option'>Location</option>
           {uniqueCountries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
           ))}
         </select>


            <div className='relative mt-4'>
                <button
                    onClick={toggleDropdown}
                    className='border border-[#F08E1F] py-1 px-3 flex items-center justify-center rounded-full hover:bg-[#F08E1F] hover:text-white'
                >
                    Location
                </button>
                {isOpen && renderLocationsDropdown()}
            </div>
            <div className='mt-4'>
                {communities.length === 0 && <p>No communities found for the selected location.</p>}
                {filteredCommunities.map((community) => (
                    <Link key={community.id} to={`/communitypage/${community.id}`}>
                        <CommunityOwnerCard community={community} />
                    </Link>
                ))}
            </div>
            <div className="flex justify-center items-center gap-x-4 mt-4">
                {renderPagination()}
            </div>
        </div>
    );
};

export default Test;