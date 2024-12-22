import React,{useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar';
import { IoSearchOutline } from "react-icons/io5";
import { URL } from '../url';
import axios from "axios";
import { Link } from "react-router-dom";
import CommunityOwnerCard from '../components/CommunityOwnerCard';
import Navbar2 from '../components/Navbar2';
import { IoFilter } from "react-icons/io5";
import { useAuth } from '../context/AuthContext';



const MyCommunities = () => {
    const { user, logout } = useAuth();
    const [communities, setCommunities] = useState([]);

const userId = user?.id;
console.log("userId",userId)

    const fetchCommunities = async () => {
        try {
            const res = await axios.get(`${URL}/api/visible/user/${user?.id}`);
            console.log("community", res.data)
            setCommunities(res.data.visibles);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() =>{
        fetchCommunities()
    },[])

    const colors = ['bg-green-400', 'bg-red-400', 'bg-blue-400', 'bg-violet-400', 'bg-gray-400', 'bg-yellow-400'];




  return (
    <div className='flex justify-between'>

<Sidebar/>

<div className='flex-1 ml-[300px]'>
            <Navbar2 />
      
                <p className='ml-12 font-semibold text-4xl mt-9'>My Communities </p>
              

            {communities?.map((community, index) => (
                <Link key={community.id} to={`/mycommunitydetail/${community.id}`}>
                    <CommunityOwnerCard community={community} bgColor={colors[index % colors.length]}/>
                </Link>
            ))}
       
        </div>
   
    </div>
  )
}

export default MyCommunities