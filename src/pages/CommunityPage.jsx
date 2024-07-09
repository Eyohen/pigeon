import React from 'react'
import Sidebar from '../components/Sidebar'
import InnerComunityPage from '../components/InnerComunityPage'

const CommunityPage = () => {
  return (
    <div className='flex justify-between'>

    <Sidebar/>
    
<InnerComunityPage/>
       
        </div>
  )
}

export default CommunityPage