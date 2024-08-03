import React from 'react'
import frame1 from "../assets/Frame1.png";

const BlogCard = ({title, heading, text, imageUrl}) => {
  return (
   <div className="max-w-[350px]">
    <img
      src={imageUrl ? imageUrl : frame1} 
      className="object-cover h-[250px] w-[350px] rounded-t-2xl"
    />
    <p className="text-2xl font-bold mt-2">{title}:</p>
    <p className="text-2xl font-bold">{heading}</p>
    <p className="mt-1">
   {text?.slice(0, 165)}
      <span className="text-[#F08E1F] text-xl"> Read More...</span>
    </p>
  </div>
  )
}

export default BlogCard