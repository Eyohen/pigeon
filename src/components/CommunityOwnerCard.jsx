import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from "../url";
import axios from "axios";


const CommunityOwnerCard = ({community, bgColor}) => {
  // const userId = useParams().id;
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")


  const userId = community.user  

  const fetchUser = async () => {
    try {
      const res = await axios.get(URL+"/api/users/"+userId);
      setFirstName(res.data.firstName);
      setEmail(res.data.email);
   
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);



  // console.log("just checking",community)
  return (
    <div className='shadow-xl rounded-xl mt-12 px-16 py-4 max-w-[1200px] ml-12'>

    <div className='flex gap-x-5 items-center'>
        <div className={`${bgColor} text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center`}>{community.name?.charAt(0)}</div>
        {/* <div className='bg-green-400 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>{community?.user}</div> */}
        <div>
            <p className='text-gray-500'>{community.communityType}</p>
            <div className='flex md:gap-x-12 items-center'>
                <p className='font-semibold text-xl'>{community.name}</p>

                {community.verified ? (<p className='bg-green-200 text-green-600 rounded-md font-semibold px-3'>Verified</p>) : <p className='bg-red-200 text-red-600 rounded-md font-semibold px-3'>Unverified</p>}
                
            </div>
            <p className='text-gray-600'>{community.description ? community.description.slice(0, 100)+". . .": "..."}</p>

        </div>
        </div>
</div>  

  )
}

export default CommunityOwnerCard