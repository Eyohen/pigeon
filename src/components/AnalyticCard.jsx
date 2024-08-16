import React, {useState, useEffect} from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from 'axios'
import { URL } from "../url"

const AnalyticCard = ({count, name}) => {

  return (
    <div className='border rounded-xl bg-white w-[280px] h-[100px] py-3 px-2'>

    <div className='flex justify-between'>
    <p className='text-gray-600 text-2xl font-medium'>{count}</p>
    <button className='bg-[#F08E1F] text-white text-sm px-1 rounded-full flex items-center'>All Time<MdKeyboardArrowDown color='white' size={23}/></button>
    </div>

    <div className='flex justify-between mt-4'>
        <p className='text-gray-500 text-md font-medium max-w-[200px]'>{name}</p>
        <p className='text-gray-300 text-sm font-medium'>2hrs ago</p>
    </div>

</div>
  )
}

export default AnalyticCard