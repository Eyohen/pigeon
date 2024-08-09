import React from 'react'
import frame1 from "../assets/Frame1.png";
import { IoMdShare } from "react-icons/io";

const BlogCard = ({id, title, heading, text, imageUrl}) => {

  const handleShare = () => {
    if(navigator.share){
      navigator.share({
        title:title,
        heading: heading,
        text: text,
        url: `${window.location.origin}/blogdetails/${id}`
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    }else {
      // Fallback for browsers that don't support navigator.share
      const url = `${window.location.origin}/blogdetails/${id}`;
      navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
      }).catch(console.error);
    }

  }
  return (
   <div className="max-w-[350px]">
    <img
      src={imageUrl ? imageUrl : frame1} 
      className="object-cover h-[250px] w-[350px] rounded-t-2xl"
    />
    <p className="text-2xl font-bold mt-2">{title}:</p>
    <p className="text-2xl font-bold">{heading}</p>
    <p className="mt-1">
   {text?.slice(0, 155)}
      <span className="text-[#F08E1F] text-xl"> Read More...</span>
      <button
      onClick={handleShare} 
      className="absolute z-50 ml-4 mt-1"
    >
      <IoMdShare size={20} className="text-[#F08E1F]" />
    </button>

    </p>

  </div>
  )
}

export default BlogCard