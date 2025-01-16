import React, {useState, useEffect} from "react";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";
import { URL } from "../url";
import axios from "axios";
import { Link } from 'react-router-dom';
import BlogCard from "./BlogCard";

const StoriesConnect = () => {
  const [posts, setPost] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${URL}/api/posts`)
      console.log(res.data);
      setPost(res.data);
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts();
  },[])


  return (
    <div className="py-9 bg-white px-4 md:px-[240px] font-nunito">
      <div className="flex justify-center items-center mb-10">
        <p className="text-center text-6xl font-bold mx-auto ">
          Stories that connect
        </p>
        <Link to={'/blog'}><button className="text-[#F08E1F] text-md md:text-xl min-w-[70px]">View all</button></Link>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0 justify-between ">
        {posts?.slice(currentIndex, currentIndex + 3)?.map((p) => (
          <Link to={`/blogdetails/${p.id}`}>
            <div key={p.id}>
            <BlogCard id={p.id} title={p.title} heading={p.heading} imageUrl={p?.imageUrl} text={p.text} />
            </div>
          </Link>
        ))}

    
    
      </div>
    </div>
  );
};

export default StoriesConnect;
