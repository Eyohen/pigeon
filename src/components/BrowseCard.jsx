import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from "../url";
import axios from "axios";

const BrowseCard = ({community}) => {
  // const userId = useParams().id;
  const [firstName, setFirstName] = useState("")

  const userId = community.user  

  const fetchUser = async () => {
    try {
      const res = await axios.get(URL+"/api/users/"+userId);
      setFirstName(res.data.firstName);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);




  // console.log("just checking",community)
  return (
//     <div className='shadow-xl rounded-xl mt-12 px-16 py-4 max-w-[1200px] ml-12'>
//     <div className='flex gap-x-5 items-center'>
//         <div className='bg-green-400 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>{firstName?.charAt(0)}</div>
//         {/* <div className='bg-green-400 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>{community?.user}</div> */}
//         <div>
//             <p>Community Type: {community.communityType}</p>
//             <div className='flex gap-x-9 items-center'>
//                 <p className='font-semibold text-xl'>{community.name}</p>
//                 <p className='bg-green-200 text-green-600 rounded-md font-semibold px-3'>Verified</p>
//             </div>
//             <p>{community.description ? community.description.slice(0, 20)+"...Read more": "..."}</p>

//         </div>
//         </div>
// </div>  


<div className='shadow-xl rounded-xl mt-12 px-16 py-4 max-w-[1200px] ml-12'>
    <div className='flex gap-x-5 items-center'>
        <div className='bg-green-400 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>G</div>
        <div>
            <p>Community Type: {community.communityType}</p>
            <div className='flex gap-x-9 items-center'>
                <p className='font-semibold text-xl'>{community.name}</p>
                <p className='bg-green-200 text-green-600 rounded-md font-semibold px-3'>Verified</p>
            </div>
            <p>{community.description ? community.description.slice(0, 20)+"...Read more": "..."}</p>

        </div>
        </div>
</div> 

  )
}

export default BrowseCard