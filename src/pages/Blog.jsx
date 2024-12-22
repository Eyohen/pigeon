import React, {useState, useEffect} from "react";
import frame1 from "../assets/Frame1.png";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { URL } from "../url";
import axios from "axios";
import { Link } from 'react-router-dom';
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const [posts, setPost] = useState([])

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
    <div className="font-nunito bg-gray-100">
      <Navbar />

      <div className="bg-white pb-10 mt-[58px]">
      <p className="text-center text-6xl font-bold my-9 py-9">
        Stories that connect
      </p>

      <div className="">
        <div className="grid grid-cols-3 gap-5 px-4 md:px-[80px] mt-12">
        {posts?.map((p) => (
          <Link to={`/blogdetails/${p.id}`}>
            <div key={p.id}>
            <BlogCard title={p.title} heading={p.heading} imageUrl={p?.imageUrl} text={p.text} />
            </div>
          </Link>
        ))}

       
        </div>
      </div>
    
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
