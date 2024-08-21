import React, { useEffect, useState } from 'react'
import frame1 from '../assets/Greenpic.png'
import frame2 from '../assets/Talentflex.png'
import frame3 from '../assets/Zenyoga.png'
import { PiTag } from "react-icons/pi";
import FeaturedCommCard from './FeaturedCommCard';
import { URL } from '../url';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FeatCom = () => {
  const [communities, setCommunities] = useState([])

  const fetchCommunities = async () => {
    const res = await axios.get(`${URL}/api/visible`)
    console.log("communities", res.data)
    setCommunities(res.data.communities)
  }

  useEffect(() => {
    fetchCommunities()
  },[])

  const colors = ['bg-green-400', 'bg-red-400', 'bg-blue-400', 'bg-violet-400', 'bg-gray-400', 'bg-yellow-400'];

  return (
    <div className='py-9 bg-white px-4 md:px-[240px] font-nunito'>
    <p className='text-center text-6xl font-bold'>Featured Communities</p>
    <p className='text-center mt-1 text-3xl'>Handpicked groups known for active engagement and quality discussions</p>

    <div className='flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0 justify-between mt-12'>
    {communities?.map((c, index) => (
          <Link key={c.id} to={`/communitypage/${c.id}`}>
            <FeaturedCommCard
             name={c.name}
              description={c.description} 
              accessType={c.accessType}
              bgColor={colors[index % colors.length]}
              />
          </Link>
    ))}

</div>



    </div>
  )
}

export default FeatCom