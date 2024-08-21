import React from 'react'
import frame1 from '../assets/Greenpic.png'
import frame2 from '../assets/Talentflex.png'
import frame3 from '../assets/Zenyoga.png'
import { PiTag } from "react-icons/pi";

const FeaturedCommCard = ({name, description, accessType, bgColor}) => {
  return (
    <div><div className='max-w-[300px] h-[370px]'>
    {/* <img src={frame1} className='object-cover h-[200px] w-[300px] rounded-t-2xl' /> */}
    <p className={`${bgColor} h-[200px] w-[300px] flex justify-center items-center text-white text-6xl rounded-t-2xl`}>{name?.charAt(0)}</p>
    <p className='text-2xl font-bold mt-2'>{name}</p>
    
    <p className='mt-1'>{description?.slice(0,100)+". . ."}</p>
    <div className='flex items-center gap-x-4'><PiTag /> <p>{accessType}</p></div>
    </div></div>
  )
}

export default FeaturedCommCard