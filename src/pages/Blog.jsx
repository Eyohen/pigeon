import React, { useState, useEffect } from "react";
import frame1 from "../assets/Frame1.png";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { URL } from "../url";
import axios from "axios";
import { Link } from 'react-router-dom';
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${URL}/api/posts`);
      console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="font-nunito bg-gray-100 min-h-screen">
      <Navbar />

      <div className="bg-white pb-6 sm:pb-10 mt-[58px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center 
                     px-4 py-6 sm:py-9 sm:my-9">
          Stories that connect
        </h1>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts?.map((post) => (
              <Link 
                to={`/blogdetails/${post.id}`} 
                key={post.id}
                className="transform transition duration-300 hover:scale-105"
              >
                <BlogCard 
                  title={post.title} 
                  heading={post.heading} 
                  imageUrl={post?.imageUrl} 
                  text={post.text} 
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;