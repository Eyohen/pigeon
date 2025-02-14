import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { URL } from "../url";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar2 from '../components/Navbar2';
import { IoFilter } from "react-icons/io5";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BrowseCommunityCard from '../components/BrowseCommunityCard';
import SimpleLoader from '../components/SimpleLoader';

const BrowseCommunities = () => {
  const { user } = useAuth();
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
  const [interestFilter, setInterestFilter] = useState('')
  const [engagementFilter, setEngagementFilter] = useState('')
  const [goalFilter, setGoalFilter] = useState('')
  const [platformFilter, setPlatformFilter] = useState('')
  const [priceTagFilter, setPriceTagFilter] = useState('')
  const [commTypeFilter, setCommTypeFilter] = useState('')
  const [connectionFilter, setConnectionFilter] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const fetchCommunities = async (searchTerm = '', page = 1, limit = 4, location = '') => {
    setLoading(true)
    try {
      const res = await axios.get(`${URL}/api/comunities/user/${user?.id}`, {
        params: {
          search: searchTerm,
          page: page,
          //limit:limit,
          limit: subscription?.subscribed ? limit : 4,
        }
      });

      const slicedData = subscription?.subscribed ?
        res.data.communities :
        res.data.communities.slice(0, 8); // Limit to 8 total for non-subscribers

      setCommunities(slicedData);
      //  setCommunities(res.data.communities);
      setTotalPages(subscription?.subscribed ? res.data.totalPages : 2);
      console.log("to see communities come here", res.data)
      // console.log("see info",res.data.communities[0].location);
      // setTotalPages(res.data.totalPages);
    } catch (err) {
      console.log(err);
    }finally {
      setLoading(false); // Set loading to false after fetch completes
  }
  };

  console.log("community", communities)

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

  const handlePriceFilter = (e) => {
    setPriceTagFilter(e.target.value);
  }

  const handleCommunityType = (e) => {
    setCommTypeFilter(e.target.value);
  }

  const handleConnection = (e) => {
    setConnectionFilter(e.target.value);
  }


  const filteredCommunities = communities.filter(c =>
    Object.keys(c).some(key =>
      c[key].toString().toLowerCase().includes(search.toLowerCase())
    ) && (!countryFilter || c.location === countryFilter) && (!sizeFilter || c.size === sizeFilter)
    && (!interestFilter || c.communityInterest === interestFilter) && (!engagementFilter || c.engagementLevel === engagementFilter)
    && (!platformFilter || c.communicationPlatform === platformFilter) && (!priceTagFilter || c.accessType === priceTagFilter) && (!goalFilter || c.communityGoal === goalFilter)
    && (!commTypeFilter || c.communityType === commTypeFilter) && (!connectionFilter || c.connCategory === connectionFilter)
  );


  const uniqueCommunityTypes = [...new Set(communities.map(c => c.commTypeCategory))];

  const uniqueCountries = [...new Set(communities.map(c => c.location))];

  const uniquePriceTag = [...new Set(communities.map(c => c.accessType))];

  const uniqueSizes = [...new Set(communities.map(c => c.size))];

  const uniqueInterests = [...new Set(communities.map(c => c.interestCategory))];

  const uniqueEngagements = [...new Set(communities.map(c => c.engagementLevel))];

  const uniqueGoals = [...new Set(communities.map(c => c.communityGoal))];

  const uniquePlatforms = [...new Set(communities.map(c => c.communicationCategory))];

  const uniqueConnections = [...new Set(communities.map(c => c.connCategory))];


  useEffect(() => {
    fetchCommunities(search, currentPage, limit);
  }, [currentPage, limit, selectedLocation]);


  // In your rendering logic:
  // const displayedCommunities = filteredCommunities.slice(0, subscription?.subscribed ? 
  //     filteredCommunities.length : 
  //     Math.min((currentPage * itemsPerPage), 8)
  // );

  const displayedCommunities = filteredCommunities.slice(
    (currentPage - 1) * itemsPerPage,
    subscription?.subscribed ?
      filteredCommunities.length :
      currentPage * itemsPerPage
  );

  // const renderPagination = () => {
  //     const pages = [];
  //     for (let i = 1; i <= totalPages; i++) {
  //         pages.push(
  //             <button
  //                 key={i}
  //                 onClick={() => handlePageChange(i)}
  //                 className={`px-3 py-1 border rounded ${i === currentPage ? 'bg-gray-300' : 'bg-white'}`}
  //             >
  //                 {i}
  //             </button>
  //         );
  //     }
  //     return pages;
  // };

  const renderPagination = () => {
    if (currentPage === 2 && !subscription?.subscribed) {
      return (
        <div
          onClick={() => navigate('/switchpremium')}
          className='bg-[#F08E1F] px-6 py-2 text-white rounded-lg cursor-pointer'
        >
          Load more . . .
        </div>
      );
    }

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





  console.log(user?.id)

  const fetchUserStuff = async () => {
    try {
      const res = await axios.get(`${URL}/api/users/${user?.id}`)
      console.log("see current subscription", res.data);
      setSubscription(res.data);
    } catch (error) {
      console.error("Error fetching subscription:", error);
      setSubscription(null);
    }
  }
  useEffect(() => {
    if (user?.id) {
      fetchUserStuff()
    }
  }, [user?.id])





  return (
    <div>
      <Sidebar />
      <div className='flex-1 ml-[300px]'>
        <Navbar2 />
        <div className='flex items-center justify-start gap-x-24'>
          <p className='ml-12 font-semibold text-4xl mt-9'>Communities</p>
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


        <div className='flex items-center justify-evenly px-9 mt-12'>

          <IoFilter />Filter by

          <select value={commTypeFilter} onChange={handleCommunityType} className='border border-[#F08E1F] py-1 px-2 max-w-[170px] flex items-center justify-center rounded-full text-gray-900'>
            <option value="" className='custom-option'>Community Type</option>
            {uniqueCommunityTypes.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>

          <select value={priceTagFilter} onChange={handlePriceFilter} className='border border-[#F08E1F] py-1 px-3 max-w-[120px] flex items-center justify-center rounded-full text-gray-900'>
            <option value="" className='custom-option'>Price Tag</option>
            {uniquePriceTag.map((country, index) => (
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

          <select value={engagementFilter} onChange={handleEngagementFilter} className='border border-[#F08E1F] py-1 px-2 max-w-[155px]  flex items-center justify-center rounded-full text-gray-900'>
            <option value="" className='custom-option'>Engagements</option>
            {uniqueEngagements.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>


          <select value={goalFilter} onChange={handleGoalFilter} className='border border-[#F08E1F] py-1 px-2 max-w-[167px]  flex items-center justify-center rounded-full text-gray-900'>
            <option value="" className='custom-option'>Community Goals</option>
            {uniqueGoals.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>

          <select value={platformFilter} onChange={handlePlatformFilter} className='border border-[#F08E1F] py-1 px-2 max-w-[120px] flex items-center justify-center rounded-full text-gray-900'>
            <option value="" className='custom-option'>Platforms</option>
            {uniquePlatforms.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>

          <select value={connectionFilter} onChange={handleConnection} className='border border-[#F08E1F] py-1 px-2 max-w-[145px] flex items-center justify-center rounded-full text-gray-900'>
            <option value="" className='custom-option'>Connections</option>
            {uniqueConnections.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>


        </div>

        



        <div className='px-9'>
        {loading ? (
                <div className="flex justify-center items-center min-h-[400px]">
                    <SimpleLoader size={60} color="#F08E1F" />
                </div>
            ) : (
          displayedCommunities.map((community, index) => (
            <Link key={community.id} to={`/innerbrowsepage/${community.id}`}>
              <BrowseCommunityCard community={community} bgColor={colors[index % colors.length]} />
            </Link>
          ))

        )}
        </div>

        <div className="flex justify-center items-center gap-x-4 mt-9">
          {renderPagination()}
        </div>


        <div className='mb-24'></div>
      </div>

    </div>
  );
};

export default BrowseCommunities;