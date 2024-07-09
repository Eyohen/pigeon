import React from 'react'
import airplane from "../assets/landingpage/airplane.svg"
import badge from "../assets/landingpage/badge.svg"
import loudspeaker from "../assets/landingpage/loudspeaker.svg"
import community from "../assets/landingpage/community.svg"
import research from "../assets/landingpage/research.svg"
import profit from "../assets/landingpage/profit.svg"
import educator from "../assets/landingpage/educator.svg"
import freelancers from "../assets/landingpage/freelancers.svg"
import government from "../assets/landingpage/government.svg"


const OurDiverseUser = () => {
  return (
    <div className='py-9 bg-white px-4 md:px-[80px] font-nunito'>
        <p className='text-center text-[#0B0B0E] text-4xl font-bold'>Our Diverse User Community</p>

        <p className='font-normal text-center text-3xl'>Our platform connects you to diverse opportunities for meaningful collaborations and partnerships, helping you engage with your target audiences and amplify their impact worldwide.</p>

<div className='font-nunito text-sm'>
  <div className='grid md:grid-cols-9 grid-cols-3 gap-5 md:h-[300px]'>
    <div className='col-span-1 flex flex-col items-center justify-end'>
      <div className=''><img src= {airplane} alt="airplane"/></div>
      <p className='text-center'>Startups: Fueling Rapid Growth and Innovation</p>
    </div>
    <div className='col-span-1 flex flex-col items-center justify-center'>
      <div className=''><img src= {badge} alt="badge"/></div>
      <p className='text-center'>Brands: Crafting Distinct Identities and Experiences</p>
    </div>
    <div className='col-span-1 flex flex-col items-center justify-end'>
      <div className=''><img src= {loudspeaker} alt="loudspeaker"/></div>
      <p className='text-center'>Marketers: Connecting and Engaging with Audiences</p>
    </div>
    <div className='col-span-1 flex flex-col items-center justify-center'>
      <div className=''><img src= {community} alt="community"/></div>
      <p className='text-center'>Community Leaders: Building Strong, Impactful Networks</p>
    </div>
    <div className='col-span-1 flex flex-col items-center justify-end'>
      <div className=''><img src= {research} alt="research"/></div>
      <p className='text-center'>Researchers: Pioneering Innovations and Insights</p>
    </div>
   
    <div className='col-span-1 flex flex-col items-center justify-end'>
      <div className=''><img src= {profit} alt="profit"/></div>
      <p className='text-center'>Nonprofits: Amplifying Impact and Advocacy</p>
    </div>
    <div className='col-span-1 flex flex-col items-center justify-center'>
      <div className=''><img src= {educator} alt="educator"/></div>
      <p className='text-center'>Educators: Shaping Minds and Futures</p>
    </div>
    <div className='col-span-1 flex flex-col items-center justify-center'>
      <div className=''><img src= {freelancers} alt="freelancers"/></div>
      <p className='text-center'>Freelancers: Driving Projects with Flexibility and Expertise</p>
    </div>
    <div className='col-span-1 flex flex-col items-center justify-end'>
      <div className=''><img src= {government} alt="government"/></div>
      <p className='text-center'>Government Entities: Enhancing Public Engagement and Services</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default OurDiverseUser